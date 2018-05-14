// Busy Levee Interactive Map ---------------------------------- //

	var camera, controls, scene, renderer, projector, distance, geometry, projector, material, clock;

	var worldWidth = 4800, worldDepth = 4800, worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

	var ambientLight, floorLight01, spotLight;

	var boat07Target;

	var textureLoader = new THREE.TextureLoader();
	var JSONLoader = new THREE.JSONLoader();
	var OBJoader = new THREE.OBJLoader();
	var MTLLoader = new THREE.MTLLoader();

	var width = window.innerWidth;
	var height = window.innerHeight;

	var mapWidth = 1024;
	var mapHeight = 576;

	var boatsLevel = 280;

	var clientX, clientY;

	var clock = new THREE.Clock();

	var radius = 100, theta = 10;
	
	var dae, items = [], raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(), INTERSECTED;
	var objects = [];

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

		// Perspective Camera
		//camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
		camera = new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 1, 10000 );
		camera.position.x = -3000;
		camera.position.y = 900;
		camera.rotation.z = 0;
		camera.lookAt ( 0, 10, 0 );
		
		//Orthographic Camera
//		cameraOrtho = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, 1, 10000 );
//		cameraOrtho.position.z = 10;


		// Scene
		scene = new THREE.Scene();
		
		//sceneOrtho = new THREE.Scene();

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
		
		leveeMap.addEventListener( 'mouseup', onMouseUp, false );	


		// Orbit Controls ------------------------------------------------------------ //
		controls = new THREE.OrbitAndPanControls( camera, renderer.domElement );
		controls.noZoom = false;
		controls.noPan = false;
		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.8;
		controls.maxDistance = 4800;
		controls.minDistance = 0;
		controls.maxPolarAngle = 78 * Math.PI / 180;
		controls.minPolarAngle = 10 * Math.PI / 180;
		controls.maxAzimuthAngle = 270 * Math.PI / 180;
		controls.minAzimuthAngle = -270 * Math.PI / 180;
		controls.rotateSpeed = 0.5;
		controls.zoomSpeed = 1;
		controls.panSpeed = 0.5;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.05;
		controls.target = new THREE.Vector3 ( 0, 100, 0 );
		controls.addEventListener( 'change', render );


		window.addEventListener( "resize", onWindowResize, false );

		function onWindowResize() {
		camera.aspect = mapWidth / mapHeight;
		camera.updateProjectionMatrix();
			
//		cameraOrtho.left = - width / 2;
//		cameraOrtho.right = width / 2;
//		cameraOrtho.top = height / 2;
//		cameraOrtho.bottom = - height / 2;
//		cameraOrtho.updateProjectionMatrix();

		renderer.setSize( mapWidth, mapHeight );
		};


		// Skybox Background
		var r = "../tex/cube/sky01/";
		var urls = [
			r + "front3.jpg",
			r + "back3.jpg",
			r + "top3.jpg",
			r + "bottom3.jpg",
			r + "right3.jpg",
			r + "left3.jpg"
		];

		textureCube = new THREE.CubeTextureLoader().load( urls );
		scene.background = textureCube;
		textureCube.format = THREE.RGBFormat;
		textureCube.mapping = THREE.CubeReflectionMapping;

		// Scene Lights -------------------------------------------------------------- //
		ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
			scene.add(ambientLight);	

		// Floor Lights------------------------------------------------- //
		floorLight01 = new THREE.DirectionalLight( 0xFFC55C, 0.5 );
			floorLight01.position.copy(new THREE.Vector3( 3600, 2400, -2400 ));
			floorLight01.castShadow = true;
			floorLight01.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 1, 10000 ) );
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

				 spotLight.shadow.camera.near = 200;
				 spotLight.shadow.camera.far = 3000; //camera.far;
				 spotLight.shadow.camera.fov = 45;

				 spotLight.shadowMapBias = 0.001;
				 spotLight.shadowMapDarkness = 0.75;
				 spotLight.shadow.mapSize.width = 2048;
				 spotLight.shadow.mapSize.height = 2048; 
			 }

			 scene.add( spotLight );

		// Fog
		scene.fog = new THREE.Fog( 0x000000, 2400, 8400 );

		// Cameras Location Cube -------------------------------------//

