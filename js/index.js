// Busy Levee Interactive Map ---------------------------------- //

	var camera, controls, scene, renderer, distance, geometry, projector, material, clock;

	var distance = 400;

	var world, mass, body, timeStep=1/60, shape;

	var ambientLight, floorLight01, spotLight;

	var	boat01Mesh, boat02Mesh, boat03Mesh, boat04Mesh, boat05Mesh, boat06Mesh, boat07Mesh, boat08Mesh, boat09Mesh, boat10Mesh, leveeMesh, riverVolume, water;

	var mapWidth = 1024;

	var mapHeight = 576;

	var boatsLevel = 280;

	var clientX, clientY;

	var radius = 100, theta = 0;

	var params = {
		color: '#ffffff',
		scale: 5,
		flowX: 2,
		flowY: 2
	};

	initThree();
	animate();


	// three.js ----------------------------------------------------------------- //
	function initThree() {

		// Camera
		//camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
		camera = new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 1, 10000 );
		camera.position.x = -3500;
		camera.position.y = 350;
		camera.rotation.z = 0;
		camera.lookAt ( 0, 100, 0 );


		// Scene
		scene = new THREE.Scene();

		clock = new THREE.Clock();

		// Renderer
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize( mapWidth, mapHeight );
		renderer.setClearColor( 0x000000, 1 );
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.antialias = true;
		renderer.gammaInput = true;
		renderer.gammaOutput = true;

		//leveeMap.appendChild( renderer.domElement );
		document.getElementById( 'leveeMap' ).appendChild( renderer.domElement );


		// Orbit Controls ------------------------------------------------------------ //
		controls = new THREE.OrbitAndPanControls( camera, renderer.domElement );
		controls.enableZoom = true;
		controls.enablePan = true;
		controls.enableDamping = true;
		controls.dampingFactor = 10;
		controls.maxDistance = 5000;
		controls.minDistance = 0;
		controls.maxPolarAngle = 80 * Math.PI / 180;
		controls.minPolarAngle = 10 * Math.PI / 180;
		controls.maxAzimuthAngle = 270 * Math.PI / 180;
		controls.minAzimuthAngle = -270 * Math.PI / 180;
		controls.rotateSpeed = 1.0;
		controls.zoomSpeed = 0.5;
		controls.panSpeed = 0.5;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.05;
		controls.target = new THREE.Vector3 ( 0, 0, 0 );


		window.addEventListener( "resize", onWindowResize, false );

		function onWindowResize() {
		camera.aspect = mapWidth / mapHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( mapWidth, mapHeight );
		};


		// Skybox Background
		var r = "../tex/cube/sky01/";
		var urls = [
			r + "front2.jpg",
			r + "back2.jpg",
			r + "top2.jpg",
			r + "bottom2.jpg",
			r + "right2.jpg",
			r + "left2.jpg"
		];

		textureCube = new THREE.CubeTextureLoader().load( urls );
		scene.background = textureCube;
		textureCube.format = THREE.RGBFormat;
		textureCube.mapping = THREE.CubeReflectionMapping;

		// Scene Lights -------------------------------------------------------------- //
		ambientLight = new THREE.AmbientLight( 0xffffff, 0.75 );
			scene.add(ambientLight);	

		// Floor Lights------------------------------------------------- //
		floorLight01 = new THREE.DirectionalLight( 0xFFC55C, 0.75 );
			floorLight01.position.copy(new THREE.Vector3( 2000, 1200, -1500 ));
			floorLight01.castShadow = true;
			floorLight01.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 0.01, 10000 ) );
			floorLight01.shadow.bias = 0.0001;
			floorLight01.shadow.mapSize.width = 2048;
			floorLight01.shadow.mapSize.height = 2048;
			floorLight01.shadow.camera.fov = 45;
			floorLight01.shadow.camera.near = 500;
			floorLight01.shadow.camera.far = 10000;
			floorLight01.shadow.camera.left = 250;
			floorLight01.shadow.camera.right = 250;
			floorLight01.shadow.camera.top = 200;
			floorLight01.shadow.camera.bottom = 200;

			scene.add(floorLight01);

			//	 Main Camera Helper	
			//helper01 = new THREE.CameraHelper( floorLight01.shadow.camera );
				//scene.add( helper01 );


		// Overhead Fog SpotLight --------------------------------------------- //
		spotLight = new THREE.SpotLight( 0xFFC55C );
			 spotLight.position.set( -500, 4800, 0 );
			 if(true){
				 spotLight.castShadow = true;

				 spotLight.shadow.camera.near = 300;
				 spotLight.shadow.camera.far = 5000; //camera.far;
				 spotLight.shadow.camera.fov = 45;

				 spotLight.shadowMapBias = 0.001;
				 spotLight.shadowMapDarkness = 0.5;
				 spotLight.shadow.mapSize.width = 2048;
				 spotLight.shadow.mapSize.height = 2048; 
			 }

			 scene.add( spotLight );


	// Fog
		scene.fog = new THREE.Fog( 0x000000, 500, 9600 );

		// Cameras Location Sphere -------------------------------------//

		camSphere = new THREE.Mesh (
			new THREE.SphereGeometry( 5, 8, 8 ),
			new THREE.MeshPhongMaterial( {
			wireframe: true,
			color: 0xffffff,
			emissive: 0xffffff,
			specular: 0xffffff,
			shininess: 0,
			side: THREE.DoubleSide
			} )
		);

		//scene.add( camSphere );
		camSphere.position.set( 0, 5, -50 );
		camSphere.rotation.y = 0 * Math.PI / 180;


		// River Flow Layer ----------------------------- // 

		// water
		var waterGeometry = new THREE.PlaneBufferGeometry( 2100, 4800 );
			water = new THREE.Water(
				waterGeometry,
				{
					textureWidth: 1024,
					textureHeight: 1024,
					waterNormals: new THREE.TextureLoader().load( '../tex/waternormals.jpg', function ( texture ) {
						texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
					}),
					alpha: 0.5,
					sunDirection: new THREE.Vector3( 500, 300, 500 ).normalize(),
					sunColor: 0xFFC55C,
					waterColor: 0x52350E,
					distortionScale: 1,
					scale: 2,
					flowDirection: new THREE.Vector2( 10, 1 ),
					flowX: 2,
					flowY: 2
				}
			);
			water.rotation.x = -90 * Math.PI / 180;
			water.position.x = -700;
			water.position.y = 20;
			water.position.z = 0;
			water.receiveShadow = false;
			scene.add( water );



		// River Volume ----------------------------------//
		riverVolume = new THREE.Mesh (
				new THREE.BoxGeometry( 2100, 275, 4800 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.5,
				color: 0x52350E,
				emissive: 0x000000,
				specular: 0x6C4716,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			//scene.add( riverVolume );
			riverVolume.position.set( -700, 130 , 0 );
			riverVolume.receiveShadow = true;
			riverVolume.castShadow = true;	

		// River Wharf ----------------------------------//


		var wharfTexture = new THREE.TextureLoader().load( "../tex/wharf-tex.jpg" );
			wharfTexture.repeat.set( 1, 1 );
		wharfTexture.wrapT = THREE.RepeatWrapping;
		wharfTexture.wrapS = THREE.UVMapping;

		riverWharf = new THREE.Mesh (
				new THREE.BoxGeometry( 80, 300, 4825 ),
				new THREE.MeshLambertMaterial( {
				wireframe: false,
				transparent: false,
				map: wharfTexture,
				color: 0x777777,
				emissive: 0x000000,
				side: THREE.DoubleSide

				} )
			);

			scene.add( riverWharf );
			riverWharf.position.set( 450, -16 , 0 );
			riverWharf.rotation.set( 0, 0 , 91 * Math.PI / 180 );
			riverWharf.receiveShadow = true;
			riverWharf.castShadow = true;
			riverWharf.flipY = true;


	// Hotspot Targets -------------------------------//

		//  St. Louis Riverboat Target //	
			boat07Target = new THREE.Mesh (
				new THREE.BoxGeometry( 10, 10, 10 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.7,
				color: 0xff0000,
				emissive: 0xff0000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			scene.add( boat07Target );
			boat07Target.position.set( 100, 380 , 150 );
			boat07Target.receiveShadow = true;
			boat07Target.castShadow = true;


		//  City Market Target  //
			cityMarketTarget = new THREE.Mesh (
				new THREE.BoxGeometry( 10, 10, 10 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.7,
				color: 0xff0000,
				emissive: 0xff0000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			scene.add( cityMarketTarget );
			cityMarketTarget.position.set( 675, 325 , -1390 );
			cityMarketTarget.receiveShadow = true;
			cityMarketTarget.castShadow = true;


		//  Commercial Alley Target  //
			commercialAlleyTarget = new THREE.Mesh (
				new THREE.BoxGeometry( 10, 10, 10 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.7,
				color: 0xff0000,
				emissive: 0xff0000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			scene.add( commercialAlleyTarget );
			commercialAlleyTarget.position.set( 925, 350 , -1000 );
			commercialAlleyTarget.receiveShadow = true;
			commercialAlleyTarget.castShadow = true;


		//  Main Street Target  //
			mainStreetTarget = new THREE.Mesh (
				new THREE.BoxGeometry( 10, 10, 10 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.7,
				color: 0xff0000,
				emissive: 0xff0000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			scene.add( mainStreetTarget );
			mainStreetTarget.position.set( 1250, 400 , -350 );
			mainStreetTarget.receiveShadow = true;
			mainStreetTarget.castShadow = true;

		// ------------------- End Targets ------------------//

	// Boats Group ------------------------------------------------------ //

		// Boat 01 ------------------------------------------------------//
		boat01Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 60, 45, 250 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xededd3,
			emissive: 0x151515,
			specular: 0x111111,
			shininess: 5,
			side: THREE.DoubleSide,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat01Mesh );
		boat01Mesh.position.set( 100, boatsLevel , -1500 );
		boat01Mesh.receiveShadow = true;
		boat01Mesh.castShadow = true;
		boat01Mesh.rotation.y = 75 * Math.PI / 180;

		// Boat 02 --------------------------------------------------//	
		boat02Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 100, 90, 300 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xadaaaa,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat02Mesh );
		boat02Mesh.position.set( 50, boatsLevel + 20 , -1300 );
		boat02Mesh.receiveShadow = true;
		boat02Mesh.castShadow = true;
		boat02Mesh.rotation.y = 75 * Math.PI / 180;

		// Boat 03 -----------------------------------------------//
		boat03Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 50, 40, 190 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xd9d4d4,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat03Mesh );
		boat03Mesh.position.set( 100, boatsLevel , -1100 );
		boat03Mesh.receiveShadow = true;
		boat03Mesh.castShadow = true;
		boat03Mesh.rotation.y = 80 * Math.PI / 180;

		// Boat 04 ---------------------------------------------//	
		boat04Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 50, 40, 190 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xd9d4d4,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat04Mesh );
		boat04Mesh.position.set( 100, boatsLevel , -900 );
		boat04Mesh.receiveShadow = true;
		boat04Mesh.castShadow = true;
		boat04Mesh.rotation.y = 80 * Math.PI / 180;

		// Boat 05 -------------------------------------------//
		boat05Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 80, 100, 375 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0x797676,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat05Mesh );
		boat05Mesh.position.set( 25, boatsLevel + 20 , -650 );
		boat05Mesh.receiveShadow = true;
		boat05Mesh.castShadow = true;
		boat05Mesh.rotation.y = 80 * Math.PI / 180;

		// Boat 06 ----------------------------------------//
		boat06Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 75, 60, 220 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xededd3,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat06Mesh );
		boat06Mesh.position.set( 100, boatsLevel , -350 );
		boat06Mesh.receiveShadow = true;
		boat06Mesh.castShadow = true;
		boat06Mesh.rotation.y = 80 * Math.PI / 180;

		// Boat 07 ---------------------------------------//	
		boat07Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 140, 110, 500 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xadaaaa,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat07Mesh );
		boat07Mesh.position.set( 100, boatsLevel + 20 , 150 );
		boat07Mesh.receiveShadow = true;
		boat07Mesh.castShadow = true;
		boat07Mesh.rotation.y = 0 * Math.PI / 180;

		// Boat 08 --------------------------------------//
		boat08Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 140, 110, 500 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xadaaaa,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat08Mesh );
		boat08Mesh.position.set( 100, boatsLevel + 20 , 800 );
		boat08Mesh.receiveShadow = true;
		boat08Mesh.castShadow = true;
		boat08Mesh.rotation.y = 0 * Math.PI / 180;

		// Boat 09 -------------------------------------//
		boat09Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 60, 45, 225 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xededd3,
			emissive: 0x151515,
			specular: 0x111111,
			shininess: 5,
			side: THREE.DoubleSide,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat09Mesh );
		boat09Mesh.position.set( 100, boatsLevel, 1350 );
		boat09Mesh.receiveShadow = true;
		boat09Mesh.castShadow = true;
		boat09Mesh.rotation.y = 110 * Math.PI / 180;

		// Boat 10 ----------------------------------//
		boat10Mesh = new THREE.Mesh (
			new THREE.BoxGeometry( 100, 90, 300 ),
			new THREE.MeshPhongMaterial( {
			wireframe: false,
			color: 0xadaaaa,
			emissive: 0x151515,
			side: THREE.DoubleSide,
			shininess: 5,
			transparent: true,
			opacity: 0.8
			} )
		);

		scene.add( boat10Mesh );
		boat10Mesh.position.set( 50, boatsLevel + 20, 1600 );
		boat10Mesh.receiveShadow = true;
		boat10Mesh.castShadow = true;
		boat10Mesh.rotation.y = 110 * Math.PI / 180;

		// Busy Levee Overview -------------------------------- //

		// Levee Ground Elevation OBJ ------------------------------------------------------------------ //
					var onProgress = function ( xhr ) {

						if ( xhr.lengthComputable ) {
							var percentComplete = xhr.loaded / xhr.total * 100;
							console.log( Math.round(percentComplete, 2 ) + '% downloaded' );
						}
					};

					var onError = function ( xhr ) { };

					THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

					var mtlLoader = new THREE.MTLLoader();
		
					mtlLoader.setPath( '../models/obj/' );

					mtlLoader.load( 'busy-levee-ground-elevation.mtl', function( materials ) {
						
						materials.preload();

					var objLoader = new THREE.OBJLoader();

					objLoader.setMaterials( materials );
					objLoader.setPath( '../models/obj/' );
					objLoader.load( 'busy-levee-ground-elevation.obj', function ( object ) {

						object.position.y = - 250;
						object.scale.x = 1;
						object.flipY = true;
						scene.add( object );
					}, 

					onProgress, onError );

					});

		// Levee Foundations OBJ ------------------------------------------------------------------ //
					var onProgress = function ( xhr ) {

						if ( xhr.lengthComputable ) {
							var percentComplete = xhr.loaded / xhr.total * 100;
							console.log( Math.round(percentComplete, 2) + '% downloaded' );
						}
					};

					var onError = function ( xhr ) { };

					THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

					var mtlLoader = new THREE.MTLLoader();

					mtlLoader.setPath( '../models/obj/' );

					mtlLoader.load( 'busy-levee-foundations.mtl', function( materials ) {

						materials.preload();
						materials.wrapS = THREE.RepeatWrapping;
						materials.wrapT = THREE.RepeatWrapping;

						var objLoader = new THREE.OBJLoader();

						objLoader.setMaterials( materials );
						objLoader.setPath( '../models/obj/' );
						objLoader.load( 'busy-levee-foundations.obj', function ( object ) {

							object.position.x = -250;
							object.position.y = -248;
							object.position.z = 25;
							object.flipY = true;

							scene.add( object );
						}, 

						onProgress, onError );

					});

		// Levee Blocks OBJ ------------------------------------------------------------------ //
					var onProgress = function ( xhr ) {

						if ( xhr.lengthComputable ) {
							var percentComplete = xhr.loaded / xhr.total * 100;
							console.log( Math.round(percentComplete, 2) + '% downloaded' );
						}
					};

					var onError = function ( xhr ) { };

					THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

					var mtlLoader = new THREE.MTLLoader();

					mtlLoader.setPath( '../models/obj/' );

					mtlLoader.load( 'busy-levee-rooftops.mtl', function( materials ) {

						materials.preload();
						materials.wrapS = THREE.RepeatWrapping;
						materials.wrapT = THREE.RepeatWrapping;

						var objLoader = new THREE.OBJLoader();

						objLoader.setMaterials( materials );
						objLoader.setPath( '../models/obj/' );
						objLoader.load( 'busy-levee-rooftops.obj', function ( object ) {

							object.position.set( -250, -250, 20 );
							object.rotation.set( 0, 0, 0 );
							object.scale.x = 1;
							object.scale.x = 1;
							//object.flipY = true;
							
							object.traverse( function( node ) {
								if( node.material ) {
									node.material.opacity = 0.9;
									node.material.transparent = true;
								}
							} );

							scene.add( object );
						}, 

						onProgress, onError );

					});



		// Levee Group ---------------------------- //
		var leveeGroup = new THREE.Group();

		leveeGroup.add( boat01Mesh );
		leveeGroup.add( boat02Mesh );
		leveeGroup.add( boat03Mesh );
		leveeGroup.add( boat04Mesh );
		leveeGroup.add( boat05Mesh );
		leveeGroup.add( boat06Mesh );
		leveeGroup.add( boat07Mesh );
		leveeGroup.add( boat08Mesh );
		leveeGroup.add( boat09Mesh );
		leveeGroup.add( boat10Mesh );
		leveeGroup.add( cityMarketTarget );
		leveeGroup.add( boat07Target );
		leveeGroup.add( commercialAlleyTarget );
		leveeGroup.add( mainStreetTarget );
		leveeGroup.add( riverVolume );

		leveeGroup.rotation.set( 0, 0, 0 );
		leveeGroup.position.set( 0, -250, 0 );

		scene.add( leveeGroup );

		


	};


			function animate() {
				requestAnimationFrame( animate );

				controls.update();

				boat07Target.rotation.y += 0.05;
				boat07Target.rotation.x -= 0.05;

				cityMarketTarget.rotation.y += 0.05;
				cityMarketTarget.rotation.x -= 0.05;

				commercialAlleyTarget.rotation.y += 0.05;
				commercialAlleyTarget.rotation.x -= 0.05;

				mainStreetTarget.rotation.y += 0.05;
				mainStreetTarget.rotation.x -= 0.05;

				// Camera Shpere Position Update ---------------------------------- //

				var time = Date.now() * 0.0005;
				var delta = clock.getDelta();

				// adjust position to keep the sphere in front of the camera
					camSphere.position.set(
						camera.position.x - Math.sin( camera.rotation.y + Math.PI/6 ) * 0.75,
						camera.position.y - 0.5 + Math.sin( time*4 + camera.position.x + camera.position.z )*0.01,
						camera.position.z + Math.cos( camera.rotation.y + Math.PI/6 ) * 0.75
					);
	//				camSphere.rotation.set(
	//					camera.rotation.x,
	//					camera.rotation.y - Math.PI,
	//					camera.rotation.z
	//			);

				// Raycaster ----------------------------------------------------- //
				raycaster = new THREE.Raycaster();

				//intitTouch();

	////			function intitTouch() {
	////
	////					  window.addEventListener( "touchstart", onTouchStart, false );
	////					  window.addEventListener( "touchend", onTouchEnd, false );
	////					  window.addEventListener( "touchcancel", onTouchCancel, false );
	////					  window.addEventListener( "touchmove", onTouchMove, false );
	////
	////			}
	////
	////			function onTouchStart( event ) {
	////
	////					}
	////
	////					function onTouchEnd( event ) {
	////
	////							}			
	////
	////					function onTouchMove( event ) {
	////
	////							}
	////
	////					function onTouchCancel( event ) {
	////
	////					}
				
				render();

			};


			function render() {

				renderer.render( scene, camera );

			};