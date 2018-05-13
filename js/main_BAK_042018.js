// Busy Levee Interactive Map ---------------------------------- //

	var camera, controls, scene, renderer, projector, distance, geometry, projector, material, clock, firstPersonControls, defaultControls;

	var worldWidth = 4800, worldDepth = 4800, worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

	var ambientLight, floorLight01, spotLight;

	var theStLouisTarget, blockFoundationsOBJ, cityMarketFoundationOBJ;

	var container = $("#leveeMap");

	var textureLoader = new THREE.TextureLoader();
	var JSONLoader = new THREE.JSONLoader();

	var width = window.innerWidth;
	var height = window.innerHeight;

	var mapWidth = 1200;
	var mapHeight = 675;

	var boatsLevel = 280;

	var clientX, clientY;

	var clock = new THREE.Clock();

	var radius = 500, theta = 50;
	
	var items = [], raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(), INTERSECTED;
	var objects = [];

	function orbitHitTest(container, camera, options) {
	
	var self = this;
	self.orbitConfig = $.extend({
		delta: 1,
		hitTest: true,
		hitTestDistance: 40
	}, options);

	var orbitMatrices = [];
	var hitSurfaces = [];

	var defaultCameraHolder = new THREE.Object3D();
	defaultCameraHolder.name = "defaultCameraHolder";
	defaultCameraHolder.add(camera);

	self.scene = null;
	self.orbitBody = new THREE.Object3D();
	self.orbitBody.add( defaultCameraHolder );
	self.enabled = true;

	}

	init();
	initControls();
	//setDefaultControls();
	animate();

	

	// three.js ----------------------------------------------------------------- //
	function init() {

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

		leveeMap.appendChild( renderer.domElement );
		
		//controls = new THREE.OrbitAndPanControls(  camera, renderer.domElement  );
		
		camera = new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 6144 );
		
		camera.position.set( 400, 150, 0 );
		camera.lookAt( 0, 150, 0 );

		
		// ----------------- Event Listeners -------------------- //
		leveeMap.addEventListener( 'mouseup', onMouseUp, false );	
		leveeMap.addEventListener( 'change', render );
		
		window.addEventListener( "resize", onWindowResize, false );
 
		function onWindowResize() {
		camera.aspect = mapWidth / mapHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( mapWidth, mapHeight );
		};


		// Skybox Background
		var r = "../tex/cube/sky02/";
		var urls = [
			r + "front.jpg",
			r + "back.jpg",
			r + "top.jpg",
			r + "bottom.jpg",
			r + "right.jpg",
			r + "left.jpg"
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
			floorLight01.position.copy(new THREE.Vector3( 0, 3072, -4096 ));
			floorLight01.castShadow = true;
			floorLight01.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 7168 ) );
			floorLight01.shadow.bias = 0.0001;
			floorLight01.shadow.mapSize.width = 4096;
			floorLight01.shadow.mapSize.height = 4096;
			floorLight01.shadow.camera.fov = 60;
			floorLight01.shadow.camera.near = 1024;
			floorLight01.shadow.camera.far = 7168;
			floorLight01.shadow.camera.left = 1024;
			floorLight01.shadow.camera.right = 1024;
			floorLight01.shadow.camera.top = 1024;
			floorLight01.shadow.camera.bottom = 1024;

			scene.add(floorLight01);

			//	 Main Camera Helper	
			//helper01 = new THREE.CameraHelper( floorLight01.shadow.camera );
				//scene.add( helper01 );

		// Overhead Fog SpotLight --------------------------------------------- //
		spotLight = new THREE.SpotLight( 0xffc84d );
			 spotLight.position.set( 0, 4096, 0 );

			 spotLight.castShadow = true;

			 spotLight.shadow.camera.near = 2048;
			 spotLight.shadow.camera.far = 5120; //camera.far;
			 spotLight.shadow.camera.fov = 45;

			 spotLight.shadowMapBias = 0.0001;
			 spotLight.shadowMapDarkness = 0.5;
			 spotLight.shadow.mapSize.width = 4096;
			 spotLight.shadow.mapSize.height = 4096; 
			 

			 scene.add( spotLight );

		// Fog
		scene.fog = new THREE.Fog( 0x0f0c09, 2048, 4608 );
		
		loadSpriteElements();
		loadCityMarketMeshElements();
		loadBlock01MeshElements();
		loadGroundMeshElements();
		riverFrontElements();
		loadMeshElements();
		
		items.push( cityMarketTarget );

	};

	// ----------------- Controls --------------------------- //
	function initControls () {
	// ---------- Default Controls --------- //
		defaultCamera = new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 6144 );
		defaultCamera.position.set( 400, 150, 0 );
		defaultCamera.lookAt( 0, 150, 0 );

		camera = defaultCamera;
		//

		$('#btn-toggleControls.button-wrap').on("click", function(){

		  $(this).toggleClass('button-active');

			if ($(this).hasClass('button-active')) {
				
				setFirstPersonControls();
				$("#touchControls").show();
				$(".tabs-nav").hide();
			}
			
			else {
				
				setDefaultControls();
				$("#touchControls").hide();
				$(".tabs-nav").show();
			}

		});
		//

		// Default Controls --------------------------------------------------------- //
		function setDefaultControls() {
			defaultCamera = new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 6144 );
			defaultCamera.position.set( 400, 150, 0 );
			defaultCamera.lookAt( 0, 150, 0 );
			
			defaultControls = new THREE.OrbitControls(  defaultCamera, renderer.domElement  );
			
			defaultControls.addEventListener( 'change', render );

			camera = defaultCamera;	
			controls = defaultControls;
		};

		function setFirstPersonControls() {
		// First Person Controls --------------------------------------------------------- //

			var options = {
			speedFactor: 10,
			delta: 1,
			rotationFactor: 0.025,
			maxPitch: 55,
			hitTest: true,
			hitTestDistance: 25
			};

			firstPersonCamera = new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 6144 );

			firstPersonControls = new TouchControls( container.parent(), firstPersonCamera, options );
			firstPersonControls.setRotation( 0, 0 );
			firstPersonControls.setPosition( 400, 150, 0 );
			firstPersonControls.addToScene( scene );
			firstPersonControls.lookSpeed = 1;
			firstPersonControls.movementSpeed = 10;
			//
			
			//firstPersonControls.addEventListener( 'change', render );

			camera = firstPersonCamera;
			controls = firstPersonControls;
			//firstPersonControls.update( clock.getDelta() );

		};
		
	};

	
    // Animate Functions ------------------- //
	function animate() {
		requestAnimationFrame( animate );
		//camera.updateProjectionMatrix();
		//TWEEN.update();
		
		if ($('#btn-toggleControls.button-wrap').hasClass('button-active')) {
				firstPersonControls.update( clock.getDelta() );
			}
		
////		if (!$('#btn-toggleControls.button-wrap').hasClass('button-active')) {
////				defaultControls.update();
////			}
		
		render();

	};


	// Render Function ------------------------- //
	function render() {
		
			var delta = clock.getDelta();
			renderer.render( scene, camera );
			camera.updateProjectionMatrix();
	};

	// Raycaster Mouse / Touch Events

	function onMouseUp( event ) {

		event.preventDefault();

		var x = event.offsetX == undefined ? event.layerX : event.offsetX;
		var y = event.offsetY == undefined ? event.layerY : event.offsetY;
		
		var vector = new THREE.Vector3();
		vector.set( ( x / renderer.domElement.width ) * 1.6 - 1, - ( y / renderer.domElement.height ) * 1.6 + 1, 0.9 );
		vector.unproject( camera );
		
		raycaster.ray.set( camera.position, vector.sub( camera.position ).normalize() );

					// Manipulate Objects

					var intersects = raycaster.intersectObjects( items );
					if ( intersects.length > 0 ) {
					
					if ( INTERSECTED != intersects[ 0 ].object ) {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

							INTERSECTED = intersects[ 0 ].object;
							var focusDiv = INTERSECTED.userData.id ;
							console.log( focusDiv );
							INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
							INTERSECTED.material.emissive.setHex( 0xff00ff );
					
							}

							} else {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

						INTERSECTED = null;

					}

					renderer.render( scene, camera );
					
				};
			