//		camBox = new THREE.Mesh (
//			new THREE.BoxGeometry( 2, 2, 2 ),
//			new THREE.MeshLambertMaterial( {
//			wireframe: true,
//			color: 0xffffff,
//			visible: true,
//			side: THREE.DoubleSide
//			} )
//		);
//
//		scene.add( camBox );
//		camBox.position.set( 50, -5, 0 );
//		camBox.rotation.y = 0 * Math.PI / 180;
//	
		
		// Levee Ground Elevation JSON ---------------------------------------------------------------- //
		JSONLoader.load( "../models/json/busy-levee-ground-elevation.json", function( elevationGeometry ) {
			elevationMesh = new THREE.Mesh( elevationGeometry, new THREE.MeshPhongMaterial( {
				//color: 0x8e795b,
				specular: 0x000000,
				map: textureLoader.load( "../models/json/tex/tex-levee-ground-elevation-02.jpg" ),
				normalMap: textureLoader.load( "../models/json/tex/tex-levee-ground-elevation-normal-02.jpg" )
				})
			);

			elevationMesh.position.y = 0;
			elevationMesh.receiveShadow = true;
			elevationMesh.material.side = THREE.DoubleSide;
			scene.add( elevationMesh );
		} );

		// Levee foundations JSON ---------------------------------------------------------------- //
		JSONLoader.load( "../models/json/foundations-arched.json", function( foundationsGeometry ) {
			var foundationsMesh = new THREE.Mesh( foundationsGeometry, new THREE.MeshPhongMaterial( {
				color: 0x8e795b,
				specular: 0x222222,
				shininess: 1,
				map: textureLoader.load( "../models/json/tex/Limestone_Bluff.jpg" ),
				normalMap: textureLoader.load( "../models/json/tex/Limestone_Bluff_Normal.jpg" ),
				normalScale: new THREE.Vector2( 1, 1 ),
				side: THREE.DoubleSide
				})
			);

			foundationsMesh.position.x = -425;
			foundationsMesh.position.y = 292;
			foundationsMesh.position.z = 10;
			foundationsMesh.rotation.set( 0, 180 * Math.PI /180, 0 );
			foundationsMesh.flipY = true;

			scene.add( foundationsMesh );

		} );

		// Levee Blocks JSON ------------------------------------------------------------------ //
			
		
		// City Market -------------------------- //
				//  City Market Target  //
				cityMarketTarget = new THREE.Mesh (
					new THREE.SphereGeometry( 10, 64, 64 ),
					new THREE.MeshPhongMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.5,
					color: 0xff0000,
					emissive: 0x000000,
					specular: 0xffff00,
					shininess: 5,
					side: THREE.DoubleSide
					} )
				);

				scene.add( cityMarketTarget );
				cityMarketTarget.position.set( 525, 325 , -1480 );
				cityMarketTarget.receiveShadow = true;
				cityMarketTarget.castShadow = true;

				// City Market Label Sprite --------- //
					var cityMarketSpriteMap = new THREE.TextureLoader().load( "../img/label-sprite-02.png" );

					var cityMarketSpriteMaterial = new THREE.SpriteMaterial( { map: cityMarketSpriteMap, color: 0xffffff } );

					var cityMarketSprite = new THREE.Sprite( cityMarketSpriteMaterial );
					cityMarketSprite.position.set( 525, 325 , -1481 );
					cityMarketSprite.scale.set( 256, 32, 0.5 );

					scene.add( cityMarketSprite );

				// City Market Building Merged ---------------------------- //
				var cityMarketMat = new THREE.MeshLambertMaterial( {
										wireframe: false,
										transparent: true,
										opacity: 0.8,
										color: 0x5d4123,
										emissive: 0x000000,
										side: THREE.DoubleSide
										} )

				var bottomFloorGeo = new THREE.BoxGeometry( 78, 60, 308 );
				var bottomFloorMesh = new THREE.Mesh( bottomFloorGeo, cityMarketMat );

				var topFloorGeo = new THREE.BoxGeometry( 87, 125, 72 );
				bottomFloorMesh.updateMatrix();
				topFloorGeo.merge( bottomFloorMesh.geometry, bottomFloorMesh.matrix );

				var cityMarketMesh = new THREE.Mesh( topFloorGeo, cityMarketMat);
				scene.add( cityMarketMesh );

				cityMarketMesh.position.set( 640, 618 , -1480 );
				cityMarketMesh.receiveShadow = true;
				cityMarketMesh.castShadow = true;

				items.push( cityMarketMesh );

		
			// Block 01 Merged -------------------------- //
			var block01MergedGeo = new THREE.Geometry();

			var block01Mat = new THREE.MeshLambertMaterial( {
								 wireframe: false,
								 transparent: true,
								 opacity: 0.8,
								 color: 0x5d4123,
								 emissive: 0x000000,
								 side: THREE.DoubleSide
								 } )

			var block0101Geo = new THREE.BoxGeometry( 111, 180, 83 );
			var block0101Mesh = new THREE.Mesh( block0101Geo, block01Mat );
			block0101Mesh.position.set( 654, 81, -1002 );
			block0101Mesh.updateMatrix();
			block01MergedGeo.merge( block0101Mesh.geometry, block0101Mesh.matrix );

			var block0101aGeo = new THREE.BoxGeometry( 65, 75, 83 );
			var block0101aMesh = new THREE.Mesh( block0101aGeo, block01Mat );
			block0101aMesh.position.set( 741, 79, -1002 );
			block0101aMesh.updateMatrix();
			block01MergedGeo.merge( block0101aMesh.geometry, block0101aMesh.matrix );

			var block0102Geo = new THREE.BoxGeometry( 135, 150, 146 );
			var block0102Mesh = new THREE.Mesh( block0102Geo, block01Mat );
			block0102Mesh.position.set( 669, 79, -887 );
			block0102Mesh.updateMatrix();
			block01MergedGeo.merge( block0102Mesh.geometry, block0102Mesh.matrix );

			var block0103Geo = new THREE.BoxGeometry( 135, 120, 78 );
			var block0103Mesh = new THREE.Mesh( block0103Geo, block01Mat );
			block0103Mesh.position.set( 670, 78, -776 );
			block0103Mesh.updateMatrix();
			block01MergedGeo.merge( block0103Mesh.geometry, block0103Mesh.matrix );

			var block0104Geo = new THREE.BoxGeometry( 135, 70, 139 );
			var block0104Mesh = new THREE.Mesh( block0104Geo, block01Mat );
			block0104Mesh.position.set( 670, 73, -667 );
			block0104Mesh.updateMatrix();
			block01MergedGeo.merge( block0104Mesh.geometry, block0104Mesh.matrix );

			var block0105Geo = new THREE.BoxGeometry( 135, 140, 57 );
			var block0105Mesh = new THREE.Mesh( block0105Geo, block01Mat );
			block0105Mesh.position.set( 669, 84, -569 );
			block0105Mesh.updateMatrix();
			block01MergedGeo.merge( block0105Mesh.geometry, block0105Mesh.matrix );

			var block0106Geo = new THREE.BoxGeometry( 160, 70, 70 );
			var block0106Mesh = new THREE.Mesh( block0106Geo, block01Mat );
			block0106Mesh.position.set( 680, 81, -506 );
			block0106Mesh.updateMatrix();
			block01MergedGeo.merge( block0106Mesh.geometry, block0106Mesh.matrix );

			block01Mesh = new THREE.Mesh( block01MergedGeo, block01Mat );
			block01Mesh.position.y = 544;
			scene.add( block01Mesh );
		
		// Block 02 -------------------------- //
			// Building 01 ------------------- //
					block0201Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 160, 140, 235 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0201Mesh );
					block0201Mesh.position.set( 680, 660, -160 );
					block0201Mesh.receiveShadow = true;
					block0201Mesh.castShadow = true;
		
			// Building 02 ------------------- //
					block0202Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 160, 150, 213 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0202Mesh );
					block0202Mesh.position.set( 680, 667, 66 );
					block0202Mesh.receiveShadow = true;
					block0202Mesh.castShadow = true;
		
			// Building 03 ------------------- //
					block0203Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 160, 150, 152 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0203Mesh );
					block0203Mesh.position.set( 680, 647, 249 );
					block0203Mesh.receiveShadow = true;
					block0203Mesh.castShadow = true;
		
		// Block 03 -------------------------- //
			// Building 01 ------------------- //
					block0301Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 150, 295 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0301Mesh );
					block0301Mesh.position.set( 685, 632, 640 );
					block0301Mesh.receiveShadow = true;
					block0301Mesh.castShadow = true;
		
			// Building 02 ------------------- //
						block0302Mesh = new THREE.Mesh (
						new THREE.BoxGeometry( 170, 200, 221 ),
						new THREE.MeshLambertMaterial( {
						wireframe: false,
						transparent: true,
						opacity: 0.8,
						color: 0x5d4123,
						emissive: 0x000000,
						side: THREE.DoubleSide
							} )
						);

						scene.add( block0302Mesh );
						block0302Mesh.position.set( 685, 643, 897 );
						block0302Mesh.receiveShadow = true;
						block0302Mesh.castShadow = true;
		
			// Building 03 ------------------- //
					block0303Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 150, 100 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0303Mesh );
					block0303Mesh.position.set( 685, 632, 1058 );
					block0303Mesh.receiveShadow = true;
					block0303Mesh.castShadow = true;
		
		// Block 04 -------------------------- //
			// Building 01 ------------------- //
					block0401Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 165, 148, 140 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0401Mesh );
					block0401Mesh.position.set( 685, 630, 1367 );
					block0401Mesh.receiveShadow = true;
					block0401Mesh.castShadow = true;
		
			// Building 02 ------------------- //
					block0402Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 165, 160, 109 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0402Mesh );
					block0402Mesh.position.set( 685, 647, 1492 );
					block0402Mesh.receiveShadow = true;
					block0402Mesh.castShadow = true;
		
			// Building 03 ------------------- //
					block0403Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 165, 160, 70 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0403Mesh );
					block0403Mesh.position.set( 685, 625, 1582 );
					block0403Mesh.receiveShadow = true;
					block0403Mesh.castShadow = true;
		
			// Building 04 ------------------- //
					block0404Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 165, 100, 269 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0404Mesh );
					block0404Mesh.position.set( 685, 635, 1753 );
					block0404Mesh.receiveShadow = true;
					block0404Mesh.castShadow = true;
		
		// Block 05 -------------------------- //
			// Building 01 ------------------- //
					block0501Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 75, 95, 165 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0501Mesh );
					block0501Mesh.position.set( 973, 695, -960 );
					block0501Mesh.receiveShadow = true;
					block0501Mesh.castShadow = true;
		
			// Building 02 ------------------- //
					block0502Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 95, 99, 170 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0502Mesh );
					block0502Mesh.position.set( 1058, 695, -963 );
					block0502Mesh.receiveShadow = true;
					block0502Mesh.castShadow = true;
		
			// Building 03 ------------------- //
					block0503Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 173, 150, 65 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0503Mesh );
					block0503Mesh.position.set( 1020, 685, -845 );
					block0503Mesh.receiveShadow = true;
					block0503Mesh.castShadow = true;
		
			// Building 04 ------------------- //
					block0504Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 173, 120, 351 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0504Mesh );
					block0504Mesh.position.set( 1020, 679, -634 );
					block0504Mesh.receiveShadow = true;
					block0504Mesh.castShadow = true;
		
			// Block 06 -------------------------- //
			// Building 01 ------------------- //
					block0601Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 125, 232 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0601Mesh );
					block0601Mesh.position.set( 1013, 700, -157 );
					block0601Mesh.receiveShadow = true;
					block0601Mesh.castShadow = true;
		
			// Building 02 ------------------- //
					block0602Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 100, 210 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0602Mesh );
					block0602Mesh.position.set( 1013, 690, 65 );
					block0602Mesh.receiveShadow = true;
					block0602Mesh.castShadow = true;
		
			// Building 03 ------------------- //
					block0603Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 125, 158 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0603Mesh );
					block0603Mesh.position.set( 1013, 698, 250 );
					block0603Mesh.receiveShadow = true;
					block0603Mesh.castShadow = true;
		
			// Block 07 -------------------------- //
			// Building 01 ------------------- //
					block0701Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 150, 55 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0701Mesh );
					block0701Mesh.position.set( 1013, 717, 525 );
					block0701Mesh.receiveShadow = true;
					block0701Mesh.castShadow = true;
			
			// Building 02 ------------------- //
					block0702Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 173, 175, 290 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0702Mesh );
					block0702Mesh.position.set( 1015, 690, 700 );
					block0702Mesh.receiveShadow = true;
					block0702Mesh.castShadow = true;
		
			// Building 03 ------------------- //
					block0703Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 173, 150, 60 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0703Mesh );
					block0703Mesh.position.set( 1010, 715, 877 );
					block0703Mesh.receiveShadow = true;
					block0703Mesh.castShadow = true;
		
			// Building 04 ------------------- //
					block0704Mesh = new THREE.Mesh (
					new THREE.BoxGeometry( 170, 170, 202 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.8,
					color: 0x5d4123,
					emissive: 0x000000,
					side: THREE.DoubleSide
						} )
					);

					scene.add( block0704Mesh );
					block0704Mesh.position.set( 1010, 712, 1009 );
					block0704Mesh.receiveShadow = true;
					block0704Mesh.castShadow = true;
				

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
			water.position.x = -750;
			water.position.y = 567;
			water.position.z = 0;
			water.receiveShadow = false;
			scene.add( water );

		// River Volume ----------------------------------//
			var riverVolume = new THREE.Mesh (
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

			scene.add( riverVolume );
			riverVolume.position.set( -750, 132 , 0 );
			riverVolume.receiveShadow = true;
			riverVolume.castShadow = true;	

		// River Wharf ----------------------------------//

			wharfTexture = new THREE.TextureLoader().load( "../tex/wharf-tex.jpg" );
			wharfTexture.repeat.set( 1, 1 );
			wharfTexture.wrapT = THREE.RepeatWrapping;
			wharfTexture.wrapS = THREE.UVMapping;

			riverWharf = new THREE.Mesh (
					new THREE.BoxGeometry( 80, 200, 4810 ),
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
			riverWharf.position.set( 375, 536, 0 );
			riverWharf.rotation.set( 0, 0 , 93.5 * Math.PI / 180 );
			riverWharf.receiveShadow = true;
			riverWharf.castShadow = true;
			riverWharf.flipY = true;

	// Hotspot Targets -------------------------------//
		
		//  Commercial Alley Target  //
			commercialAlleyTarget = new THREE.Mesh (
				new THREE.SphereGeometry( 10, 64, 64 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				//transparent: true,
				opacity: 0.5,
				color: 0xff0000,
				emissive: 0x000000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			scene.add( commercialAlleyTarget );
			commercialAlleyTarget.position.set( 850, 375 , -1100 );
			commercialAlleyTarget.receiveShadow = true;
			commercialAlleyTarget.castShadow = true;

			items.push( commercialAlleyTarget );

		//  Main Street Target  //
			mainStreetTarget = new THREE.Mesh (
				new THREE.SphereGeometry( 10, 64, 64 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.5,
				color: 0xff0000,
				emissive: 0x000000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);

			scene.add( mainStreetTarget );
			mainStreetTarget.position.set( 1200, 375 , -365 );
			mainStreetTarget.receiveShadow = true;
			mainStreetTarget.castShadow = true;
		
			items.push( mainStreetTarget );

		// ------------------- End Targets ------------------//

	// Boats Group ------------------------------------------------------ //

		// Boat 01 ------------------------------------------------------//
		JSONLoader.load( "../models/json/riverboat-01.json", function( boat01Geometry ) {
			boat01Mesh = new THREE.Mesh( boat01Geometry, new THREE.MeshPhongMaterial( {
				side: THREE.DoubleSide
				})
			);

			boat01Mesh.position.set( 900, 615, -2025 );
			boat01Mesh.rotation.set( 0, -100 * Math.PI / 180, 0 );
			boat01Mesh.scale.x = 1;
			boat01Mesh.scale.y = 1;
			boat01Mesh.transparency = true;
			boat01Mesh.opacity = 0.8;

			scene.add( boat01Mesh );

		} );

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

		boat06Mesh.position.set( 100, boatsLevel , -350 );
		boat06Mesh.receiveShadow = true;
		boat06Mesh.castShadow = true;
		boat06Mesh.rotation.y = 80 * Math.PI / 180;

		// Boat 07 ---------------------------------------//	
			JSONLoader.load( "../models/json/riverboat-01.json", function( boat07Geometry ) {
				var boat07Mesh = new THREE.Mesh( boat07Geometry, new THREE.MeshPhongMaterial( {
					side: THREE.DoubleSide,
					emissive: 0x000000
					})
				);

				boat07Mesh.position.set( -1225, 680, -1500 );
				boat07Mesh.rotation.set( 0, 0 * Math.PI / 180, 0 );
				boat07Mesh.scale.x = 2.25;
				boat07Mesh.scale.y = 2.25; 
				boat07Mesh.scale.z = 2.25;

				scene.add( boat07Mesh );
				items.push( boat07Mesh );

			} );
		
		//  St. Louis Riverboat Target //	
			boat07Target = new THREE.Mesh (
				new THREE.SphereGeometry( 10, 64, 64 ),
				new THREE.MeshPhongMaterial( {
				wireframe: false,
				transparent: true,
				opacity: 0.5,
				color: 0xff0000,
				emissive: 0x000000,
				specular: 0xffff00,
				shininess: 5,
				side: THREE.DoubleSide
				} )
			);
			
			boat07Target.position.set( 100, 400 , 150 );
			boat07Target.receiveShadow = true;
			boat07Target.castShadow = true;
		
			items.push( boat07Target );
		
		// St. Louis Riverboat label Sprite --------- //
			boat07SpriteMap = new THREE.TextureLoader().load( "../img/label-sprite-01.png" );
			
			boat07SpriteMaterial = new THREE.SpriteMaterial( { map: boat07SpriteMap, color: 0xffffff } );

			var boat07Sprite = new THREE.Sprite( boat07SpriteMaterial );
			boat07Target.castShadow = true;
			boat07Sprite.position.set( 100, 400 , 150);
			boat07Sprite.scale.set( 256, 32, 0.5 );

			scene.add( boat07Sprite );
		//

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

		boat08Mesh.position.set( 100, boatsLevel + 20 , 800 );
		boat08Mesh.receiveShadow = true;
		boat08Mesh.castShadow = true;
		boat08Mesh.rotation.y = 0 * Math.PI / 180;

		// Boat 09 -------------------------------------//
		var boat09Mesh = new THREE.Mesh (
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
		var boat10Mesh = new THREE.Mesh (
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

		boat10Mesh.position.set( 50, boatsLevel + 20, 1600 );
		boat10Mesh.receiveShadow = true;
		boat10Mesh.castShadow = true;
		boat10Mesh.rotation.y = 110 * Math.PI / 180;


		// Levee Group ---------------------------- //
		var leveeGroup = new THREE.Group();

		//leveeGroup.add( boat01Mesh );
		leveeGroup.add( boat02Mesh );
		leveeGroup.add( boat03Mesh );
		leveeGroup.add( boat04Mesh );
		leveeGroup.add( boat05Mesh );
		leveeGroup.add( boat06Mesh );
		//leveeGroup.add( boat07Mesh );
		leveeGroup.add( boat08Mesh );
		leveeGroup.add( boat09Mesh );
		leveeGroup.add( boat10Mesh );
		leveeGroup.add( cityMarketTarget );
		leveeGroup.add( boat07Target );
		leveeGroup.add( commercialAlleyTarget );
		leveeGroup.add( mainStreetTarget );
		leveeGroup.add( riverVolume );
		leveeGroup.add( boat07Sprite );
		leveeGroup.add( cityMarketSprite );

		leveeGroup.position.set( 0, 295, 0 );

		scene.add( leveeGroup );
		

	};

    // Animate Functions ------------------- //
	function animate() {
		requestAnimationFrame( animate );
		controls.update();

		boat07Target.rotation.y += 0.05;
		//boat07Target.rotation.x -= 0.05;

		cityMarketTarget.rotation.y += 0.05;
		//cityMarketTarget.rotation.x -= 0.05;

		commercialAlleyTarget.rotation.y += 0.05;
		//commercialAlleyTarget.rotation.x -= 0.05;

		mainStreetTarget.rotation.y += 0.05;
		//mainStreetTarget.rotation.x -= 0.05;

		// Camera Shpere Position Update ---------------------------------- //

		var time = Date.now() * 0.0005;
		var delta = clock.getDelta();

		// adjust position to keep the sphere in front of the camera
//		camBox.position.set(
//			camera.position.x - Math.sin( camera.rotation.y + Math.PI/6 ) * 0.75,
//			camera.position.y - 0.5 + Math.sin( time*4 + camera.position.x + camera.position.z )*0.01,
//			camera.position.z + Math.cos( camera.rotation.y + Math.PI/6 ) * 0.75
//		);
		

		// Touch Events ----------------------------------------------------- //

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
		////			function onTouchEnd( event ) {
		////
		////					}			
		////
		////			function onTouchMove( event ) {
		////
		////					}
		////
		////			function onTouchCancel( event ) {
		////
		////					}
		
			render();

	};


	// Render Function ------------------------- //
	function render() {

			renderer.render( scene, camera );
		
			//renderer.render( sceneOrtho, cameraOrtho );
	};

	// Raycaster Mouse / Touch Events

	function onMouseUp( event ) {

		event.preventDefault();

		var x = event.offsetX == undefined ? event.layerX : event.offsetX;
		var y = event.offsetY == undefined ? event.layerY : event.offsetY;
		

		var vector = new THREE.Vector3();
		vector.set( ( x / renderer.domElement.width ) * 2 - 1, - ( y / renderer.domElement.height ) * 2 + 1, 0.9 );
		vector.unproject( camera );
		
		raycaster.ray.set( camera.position, vector.sub( camera.position ).normalize() );

					// Manipulate Objects

					var intersects = raycaster.intersectObjects( items );

					if ( intersects.length > 0 ) {
					
					if ( INTERSECTED != intersects[ 0 ].object ) {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

							INTERSECTED = intersects[ 0 ].object;
							INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
							INTERSECTED.material.emissive.setHex( 0xff00ff );
						controls.reset();

							}

							} else {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

						INTERSECTED = null;

					}

					renderer.render( scene, camera );
					
				};
	// Object Collision Detection --------------------------------------------------------------- //
//		getObstacles = function () {
//			'use strict';
//			return this.obstacles.concat(this.items);
//		}
//
//		initCollide = function (args) {
//		/* ... */
//		// Set the character modelisation object
//		this.mesh = new THREE.Object3D();
//		/* ... */
//		// Set the rays : one vector for every potential direction
//		this.rays = [
//		  new THREE.Vector3(0, 0, 1),
//		  new THREE.Vector3(1, 0, 1),
//		  new THREE.Vector3(1, 0, 0),
//		  new THREE.Vector3(1, 0, -1),
//		  new THREE.Vector3(0, 0, -1),
//		  new THREE.Vector3(-1, 0, -1),
//		  new THREE.Vector3(-1, 0, 0),
//		  new THREE.Vector3(-1, 0, 1)
//		];
//		// And the "RayCaster", able to test for intersections
//		this.caster = new THREE.Raycaster();
//		},
//		// Test and avoid collisions
//		collision = function () {
//		'use strict';
//		var collisions, i,
//		  // Maximum distance from the origin before we consider collision
//		  distance = 32,
//		  // Get the obstacles array from our world
//		  obstacles = raycaster.intersectObjects( items );
//		// For each ray
//		for (i = 0; i < this.rays.length; i += 1) {
//		  // We reset the raycaster to this direction
//		  this.caster.set(this.mesh.position, this.rays[i]);
//		  // Test if we intersect with any obstacle mesh
//		  collisions = this.caster.intersectObjects(items);
//		  // And disable that direction if we do
//		  if (collisions.length > 0 && collisions[0].distance <= distance) {
//			// Yep, this.rays[i] gives us : 0 => up, 1 => up-left, 2 => left, ...
//			if ((i === 0 || i === 1 || i === 7) && this.direction.z === 1) {
//			  this.direction.setZ(0);
//			} else if ((i === 3 || i === 4 || i === 5) && this.direction.z === -1) {
//			  this.direction.setZ(0);
//			}
//			if ((i === 1 || i === 2 || i === 3) && this.direction.x === 1) {
//			  this.direction.setX(0);
//			} else if ((i === 5 || i === 6 || i === 7) && this.direction.x === -1) {
//			  this.direction.setX(0);
//			}
//		  }
//		}
//		},
//		// Process the character motions
//		motion = function () {
//		'use strict';
//		// Update the directions if we intersect with an obstacle
//		this.collision();
//		// If we're not static
//		if (this.direction.x !== 0 || this.direction.z !== 0) {
//		  // Rotate the character
//		  this.rotate();
//		  // Move the character
//		  this.move();
//		  return true;
//		}
//		}
//		/* ... */
//		
//		initCollide();



