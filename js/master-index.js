// Busy Levee Interactive Map ---------------------------------- //

	var camera, controls, scene, renderer, projector, distance, geometry, projector, material, clock, firstPersonControls, orbitControls;

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

	var orbitCameraHolder = new THREE.Object3D();
	orbitCameraHolder.name = "orbitCameraHolder";
	orbitCameraHolder.add(camera);

	self.scene = null;
	self.orbitBody = new THREE.Object3D();
	self.orbitBody.add( orbitCameraHolder );
	self.enabled = true;

	}

	initThree();
	animate();


	// three.js ----------------------------------------------------------------- //
	function initThree() {

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
		//document.getElementById( 'leveeMap' ).appendChild( renderer.domElement );
		//container.appendChild( renderer.domElement );
		
		leveeMap.addEventListener( 'mouseup', onMouseUp, false );	
		leveeMap.addEventListener( 'change', render );
		
		//document.getElementById("toggleControls").addEventListener( 'click', toggleControls, false );	

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
			floorLight01.position.copy(new THREE.Vector3( 1920, 3072, -4096 ));
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
		spotLight = new THREE.SpotLight( 0xFFC55C );
			 spotLight.position.set( 0, 4096, 0 );

			 spotLight.castShadow = true;

			 spotLight.shadow.camera.near = 512;
			 spotLight.shadow.camera.far = 5120; //camera.far;
			 spotLight.shadow.camera.fov = 60;

			 spotLight.shadowMapBias = 0.0001;
			 spotLight.shadowMapDarkness = 0.75;
			 spotLight.shadow.mapSize.width = 4096;
			 spotLight.shadow.mapSize.height = 4096; 
			 

			 scene.add( spotLight );

		// Fog
		scene.fog = new THREE.Fog( 0x000000, 512, 6144 );
		
		setupControls();
        setControlsOrbit();
		loadMeshElements();
		

	};

	function loadMeshElements() {
	
	// [ BEGIN ] ----------- ALL Tex ---------- //
	// ---------- [ BEGIN ] Tex Elements ---------------- //
		// Brick / Stone Textures -------------- //
			// Flat Grey ------------- //
			var flatGreyMat = new THREE.MeshLambertMaterial( { color: 0x464646 } ); // #464646


			// Old Brick 01 Wide ----------- //
			var oldBrickTex01w = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01w.wrapS = oldBrickTex01w.wrapT = THREE.RepeatWrapping;
			oldBrickTex01w.repeat.x = 100 / 24;
			oldBrickTex01w.repeat.y = 100 / 32;

			var oldBrickMat01w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01w,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Wide 02----------- //
			var oldBrickTex01w02 = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01w02.wrapS = oldBrickTex01w02.wrapT = THREE.RepeatWrapping;
			oldBrickTex01w02.repeat.x = 100 / 8;
			oldBrickTex01w02.repeat.y = 100 / 32;

			var oldBrickMat01w02 = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01w02,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Tall ----------- //
			var oldBrickTex01t = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01t.wrapS = oldBrickTex01t.wrapT = THREE.RepeatWrapping;
			oldBrickTex01t.repeat.x = 100 / 32;
			oldBrickTex01t.repeat.y = 100 / 32;

			var oldBrickMat01t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01t,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Roof ----------- //
			var oldBrickTex01r = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01r.wrapS = oldBrickTex01r.wrapT = THREE.RepeatWrapping;
			oldBrickTex01r.repeat.x = 100 / 32;
			oldBrickTex01r.repeat.y = 64 / 100;

			var oldBrickMat01r = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01r,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Roof 2 ----------- //
			var oldBrickTex01r2 = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01r2.wrapS = oldBrickTex01r2.wrapT = THREE.RepeatWrapping;
			oldBrickTex01r2.repeat.x = 100 / 32;
			oldBrickTex01r2.repeat.y = 32 / 100;

			var oldBrickMat01r2 = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01r2,
									side: THREE.DoubleSide
									} );

			// Old Brick 02 Wide ----------- //
			var oldBrickTex02w = new THREE.TextureLoader().load( "../../tex/smooth_brick-02.jpg" );
			oldBrickTex02w.wrapS = oldBrickTex02w.wrapT = THREE.RepeatWrapping;
			oldBrickTex02w.repeat.x = 100 / 24;
			oldBrickTex02w.repeat.y = 100 / 64;

			var oldBrickMat02w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex02w,
									side: THREE.DoubleSide
									} );

			// Old Brick 02 Tall ----------- //
			var oldBrickTex02t = new THREE.TextureLoader().load( "../../tex/smooth_brick-02.jpg" );
			oldBrickTex02t.wrapS = oldBrickTex02t.wrapT = THREE.RepeatWrapping;
			oldBrickTex02t.repeat.x = 100 / 32;
			oldBrickTex02t.repeat.y = 100 / 24;

			var oldBrickMat02t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex02t,
									side: THREE.DoubleSide
									} );

			// Old Brick 03 Wide ----------- //
			var oldBrickTex03w = new THREE.TextureLoader().load( "../../tex/smooth_brick-03.jpg" );
			oldBrickTex03w.wrapS = oldBrickTex03w.wrapT = THREE.RepeatWrapping;
			oldBrickTex03w.repeat.x = 100 / 24;
			oldBrickTex03w.repeat.y = 100 / 32;

			var oldBrickMat03w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex03w,
									side: THREE.DoubleSide
									} );

			// Old Brick 03 Tall ----------- //
			var oldBrickTex03t = new THREE.TextureLoader().load( "../../tex/smooth_brick-03.jpg" );
			oldBrickTex03t.wrapS = oldBrickTex03t.wrapT = THREE.RepeatWrapping;
			oldBrickTex03t.repeat.x = 100 / 64;
			oldBrickTex03t.repeat.y = 100 / 32;

			var oldBrickMat03t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex03t,
									side: THREE.DoubleSide
									} );

			// Stone Coursed Rough 01 Wide ----------- //
			var coursedStoneTex01w = new THREE.TextureLoader().load( "../../tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01w.wrapS = coursedStoneTex01w.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01w.repeat.x = 100 / 64;
			coursedStoneTex01w.repeat.y = 100 / 52;

			var sailLoftMat01w = new THREE.MeshLambertMaterial( {
									map: coursedStoneTex01w,
									side: THREE.DoubleSide
									} );

			// Stone Coursed Rough 01 Tall ----------- //
			var coursedStoneTex01t = new THREE.TextureLoader().load( "../../tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01t.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01t.repeat.x = 100 / 48;
			coursedStoneTex01t.repeat.y = 100 / 64;

			var sailLoftMat01t = new THREE.MeshLambertMaterial( {
									map: coursedStoneTex01t,
									side: THREE.DoubleSide
									} );

			// Concrete Beige Rooftop 01 ----------- //
			var concreteBeigeTex01 = new THREE.TextureLoader().load( "../../tex/concrete_beige_tex.jpg" );
			concreteBeigeTex01.wrapS = concreteBeigeTex01.wrapT = THREE.MirrorRepeatWrapping;
			concreteBeigeTex01.repeat.x = 10 / 2;
			concreteBeigeTex01.repeat.y = 1 / 1;

			var concreteBeigeMat01 = new THREE.MeshLambertMaterial( {
									map: concreteBeigeTex01,
									side: THREE.DoubleSide
									} );

		// Stone Coursed Rough 01 Roof ----------- //
			var coursedStoneTex01r = new THREE.TextureLoader().load( "../../tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01r.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01r.repeat.x = 100 / 32;
			coursedStoneTex01r.repeat.y = 44 / 100;

			var sailLoftMat01r = new THREE.MeshLambertMaterial( {
									map: coursedStoneTex01r,
									side: THREE.DoubleSide
									} );

		// ------- End Brick/Stone Textures ----------------- //

		// ------- Window Textures ------ //
		//City Market Yellow V1 Windows ---------------------------------------------------------------------------------------------- //
		// --- City Market Window Yellow V1 On Tex --- //
		var windowYellowV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-On-Tex.png" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-On-Tex.png" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- City Market Window Yellow V1 Off Tex --- //
		var windowYellowV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Off-Tex.png" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Off-Tex.png" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- City Market Yellow Window V2 On Tex --- //
		var windowYellowV2OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Yellow-Shutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Yellow-Shutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- City Market Yellow Window V2 Off Tex --- //
		var windowYellowV2OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Yellow-Shutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Yellow-Shutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Yellow Door V1 Tex --- //
		var doorV1YellowMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Yellow.jpg" ), side: THREE.DoubleSide } ), // Front side

			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Yellow.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Grey 3x6 Window Off Tex --- //
		var window3x6GreyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Grey 3x6 Window On Tex --- //
		var window3x6GreyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x6-Grey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window On Tex --- //
		var window3x4LiteGreyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window Off Tex --- //
		var window3x4LiteGreyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Red Window On Tex --- //
		var window3x4RedOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window Off Tex --- //
		var window3x4RedOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Green Door v1 On Tex --- //
		var doorGreenV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Green Door v1 Off Tex --- //
		var doorGreenV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 02 Green Window On Tex --- //
		var window3x4GreenOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 02 Green Window Off Tex --- //
		var window3x4GreenOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window On Tex --- //
		var window3x4RustyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
		var window3x4RustyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Block 01 04 Beige Door On Tex --- //
		var doorV1BeigeOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Beige Door Off Tex --- //
		var doorV1BeigeOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- 3x4 Block 01 04 Beige Window On Tex --- //
		var window3x4BeigeOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Beige Window Off Tex --- //
		var window3x4BeigeOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Block 01 04 Rusty Door On Tex --- //
		var doorV1RustyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
		var doorV1RustyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Yellow Door V2 On Tex --- //
		var doorV2YellowOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v2-Yellow-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v2-Yellow-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Yellow Door V2 Off Tex --- //
		var doorV2YellowOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v2-Yellow-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v2-Yellow-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- 3x4 Red Window Shutters Tex --- //
		var window3x4RedShuttersOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		var window3x4RedShuttersOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Red Door v1 On Tex --- //
		var doorRedV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side

			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Red Door v1 Off Tex --- //
		var doorRedV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Beige 2x4 Window V1 On Tex --- //
		var windowBeige2x4V1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Beige 2x4 Window V1 Off Tex --- //
		var windowBeige2x4V1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//
	
		var cityScapeMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-side.png" ), side: THREE.DoubleSide, transparent: true } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-side.png" ), side: THREE.DoubleSide, transparent: true } ) // Back side
		];
	
	// ---------- [ END ] Tex Elements ---------------- //
		
		var allBlocksGroup = new THREE.Group();
	
	// [ BEGIN ] ---------- Ground Elements Group ---------- //
		var groundElementsGroup = new THREE.Group();
		
	// Boundaries----------------------------------------------------------------------------------- //
		// Left Wall ----------------------------------//
			var leftWallMesh = new THREE.Mesh (
					new THREE.BoxGeometry( 5120, 300, 1 ),
					new THREE.MeshPhongMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.0,
					color: 0xffffff,
					side: THREE.BackSide
					} )
				);

			//allBlocksGroup.add( leftMesh );
			//groundElementsGroup.add( leftWallMesh );
		
			leftWallMesh.position.set( 0, 200 , -2048 );
			//
		
		// Right Wall ----------------------------------//
			var rightWallMesh = new THREE.Mesh (
					new THREE.BoxGeometry( 5120, 300, 1 ),
					new THREE.MeshPhongMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.0,
					color: 0xffffff,
					side: THREE.BackSide
					} )
				);

			//scene.add( rightWallMesh );
			//groundElementsGroup.add( rightWallMesh );
		
			rightWallMesh.position.set( 0, 200 , 2048 );
			//
		
		// Front Wall ----------------------------------//
			var frontWallMesh = new THREE.Mesh (
					new THREE.BoxGeometry( 1, 300, 4352 ),
					new THREE.MeshPhongMaterial( {
					wireframe: false,
					transparent: true,
					opacity: 0.0,
					color: 0xffffff,
					side: THREE.BackSide
					} )
				);

			//scene.add( leftWallMesh );
			groundElementsGroup.add( frontWallMesh );
		
			frontWallMesh.position.set( -2304, 200 , 0 );
			//
		
		// Rear Wall ----------------------------------//
//			var rearWallMesh = new THREE.Mesh (
//					new THREE.BoxGeometry( 2048, 200, 8192 ),
//					new THREE.MeshPhongMaterial( {
//					wireframe: false,
//					transparent: true,
//					opacity: 1,
//					color: 0xffffff,
//					side: THREE.DoubleSide
//					} )
//				);
	
			var cityScapeMat = new THREE.MeshFaceMaterial( cityScapeMats );
	
			var cityScapeGeo = new THREE.BoxGeometry( 1, 320, 8192 );
		
			var cityScapeMesh = new THREE.Mesh( cityScapeGeo, cityScapeMat );

			cityScapeMesh.position.set( 1280, 250 , 0 );
			cityScapeMesh.rotation.set( 0, 0, 0 );
			cityScapeMesh.side = THREE.DoubleSide;
			cityScapeMesh.receiveShadow = true;
			cityScapeMesh.castShadow = true;

			//scene.add( rearWallMesh );
			groundElementsGroup.add( cityScapeMesh );
			//
		
		// Levee Ground Elevation JSON ---------------------------------------------------------------- //
			JSONLoader.load( "../../models/json/busy-levee-ground-elevation-V2.json", function( elevationGeometry ) {
				elevationMesh = new THREE.Mesh( elevationGeometry, new THREE.MeshLambertMaterial( {
					color: 0x0f0c09
					//map: textureLoader.load( "../../models/json/tex/tex-levee-ground-elevation-02.jpg" ),
					//normalMap: textureLoader.load( "../../models/json/tex/tex-levee-ground-elevation-normal-02.jpg" )
					})
				);

				elevationMesh.position.y = -500;
				elevationMesh.receiveShadow = true;
				elevationMesh.material.side = THREE.DoubleSide;

				//scene.add( elevationMesh );
				groundElementsGroup.add( elevationMesh );

				//items.push( elevationMesh );

			} );
			//
	
		// Levee foundations OBJ ---------------------------------------------------------------- //
			var blockFoundationsGroup = new THREE.Group();
//			// City Market Foundation JSON ---------------------------------------------------------------- //
//				JSONLoader.load( "../../models/json/city-market-foundation.json", function( cityMarketFoundationGeometry ) {
//					cityMarketFoundationMesh = new THREE.Mesh( cityMarketFoundationGeometry, new THREE.MeshLambertMaterial( {
//						color: 0x707070,
//						map: textureLoader.load( "../../models/json/tex/FoundationsSurface_Color.jpg" ),
//						//normalMap: textureLoader.load( "../../models/json/tex/tex-levee-ground-elevation-normal-02.jpg" )
//						})
//					);
//
//					cityMarketFoundationMesh.material.side = THREE.DoubleSide;
//					cityMarketFoundationMesh.receiveShadow = true;
//					cityMarketFoundationMesh.castShadow = true;
//					cityMarketFoundationMesh.scale.set( 32, 32, 32 );
//					cityMarketFoundationMesh.rotation.set( 0, 0, -7 * Math.PI / 180 );
//					cityMarketFoundationMesh.position.set( 770, 40, -1505 );
//
//					//scene.add( elevationMesh );
//					groundElementsGroup.add( cityMarketFoundationMesh );
//
//					//items.push( elevationMesh );
//
//				} );
				//
		
//			// City Market Foundation ---- //
			var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'city-market-foundation.mtl', function ( cityMarketFoundationMat ) {

				cityMarketFoundationMat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( cityMarketFoundationMat );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load( 'city-market-foundation.obj', function ( cityMarketFoundationOBJ ) {
					
					cityMarketFoundationNormalMap = THREE.ImageUtils.loadTexture('../../models/obj/FoundationsSurface_Normal.jpg', undefined, function () {
						
						cityMarketFoundationMat.needsUpdate = true; // update material
					});
					
					cityMarketFoundationBumpMap = THREE.ImageUtils.loadTexture('../../models/obj/FoundationsSurface_Bump.jpg', undefined, function () {
					
						cityMarketFoundationMat.needsUpdate = true; // update material
					});
					
					cityMarketFoundationOBJ.traverse( function ( child ) {

						if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial ) {

							child.material.normalMap = cityMarketFoundationNormalMap;
							child.material.bumpMap = cityMarketFoundationBumpMap;
						}
						
					});
					
					//scene.add( cityMarketFoundationOBJ );
					blockFoundationsGroup.add( cityMarketFoundationOBJ );
					
					cityMarketFoundationOBJ.receiveShadow = true;
					cityMarketFoundationOBJ.castShadow = true;
					cityMarketFoundationOBJ.scale.set( 32, 32, 32 );
					cityMarketFoundationOBJ.rotation.set( 0, 0, -7 * Math.PI / 180 );
					cityMarketFoundationOBJ.position.set( 770, 40, -1505 );

				});

			});
		
			// Blocks Foundations ----//
			// Blocks 01 / 05 ---//
			var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'blocks01-foundation.mtl', function ( blockFoundationsMat ) {

				blockFoundationsMat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( blockFoundationsMat );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load( 'blocks01-foundation.obj', function ( blockFoundationsOBJ ) {
					
					blockFoundationsNormalMap = THREE.ImageUtils.loadTexture('../../models/obj/BlockFoundations_Normal.jpg', undefined, function () {
						blockFoundationsMat.normalMap = blockFoundationsNormalMap;
						blockFoundationsMat.needsUpdate = true; // update material
					});
					
				/*	blockFoundationsBumpMap = THREE.ImageUtils.loadTexture('../../models/obj/BlockFoundations_Bump.jpg', undefined, function () {
						blockFoundationsMat.bumpMap = blockFoundationsBumpMap;
						blockFoundationsMat.needsUpdate = true; // update material
					});
					*/
					blockFoundationsOBJ.traverse( function ( child ) {

						if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial ) {

							child.material.normalMap = blockFoundationsNormalMap;
							//child.material.bumpMap = blockFoundationsBumpMap;
						}
						
					});

					//scene.add( blockFoundationsOBJ );
					blockFoundationsGroup.add( blockFoundationsOBJ );
					
					blockFoundationsOBJ.scale.set( 1, 1, 1.05 );
					blockFoundationsOBJ.rotation.set( 0, 0, 0);
					blockFoundationsOBJ.position.set( 850, 16, -775 );
					
			// Blocks 02 / 06 ---//
				blockFoundationsClone01 = blockFoundationsOBJ.clone();
					
				//scene.add( blockFoundationsClone01 );
				blockFoundationsGroup.add( blockFoundationsClone01 );
					
				blockFoundationsClone01.scale.set( 1, 1, 1.05 );
				blockFoundationsClone01.rotation.set( 0, 0, 0);
				blockFoundationsClone01.position.set( 850, 16, 20 );
					
			// Blocks 03 / 07 ---//
				blockFoundationsClone02 = blockFoundationsOBJ.clone();
					
				//scene.add( blockFoundationsClone02 );
				blockFoundationsGroup.add( blockFoundationsClone02 );
					
				blockFoundationsClone02.scale.set( 1, 1, 1.05 );
				blockFoundationsClone02.rotation.set( 0, 0, 0);
				blockFoundationsClone02.position.set( 850, 16, 800 );
					
			// Blocks 04 / 08 ---//
				blockFoundationsClone03 = blockFoundationsOBJ.clone();
				
				//scene.add( blockFoundationsClone03 );
				blockFoundationsGroup.add( blockFoundationsClone03 );
					
				blockFoundationsClone03.scale.set( 1, 1, 1.05 );
				blockFoundationsClone03.rotation.set( 0, 0, 0);
				blockFoundationsClone03.position.set( 850, 16, 1600 );
				
				});
				
				blockFoundationsGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
				blockFoundationsGroup.position.set( 0, 0, 0 );
				
				blockFoundationsGroup.position.set( -256, 0, 0  );
				scene.add( blockFoundationsGroup );

			});
			//
		
			groundElementsGroup.add( blockFoundationsGroup );
		
		scene.add( groundElementsGroup );
		
		groundElementsGroup.position.set( 0, 0, 0  );
		groundElementsGroup.rotation.set( 0, 90 * Math.PI / 180, 0  );
		//
		
	// [ END ] ---------- Ground Elements Group ---------- //
	
	// Levee Blocks JSON ------------------------------------------------------------------ //
		// City Market Group ------- //
		var cityMarketGroup = new THREE.Group();
		
		// [ BEGIN ]--------- City Market ---------------------- //

			// City Market Roof 01 ------------- //
				var roofShape01 = new THREE.Shape();
				roofShape01.moveTo(-40, -30);
				roofShape01.lineTo(0, -5);
				roofShape01.lineTo(40, -30);
				roofShape01.lineTo(-40, -30);

				// Extrude Triangle Shape ------------ //
				var extrudedRoof01Geometry = new THREE.ExtrudeGeometry(roofShape01, {amount: 350, bevelEnabled: false});

				// Roof 01 Mesh
				// Flat Grey ------------- //
				var flatGreyMat = new THREE.MeshLambertMaterial( { color: 0x464646 } ); // #464646
		
				var CityMarketRoof01Mesh = new THREE.Mesh( extrudedRoof01Geometry, flatGreyMat );
		
				CityMarketRoof01Mesh.position.set( 640, 165 , -1685 );
		
				//scene.add( CityMarketRoof01Mesh );
				cityMarketGroup.add( CityMarketRoof01Mesh );
		
				// City Market Rooftop 01 ------------- //
				var roofTopShape01 = new THREE.Shape();
				roofTopShape01.moveTo(-40, -30);
				roofTopShape01.lineTo(0, -5);
				roofTopShape01.lineTo(40, -30);
				roofTopShape01.lineTo(40, -32);
				roofTopShape01.lineTo(0, -7);
				roofTopShape01.lineTo(-40, -32);
				roofTopShape01.lineTo(-40, -30);

				// Extrude Rooftop Triangle Shape ------------ //
	
				var extrudedRoofTop01Geometry = new THREE.ExtrudeGeometry(roofTopShape01, {amount: 355, bevelEnabled: false});

				// Rooftop 01 Mesh
				var CityMarketRoofTop01Mesh = new THREE.Mesh( extrudedRoofTop01Geometry, concreteBeigeMat01 );
		
				CityMarketRoofTop01Mesh.position.set( 640, 167 , -1687.5 );
				//scene.add( CityMarketRoofTop01Mesh );
				cityMarketGroup.add( CityMarketRoofTop01Mesh );
		
			// City Market Roof 02 ------------- //
				var roofShape02 = new THREE.Shape();
				roofShape02.moveTo(-40, -30);
				roofShape02.lineTo(0, -5);
				roofShape02.lineTo(40, -30);
				roofShape02.lineTo(-40, -30);

				// Extrude Triangle Shape ------------ //
				var extrudedRoof02Geometry = new THREE.ExtrudeGeometry(roofShape02, {amount: 100, bevelEnabled: false});

				// Roof 02 Mesh
				var CityMarketRoof02Mesh = new THREE.Mesh( extrudedRoof02Geometry, oldBrickMat01r );
		
				CityMarketRoof02Mesh.position.set( 590, 215 , -1508 );
				CityMarketRoof02Mesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
				//scene.add( CityMarketRoof02Mesh );
				cityMarketGroup.add( CityMarketRoof02Mesh );
		
				// City Market Rooftop 02 ------------- //
				var roofTopShape02 = new THREE.Shape();
				roofTopShape02.moveTo(-40, -30);
				roofTopShape02.lineTo(0, -5);
				roofTopShape02.lineTo(40, -30);
				roofTopShape02.lineTo(40, -32);
				roofTopShape02.lineTo(0, -7);
				roofTopShape02.lineTo(-40, -32);
				roofTopShape02.lineTo(-40, -30);

				// Extrude Rooftop Triangle Shape ------------ //
				var extrudedRoofTop02Geometry = new THREE.ExtrudeGeometry(roofTopShape02, {amount: 105, bevelEnabled: false});

				// Rooftop 02 Mesh
				var CityMarketRoofTop02Mesh = new THREE.Mesh( extrudedRoofTop02Geometry, concreteBeigeMat01 );
		
				CityMarketRoofTop02Mesh.position.set( 588, 217 , -1508.5 );
				CityMarketRoofTop02Mesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
				//scene.add( CityMarketRoofTop02Mesh );
				cityMarketGroup.add( CityMarketRoofTop02Mesh );
		
			// ------------ Map Custom Roof Shape UVs------------- //
		
			// City Market Roof 01 //
			function assignRoof01UV() {
				
			extrudedRoof01Geometry.computeBoundingBox();

			var max = extrudedRoof01Geometry.boundingBox.max,
				min = extrudedRoof01Geometry.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = extrudedRoof01Geometry.faces;

			extrudedRoof01Geometry.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = extrudedRoof01Geometry.vertices[faces[i].a], 
					v2 = extrudedRoof01Geometry.vertices[faces[i].b], 
					v3 = extrudedRoof01Geometry.vertices[faces[i].c];

				extrudedRoof01Geometry.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			extrudedRoof01Geometry.uvsNeedUpdate = true;
			
			}
		
			assignRoof01UV();
		
			// City Market Roof 02 //
			function assignRoof02UV() {
				
			extrudedRoof02Geometry.computeBoundingBox();

			var max = extrudedRoof02Geometry.boundingBox.max,
				min = extrudedRoof02Geometry.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = extrudedRoof02Geometry.faces;

			extrudedRoof02Geometry.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = extrudedRoof02Geometry.vertices[faces[i].a], 
					v2 = extrudedRoof02Geometry.vertices[faces[i].b], 
					v3 = extrudedRoof02Geometry.vertices[faces[i].c];

				extrudedRoof02Geometry.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			extrudedRoof02Geometry.uvsNeedUpdate = true;
			
			}
		
			assignRoof02UV();
		
			function assignRoofTop01UV() {
				
			extrudedRoofTop01Geometry.computeBoundingBox();

			var max = extrudedRoofTop01Geometry.boundingBox.max,
				min = extrudedRoofTop01Geometry.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = extrudedRoofTop01Geometry.faces;

			extrudedRoofTop01Geometry.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = extrudedRoofTop01Geometry.vertices[faces[i].a], 
					v2 = extrudedRoofTop01Geometry.vertices[faces[i].b], 
					v3 = extrudedRoofTop01Geometry.vertices[faces[i].c];

				extrudedRoofTop01Geometry.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			extrudedRoofTop01Geometry.uvsNeedUpdate = true;
			
			}
		
			//assignRoofTop01UV();
		
			// City Market Buildings ---------------------------- //
			var bottomFloorGeo = new THREE.BoxGeometry( 74, 70, 150, 1, 1, 6 );
			var bottomFloorLeftMesh = new THREE.Mesh( bottomFloorGeo, oldBrickMat01w );

			bottomFloorLeftMesh.position.set( 640, 100 , -1610 );
			bottomFloorLeftMesh.receiveShadow = true;
			bottomFloorLeftMesh.castShadow = true;

			//scene.add( bottomFloorLeftMesh );
			cityMarketGroup.add( bottomFloorLeftMesh );
		//

			var bottomFloorRightMesh = new THREE.Mesh( bottomFloorGeo, oldBrickMat01w );

			bottomFloorRightMesh.position.set( 640, 100 , -1410 );
			bottomFloorRightMesh.receiveShadow = true;
			bottomFloorRightMesh.castShadow = true;

			//scene.add( bottomFloorRightMesh );
			cityMarketGroup.add( bottomFloorRightMesh );
		//
		
			var bottomFloorTrimGeo = new THREE.BoxGeometry( 78, 1, 153 );
			var bottomFloorLeftTrimMesh = new THREE.Mesh( bottomFloorTrimGeo, concreteBeigeMat01 );

			bottomFloorLeftTrimMesh.position.set( 640, 115 , -1610 );
			bottomFloorLeftTrimMesh.receiveShadow = true;
			bottomFloorLeftTrimMesh.castShadow = true;

			//scene.add( bottomFloorLeftTrimMesh );
			cityMarketGroup.add( bottomFloorLeftTrimMesh );
		//
		
			var bottomFloorRightTrimMesh = new THREE.Mesh( bottomFloorTrimGeo, concreteBeigeMat01 );

			bottomFloorRightTrimMesh.position.set( 640, 115 , -1410 );
			bottomFloorRightTrimMesh.receiveShadow = true;
			bottomFloorRightTrimMesh.castShadow = true;

			//scene.add( bottomFloorRightTrimMesh );
			cityMarketGroup.add( bottomFloorRightTrimMesh );
		//
		
			var topFloorTrimGeo = new THREE.BoxGeometry( 101, 1, 77 );
			var topFloorTrimMesh = new THREE.Mesh( topFloorTrimGeo, concreteBeigeMat01 );

			topFloorTrimMesh.position.set( 639, 115 , -1508 );
			topFloorTrimMesh.receiveShadow = true;
			topFloorTrimMesh.castShadow = true;

			//scene.add( topFloorTrimMesh );
			cityMarketGroup.add( topFloorTrimMesh );
		//

			var topFloorGeo = new THREE.BoxGeometry( 100, 150, 75, 1, 3, 1 );
			var topFloorMesh = new THREE.Mesh( topFloorGeo, oldBrickMat01t );

			topFloorMesh.position.set( 640, 110 , -1508 );
			topFloorMesh.receiveShadow = true;
			topFloorMesh.castShadow = true;
		
			//scene.add( topFloorMesh );
			cityMarketGroup.add( topFloorMesh );
		//
		
		// City Market Left Side Windows V1 ---------------------- //
			var windowYellowV1Geo = new THREE.BoxGeometry( 8, 12, 1 );
		
		// Yellow Window V1 Off ---- //
			var windowYellowV1OffMat = new THREE.MeshFaceMaterial( windowYellowV1OffMats );
		
			var windowYellowV1OffMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OffMat );

			windowYellowV1OffMesh.position.set( 603, 126 , -1634 );
			windowYellowV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;

			//scene.add( windowYellowV1OffMesh );
			cityMarketGroup.add( windowYellowV1OffMesh );
			//
			
		// Yellow Window V1 On ---- //
			var windowYellowV1OnMat = new THREE.MeshFaceMaterial( windowYellowV1OnMats );
		
			var windowYellowV1OnMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OnMat );

			windowYellowV1OnMesh.position.set( 665, 126 , -1685 );
			windowYellowV1OnMesh.receiveShadow = true;
			windowYellowV1OnMesh.castShadow = true;

			//scene.add( windowYellowV1OnMesh );
			cityMarketGroup.add( windowYellowV1OnMesh );
			//
		
		// City Market Front Left Side Windows ---------------------- //
			var windowYellowV1Geo = new THREE.BoxGeometry( 8, 12, 1 );
		
			var windowYellowV2Geo = new THREE.BoxGeometry( 8, 6, 1 );
		
		// Yellow Window V1 Off ---- //
			var windowYellowV1OffMat = new THREE.MeshFaceMaterial( windowYellowV1OffMats );
		
			var windowYellowV1OffMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OffMat );

			windowYellowV1OffMesh.position.set( 603, 126 , -1634 );
			windowYellowV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;

			//scene.add( windowYellowV1OffMesh );
			cityMarketGroup.add( windowYellowV1OnMesh );
			//
			
		// Yellow Window V1 On ---- //
			var windowYellowV1OnMat = new THREE.MeshFaceMaterial( windowYellowV1OnMats );
		
			var windowYellowV1OnMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OnMat );

			windowYellowV1OnMesh.position.set( 665, 126 , -1685 );
			windowYellowV1OnMesh.receiveShadow = true;
			windowYellowV1OnMesh.castShadow = true;

			//scene.add( windowYellowV1OnMesh );
			cityMarketGroup.add( windowYellowV1OnMesh );
			//
		
			var windowYellowV1Clone00 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone00.position.set( 640, 126 , -1685 );
			//scene.add( windowYellowV1Clone00 );
			cityMarketGroup.add( windowYellowV1Clone00 );
			//
		
			var windowYellowV1Clone01 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone01.position.set( 615, 126 , -1685 );
			//scene.add( windowYellowV1Clone01 );
			cityMarketGroup.add( windowYellowV1Clone01 );
			//
		
		// Yellow Window V2 Off ---- //
			var windowYellowV2OffMat = new THREE.MeshFaceMaterial( windowYellowV2OffMats );
		
			var windowYellowV2OffMesh = new THREE.Mesh( windowYellowV2Geo, windowYellowV2OffMat );

			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;
			//
			
		// Yellow Window V2 On ---- //
			var windowYellowV2OnMat = new THREE.MeshFaceMaterial( windowYellowV2OnMats );
		
			var windowYellowV2OnMesh = new THREE.Mesh( windowYellowV2Geo, windowYellowV2OnMat );

			windowYellowV2OnMesh.receiveShadow = true;
			windowYellowV2OnMesh.castShadow = true;
			//
		
		// Left Side Bottom Floor Windows ---- //
			var windowYellowV2OffClone01 = windowYellowV2OffMesh.clone();
			windowYellowV2OffClone01.position.set( 665, 109 , -1685 );
		
			//scene.add( windowYellowV2OffClone01 );
			cityMarketGroup.add( windowYellowV2OffClone01 );
			//
		
			var windowYellowV2OffClone02 = windowYellowV2OffMesh.clone();
			windowYellowV2OffClone02.position.set( 640, 109 , -1685 );
		
			//scene.add( windowYellowV2OffClone02 );
			cityMarketGroup.add( windowYellowV2OffClone02 );
			//
		
		// City Market Right Side Windows ---------------------- //
			var windowYellowV1Clone02 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone02.position.set( 665, 126 , -1335 );
			//scene.add( windowYellowV1Clone02 );
			cityMarketGroup.add( windowYellowV1Clone02 );
			//
		
			var windowYellowV1Clone03 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone03.position.set( 640, 126 , -1335 );
			//scene.add( windowYellowV1Clone03 );
			cityMarketGroup.add( windowYellowV1Clone03 );
			//
		
			var windowYellowV1Clone04 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone04.position.set( 615, 126 , -1335 );
			//scene.add( windowYellowV1Clone04 );
			cityMarketGroup.add( windowYellowV1Clone04 );
			//
			
		// Right Side Bottom Floor Windows ---- //
			var windowYellowV2OffClone03 = windowYellowV2OffMesh.clone();
			windowYellowV2OffClone03.position.set( 665, 109 , -1335 );
		
			//scene.add( windowYellowV2OffClone03 );
			cityMarketGroup.add( windowYellowV2OffClone03 );
			//
		
			var windowYellowV2OffClone04 = windowYellowV2OffMesh.clone();
			windowYellowV2OffClone04.position.set( 640, 109 , -1335 );
		
			//scene.add( windowYellowV2OffClone04 );
			cityMarketGroup.add( windowYellowV2OffClone04 );
			//
		
		// City Market Front Top Floor Windows ---------------------- //
		//Left Section --- //
			var windowYellowV1Clone05 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone05.position.set( 603, 126 , -1668 );
			windowYellowV1Clone05.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone05 );
			cityMarketGroup.add( windowYellowV1Clone05 );
			//
		
			var windowYellowV1Clone06 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone06.position.set( 603, 126 , -1650 );
			windowYellowV1Clone06.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone06 );
			cityMarketGroup.add( windowYellowV1Clone06 );
			//
		
			var windowYellowV1Clone08 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone08.position.set( 603, 126 , -1617 );
			windowYellowV1Clone08.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone08 );
			cityMarketGroup.add( windowYellowV1Clone08 );
			//
		
			var windowYellowV1Clone09 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone09.position.set( 603, 126 , -1600 );
			windowYellowV1Clone09.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone09 );
			cityMarketGroup.add( windowYellowV1Clone09 );
			//
		
			var windowYellowV1Clone10 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone10.position.set( 603, 126 , -1583 );
			windowYellowV1Clone10.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone10 );
			cityMarketGroup.add( windowYellowV1Clone10 );
			//
		
			var windowYellowV1Clone11 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone11.position.set( 603, 126 , -1565 );
			windowYellowV1Clone11.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone11 );
			cityMarketGroup.add( windowYellowV1Clone11 );
			//
		
		// City Market Front Top Floor Windows --- //
		// Right Section --- //
			var windowYellowV1Clone14 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone14.position.set( 603, 126 , -1453 );
			windowYellowV1Clone14.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone14 );
			cityMarketGroup.add( windowYellowV1Clone14 );
			//
		
			var windowYellowV1Clone15 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone15.position.set( 603, 126 , -1436 );
			windowYellowV1Clone15.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone15 );
			cityMarketGroup.add( windowYellowV1Clone15 );
			//
		
			var windowYellowV1Clone16 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone16.position.set( 603, 126 , -1419 );
			windowYellowV1Clone16.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone16 );
			cityMarketGroup.add( windowYellowV1Clone16 );
			//
		
			var windowYellowV1Clone17 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone17.position.set( 603, 126 , -1402 );
			windowYellowV1Clone17.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone17 );
			cityMarketGroup.add( windowYellowV1Clone17 );
			//
		
			var windowYellowV1Clone18 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone18.position.set( 603, 126 , -1385 );
			windowYellowV1Clone18.rotation.set( 0, 90* Math.PI / 180, 0 );

			//scene.add( windowYellowV1Clone18 );
			cityMarketGroup.add( windowYellowV1Clone18 );
			//
		
			var windowYellowV1Clone19 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone19.position.set( 603, 126 , -1368 );
			windowYellowV1Clone19.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone19 );
			cityMarketGroup.add( windowYellowV1Clone19 );
			//
		
			var windowYellowV1Clone20 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone20.position.set( 603, 126 , -1351 );
			windowYellowV1Clone20.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone20 );
			cityMarketGroup.add( windowYellowV1Clone20 );
			//
		
		// City Market Front Bottom Floor Windows ---------------------- //
		//Left Section --- //
			var windowYellowV2Clone05 = windowYellowV2OnMesh.clone();
			windowYellowV2Clone05.position.set( 603, 108 , -1668 );
			windowYellowV2Clone05.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone05.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone05 );
			cityMarketGroup.add( windowYellowV2Clone05 );
			//
		
			var windowYellowV2Clone06 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone06.position.set( 603, 108 , -1634 );
			windowYellowV2Clone06.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone06.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone06 );
			cityMarketGroup.add( windowYellowV2Clone06 );
			//
		
			var windowYellowV2Clone07 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone07.position.set( 603, 108 , -1600 );
			windowYellowV2Clone07.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone07.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone07 );
			cityMarketGroup.add( windowYellowV2Clone07 );
			//
		
			var windowYellowV2Clone08 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone08.position.set( 603, 108 , -1565 );
			windowYellowV2Clone08.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone08.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone08 );
			cityMarketGroup.add( windowYellowV2Clone08 );
			//
		
		// Right Section --- //
			var windowYellowV2Clone09 = windowYellowV2OnMesh.clone();
			windowYellowV2Clone09.position.set( 603, 108 , -1453 );
			windowYellowV2Clone09.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone09.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone09 );
			cityMarketGroup.add( windowYellowV2Clone09 );
			//
		
			var windowYellowV2Clone10 = windowYellowV2OnMesh.clone();
			windowYellowV2Clone10.position.set( 603, 108 , -1419 );
			windowYellowV2Clone10.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone10.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone10 );
			cityMarketGroup.add( windowYellowV2Clone10 );
			//
		
			var windowYellowV2Clone11 = windowYellowV2OnMesh.clone();
			windowYellowV2Clone11.position.set( 603, 108 , -1385 );
			windowYellowV2Clone11.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone11.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone11 );
			cityMarketGroup.add( windowYellowV2Clone11 );
			//
		
			var windowYellowV2Clone12 = windowYellowV2OnMesh.clone();
			windowYellowV2Clone12.position.set( 603, 108 , -1351 );
			windowYellowV2Clone12.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone12.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone12 );
			cityMarketGroup.add( windowYellowV2Clone12 );
			//
		
		// City Market Rear Top Floor Windows ---------------------- //
		//Left Section --- //
			var windowYellowV1Clone21 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone21.position.set( 677, 126 , -1668 );
			windowYellowV1Clone21.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone21 );
			cityMarketGroup.add( windowYellowV1Clone21 );
			//
		
			var windowYellowV1Clone22 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone22.position.set( 677, 126 , -1650 );
			windowYellowV1Clone22.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone22 );
			cityMarketGroup.add( windowYellowV1Clone22 );
			//
		
			var windowYellowV1Clone23 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone23.position.set( 677, 126 , -1634 );
			windowYellowV1Clone23.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone23 );
			cityMarketGroup.add( windowYellowV1Clone23 );
			//
		
			var windowYellowV1Clone24 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone24.position.set( 677, 126 , -1617 );
			windowYellowV1Clone24.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone24 );
			cityMarketGroup.add( windowYellowV1Clone24 );
			//
		
			var windowYellowV1Clone25 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone25.position.set( 677, 126 , -1600 );
			windowYellowV1Clone25.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone25 );
			cityMarketGroup.add( windowYellowV1Clone25 );
			//
		
			var windowYellowV1Clone26 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone26.position.set( 677, 126 , -1583 );
			windowYellowV1Clone26.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone26 );
			cityMarketGroup.add( windowYellowV1Clone26 );
			//
		
			var windowYellowV1Clone27 = windowYellowV1OffMesh.clone();
			windowYellowV1Clone27.position.set( 677, 126 , -1565 );
			windowYellowV1Clone27.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone27 );
			cityMarketGroup.add( windowYellowV1Clone27 );
			//
		
		//Right Section --- //
			var windowYellowV1Clone28 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone28.position.set( 677, 126 , -1453 );
			windowYellowV1Clone28.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone28 );
			cityMarketGroup.add( windowYellowV1Clone28 );
			//
		
			var windowYellowV1Clone29 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone29.position.set( 677, 126 , -1436 );
			windowYellowV1Clone29.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone29 );
			cityMarketGroup.add( windowYellowV1Clone29 );
			//
		
			var windowYellowV1Clone30 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone30.position.set( 677, 126 , -1419 );
			windowYellowV1Clone30.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone30 );
			cityMarketGroup.add( windowYellowV1Clone30 );
			//
		
			var windowYellowV1Clone31 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone31.position.set( 677, 126 , -1402 );
			windowYellowV1Clone31.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone31 );
			cityMarketGroup.add( windowYellowV1Clone31 );
			//
		
			var windowYellowV1Clone32 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone32.position.set( 677, 126 , -1385 );
			windowYellowV1Clone32.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone32 );
			cityMarketGroup.add( windowYellowV1Clone32 );
			//
		
			var windowYellowV1Clone33 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone33.position.set( 677, 126 , -1368 );
			windowYellowV1Clone33.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone33 );
			cityMarketGroup.add( windowYellowV1Clone33 );
			//
		
			var windowYellowV1Clone34 = windowYellowV1OnMesh.clone();
			windowYellowV1Clone34.position.set( 677, 126 , -1351 );
			windowYellowV1Clone34.rotation.set( 0, 90* Math.PI / 180, 0 );
			//scene.add( windowYellowV1Clone34 );
			cityMarketGroup.add( windowYellowV1Clone34 );
			//
		
		// City Market Front Doors ---------------------- //
			// City Market Door v1 Mesh ---------------------- //
			var doorV1Geo = new THREE.BoxGeometry( 9, 20, 3 );
		
			var doorV1YellowMat = new THREE.MeshFaceMaterial( doorV1YellowMats );
		
			var doorV1YellowMesh = new THREE.Mesh( doorV1Geo, doorV1YellowMat );
		
			doorV1YellowMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1YellowMesh.receiveShadow = true;
			doorV1YellowMesh.castShadow = true;
			//
		
		// City market Doors --- //
			//Left Front Section --- //
			var doorYellowV1Clone01 = doorV1YellowMesh.clone();
			doorYellowV1Clone01.position.set( 604, 102, -1650 );
			doorYellowV1Clone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone01 );
			cityMarketGroup.add( doorYellowV1Clone01 );
			//
		
			var doorYellowV1Clone02 = doorV1YellowMesh.clone();
			doorYellowV1Clone02.position.set( 604, 102, -1617 );
			doorYellowV1Clone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone02 );
			cityMarketGroup.add( doorYellowV1Clone02 );
			//
		
			var doorYellowV1Clone03 = doorV1YellowMesh.clone();
			doorYellowV1Clone03.position.set( 604, 102, -1583 );
			doorYellowV1Clone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone03 );
			cityMarketGroup.add( doorYellowV1Clone03 );
			//
		
			// Right Front Section --- //
			var doorYellowV1Clone04 = doorV1YellowMesh.clone();
			doorYellowV1Clone04.position.set( 604, 102, -1436 );
			doorYellowV1Clone04.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone04 );
			cityMarketGroup.add( doorYellowV1Clone04 );
			//
		
			var doorYellowV1Clone05 = doorV1YellowMesh.clone();
			doorYellowV1Clone05.position.set( 604, 102, -1402 );
			doorYellowV1Clone05.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone05 );
			cityMarketGroup.add( doorYellowV1Clone05 );
			//
		
			var doorYellowV1Clone06 = doorV1YellowMesh.clone();
			doorYellowV1Clone06.position.set( 604, 102, -1368 );
			doorYellowV1Clone06.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone06 );
			cityMarketGroup.add( doorYellowV1Clone06 );
			//
		
			// Left Side Door ----- //
			var doorYellowV1Clone07 = doorV1YellowMesh.clone();
			doorYellowV1Clone07.position.set( 615, 102, -1684 );
			doorYellowV1Clone07.rotation.set( 0, 0, 0 );
		
			//scene.add( doorYellowV1Clone07 );
			cityMarketGroup.add( doorYellowV1Clone07 );
			//
		
			// Right Side Door ----- //
			var doorYellowV1Clone08 = doorV1YellowMesh.clone();
			doorYellowV1Clone08.position.set( 615, 102, -1336 );
			doorYellowV1Clone08.rotation.set( 0, 0, 0 );
		
			//scene.add( doorYellowV1Clone08 );
			cityMarketGroup.add( doorYellowV1Clone08 );
			//
		
			//Middle Front Section --- //
			var doorYellowV1Clone09 = doorV1YellowMesh.clone();
			doorYellowV1Clone09.position.set( 591, 100 , -1524 );
			doorYellowV1Clone09.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone09 );
			cityMarketGroup.add( doorYellowV1Clone09 );
			//
		
			var doorYellowV1Clone10 = doorV1YellowMesh.clone();
			doorYellowV1Clone10.position.set( 591, 100 , -1492 );
			doorYellowV1Clone10.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			//scene.add( doorYellowV1Clone10 );
			cityMarketGroup.add( doorYellowV1Clone10 );
			//
		
			// Middle Section Windows ---- //
			var windowYellowV2Clone13 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone13.position.set( 590, 106 , -1535 );
			windowYellowV2Clone13.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone13.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone13 );
			cityMarketGroup.add( windowYellowV2Clone13 );
			//
		
			var windowYellowV2Clone14 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone14.position.set( 590, 106 , -1513 );
			windowYellowV2Clone14.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone14.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone14 );
			cityMarketGroup.add( windowYellowV2Clone14 );
			//
		
			var windowYellowV2Clone15 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone15.position.set( 590, 106 , -1503 );
			windowYellowV2Clone15.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone15.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone15 );
			cityMarketGroup.add( windowYellowV2Clone15 );
			//
		
			var windowYellowV2Clone16 = windowYellowV2OffMesh.clone();
			windowYellowV2Clone16.position.set( 590, 106 , -1481 );
			windowYellowV2Clone16.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV2Clone16.scale.set( 1, 1.25 , 2 );
			//scene.add( windowYellowV2Clone16 );
			cityMarketGroup.add( windowYellowV2Clone16 );
			//
		
		// City Market 3x6 Windows ( Front ) ---------------------- //
			var window3x6Geo = new THREE.BoxGeometry( 12, 20, 1 );
		
			// Window 3x6 Grey Off ---- //
			var window3x6GreyOffMat = new THREE.MeshFaceMaterial( window3x6GreyOffMats );
		
			var window3x6GreyOffMesh = new THREE.Mesh( window3x6Geo, window3x6GreyOffMat );

			window3x6GreyOffMesh.position.set( 590, 172 , -1532 );
			window3x6GreyOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x6GreyOffMesh.receiveShadow = true;
			window3x6GreyOffMesh.castShadow = true;
			window3x6GreyOffMesh.transparency = true;

			//scene.add( window3x6GreyOffMesh );
			cityMarketGroup.add( window3x6GreyOffMesh );
			//
		
			var window3x6GreyClone01 = window3x6GreyOffMesh.clone();
			window3x6GreyClone01.position.set( 590, 172 , -1508 );
			scene.add( window3x6GreyClone01 );
			//
		
			// Window 3x6 Grey On ---- //
			var window3x6GreyOnMat = new THREE.MeshFaceMaterial( window3x6GreyOnMats );
		
			var window3x6GreyOnMesh = new THREE.Mesh( window3x6Geo, window3x6GreyOnMat );

			window3x6GreyOnMesh.position.set( 590, 172 , -1484 );
			window3x6GreyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x6GreyOnMesh.receiveShadow = true;
			window3x6GreyOnMesh.castShadow = true;
			window3x6GreyOnMesh.transparency = true;

			//scene.add( window3x6GreyOnMesh );
			cityMarketGroup.add( window3x6GreyOnMesh );
			//
		
			var window3x6GreyClone02 = window3x6GreyOffMesh.clone();
			window3x6GreyClone02.position.set( 590, 149 , -1508 );
			//scene.add( window3x6GreyClone02 );
			cityMarketGroup.add( window3x6GreyClone02 );
			//
		
			var window3x6GreyClone03 = window3x6GreyOnMesh.clone();
			window3x6GreyClone03.position.set( 590, 126 , -1508 );
			//scene.add( window3x6GreyClone03 );
			cityMarketGroup.add( window3x6GreyClone03 );
			//
		
			var window3x6GreyClone04 = window3x6GreyOffMesh.clone();
			window3x6GreyClone04.position.set( 590, 149 , -1532 );
			//scene.add( window3x6GreyClone04 );
			cityMarketGroup.add( window3x6GreyClone04 );
			//
		
			var window3x6GreyClone05 = window3x6GreyOffMesh.clone();
			window3x6GreyClone05.position.set( 590, 126 , -1532 );
			//scene.add( window3x6GreyClone05 );
			cityMarketGroup.add( window3x6GreyClone05 );
			//
		
			var window3x6GreyClone06 = window3x6GreyOnMesh.clone();
			window3x6GreyClone06.position.set( 590, 149 , -1484 );
			//scene.add( window3x6GreyClone06 );
			cityMarketGroup.add( window3x6GreyClone06 );
			//
		
			var window3x6GreyClone07 = window3x6GreyOffMesh.clone();
			window3x6GreyClone07.position.set( 590, 126 , -1484 );
			//scene.add( window3x6GreyClone07 );
			cityMarketGroup.add( window3x6GreyClone07 );
			//
		
		// City Market 3x6 Windows ( Rear ) ---------------------- //
			// Window 3x6 Grey Off ---- //
			var window3x6GreyClone08 = window3x6GreyOffMesh.clone();
			window3x6GreyClone08.position.set( 690, 172 , -1532 );
			//scene.add( window3x6GreyClone08 );
			cityMarketGroup.add( window3x6GreyClone08 );
			//
		
			var window3x6GreyClone09 = window3x6GreyOnMesh.clone();
			window3x6GreyClone09.position.set( 690, 172 , -1508 );
			//scene.add( window3x6GreyClone09 );
			cityMarketGroup.add( window3x6GreyClone09 );
			//
		
			var window3x6GreyClone10 = window3x6GreyOnMesh.clone();
			window3x6GreyClone10.position.set( 690, 172 , -1484 );
			//scene.add( window3x6GreyClone10 );
			cityMarketGroup.add( window3x6GreyClone10 );
			//
		
			var window3x6GreyClone11 = window3x6GreyOnMesh.clone();
			window3x6GreyClone11.position.set( 690, 149 , -1508 );
			//scene.add( window3x6GreyClone11 );
			cityMarketGroup.add( window3x6GreyClone11 );
			//
		
			var window3x6GreyClone12 = window3x6GreyOffMesh.clone();
			window3x6GreyClone12.position.set( 690, 126 , -1508 );
			//scene.add( window3x6GreyClone12 );
			cityMarketGroup.add( window3x6GreyClone12 );
			//
		
			var window3x6GreyClone13 = window3x6GreyOffMesh.clone();
			window3x6GreyClone13.position.set( 690, 149 , -1532 );
			//scene.add( window3x6GreyClone13 );
			cityMarketGroup.add( window3x6GreyClone13 );
			//
		
			var window3x6GreyClone14 = window3x6GreyOffMesh.clone();
			window3x6GreyClone14.position.set( 690, 126 , -1532 );
			//scene.add( window3x6GreyClone14 );
			cityMarketGroup.add( window3x6GreyClone14 );
			//
		
			var window3x6GreyClone15 = window3x6GreyOffMesh.clone();
			window3x6GreyClone15.position.set( 690, 149 , -1484 );
			//scene.add( window3x6GreyClone15 );
			cityMarketGroup.add( window3x6GreyClone15 );
			//
		
			var window3x6GreyClone16 = window3x6GreyOffMesh.clone();
			window3x6GreyClone16.position.set( 690, 126 , -1484 );
			//scene.add( window3x6GreyClone16 );
			cityMarketGroup.add( window3x6GreyClone16 );
			//
		
		scene.add( cityMarketGroup );
		cityMarketGroup.position.set( -256, 0, 0 );
		cityMarketGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
	// [ END ]--------- City Market Group ---------------------- //
		
	
	// [ BEGIN ]--------- Block 01 ---------------------- //
		var block01Group = new THREE.Group();
		
		// Block 01 Group -------------------------- //
		var block0101Geo = new THREE.BoxGeometry( 110, 180, 105 );
		var block0101Mesh = new THREE.Mesh( block0101Geo, oldBrickMat01t );
		block0101Mesh.position.set( 654, 130, -1035 );
		block0101Mesh.castShadow = true;
		block0101Mesh.receiveShadow = true;

		var block0101aGeo = new THREE.BoxGeometry( 65, 125, 105 );
		var block0101aMesh = new THREE.Mesh( block0101aGeo, oldBrickMat01t );
		block0101aMesh.position.set( 741, 100, -1035 );
		block0101aMesh.castShadow = true;
		block0101aMesh.receiveShadow = true;

		var block0102Geo = new THREE.BoxGeometry( 135, 150, 142 );
		var block0102Mesh = new THREE.Mesh( block0102Geo, oldBrickMat01w );
		block0102Mesh.position.set( 669, 120, -912 );
		block0102Mesh.castShadow = true;
		block0102Mesh.receiveShadow = true;

		var block0103Geo = new THREE.BoxGeometry( 135, 120, 81 );
		var block0103Mesh = new THREE.Mesh( block0103Geo, sailLoftMat01w );
		block0103Mesh.position.set( 670, 100, -801 );
		block0103Mesh.castShadow = true;
		block0103Mesh.receiveShadow = true;

		var block0104Geo = new THREE.BoxGeometry( 135, 100, 126 );
		var block0104Mesh = new THREE.Mesh( block0104Geo, oldBrickMat01w );
		block0104Mesh.position.set( 670, 90, -698 );
		block0104Mesh.castShadow = true;
		block0104Mesh.receiveShadow = true;

		var block0105Geo = new THREE.BoxGeometry( 135, 125, 70 );
		var block0105Mesh = new THREE.Mesh( block0105Geo, oldBrickMat01t );
		block0105Mesh.position.set( 669, 85.5, -600 );
		block0105Mesh.castShadow = true;
		block0105Mesh.receiveShadow = true;

		var block0106Geo = new THREE.BoxGeometry( 160, 70, 70 );
		var block0106Mesh = new THREE.Mesh( block0106Geo, sailLoftMat01t );
		block0106Mesh.position.set( 680, 105, -530 );
		block0106Mesh.castShadow = true;
		block0106Mesh.receiveShadow = true;

		block01Group.add( block0101Mesh );
		block01Group.add( block0101aMesh );
		block01Group.add( block0102Mesh );
		block01Group.add( block0103Mesh );
		block01Group.add( block0104Mesh );
		block01Group.add( block0105Mesh );
		block01Group.add( block0106Mesh );

		//allBlocksGroup.add( block01Group );
		
		// --------------- Block 01 01 Windows ------------- //
		// Block 01 01 Front Windows ---------------------- //
			var window3x4LiteGreyGeo = new THREE.BoxGeometry( 18, 18, 3 );

		// Block 01 01 Front Windows - Row 01 ---- //
			var window3x4LiteGreyOnMat = new THREE.MeshFaceMaterial( window3x4LiteGreyOnMats );
		
			var window3x4LiteGreyOnMesh = new THREE.Mesh( window3x4LiteGreyGeo, window3x4LiteGreyOnMat );

			window3x4LiteGreyOnMesh.position.set( 598, 205 , -1075 );
			window3x4LiteGreyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4LiteGreyOnMesh.receiveShadow = true;
			window3x4LiteGreyOnMesh.castShadow = true;
			window3x4LiteGreyOnMesh.transparency = true;

			//scene.add( window3x4LiteGreyOnMesh );
			block01Group.add( window3x4LiteGreyOnMesh );
			//
		
			window3x4LiteGreyClone01 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone01.position.set( 598, 205 , -1055 );
						
			//scene.add( window3x4LiteGreyClone01 );
			block01Group.add( window3x4LiteGreyClone01 );
			//
		
			window3x4LiteGreyClone02 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone02.position.set( 598, 205 , -1035 );
						
			//scene.add( window3x4LiteGreyClone02 );
			block01Group.add( window3x4LiteGreyClone02 );
			//
		
			window3x4LiteGreyClone03 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone03.position.set( 598, 205 , -1015 );
						
			//scene.add( window3x4LiteGreyClone03 );
			block01Group.add( window3x4LiteGreyClone03 );
			//
		
			window3x4LiteGreyClone04 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone04.position.set( 598, 205 , -995 );
						
			//scene.add( window3x4LiteGreyClone04 );
			block01Group.add( window3x4LiteGreyClone04 );
			//
		
		// Block 01 01 Front Windows - Row 02 ---- //
			window3x4LiteGreyClone05 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone05.position.set( 598, 180 , -1075 );
						
			//scene.add( window3x4LiteGreyClone05 );
			block01Group.add( window3x4LiteGreyClone05 );
			//
		
			window3x4LiteGreyClone06 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone06.position.set( 598, 180 , -1055 );
						
			//scene.add( window3x4LiteGreyClone06 );
			block01Group.add( window3x4LiteGreyClone06 );
			//
		
			window3x4LiteGreyClone07 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone07.position.set( 598, 180 , -1035 );
						
			scene.add( window3x4LiteGreyClone07 );
			block01Group.add( window3x4LiteGreyClone07 );
			//
		
			window3x4LiteGreyClone08 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone08.position.set( 598, 180 , -1015 );
						
			//scene.add( window3x4LiteGreyClone08 );
			block01Group.add( window3x4LiteGreyClone08 );
			//
		
			window3x4LiteGreyClone09 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone09.position.set( 598, 180 , -995 );
						
			//scene.add( window3x4LiteGreyClone09 );
			block01Group.add( window3x4LiteGreyClone09 );
			//
		
		// Block 01 01 Front Windows - Row 03 ---- //
			window3x4LiteGreyClone10 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone10.position.set( 598, 155 , -1075 );
						
			//scene.add( window3x4LiteGreyClone10 );
			block01Group.add( window3x4LiteGreyClone10 );
			//
		
			window3x4LiteGreyClone11 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone11.position.set( 598, 155 , -1055 );
						
			//scene.add( window3x4LiteGreyClone11 );
			block01Group.add( window3x4LiteGreyClone11 );
			//
		
			window3x4LiteGreyClone12 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone12.position.set( 598, 155 , -1035 );
						
			//scene.add( window3x4LiteGreyClone12 );
			block01Group.add( window3x4LiteGreyClone12 );
			//
		
			window3x4LiteGreyClone13 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone13.position.set( 598, 155 , -1015 );
						
			//scene.add( window3x4LiteGreyClone13 );
			block01Group.add( window3x4LiteGreyClone13 );
			//
		
			window3x4LiteGreyClone14 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone14.position.set( 598, 155 , -995 );
						
			//scene.add( window3x4LiteGreyClone14 );
			block01Group.add( window3x4LiteGreyClone14 );
			//
		
		// Block 01 01 Front Windows - Row 04 ---- //
			window3x4LiteGreyClone15 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone15.position.set( 598, 130 , -1075 );
						
			//scene.add( window3x4LiteGreyClone15 );
			block01Group.add( window3x4LiteGreyClone15 );
			//
		
			window3x4LiteGreyClone16 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone16.position.set( 598, 130 , -1055 );
						
			//scene.add( window3x4LiteGreyClone16 );
			block01Group.add( window3x4LiteGreyClone16 );
			//
		
			window3x4LiteGreyClone17 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone17.position.set( 598, 130 , -1035 );
						
			//scene.add( window3x4LiteGreyClone17 );
			block01Group.add( window3x4LiteGreyClone17 );
			//
		
			window3x4LiteGreyClone18 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone18.position.set( 598, 130 , -1015 );
						
			//scene.add( window3x4LiteGreyClone18 );
			block01Group.add( window3x4LiteGreyClone18 );
			//
		
			window3x4LiteGreyClone19 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone19.position.set( 598, 130 , -995 );
						
			//scene.add( window3x4LiteGreyClone19 );
			block01Group.add( window3x4LiteGreyClone19 );
			//
		
		// Block 01 01 Front Windows - Row 05 ---- //
			window3x4LiteGreyClone20 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone20.position.set( 598, 105 , -1075 );
						
			//scene.add( window3x4LiteGreyClone20 );
			block01Group.add( window3x4LiteGreyClone20 );
			//
		
			window3x4LiteGreyClone21 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone21.position.set( 598, 105 , -1055 );
						
			//scene.add( window3x4LiteGreyClone21 );
			block01Group.add( window3x4LiteGreyClone21 );
			//
		
			window3x4LiteGreyClone22 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone22.position.set( 598, 105 , -1035 );
						
			//scene.add( window3x4LiteGreyClone22 );
			block01Group.add( window3x4LiteGreyClone22 );
			//
		
			window3x4LiteGreyClone23 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone23.position.set( 598, 105 , -1015 );
						
			//scene.add( window3x4LiteGreyClone23 );
			block01Group.add( window3x4LiteGreyClone23 );
			//
		
			window3x4LiteGreyClone24 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone24.position.set( 598, 105 , -995 );
						
			//scene.add( window3x4LiteGreyClone24 );
			block01Group.add( window3x4LiteGreyClone24 );
			//
		
		// Block 01 01 Rear Windows ---------------------- //
		// Block 01 01 Rear Windows - Row 01 ---- //
			window3x4LiteGreyClone25 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone25.position.set( 708, 205 , -1075 );
						
			//scene.add( window3x4LiteGreyClone25 );
			block01Group.add( window3x4LiteGreyClone25 );
			//
		
			window3x4LiteGreyClone26 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone26.position.set( 708, 205 , -1055 );
						
			//scene.add( window3x4LiteGreyClone26 );
			block01Group.add( window3x4LiteGreyClone26 );
			//
		
			window3x4LiteGreyClone27 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone27.position.set( 708, 205 , -1035 );
						
			//scene.add( window3x4LiteGreyClone27 );
			block01Group.add( window3x4LiteGreyClone27 );
			//
		
			window3x4LiteGreyClone28 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone28.position.set( 708, 205 , -1015 );
						
			//scene.add( window3x4LiteGreyClone28 );
			block01Group.add( window3x4LiteGreyClone28 );
			//
		
			window3x4LiteGreyClone29 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone29.position.set( 708, 205 , -995 );
						
			//scene.add( window3x4LiteGreyClone29 );
			block01Group.add( window3x4LiteGreyClone29 );
			//
		
		// Block 01 01 Rear Windows - Row 02 ---- //
			window3x4LiteGreyClone30 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone30.position.set( 708, 180 , -1075 );
						
			//scene.add( window3x4LiteGreyClone30 );
			block01Group.add( window3x4LiteGreyClone30 );
			//
		
			window3x4LiteGreyClone31 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone31.position.set( 708, 180 , -1055 );
						
			//scene.add( window3x4LiteGreyClone31 );
			block01Group.add( window3x4LiteGreyClone31 );
			//
		
			window3x4LiteGreyClone32 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone32.position.set( 708, 180 , -1035 );
						
			//scene.add( window3x4LiteGreyClone32 );
			block01Group.add( window3x4LiteGreyClone32 );
			//
		
			window3x4LiteGreyClone33 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone33.position.set( 708, 180 , -1015 );
						
			//scene.add( window3x4LiteGreyClone33 );
			block01Group.add( window3x4LiteGreyClone33 );
			//
		
			window3x4LiteGreyClone34 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone34.position.set( 708, 180 , -995 );
						
			//scene.add( window3x4LiteGreyClone34 );
			block01Group.add( window3x4LiteGreyClone34 );
			//
		
		// Block 01 01 Side Windows ---- //
			window3x4LiteGreyClone35 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone35.position.set( 730, 130 , -1087 );
			window3x4LiteGreyClone35.rotation.set( 0, 0, 0 );
			window3x4LiteGreyClone35.scale.set( 0.8, 1.25, 1 );
						
			//scene.add( window3x4LiteGreyClone35 );
			block01Group.add( window3x4LiteGreyClone35 );
			//
		
			window3x4LiteGreyClone36 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone36.position.set( 752, 137 , -1087 );
			window3x4LiteGreyClone36.rotation.set( 0, 0, 0 );
						
			//scene.add( window3x4LiteGreyClone36 );
			block01Group.add( window3x4LiteGreyClone36 );
			//
		
			window3x4LiteGreyClone37 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone37.position.set( 765, 137 , -1087 );
			window3x4LiteGreyClone37.rotation.set( 0, 0, 0 );
						
			//scene.add( window3x4LiteGreyClone37 );
			block01Group.add( window3x4LiteGreyClone37 );
			//
		
			window3x4LiteGreyClone38 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone38.position.set( 772.5, 137 , -1077 );
						
			//scene.add( window3x4LiteGreyClone38 );
			block01Group.add( window3x4LiteGreyClone38 );
			//
		
		// Block 01 01 Side Trim --- //
			var block0101SideTrimGeo = new THREE.BoxGeometry( 3, 5, 31 );
		
			var block0101TrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ); // Block 01 01 Side Trim Tex
		
			var block0101SideTrimMesh = new THREE.Mesh( block0101SideTrimGeo, block0101TrimMat );
			block0101SideTrimMesh.position.set( 758.5, 125.5, -1088 );
			block0101SideTrimMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			block0101SideTrimMesh.castShadow = true;
			block0101SideTrimMesh.receiveShadow = true;
		
			//scene.add( block0101SideTrimMesh );
			block01Group.add( block0101SideTrimMesh );
			//
		
			var block0101SideTrimClone01 = block0101SideTrimMesh.clone();
			block0101SideTrimClone01.position.set( 773.5, 125.5 , -1078.5 );
			block0101SideTrimClone01.scale.set( 1, 1, 0.7 );
			block0101SideTrimClone01.rotation.set( 0, 0, 0 );

			scene.add( block0101SideTrimClone01 );
			block01Group.add( block0101SideTrimClone01 );
			//

			// Block 0101 Trim ------------------------ //
				// Row 01 --- //
				var block0101TrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ); // Lite Grey Trim Material
					
				var block0101TrimGeo = new THREE.BoxGeometry( 6, 8, 103 );
		
				var block0101TrimMesh = new THREE.Mesh( block0101TrimGeo, block0101TrimMat );
				block0101TrimMesh.position.set( 600, 192, -1035 );
				block0101TrimMesh.castShadow = true;
				block0101TrimMesh.receiveShadow = true;
		
				//scene.add( block0101TrimMesh );
				block01Group.add( block0101TrimMesh );
				//
				
				// Row 02 --- //
				var block0101TrimClone01 = block0101TrimMesh.clone();
				block0101TrimClone01.position.set( 600, 167, -1035 );
		
				//scene.add( block0101TrimClone01 );
				block01Group.add( block0101TrimClone01 );
				//
		
				// Row 03 --- //
				var block0101TrimClone02 = block0101TrimMesh.clone();
				block0101TrimClone02.position.set( 600, 142, -1035 );
		
				//scene.add( block0101TrimClone02 );
				block01Group.add( block0101TrimClone02 );
				//
		
				// Row 04 --- //
				var block0101TrimClone03 = block0101TrimMesh.clone();
				block0101TrimClone03.position.set( 600, 117, -1035 );
		
				scene.add( block0101TrimClone03 );
				block01Group.add( block0101TrimClone03 );
				//
		
				// Row 05 --- //
				var block0101TrimClone04 = block0101TrimMesh.clone();
				block0101TrimClone04.position.set( 600, 92, -1035 );
		
				//scene.add( block0101TrimClone04 );
				block01Group.add( block0101TrimClone04 );
				//

		
		// --------------------- Block 01 02 Windows ------------------------- //
		// Block 01 02 Front Windows ---------------------- //
			var window3x4RedGeo = new THREE.BoxGeometry( 10, 22, 3 );

			// Row 01 ---- //
			var window3x4RedOnMat = new THREE.MeshFaceMaterial( window3x4RedOnMats );
		
			var window3x4RedOnMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOnMat );

			window3x4RedOnMesh.position.set( 602, 180 , -972 );
			window3x4RedOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOnMesh.receiveShadow = true;
			window3x4RedOnMesh.castShadow = true;

			//scene.add( window3x4RedOnMesh );
			block01Group.add( window3x4RedOnMesh );
			//
		
			var window3x4RedOffMat = new THREE.MeshFaceMaterial( window3x4RedOffMats );
		
			var window3x4RedOffMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOffMat );

			//window3x4RedOffMesh.position.set( 602, 180 , -972 );
			window3x4RedOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOffMesh.receiveShadow = true;
			window3x4RedOffMesh.castShadow = true;
		
			window3x4RedClone01 = window3x4RedOffMesh.clone();
			window3x4RedClone01.position.set( 602, 180 , -955 );
						
			//scene.add( window3x4RedClone01 );
			block01Group.add( window3x4RedClone01 );
			//
		
			window3x4RedClone02 = window3x4RedOffMesh.clone();
			window3x4RedClone02.position.set( 602, 180 , -938 );
						
			//scene.add( window3x4RedClone02 );
			block01Group.add( window3x4RedClone02 );
			//
		
			// Row 02 ---- //
			window3x4RedClone03 = window3x4RedOnMesh.clone();
			window3x4RedClone03.position.set( 602, 155 , -972 );
						
			//scene.add( window3x4RedClone03 );
			block01Group.add( window3x4RedClone03 );
			//
		
			window3x4RedClone04 = window3x4RedOnMesh.clone();
			window3x4RedClone04.position.set( 602, 155 , -955 );
						
			//scene.add( window3x4RedClone04 );
			block01Group.add( window3x4RedClone04 );
			//
		
			window3x4RedClone05 = window3x4RedOffMesh.clone();
			window3x4RedClone05.position.set( 602, 155 , -938 );
						
			//scene.add( window3x4RedClone05 );
			block01Group.add( window3x4RedClone05 );
			//
		
			// Row 03 ---- //
			window3x4RedClone06 = window3x4RedOffMesh.clone();
			window3x4RedClone06.position.set( 602, 130 , -972 );
						
			//scene.add( window3x4RedClone06 );
			block01Group.add( window3x4RedClone06 );
			//
		
			window3x4RedClone07 = window3x4RedOffMesh.clone();
			window3x4RedClone07.position.set( 602, 130 , -955 );
						
			//scene.add( window3x4RedClone07 );
			block01Group.add( window3x4RedClone07 );
			//
		
			window3x4RedClone08 = window3x4RedOnMesh.clone();
			window3x4RedClone08.position.set( 602, 130 , -938 );
						
			//scene.add( window3x4RedClone08 );
			block01Group.add( window3x4RedClone08 );
			//
		
		// Block 01 02 Front Doors ---- //
			var window3x6GreyClone18 = window3x6GreyOnMesh.clone();
			window3x6GreyClone18.position.set( 601, 103.5 , -972 );
			window3x6GreyClone18.scale.set( 0.85, 1.05 , 1 );
			//scene.add( window3x6GreyClone18 );
			block01Group.add( window3x6GreyClone18 );
			//
		
			var window3x6GreyClone19 = window3x6GreyOnMesh.clone();
			window3x6GreyClone19.position.set( 601, 103.5 , -955.5 );
			window3x6GreyClone19.scale.set( 0.85, 1.05 , 1 );
			//scene.add( window3x6GreyClone19 );
			block01Group.add( window3x6GreyClone19 );
			//
		
			var window3x6GreyClone20 = window3x6GreyOnMesh.clone();
			window3x6GreyClone20.position.set( 601, 103.5 , -938.5 );
			window3x6GreyClone20.scale.set( 0.85, 1.05 , 1 );
			//scene.add( window3x6GreyClone20 );
			block01Group.add( window3x6GreyClone20 );
			//
		
		// Block 01 02 Rear Windows ---------------------- //
			window3x4RedClone09 = window3x4RedOffMesh.clone();
			window3x4RedClone09.position.set( 736, 180 , -972 );
						
			//scene.add( window3x4RedClone09 );
			block01Group.add( window3x4RedClone09 );
			//
			
			window3x4RedClone10 = window3x4RedOffMesh.clone();
			window3x4RedClone10.position.set( 736, 180 , -955 );
						
			//scene.add( window3x4RedClone10 );
			block01Group.add( window3x4RedClone10 );
			//
		
			window3x4RedClone11 = window3x4RedOffMesh.clone();
			window3x4RedClone11.position.set( 736, 180 , -938 );
						
			//scene.add( window3x4RedClone11 );
			block01Group.add( window3x4RedClone11 );
			//
		
			// Row 02 ---- //
			window3x4RedClone12 = window3x4RedOnMesh.clone();
			window3x4RedClone12.position.set( 736, 155 , -972 );
						
			//scene.add( window3x4RedClone12 );
			block01Group.add( window3x4RedClone12 );
			//
		
			window3x4RedClone13 = window3x4RedOnMesh.clone();
			window3x4RedClone13.position.set( 736, 155 , -955 );
						
			//scene.add( window3x4RedClone13 );
			block01Group.add( window3x4RedClone13 );
			//
		
			window3x4RedClone14 = window3x4RedOffMesh.clone();
			window3x4RedClone14.position.set( 736, 155 , -938 );
						
			//scene.add( window3x4RedClone14 );
			block01Group.add( window3x4RedClone14 );
			//
		
			// Row 03 ---- //
			window3x4RedClone16 = window3x4RedOffMesh.clone();
			window3x4RedClone16.position.set( 736, 130 , -972 );
						
			//scene.add( window3x4RedClone16 );
			block01Group.add( window3x4RedClone16 );
			//
		
			window3x4RedClone17 = window3x4RedOffMesh.clone();
			window3x4RedClone17.position.set( 736, 130 , -955 );
						
			//scene.add( window3x4RedClone17 );
			block01Group.add( window3x4RedClone17 );
			//
		
			window3x4RedClone18 = window3x4RedOnMesh.clone();
			window3x4RedClone18.position.set( 736, 130 , -938 );
						
			//scene.add( window3x4RedClone18 );
			block01Group.add( window3x4RedClone18 );
			//
		
		// Block 01 02 Front Trim ---------------------- //
			var block0102RedTrimGeo = new THREE.BoxGeometry( 5, 5, 55 );

			var window3x4RedOnMat = new THREE.MeshFaceMaterial( window3x4RedOnMats );
		
			var block0102RedTrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ); // Red Trim Material
		
			var block0102RedTrimMesh = new THREE.Mesh( block0102RedTrimGeo, block0102RedTrimMat );

			block0102RedTrimMesh.position.set( 600, 117, -955 );
			block0102RedTrimMesh.rotation.set( 0, 0, 0 );
			block0102RedTrimMesh.receiveShadow = true;
			block0102RedTrimMesh.castShadow = true;

			//scene.add( block0102RedTrimMesh );
			block01Group.add( block0102RedTrimMesh );
			//
		
		// Block 01 02 Front Pillars ---------------------- //
			var block0102RedPillarGeo = new THREE.BoxGeometry( 4, 30, 5 );
		
			var block0102RedPillarMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ); // Red Trim Material
		
			var block0102RedPillarMesh = new THREE.Mesh( block0102RedPillarGeo, block0102RedPillarMat );

			block0102RedPillarMesh.position.set( 600, 100, -980 );
			block0102RedPillarMesh.rotation.set( 0, 0, 0 );
			block0102RedPillarMesh.receiveShadow = true;
			block0102RedPillarMesh.castShadow = true;

			//scene.add( block0102RedPillarMesh );
			block01Group.add( block0102RedPillarMesh );
			//
		
			var block0102RedPillarClone01 = block0102RedPillarMesh.clone();
		
			block0102RedPillarClone01.position.set( 600, 100, -964 );
			block0102RedPillarClone01.rotation.set( 0, 0, 0 );
			block0102RedPillarClone01.receiveShadow = true;
			block0102RedPillarClone01.castShadow = true;

			//scene.add( block0102RedPillarClone01 );
			block01Group.add( block0102RedPillarClone01 );
			//
		
			var block0102RedPillarClone02 = block0102RedPillarMesh.clone();
		
			block0102RedPillarClone02.position.set( 600, 100, -947 );
			block0102RedPillarClone02.rotation.set( 0, 0, 0 );
			block0102RedPillarClone02.receiveShadow = true;
			block0102RedPillarClone02.castShadow = true;

			//scene.add( block0102RedPillarClone02 );
			block01Group.add( block0102RedPillarClone02 );
			//
		
			var block0102RedPillarClone03 = block0102RedPillarMesh.clone();
		
			block0102RedPillarClone03.position.set( 600, 100, -930 );
			block0102RedPillarClone03.rotation.set( 0, 0, 0 );
			block0102RedPillarClone03.receiveShadow = true;
			block0102RedPillarClone03.castShadow = true;

			//scene.add( block0102RedPillarClone03 );
			block01Group.add( block0102RedPillarClone03 );
			//
		
		// Block 01 02a Front Trim ---------------------- //
			var block0102aTrimGeo = new THREE.BoxGeometry( 5, 5, 85 );
		
			var block0102aTrimTex = textureLoader.load( "../../tex/smooth_brick-01.jpg", function ( block0102aTrimTex ) {

				block0102aTrimTex.wrapS = block0102aTrimTex.wrapT = THREE.RepeatWrapping;
				block0102aTrimTex.repeat.x = 100 / 50;
				block0102aTrimTex.repeat.y = 12 / 100;

			} );
		
			var block0102aTrimMat = new THREE.MeshPhongMaterial( { map: block0102aTrimTex, side: THREE.DoubleSide } );
			// Brick Trim Material
		
			var block0102aTrimMesh = new THREE.Mesh( block0102aTrimGeo, block0102aTrimMat );

			block0102aTrimMesh.position.set( 600, 117, -884 );
			block0102aTrimMesh.rotation.set( 0, 0, 0 );

			//scene.add( block0102aTrimMesh );
			block01Group.add( block0102aTrimMesh );
			//
		
		// Block 01 02a Front Pillars ---------------------- //
			var block0102aPillarGeo = new THREE.BoxGeometry( 4, 30, 5 );
		
			var block0102aPillarTex = textureLoader.load( "../../tex/smooth_brick-01.jpg", function ( block0102aPillarTex ) {

				block0102aPillarTex.wrapS = block0102aPillarTex.wrapT = THREE.RepeatWrapping;
				block0102aPillarTex.repeat.x = 18 / 100;
				block0102aPillarTex.repeat.y = 60 / 100;

			} );
		
			var block0102aPillarMat = new THREE.MeshPhongMaterial( { map: block0102aPillarTex, side: THREE.DoubleSide } );
			// Brick Pillar Material
		
			var block0102aPillarMesh = new THREE.Mesh( block0102aPillarGeo, block0102aPillarMat );

			block0102aPillarMesh.position.set( 600, 100, -924 );
			block0102aPillarMesh.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarMesh );
			block01Group.add( block0102aPillarMesh );
			//
		
			var block0102aPillarClone01 = block0102aPillarMesh.clone();
		
			block0102aPillarClone01.position.set( 600, 100, -905 );
			block0102aPillarClone01.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone01 );
			block01Group.add( block0102aPillarClone01 );
			//
		
			var block0102aPillarClone02 = block0102aPillarMesh.clone();

		
			block0102aPillarClone02.position.set( 600, 100, -885 );
			block0102aPillarClone02.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone02 );
			block01Group.add( block0102aPillarClone02 );
			//
		
			var block0102aPillarClone03 = block0102aPillarMesh.clone();
		
			block0102aPillarClone03.position.set( 600, 100, -865 );
			block0102aPillarClone03.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone03 );
			block01Group.add( block0102aPillarClone03 );
			//
		
			var block0102aPillarClone04 = block0102aPillarMesh.clone();
		
			block0102aPillarClone04.position.set( 600, 100, -845 );
			block0102aPillarClone04.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone04 );
			block01Group.add( block0102aPillarClone04 );
			//
		
		// Block 01 02a Front Doors ---- //
			var window3x6GreyClone21 = window3x6GreyOnMesh.clone();
			window3x6GreyClone21.position.set( 601, 103.5 , -915 );
			window3x6GreyClone21.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone21 );
			block01Group.add( window3x6GreyClone21 );
			//
		
			var window3x6GreyClone22 = window3x6GreyOnMesh.clone();
			window3x6GreyClone22.position.set( 601, 103.5 , -895 );
			window3x6GreyClone22.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone22 );
			block01Group.add( window3x6GreyClone22 );
			//
		
			var window3x6GreyClone23 = window3x6GreyOnMesh.clone();
			window3x6GreyClone23.position.set( 601, 103.5 , -875 );
			window3x6GreyClone23.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone23 );
			block01Group.add( window3x6GreyClone23 );
			//
		
			var window3x6GreyClone24 = window3x6GreyOnMesh.clone();
			window3x6GreyClone24.position.set( 601, 103.5 , -855 );
			window3x6GreyClone24.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone24 );
			block01Group.add( window3x6GreyClone24 );
			//
		
			
		
		//Block 01 02 Green Windows ---------------------------------------------------------------------------------------------- //
		// Block 01 02 Rear Windows ---------------------- //
			var window3x4RedGeo = new THREE.BoxGeometry( 10, 22, 3 );

			// Row 01 ---- //
			var window3x4RedOnMat = new THREE.MeshFaceMaterial( window3x4RedOnMats );
		
			var window3x4RedOnMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOnMat );

			window3x4RedOnMesh.position.set( 602, 180 , -972 );
			window3x4RedOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOnMesh.receiveShadow = true;
			window3x4RedOnMesh.castShadow = true;

			//scene.add( window3x4RedOnMesh );
			block01Group.add( window3x4RedOnMesh );
			//
		
			var window3x4RedOffMat = new THREE.MeshFaceMaterial( window3x4RedOffMats );
		
			var window3x4RedOffMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOffMat );

			//window3x4RedOffMesh.position.set( 602, 180 , -972 );
			window3x4RedOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOffMesh.receiveShadow = true;
			window3x4RedOffMesh.castShadow = true;
		
			window3x4RedClone01 = window3x4RedOffMesh.clone();
			window3x4RedClone01.position.set( 602, 180 , -955 );
						
			block01Group.add( window3x4RedClone01 );
			//
		
			window3x4RedClone02 = window3x4RedOffMesh.clone();
			window3x4RedClone02.position.set( 602, 180 , -938 );
						
			block01Group.add( window3x4RedClone02 );
			//
		
			// Row 02 ---- //
			window3x4RedClone03 = window3x4RedOnMesh.clone();
			window3x4RedClone03.position.set( 602, 155 , -972 );
						
			block01Group.add( window3x4RedClone03 );
			//
		
			window3x4RedClone04 = window3x4RedOnMesh.clone();
			window3x4RedClone04.position.set( 602, 155 , -955 );
						
			block01Group.add( window3x4RedClone04 );
			//
		
			window3x4RedClone05 = window3x4RedOffMesh.clone();
			window3x4RedClone05.position.set( 602, 155 , -938 );
						
			block01Group.add( window3x4RedClone05 );
			//
		
			// Row 03 ---- //
			window3x4RedClone06 = window3x4RedOffMesh.clone();
			window3x4RedClone06.position.set( 602, 130 , -972 );
						
			block01Group.add( window3x4RedClone06 );
			//
		
			window3x4RedClone07 = window3x4RedOffMesh.clone();
			window3x4RedClone07.position.set( 602, 130 , -955 );
						
			block01Group.add( window3x4RedClone07 );
			//
		
			window3x4RedClone08 = window3x4RedOnMesh.clone();
			window3x4RedClone08.position.set( 602, 130 , -938 );
						
			block01Group.add( window3x4RedClone08 );
			//
		
		// Block 01 02b Front Windows ---------------------- //
			var window3x4GreenLargeGeo = new THREE.BoxGeometry( 18, 18, 3 );

			// Block 01 02b Front Windows - Row 01 ---- //
			var window3x4GreenLargeOnMat = new THREE.MeshFaceMaterial( window3x4GreenOnMats );
		
			var window3x4GreenLargeOnMesh = new THREE.Mesh( window3x4GreenLargeGeo, window3x4GreenLargeOnMat );
		
			window3x4GreenLargeOnMesh.position.set( 601, 180, -915 );
			window3x4GreenLargeOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenLargeOnMesh.receiveShadow = true;
			window3x4GreenLargeOnMesh.castShadow = true;
		
			block01Group.add( window3x4GreenLargeOnMesh );
			//
		
			var window3x4GreenLargeOffMat = new THREE.MeshFaceMaterial( window3x4GreenOffMats );
			
			var window3x4GreenLargeOffMesh = new THREE.Mesh( window3x4GreenLargeGeo, window3x4GreenLargeOffMat );

			window3x4GreenLargeOffMesh.position.set( 601, 180 , -915 );
			window3x4GreenLargeOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenLargeOffMesh.receiveShadow = true;
			window3x4GreenLargeOffMesh.castShadow = true;
			//
		
			window3x4GreenLargeClone01 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone01.position.set( 601, 180, -895 );
						
			block01Group.add( window3x4GreenLargeClone01 );
			//
		
			window3x4GreenLargeClone02 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone02.position.set( 601, 180, -875 );
						
			block01Group.add( window3x4GreenLargeClone02 );
			//
		
			window3x4GreenLargeClone03 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone03.position.set( 601, 180 , -855 );
						
			block01Group.add( window3x4GreenLargeClone03 );
			//
		
			// Row 02 ----------- //
			window3x4GreenLargeClone04 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone04.position.set( 601, 155, -915 );
						
			block01Group.add( window3x4GreenLargeClone04 );
			//
		
			window3x4GreenLargeClone05 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone05.position.set( 601, 155, -895 );
						
			block01Group.add( window3x4GreenLargeClone05 );
			//
		
			window3x4GreenLargeClone06 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone06.position.set( 601, 155, -875 );
						
			block01Group.add( window3x4GreenLargeClone06 );
			//
		
			window3x4GreenLargeClone07 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone07.position.set( 601, 155, -855 );
						
			block01Group.add( window3x4GreenLargeClone07 );
			//
		
			// Row 03 ----------- //
			window3x4GreenLargeClone08 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone08.position.set( 601, 130 , -915 );
						
			block01Group.add( window3x4GreenLargeClone08 );
			//
		
			window3x4GreenLargeClone09 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone09.position.set( 601, 130, -895 );
						
			block01Group.add( window3x4GreenLargeClone09 );
			//
		
			window3x4GreenLargeClone10 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone10.position.set( 601, 130, -875 );
						
			block01Group.add( window3x4GreenLargeClone10 );
			//
		
			window3x4GreenLargeClone11 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone11.position.set( 601, 130, -855 );
						
			block01Group.add( window3x4GreenLargeClone11 );
			//
		
		// Block 01 02b Rear Windows ---------------------- //
			window3x4GreenLargeClone12 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone12.position.set( 736, 180, -915 );
						
			block01Group.add( window3x4GreenLargeClone12 );
			//
		
			window3x4GreenLargeClone13 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone13.position.set( 736, 180, -895 );
						
			block01Group.add( window3x4GreenLargeClone13 );
			//
		
			window3x4GreenLargeClone14 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone14.position.set( 736, 180, -875 );
						
			block01Group.add( window3x4GreenLargeClone14 );
			//
		
			window3x4GreenLargeClone15 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone15.position.set( 736, 180 , -855 );
						
			block01Group.add( window3x4GreenLargeClone15 );
			//
		
			// Row 02 ----------- //
			window3x4GreenLargeClone16 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone16.position.set( 736, 155, -915 );
						
			block01Group.add( window3x4GreenLargeClone16 );
			//
		
			window3x4GreenLargeClone17 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone17.position.set( 736, 155, -895 );
						
			block01Group.add( window3x4GreenLargeClone17 );
			//
		
			window3x4GreenLargeClone18 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone18.position.set( 736, 155, -875 );
						
			block01Group.add( window3x4GreenLargeClone18 );
			//
		
			window3x4GreenLargeClone19 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone19.position.set( 736, 155, -855 );
						
			block01Group.add( window3x4GreenLargeClone19 );
			//
		
			// Row 03 ----------- //
			window3x4GreenLargeClone20 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone20.position.set( 736, 130 , -915 );
						
			block01Group.add( window3x4GreenLargeClone20 );
			//
		
			window3x4GreenLargeClone21 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone21.position.set( 736, 130, -895 );
						
			block01Group.add( window3x4GreenLargeClone21 );
			//
		
			window3x4GreenLargeClone22 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone22.position.set( 736, 130, -875 );
						
			block01Group.add( window3x4GreenLargeClone22 );
			//
		
			window3x4GreenLargeClone23 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone23.position.set( 736, 130, -855 );
						
			block01Group.add( window3x4GreenLargeClone23 );
			//
		
		// Block 01 03 Front Windows ---------------------- //
			var window3x4GreenSmallGeo = new THREE.BoxGeometry( 10, 12, 3 );

			// Block 01 03 Front Windows - Row 01 ---- //
			var window3x4GreenSmallOnMat = new THREE.MeshFaceMaterial( window3x4GreenOnMats );
		
			var window3x4GreenSmallOnMesh = new THREE.Mesh( window3x4GreenSmallGeo, window3x4GreenSmallOnMat );
		
			window3x4GreenSmallOnMesh.position.set( 603, 148, -830 );
			window3x4GreenSmallOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenSmallOnMesh.receiveShadow = true;
			window3x4GreenSmallOnMesh.castShadow = true;
		
			block01Group.add( window3x4GreenSmallOnMesh );
			//
		
			var window3x4GreenSmallOffMat = new THREE.MeshFaceMaterial( window3x4GreenOffMats );
			
			var window3x4GreenSmallOffMesh = new THREE.Mesh( window3x4GreenSmallGeo, window3x4GreenSmallOffMat );

			window3x4GreenSmallOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenSmallOffMesh.receiveShadow = true;
			window3x4GreenSmallOffMesh.castShadow = true;
			//
		
			window3x4GreenSmallClone01 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone01.position.set( 603, 148, -818 );
						
			block01Group.add( window3x4GreenSmallClone01 );
			//
		
			window3x4GreenSmallClone02 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone02.position.set( 603, 148, -806 );
						
			block01Group.add( window3x4GreenSmallClone02 );
			//
		
			window3x4GreenSmallClone03 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone03.position.set( 603, 148 , -794 );
						
			block01Group.add( window3x4GreenSmallClone03 );
			//
		
			window3x4GreenSmallClone04 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone04.position.set( 603, 148, -782 );
						
			block01Group.add( window3x4GreenSmallClone04 );
			//
		
			window3x4GreenSmallClone05 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone05.position.set( 603, 148, -770 );
						
			block01Group.add( window3x4GreenSmallClone05 );
			//
		
		// Block 01 03 Front Windows - Row 02 ------ //
			window3x4GreenSmallClone06 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone06.position.set( 603, 130, -830 );
						
			block01Group.add( window3x4GreenSmallClone06 );
			//
		
			window3x4GreenSmallClone07 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone07.position.set( 603, 130, -818 );
						
			block01Group.add( window3x4GreenSmallClone07 );
			//
		
			window3x4GreenSmallClone08 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone08.position.set( 603, 130, -806 );
						
			block01Group.add( window3x4GreenSmallClone08 );
			//
		
			window3x4GreenSmallClone09 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone09.position.set( 603, 130 , -794 );
						
			block01Group.add( window3x4GreenSmallClone09 );
			//
		
			window3x4GreenSmallClone10 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone10.position.set( 603, 130, -782 );
						
			block01Group.add( window3x4GreenSmallClone10 );
			//
		
			window3x4GreenSmallClone11 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone11.position.set( 603, 130, -770 );
						
			block01Group.add( window3x4GreenSmallClone11 );
			//
		
		// Block 01 03 Rear Windows ---------------------- //
			window3x4GreenSmallClone12 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone12.position.set( 737, 148, -830 );
						
			block01Group.add( window3x4GreenSmallClone12 );
			//
		
			window3x4GreenSmallClone13 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone13.position.set( 737, 148, -818 );
						
			block01Group.add( window3x4GreenSmallClone13 );
			//
		
			window3x4GreenSmallClone14 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone14.position.set( 737, 148, -806 );
						
			block01Group.add( window3x4GreenSmallClone14 );
			//
		
			window3x4GreenSmallClone15 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone15.position.set( 737, 148 , -794 );
						
			block01Group.add( window3x4GreenSmallClone15 );
			//
		
			window3x4GreenSmallClone16 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone16.position.set( 737, 148, -782 );
						
			block01Group.add( window3x4GreenSmallClone16 );
			//
		
			window3x4GreenSmallClone17 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone17.position.set( 737, 148, -770 );
						
			block01Group.add( window3x4GreenSmallClone17 );
			//
		
		// Block 01 03 Rear Windows - Row 02 ------ //
			window3x4GreenSmallClone18 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone18.position.set( 737, 130, -830 );
						
			block01Group.add( window3x4GreenSmallClone18 );
			//
		
			window3x4GreenSmallClone19 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone19.position.set( 737, 130, -818 );
						
			block01Group.add( window3x4GreenSmallClone19 );
			//
		
			window3x4GreenSmallClone22 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone22.position.set( 737, 130, -782 );
						
			block01Group.add( window3x4GreenSmallClone22 );
			//
		
			window3x4GreenSmallClone23 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone23.position.set( 737, 130, -770 );
						
			block01Group.add( window3x4GreenSmallClone23 );
			//
		
		// Block 01 03 Front Doors ------ //
			var doorGreenV1Geo = new THREE.BoxGeometry( 10, 22, 3 );
		
			var doorGreenV1OnMat = new THREE.MeshFaceMaterial( doorGreenV1OnMats );
		
			var doorGreenV1OnMesh = new THREE.Mesh( doorGreenV1Geo, doorGreenV1OnMat );
		
			doorGreenV1OnMesh.position.set( 603, 104, -830 );
			doorGreenV1OnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorGreenV1OnMesh.receiveShadow = true;
			doorGreenV1OnMesh.castShadow = true;
		
			block01Group.add( doorGreenV1OnMesh );
			//
		
			var doorGreenV1OffMat = new THREE.MeshFaceMaterial( doorGreenV1OffMats );
			
			var doorGreenV1OffMesh = new THREE.Mesh( doorGreenV1Geo, doorGreenV1OffMat );
		
			doorGreenV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorGreenV1OffMesh.receiveShadow = true;
			doorGreenV1OffMesh.castShadow = true;
			//
		
			doorGreenV1Clone01 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone01.position.set( 603, 104, -818 );
						
			block01Group.add( doorGreenV1Clone01 );
			//
		
			doorGreenV1Clone02 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone02.position.set( 603, 104, -806 );
						
			block01Group.add( doorGreenV1Clone02 );
			//
		
			doorGreenV1Clone03 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone03.position.set( 603, 104, -794 );
						
			block01Group.add( doorGreenV1Clone03 );
			//
		
			doorGreenV1Clone04 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone04.position.set( 603, 104, -782 );
						
			block01Group.add( doorGreenV1Clone04 );
			//
		
			doorGreenV1Clone05 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone05.position.set( 603, 104, -770 );
						
			block01Group.add( doorGreenV1Clone05 );
			//
		
			// Block 01 03 Back Doors ---- //
			doorGreenV1Clone06 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone06.position.set( 737, 125, -806 );
						
			block01Group.add( doorGreenV1Clone06 );
			//
		
			doorGreenV1Clone07 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone07.position.set( 737, 125, -794 );
						
			block01Group.add( doorGreenV1Clone07 );
			//
		
			// Block 01 03 Rear Awning Shape ----- //
			var awningShape03 = new THREE.Shape();
			awningShape03.moveTo(-15, -10);
			awningShape03.lineTo(-15, -9);
			awningShape03.lineTo(15, -5);
			awningShape03.lineTo(15, -10);
			awningShape03.lineTo(-15, -10);

			// Extrude Awning 01 03 Rear Shape ------------ //
			var extrudedAwning03Geo = new THREE.ExtrudeGeometry( awningShape03, {amount: 80, bevelEnabled: false} );

			// Awning 01 03 Rear Mesh
			var extrudedAwning03Mesh = new THREE.Mesh( extrudedAwning03Geo, flatGreyMat );

			extrudedAwning03Mesh.position.set( 737, 148, -761 );
			extrudedAwning03Mesh.rotation.set( 0, 180* Math.PI / 180, 0 );
			block01Group.add( extrudedAwning03Mesh );
			//
		
		// Block 01 04 Awning Shape ----- //
			var awningShape01 = new THREE.Shape();
			awningShape01.moveTo(-15, -10);
			awningShape01.lineTo(-15, -9);
			awningShape01.lineTo(15, -5);
			awningShape01.lineTo(15, -10);
			awningShape01.lineTo(-15, -10);

			// Extrude Awning 01 04 Shape ------------ //
			var extrudedAwning01Geo = new THREE.ExtrudeGeometry( awningShape01, {amount: 125, bevelEnabled: false} );

			// Awning 01 04 Mesh
			var extrudedAwning01Mesh = new THREE.Mesh( extrudedAwning01Geo, flatGreyMat );

			extrudedAwning01Mesh.position.set( 590, 125, -760 );
			block01Group.add( extrudedAwning01Mesh );
			//
		
			// Block 01 05 Awning Shape ----- //
			var awningShape02 = new THREE.Shape();
			awningShape02.moveTo(-15, -10);
			awningShape02.lineTo(-15, -9);
			awningShape02.lineTo(15, -5);
			awningShape02.lineTo(15, -10);
			awningShape02.lineTo(-15, -10);

			// Extrude Awning 01 05 Shape ------------ //
			var extrudedAwning02Geo = new THREE.ExtrudeGeometry( awningShape02, {amount: 68, bevelEnabled: false} );

			// Awning 01 05 Mesh
			var extrudedAwning02Mesh = new THREE.Mesh( extrudedAwning02Geo, flatGreyMat );

			extrudedAwning02Mesh.position.set( 590, 125, -634 );
			block01Group.add( extrudedAwning02Mesh );
			//
		
		// Bolck 01 04 Awning poles ----- //
			var awningPoles01Geo = new THREE.CylinderGeometry( 0.5, 0.5, 30, 16, 16 );
		
			var awningPoles01Mat = new THREE.MeshPhongMaterial( {color: 0xffffff, emissive: 0x000000 } );
		
			var awningPoles01Mesh = new THREE.Mesh( awningPoles01Geo, awningPoles01Mat );
		
			awningPoles01Mesh.position.set( 578, 100, -638 );
		
			block01Group.add( awningPoles01Mesh );
			//
		
			var awningPoles01Clone01 = awningPoles01Mesh.clone();
			
			awningPoles01Clone01.position.set( 578, 100, -655 );
		
			block01Group.add( awningPoles01Clone01 );
			//
		
			var awningPoles01Clone02 = awningPoles01Mesh.clone();
			
			awningPoles01Clone02.position.set( 578, 100, -672 );
		
			block01Group.add( awningPoles01Clone02 );
			//
		
			var awningPoles01Clone03 = awningPoles01Mesh.clone();
			
			awningPoles01Clone03.position.set( 578, 100, -689 );
		
			block01Group.add( awningPoles01Clone03 );
			//
		
			var awningPoles01Clone04 = awningPoles01Mesh.clone();
			
			awningPoles01Clone04.position.set( 578, 100, -706 );
		
			block01Group.add( awningPoles01Clone04 );
			//
		
			var awningPoles01Clone05 = awningPoles01Mesh.clone();
			
			awningPoles01Clone05.position.set( 578, 100, -723 );
		
			block01Group.add( awningPoles01Clone05 );
			//
		
			var awningPoles01Clone06 = awningPoles01Mesh.clone();
			
			awningPoles01Clone06.position.set( 578, 100, -740 );
		
			block01Group.add( awningPoles01Clone06 );
			//
		
			var awningPoles01Clone07 = awningPoles01Mesh.clone();
			
			awningPoles01Clone07.position.set( 578, 100, -757 );
		
			block01Group.add( awningPoles01Clone07 );
			//
		
		// Block 01 05 Awning Poles --- //
			var awningPoles01Clone08 = awningPoles01Mesh.clone();
			
			awningPoles01Clone08.position.set( 578, 100, -631 );
		
			block01Group.add( awningPoles01Clone08 );
			//
		
			var awningPoles01Clone09 = awningPoles01Mesh.clone();
			
			awningPoles01Clone09.position.set( 578, 100, -611 );
		
			block01Group.add( awningPoles01Clone09 );
			//
		
			var awningPoles01Clone10 = awningPoles01Mesh.clone();
			
			awningPoles01Clone10.position.set( 578, 100, -591 );
		
			block01Group.add( awningPoles01Clone10 );
			//
		
			var awningPoles01Clone11 = awningPoles01Mesh.clone();
			
			awningPoles01Clone11.position.set( 578, 100, -571 );
		
			block01Group.add( awningPoles01Clone11 );
			//
		
		//Block 01 04 Beige / Rusty Windows ---------------------------------------------------------------------------------------------- //
			
		
		// Block 01 04 Beige / Rusty Front Windows ---------------------- //
			var window3x4BeigeGeo = new THREE.BoxGeometry( 12, 18, 3 );

			// Block 01 04 Beige / Rusty Front Windows - Row 01 ---- //
			var window3x4BeigeOnMat = new THREE.MeshFaceMaterial( window3x4BeigeOnMats );
		
			var window3x4BeigeOnMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4BeigeOnMat );
		
			window3x4BeigeOnMesh.position.set( 603, 129, -753 );
			window3x4BeigeOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4BeigeOnMesh.receiveShadow = true;
			window3x4BeigeOnMesh.castShadow = true;
		
			block01Group.add( window3x4BeigeOnMesh );
			//
		
			var window3x4BeigeOffMat = new THREE.MeshFaceMaterial( window3x4BeigeOffMats );
			
			var window3x4BeigeOffMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4BeigeOffMat );

			window3x4BeigeOffMesh.position.set( 603, 129 , -739 );
			window3x4BeigeOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4BeigeOffMesh.receiveShadow = true;
			window3x4BeigeOffMesh.castShadow = true;
		
			block01Group.add( window3x4BeigeOffMesh );
			//
		
			window3x4BeigeOnClone01 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone01.position.set( 603, 129, -725 );
						
			block01Group.add( window3x4BeigeOnClone01 );
			//
		
		// Rusty Colored Window Panes ---- //
			var window3x4RustyOnMat = new THREE.MeshFaceMaterial( window3x4RustyOnMats );
		
			var window3x4RustyOnMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RustyOnMat );
				window3x4RustyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RustyOnMesh.receiveShadow = true;
				window3x4RustyOnMesh.castShadow = true;
		
			var window3x4RustyOffMat = new THREE.MeshFaceMaterial( window3x4RustyOffMats );
		
			var window3x4RustyOffMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RustyOffMat );
				window3x4RustyOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RustyOffMesh.receiveShadow = true;
				window3x4RustyOffMesh.castShadow = true;
		
			window3x4RustyOnClone02 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone02.position.set( 603, 129, -711 );
						
			block01Group.add( window3x4RustyOnClone02 );
			//
		
			window3x4RustyOffClone03 = window3x4RustyOffMesh.clone();
			window3x4RustyOffClone03.position.set( 603, 129, -697 );
						
			block01Group.add( window3x4RustyOffClone03 );
			//
		
			window3x4RustyOnClone04 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone04.position.set( 603, 129, -683 );
						
			block01Group.add( window3x4RustyOnClone04 );
			//
		
			window3x4BeigeOnClone05 = window3x4BeigeOffMesh.clone();
			window3x4BeigeOnClone05.position.set( 603, 129, -669 );
						
			block01Group.add( window3x4BeigeOnClone05 );
			//
		
			window3x4BeigeOnClone06 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone06.position.set( 603, 129, -655 );
						
			block01Group.add( window3x4BeigeOnClone06 );
			//
		
			window3x4BeigeOnClone07 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone07.position.set( 603, 129, -641 );
						
			block01Group.add( window3x4BeigeOnClone07 );
			//
		
		// Block 01 04 Beige / Rusty Rear Windows ---------------------- //
			window3x4BeigeOnClone08 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone08.position.set( 737, 129, -753 );
						
			block01Group.add( window3x4BeigeOnClone08 );
			//
		
			window3x4RustyOnClone09 = window3x4BeigeOffMesh.clone();
			window3x4RustyOnClone09.position.set( 737, 129, -739 );
						
			block01Group.add( window3x4RustyOnClone09 );
			//
		
			window3x4BeigeOnClone10 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone10.position.set( 737, 129, -725 );
						
			block01Group.add( window3x4BeigeOnClone10 );
			//
		
			window3x4RustyOnClone11 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone11.position.set( 737, 129, -711 );
						
			block01Group.add( window3x4RustyOnClone11 );
			//
		
			window3x4RustyOffClone12 = window3x4RustyOffMesh.clone();
			window3x4RustyOffClone12.position.set( 737, 129, -697 );
						
			block01Group.add( window3x4RustyOffClone12 );
			//
		
			window3x4RustyOnClone13 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone13.position.set( 737, 129, -683 );
						
			block01Group.add( window3x4RustyOnClone13 );
			//
		
			window3x4BeigeOnClone14 = window3x4BeigeOffMesh.clone();
			window3x4BeigeOnClone14.position.set( 737, 129, -669 );
						
			block01Group.add( window3x4BeigeOnClone14 );
			//
		
			window3x4BeigeOnClone15 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone15.position.set( 737, 129, -655 );
						
			block01Group.add( window3x4BeigeOnClone15 );
			//
		
			window3x4BeigeOnClone16 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone16.position.set( 737, 129, -641.5 );
						
			block01Group.add( window3x4BeigeOnClone16 );
			//
		
		// Block 01 04 Beige / Rusty Front Doors ---------------------- //
		
		
		// Rusty Colored Door Materials ---- //
			
			var doorV2Geo = new THREE.BoxGeometry( 10, 22, 3 );

			var doorV1BeigeOnMat = new THREE.MeshFaceMaterial( doorV1BeigeOnMats );
		
			var doorV1BeigeOnMesh = new THREE.Mesh( doorV2Geo, doorV1BeigeOnMat );
		
			doorV1BeigeOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1BeigeOnMesh.receiveShadow = true;
			doorV1BeigeOnMesh.castShadow = true;
			//
		
			var doorV1BeigeOffMat = new THREE.MeshFaceMaterial( doorV1BeigeOffMats );
			
			var doorV1BeigeOffMesh = new THREE.Mesh( doorV2Geo, doorV1BeigeOffMat );

			doorV1BeigeOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1BeigeOffMesh.receiveShadow = true;
			doorV1BeigeOffMesh.castShadow = true;
			//
		
			var doorV1RustyOnMat = new THREE.MeshFaceMaterial( doorV1RustyOnMats );
			
			var doorV1RustyOnMesh = new THREE.Mesh( doorV2Geo, doorV1RustyOnMat );
		
			doorV1RustyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1RustyOnMesh.receiveShadow = true;
			doorV1RustyOnMesh.castShadow = true;
			//
		
			var doorV1RustyOffMat = new THREE.MeshFaceMaterial( doorV1RustyOffMats );
			
			var doorV1RustyOffMesh = new THREE.Mesh( doorV2Geo, doorV1RustyOffMat );

			doorV1RustyOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1RustyOffMesh.receiveShadow = true;
			doorV1RustyOffMesh.castShadow = true;
			//
		    
		// Block 01 04 Front Doors / Windows ----- //
			window3x4BeigeOnClone17 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone17.position.set( 603, 105, -753 );
			window3x4BeigeOnClone17.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone17 );
			//
		
			doorV1BeigeOnClone01 = doorV1BeigeOnMesh.clone();
			doorV1BeigeOnClone01.position.set( 603, 103.5, -739 );
						
			block01Group.add( doorV1BeigeOnClone01 );
			//
		
			window3x4BeigeOnClone18 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone18.position.set( 603, 105, -725 );
			window3x4BeigeOnClone18.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone18 );
			//
		
			window3x4RustyOnClone19 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone19.position.set( 603, 105, -711 );
			window3x4RustyOnClone19.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4RustyOnClone19 );
			//
		
			doorV1RustyOnClone02 = doorV1RustyOnMesh.clone();
			doorV1RustyOnClone02.position.set( 603, 103.5, -697 );
						
			block01Group.add( doorV1RustyOnClone02 );
			//
		
			window3x4RustyOnClone20 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone20.position.set( 603, 105, -683 );
			window3x4RustyOnClone20.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4RustyOnClone20 );
			//
		
			window3x4BeigeOnClone21 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone21.position.set( 603, 105, -669 );
			window3x4BeigeOnClone21.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone21 );
			//
		
			doorV1BeigeOnClone03 = doorV1BeigeOnMesh.clone();
			doorV1BeigeOnClone03.position.set( 603, 103.5, -655 );
						
			block01Group.add( doorV1BeigeOnClone03 );
			//
		
			window3x4BeigeOnClone22 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone22.position.set( 603, 105, -641 );
			window3x4BeigeOnClone22.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone22 );
			//
		
		// Block 01 04 Beige / Rusty Rear Windows ---------------------- //
			window3x4BeigeOnClone08 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone08.position.set( 737, 129, -753 );
						
			block01Group.add( window3x4BeigeOnClone08 );
			//
		
			window3x4RustyOnClone09 = window3x4BeigeOffMesh.clone();
			window3x4RustyOnClone09.position.set( 737, 129, -739 );
						
			block01Group.add( window3x4RustyOnClone09 );
			//
		
			window3x4BeigeOnClone10 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone10.position.set( 737, 129, -725 );
						
			block01Group.add( window3x4BeigeOnClone10 );
			//
		
			window3x4RustyOnClone11 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone11.position.set( 737, 129, -711 );
						
			block01Group.add( window3x4RustyOnClone11 );
			//
		
			window3x4RustyOffClone12 = window3x4RustyOffMesh.clone();
			window3x4RustyOffClone12.position.set( 737, 129, -697 );
						
			block01Group.add( window3x4RustyOffClone12 );
			//
		
			window3x4RustyOnClone13 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone13.position.set( 737, 129, -683 );
						
			block01Group.add( window3x4RustyOnClone13 );
			//
		
			window3x4BeigeOnClone14 = window3x4BeigeOffMesh.clone();
			window3x4BeigeOnClone14.position.set( 737, 129, -669 );
						
			block01Group.add( window3x4BeigeOnClone14 );
			//
		
			window3x4BeigeOnClone15 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone15.position.set( 737, 129, -655 );
						
			block01Group.add( window3x4BeigeOnClone15 );
			//
		
			window3x4BeigeOnClone16 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone16.position.set( 737, 129, -641.5 );
						
			block01Group.add( window3x4BeigeOnClone16 );
			//
		
		// Block 01 05 Yellow Door V2 ---- //
			
		
		// Block 01 05 Front Doors Mesh --- //
			var doorV2YellowOnMat = new THREE.MeshFaceMaterial( doorV2YellowOnMats );
		
			var doorV2YellowOnMesh = new THREE.Mesh( doorV2Geo, doorV2YellowOnMat );
		
			doorV2YellowOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV2YellowOnMesh.receiveShadow = true;
			doorV2YellowOnMesh.castShadow = true;
			//
		
			var doorV2YellowOffMat = new THREE.MeshFaceMaterial( doorV2YellowOffMats );
			
			var doorV2YellowOffMesh = new THREE.Mesh( doorV2Geo, doorV2YellowOffMat );

			doorV2YellowOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV2YellowOffMesh.receiveShadow = true;
			doorV2YellowOffMesh.castShadow = true;
			//
			var doorV2YellowOffClone01 = doorV2YellowOffMesh.clone();
		
			doorV2YellowOffClone01.position.set( 602, 103.5, -625 );
			doorV2YellowOffClone01.scale.set( 1.25, 1, 1 );
			doorV2YellowOffClone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( doorV2YellowOffClone01 );
			//
		
			var doorV2YellowOnClone02 = doorV2YellowOnMesh.clone();
		
			doorV2YellowOnClone02.position.set( 602, 103.5, -600 );
			doorV2YellowOnClone02.scale.set( 1.25, 1, 1 );
			doorV2YellowOnClone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( doorV2YellowOnClone02 );
			//
		
			var doorV2YellowOnClone03 = doorV2YellowOnMesh.clone();
		
			doorV2YellowOnClone03.position.set( 602, 103.5, -575 );
			doorV2YellowOnClone03.scale.set( 1.25, 1, 1 );
			doorV2YellowOnClone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( doorV2YellowOnClone03 );
			//
		
		// Block 01 05 Front Windows --- //
			var windowYellowV1OffClone01 = windowYellowV1OffMesh.clone();
		
			windowYellowV1OffClone01.position.set( 601, 135, -625 );
			windowYellowV1OffClone01.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OffClone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OffClone01 );
			//
		
			var windowYellowV1OnClone02 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone02.position.set( 601, 135, -600 );
			windowYellowV1OnClone02.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone02 );
			//
		
			var windowYellowV1OnClone03 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone03.position.set( 601, 135, -575 );
			windowYellowV1OnClone03.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone03 );
			//
		
		// Block 01 05 Rear Windows --- //
			var windowYellowV1OffClone04 = windowYellowV1OffMesh.clone();
		
			windowYellowV1OffClone04.position.set( 736, 135, -625 );
			windowYellowV1OffClone04.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OffClone04.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OffClone04 );
			//
		
			var windowYellowV1OnClone05 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone05.position.set( 736, 135, -600 );
			windowYellowV1OnClone05.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone05.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone05 );
			//
		
			var windowYellowV1OnClone06 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone06.position.set( 736, 135, -575 );
			windowYellowV1OnClone06.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone06.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone06 );
			//
		
		// Old Rock House Windows ---- //
			// Top Front Window (small)---- //
			window3x4RedORHClone01 = window3x4RedOffMesh.clone();
			window3x4RedORHClone01.position.set( 601, 145 , -530 );
			window3x4RedORHClone01.scale.set( 0.7, 0.35 , 1 );
						
			block01Group.add( window3x4RedORHClone01 );
			//
		
			// Middle Front Windows ---- //
			window3x4RedORHClone02 = window3x4RedOffMesh.clone();
			window3x4RedORHClone02.position.set( 601, 130 , -550 );
			window3x4RedORHClone02.scale.set( 1, 0.75 , 1 );
						
			block01Group.add( window3x4RedORHClone02 );
			//
		
			window3x4RedORHClone03 = window3x4RedOffMesh.clone();
			window3x4RedORHClone03.position.set( 601, 130 , -530 );
			window3x4RedORHClone03.scale.set( 1, 0.75 , 1 );
						
			block01Group.add( window3x4RedORHClone03 );
			//
		
			window3x4RedORHClone04 = window3x4RedOffMesh.clone();
			window3x4RedORHClone04.position.set( 601, 130 , -510 );
			window3x4RedORHClone04.scale.set( 1, 0.75 , 1 );
						
			block01Group.add( window3x4RedORHClone04 );
			//
		
			// Top Rear Window (small)---- //
			window3x4RedORHClone05 = window3x4RedOffMesh.clone();
			window3x4RedORHClone05.position.set( 759, 145 , -530 );
			window3x4RedORHClone05.scale.set( 0.7, 0.35 , 1 );
						
			block01Group.add( window3x4RedORHClone05 );
			//
		
			
			
			var window3x4RedShuttersOnMat = new THREE.MeshFaceMaterial( window3x4RedShuttersOnMats );
		
			var window3x4RedShuttersOnMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RedShuttersOnMat );
				window3x4RedShuttersOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RedShuttersOnMesh.receiveShadow = true;
				window3x4RedShuttersOnMesh.castShadow = true;
		
			var window3x4RedShuttersOffMat = new THREE.MeshFaceMaterial( window3x4RedShuttersOffMats );
		
			var window3x4RedShuttersOffMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RedShuttersOffMat );
				window3x4RedShuttersOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RedShuttersOffMesh.receiveShadow = true;
				window3x4RedShuttersOffMesh.castShadow = true;
			//
		
			window3x4RedShuttersClone01 = window3x4RedShuttersOnMesh.clone();
			window3x4RedShuttersClone01.position.set( 601, 107 , -550 );
			window3x4RedShuttersClone01.scale.set( 1.25, 0.75 , 1 );
						
			block01Group.add( window3x4RedShuttersClone01 );
			//
		
			window3x4RedShuttersClone02 = window3x4RedShuttersOnMesh.clone();
			window3x4RedShuttersClone02.position.set( 601, 107 , -510 );
			window3x4RedShuttersClone02.scale.set( 1.25, 0.75 , 1 );
						
			block01Group.add( window3x4RedShuttersClone02 );
			//
		
			// ORH Side Window --- //
			window3x4RedShuttersClone03 = window3x4RedShuttersOffMesh.clone();
			window3x4RedShuttersClone03.position.set( 725, 130 , -496 );
			window3x4RedShuttersClone03.rotation.set( 0, 0, 0 );
			window3x4RedShuttersClone03.scale.set( 1.25, 0.75 , 1 );
						
			block01Group.add( window3x4RedShuttersClone03 );
			//
		
		// Block 01 05 ORH Doors ------ //
			
		
			var doorRedV1Geo = new THREE.BoxGeometry( 10, 22, 3 );
		
			var doorRedV1OnMat = new THREE.MeshFaceMaterial( doorRedV1OnMats );
		
			var doorRedV1OnMesh = new THREE.Mesh( doorRedV1Geo, doorRedV1OnMat );
		
			doorRedV1OnMesh.position.set( 601, 103 , -530 );
			doorRedV1OnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorRedV1OnMesh.scale.set( 1.5, 1, 1 );
			doorRedV1OnMesh.receiveShadow = true;
			doorRedV1OnMesh.castShadow = true;
		
			block01Group.add( doorRedV1OnMesh );
			//
		
			var doorRedV1OffMat = new THREE.MeshFaceMaterial( doorRedV1OffMats );
			
			var doorRedV1OffMesh = new THREE.Mesh( doorRedV1Geo, doorRedV1OffMat );
		
			doorRedV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorRedV1OffMesh.receiveShadow = true;
			doorRedV1OffMesh.castShadow = true;
			//
		
			doorRedV1Clone01 = doorRedV1OffMesh.clone();
			doorRedV1Clone01.position.set( 660, 105, -496 );
			doorRedV1Clone01.rotation.set( 0, 0, 0 );
						
			block01Group.add( doorRedV1Clone01 );
			//
		
			// ORH Rear Door ----- //
			doorRedV1Clone02 = doorRedV1OnMesh.clone();
			doorRedV1Clone02.scale.set( 0.75, 0.75 , 1 );
			doorRedV1Clone02.position.set( 759, 127 , -530 );
			doorRedV1Clone02.rotation.set( 0, 90* Math.PI / 180, 0 );
						
			block01Group.add( doorRedV1Clone02 );
			//
		
		// Block 01 Roof Geometry ----- //
		// Block 01 01a Roof Shape ----- //
			var block0101aRoofShape = new THREE.Shape();
			block0101aRoofShape.moveTo(-55, -31);
			block0101aRoofShape.lineTo(0, -16);
			block0101aRoofShape.lineTo(55, -31);
			block0101aRoofShape.lineTo(-55, -31);

			// Extrude Triangle Shape ------------ //
			var block0101aRoofGeo = new THREE.ExtrudeGeometry( block0101aRoofShape, {amount: 105, bevelEnabled: false} );

			// Block 01 01a Roof Mesh
			var block0101aRoofMesh = new THREE.Mesh( block0101aRoofGeo, oldBrickMat01r2 );

			block0101aRoofMesh.position.set( 654, 251 , -1087.5 );
			block0101aRoofMesh.rotation.set( 0, 0, 0 );
			block0101aRoofMesh.castShadow = true;
			block0101aRoofMesh.receiveShadow = true;
		
			block01Group.add( block0101aRoofMesh );

			// Block 01 01a Rooftop ------------- //
			var block0101aRoofTop = new THREE.Shape();
			block0101aRoofTop.moveTo(-55, -30);
			block0101aRoofTop.lineTo(0, -15);
			block0101aRoofTop.lineTo(55, -30);
			block0101aRoofTop.lineTo(55, -31);
			block0101aRoofTop.lineTo(0, -16);
			block0101aRoofTop.lineTo(-55, -31);
			block0101aRoofTop.lineTo(-55, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0101aRoofTopGeo = new THREE.ExtrudeGeometry( block0101aRoofTop, {amount: 109, bevelEnabled: false} );

			// Block 01 01a Rooftop Mesh
			var block0101aRoofTopMesh = new THREE.Mesh( block0101aRoofTopGeo, flatGreyMat );

			block0101aRoofTopMesh.position.set( 654, 251 , -1089.5 );
			block0101aRoofTopMesh.rotation.set( 0, 0, 0 );
			block0101aRoofTopMesh.castShadow = true;
			block0101aRoofTopMesh.receiveShadow = true;
		
		
			block01Group.add( block0101aRoofTopMesh );
		
			// Block 01 01a Roof UV //
			function assignblock0101aRoofUV() {
				
			block0101aRoofGeo.computeBoundingBox();

			var max = block0101aRoofGeo.boundingBox.max,
				min = block0101aRoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0101aRoofGeo.faces;

			block0101aRoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0101aRoofGeo.vertices[faces[i].a], 
					v2 = block0101aRoofGeo.vertices[faces[i].b], 
					v3 = block0101aRoofGeo.vertices[faces[i].c];

				block0101aRoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0101aRoofUV();
			//
		
		// Block 01 02 Roof Shape ----- //
			var block0102RoofShape = new THREE.Shape();
			block0102RoofShape.moveTo(-70, -31);
			block0102RoofShape.lineTo(0, -14);
			block0102RoofShape.lineTo(70, -31);
			block0102RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0102RoofGeo = new THREE.ExtrudeGeometry( block0102RoofShape, {amount: 142, bevelEnabled: false} );

			// Block 01 02 Roof Mesh
			var block0102RoofMesh = new THREE.Mesh( block0102RoofGeo, oldBrickMat01r2 );

			block0102RoofMesh.position.set( 670, 226 , -983 );
			block0102RoofMesh.rotation.set( 0, 0, 0 );
			block0102RoofMesh.castShadow = true;
			block0102RoofMesh.receiveShadow = true;
		
			block01Group.add( block0102RoofMesh );

			// Block 01 02 Rooftop ------------- //
			var block0102RoofTop = new THREE.Shape();
			block0102RoofTop.moveTo(-70, -30);
			block0102RoofTop.lineTo(0, -13);
			block0102RoofTop.lineTo(70, -30);
			block0102RoofTop.lineTo(70, -31);
			block0102RoofTop.lineTo(0, -14);
			block0102RoofTop.lineTo(-70, -31);
			block0102RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0102RoofTopGeo = new THREE.ExtrudeGeometry( block0102RoofTop, {amount: 144, bevelEnabled: false} );

			// Block 01 02 Rooftop Mesh
			var block0102RoofTopMesh = new THREE.Mesh( block0102RoofTopGeo, flatGreyMat );

			block0102RoofTopMesh.position.set( 670, 226 , -983 );
			block0102RoofTopMesh.rotation.set( 0, 0, 0 );
			block0102RoofTopMesh.castShadow = true;
			block0102RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0102RoofTopMesh );
		
			// Block 01 02 Roof UV //
			function assignblock0102RoofUV() {
				
			block0102RoofGeo.computeBoundingBox();

			var max = block0102RoofGeo.boundingBox.max,
				min = block0102RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0102RoofGeo.faces;

			block0102RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0102RoofGeo.vertices[faces[i].a], 
					v2 = block0102RoofGeo.vertices[faces[i].b], 
					v3 = block0102RoofGeo.vertices[faces[i].c];

				block0102RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0102RoofUV();
			//
		
		// Block 01 03 Roof Mesh
			var block0103RoofShape = new THREE.Shape();
			block0103RoofShape.moveTo(-70, -31);
			block0103RoofShape.lineTo(0, -1);
			block0103RoofShape.lineTo(70, -31);
			block0103RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0103RoofGeo = new THREE.ExtrudeGeometry( block0103RoofShape, {amount: 81, bevelEnabled: false} );

			// Block 01 02 Roof Mesh
			var block0103RoofMesh = new THREE.Mesh( block0103RoofGeo, sailLoftMat01r );

			block0103RoofMesh.position.set( 670, 191 , -841.5 );
			block0103RoofMesh.rotation.set( 0, 0, 0 );
			block0103RoofMesh.castShadow = true;
			block0103RoofMesh.receiveShadow = true;
		
			block01Group.add( block0103RoofMesh );
		
			// Block 01 03 Rooftop ------------- //
			var block0103RoofTop = new THREE.Shape();
			block0103RoofTop.moveTo(-70, -30);
			block0103RoofTop.lineTo(0, 0);
			block0103RoofTop.lineTo(70, -30);
			block0103RoofTop.lineTo(70, -31);
			block0103RoofTop.lineTo(0, -1);
			block0103RoofTop.lineTo(-70, -31);
			block0103RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0103RoofTopGeo = new THREE.ExtrudeGeometry( block0103RoofTop, {amount: 81, bevelEnabled: false} );

			// Block 01 03 Rooftop Mesh
			var block0103RoofTopMesh = new THREE.Mesh( block0103RoofTopGeo, flatGreyMat );

			block0103RoofTopMesh.position.set( 670, 191 , -841.5 );
			block0103RoofTopMesh.rotation.set( 0, 0, 0 );
			block0103RoofTopMesh.castShadow = true;
			block0103RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0103RoofTopMesh );
		
		// Block 01 03 Roof UV //
			function assignblock0103RoofUV() {
				
			block0103RoofGeo.computeBoundingBox();

			var max = block0103RoofGeo.boundingBox.max,
				min = block0103RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0103RoofGeo.faces;

			block0103RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0103RoofGeo.vertices[faces[i].a], 
					v2 = block0103RoofGeo.vertices[faces[i].b], 
					v3 = block0103RoofGeo.vertices[faces[i].c];

				block0103RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0103RoofUV();
			//
		
		// Block 01 04 Roof Shape ----- //
			var block0104RoofShape = new THREE.Shape();
			block0104RoofShape.moveTo(-70, -31);
			block0104RoofShape.lineTo(0, -14);
			block0104RoofShape.lineTo(70, -31);
			block0104RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0104RoofGeo = new THREE.ExtrudeGeometry( block0104RoofShape, {amount: 125, bevelEnabled: false} );

			// Block 01 04 Roof Mesh
			var block0104RoofMesh = new THREE.Mesh( block0104RoofGeo, oldBrickMat01r2 );

			block0104RoofMesh.position.set( 670, 171 , -760 );
			block0104RoofMesh.rotation.set( 0, 0, 0 );
			block0104RoofMesh.castShadow = true;
			block0104RoofMesh.receiveShadow = true;
		
			block01Group.add( block0104RoofMesh );

			// Block 01 04 Rooftop ------------- //
			var block0104RoofTop = new THREE.Shape();
			block0104RoofTop.moveTo(-70, -30);
			block0104RoofTop.lineTo(0, -13);
			block0104RoofTop.lineTo(70, -30);
			block0104RoofTop.lineTo(70, -31);
			block0104RoofTop.lineTo(0, -14);
			block0104RoofTop.lineTo(-70, -31);
			block0104RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0104RoofTopGeo = new THREE.ExtrudeGeometry( block0104RoofTop, {amount: 125, bevelEnabled: false} );

			// Block 01 02 Rooftop Mesh
			var block0104RoofTopMesh = new THREE.Mesh( block0104RoofTopGeo, flatGreyMat );

			block0104RoofTopMesh.position.set( 670, 171 , -760 );
			block0104RoofTopMesh.rotation.set( 0, 0, 0 );
			block0104RoofTopMesh.castShadow = true;
			block0104RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0104RoofTopMesh );
		
			// Block 01 04 Roof UV //
			function assignblock0104RoofUV() {
				
			block0104RoofGeo.computeBoundingBox();

			var max = block0104RoofGeo.boundingBox.max,
				min = block0104RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0104RoofGeo.faces;

			block0104RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0104RoofGeo.vertices[faces[i].a], 
					v2 = block0104RoofGeo.vertices[faces[i].b], 
					v3 = block0104RoofGeo.vertices[faces[i].c];

				block0104RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0104RoofUV();
			//
		
		// Block 01 05 Roof Shape ----- //
			var block0105RoofShape = new THREE.Shape();
			block0105RoofShape.moveTo(-70, -31);
			block0105RoofShape.lineTo(0, -1);
			block0105RoofShape.lineTo(70, -31);
			block0105RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0105RoofGeo = new THREE.ExtrudeGeometry( block0105RoofShape, {amount: 70, bevelEnabled: false} );

			// Block 01 05 Roof Mesh
			var block0105RoofMesh = new THREE.Mesh( block0105RoofGeo, oldBrickMat01r );

			block0105RoofMesh.position.set( 670, 179 , -635 );
			block0105RoofMesh.rotation.set( 0, 0, 0 );
			block0105RoofMesh.castShadow = true;
			block0105RoofMesh.receiveShadow = true;
		
			block01Group.add( block0105RoofMesh );

			// Block 01 05 Rooftop ------------- //
			var block0105RoofTop = new THREE.Shape();
			block0105RoofTop.moveTo(-70, -30);
			block0105RoofTop.lineTo(0, -0);
			block0105RoofTop.lineTo(70, -30);
			block0105RoofTop.lineTo(70, -31);
			block0105RoofTop.lineTo(0, -1);
			block0105RoofTop.lineTo(-70, -31);
			block0105RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0105RoofTopGeo = new THREE.ExtrudeGeometry( block0105RoofTop, {amount: 70, bevelEnabled: false} );

			// Block 01 05 Rooftop Mesh
			var block0105RoofTopMesh = new THREE.Mesh( block0105RoofTopGeo, flatGreyMat );

			block0105RoofTopMesh.position.set( 670, 179 , -635 );
			block0105RoofTopMesh.rotation.set( 0, 0, 0 );
			block0105RoofTopMesh.castShadow = true;
			block0105RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0105RoofTopMesh );
		
			// Block 01 05 Roof UV //
			function assignblock0105RoofUV() {
				
			block0105RoofGeo.computeBoundingBox();

			var max = block0105RoofGeo.boundingBox.max,
				min = block0105RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0105RoofGeo.faces;

			block0105RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0105RoofGeo.vertices[faces[i].a], 
					v2 = block0105RoofGeo.vertices[faces[i].b], 
					v3 = block0105RoofGeo.vertices[faces[i].c];

				block0105RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0105Geo.uvsNeedUpdate = true;
			
			}
		
			assignblock0105RoofUV();
			//
		
		
		// Block 01 06 Sail Loft Roof ------------- //
		
			var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'tents-sign.mtl', function ( tentSignMaterials ) {

				tentSignMaterials.preload();
				tentSignMaterials.shading = THREE.FlatShading;
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( tentSignMaterials );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load( 'tents-sign.obj', function ( tentSignOBJ ) {

					block01Group.add( tentSignOBJ );
					tentSignOBJ.scale.set( 0.25, 0.25, 0.25 );
					tentSignOBJ.rotation.set( 0, 270* Math.PI / 180, 0);
					tentSignOBJ.position.set( 1235, 154, -2388 );
				});
				
			});
			
				//
		
			var sailLoftRoofShape = new THREE.Shape();
			sailLoftRoofShape.moveTo(-35, -30);
			sailLoftRoofShape.lineTo(-33, -30);
			sailLoftRoofShape.lineTo(0, -17);
			sailLoftRoofShape.lineTo(33, -30);
			sailLoftRoofShape.lineTo(35, -30);
			sailLoftRoofShape.lineTo(35, -31);
			sailLoftRoofShape.lineTo(-35, -31);
			sailLoftRoofShape.lineTo(-35, -30);

			// Extrude Triangle Shape ------------ //
			var sailLoftRoofGeo = new THREE.ExtrudeGeometry( sailLoftRoofShape, {amount: 160, bevelEnabled: false} );

			// Block 01 06 Sail Loft Roof Mesh
			var sailLoftRoofMesh = new THREE.Mesh( sailLoftRoofGeo, sailLoftMat01r );

			sailLoftRoofMesh.position.set( 600, 171 , -530 );
			sailLoftRoofMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
			sailLoftRoofMesh.castShadow = true;
			sailLoftRoofMesh.receiveShadow = true;
		
			block01Group.add( sailLoftRoofMesh );

			// Block 01 06 Sail Loft Rooftop ------------- //
			var sailLoftRoofTop = new THREE.Shape();
			sailLoftRoofTop.moveTo(-35, -30);
			sailLoftRoofTop.lineTo(0, -15);
			sailLoftRoofTop.lineTo(35, -30);
			sailLoftRoofTop.lineTo(35, -31);
			sailLoftRoofTop.lineTo(0, -16);
			sailLoftRoofTop.lineTo(-35, -31);
			sailLoftRoofTop.lineTo(-35, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var sailLoftRoofTopGeo = new THREE.ExtrudeGeometry( sailLoftRoofTop, {amount: 160, bevelEnabled: false} );

			// Block 01 06 Sail Loft Rooftop Mesh
			var sailLoftRoofTopMesh = new THREE.Mesh( sailLoftRoofTopGeo, concreteBeigeMat01 );

			sailLoftRoofTopMesh.position.set( 600, 172 , -530 );
			sailLoftRoofTopMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
			block01Group.add( sailLoftRoofTopMesh );
		
			// Block 01 06 Sail Loft Rooftop Trim ------------- //
			var sailLoftRoofTopTrim = new THREE.Shape();
			sailLoftRoofTopTrim.moveTo(-35, -31);
			sailLoftRoofTopTrim.lineTo(0, -16);
			sailLoftRoofTopTrim.lineTo(35, -31);
			sailLoftRoofTopTrim.lineTo(33, -31);
			sailLoftRoofTopTrim.lineTo(0, -18);
			sailLoftRoofTopTrim.lineTo(-33, -31);
			sailLoftRoofTopTrim.lineTo(-35, -31);

			// Extrude Rooftop Triangle Shape ------------ //
			var sailLoftRoofTopTrimGeo = new THREE.ExtrudeGeometry( sailLoftRoofTopTrim, {amount: 160, bevelEnabled: false} );
		
			var redTrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ) // Right side

			// Block 01 06 Sail Loft Rooftop Mesh
			var sailLoftRoofTopTrimMesh = new THREE.Mesh( sailLoftRoofTopTrimGeo, redTrimMat );

			sailLoftRoofTopTrimMesh.position.set( 600, 172 , -530 );
			sailLoftRoofTopTrimMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
			block01Group.add( sailLoftRoofTopTrimMesh );
		
			// ------------ Map Custom Roof Shape UVs------------- //
		
			// City Market Roof 01 //
			function assignsailLoftRoofUV() {
				
			sailLoftRoofGeo.computeBoundingBox();

			var max = sailLoftRoofGeo.boundingBox.max,
				min = sailLoftRoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = sailLoftRoofGeo.faces;

			sailLoftRoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = sailLoftRoofGeo.vertices[faces[i].a], 
					v2 = sailLoftRoofGeo.vertices[faces[i].b], 
					v3 = sailLoftRoofGeo.vertices[faces[i].c];

				sailLoftRoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			sailLoftRoofGeo.uvsNeedUpdate = true;
			
			}
		
			assignsailLoftRoofUV();
			//
		
		//scene.add( block01Group );
		block01Group.position.set( -256, 0, 0 );
		block01Group.rotation.set( 0, 90 * Math.PI / 180, 0 );
		//
		
	// Block 02 Group -------------------------- //
		var block02Group = new THREE.Group();
		
		// Building 01 ------------------- //
			block0201Geo = new THREE.BoxGeometry( 160, 140, 210 );
			block0201Mesh = new THREE.Mesh ( block0201Geo, oldBrickMat02w );

			block0201Mesh.position.set( 680, 160, -188 );
			block0201Mesh.receiveShadow = true;
			block0201Mesh.castShadow = true;
			block0201Mesh.side = THREE.DoubleSide;
		
		// Block 02 01 Front Windows --- //
			
		
		// Block 02 01 Front Windows V1 ---------------------- //
			var windowBeige2x4V1Geo = new THREE.BoxGeometry( 20, 30, 1 );
		
		// Beige 2x4 Window V1 Off ---- //
			var windowBeige2x4V1OffMat = new THREE.MeshFaceMaterial( windowBeige2x4V1OffMats );
		
			var windowBeige2x4V1OffMesh = new THREE.Mesh( windowBeige2x4V1Geo, windowBeige2x4V1OffMat );

			windowBeige2x4V1OffMesh.receiveShadow = true;
			windowBeige2x4V1OffMesh.castShadow = true;
			//
			
		// Beige 2x4 Window V1 On ---- //
			var windowBeige2x4V1OnMat = new THREE.MeshFaceMaterial( windowBeige2x4V1OnMats );
		
			var windowBeige2x4V1OnMesh = new THREE.Mesh( windowBeige2x4V1Geo, windowBeige2x4V1OnMat );

			windowBeige2x4V1OnMesh.receiveShadow = true;
			windowBeige2x4V1OnMesh.castShadow = true;
			//
			
		// --- Row 03 --- //
			var windowBeige2x4V1Clone01 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone01.position.set( 600, 143, -273 );
			windowBeige2x4V1Clone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone01 );
			//
		
			var windowBeige2x4V1Clone02 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone02.position.set( 600, 143, -243 );
			windowBeige2x4V1Clone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone02 );
			//
		
			var windowBeige2x4V1Clone03 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone03.position.set( 600, 143, -213 );
			windowBeige2x4V1Clone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone03 );
			//
		
			var windowBeige2x4V1Clone04 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone04.position.set( 600, 143, -183 );
			windowBeige2x4V1Clone04.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone04 );
			//
			
		// --- Row 02 --- //
			var windowBeige2x4V1Clone05 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone05.position.set( 600, 180, -273 );
			windowBeige2x4V1Clone05.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone05 );
			//
		
			var windowBeige2x4V1Clone06 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone06.position.set( 600, 180, -243 );
			windowBeige2x4V1Clone06.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone06 );
			//
		
			var windowBeige2x4V1Clone07 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone07.position.set( 600, 180, -213 );
			windowBeige2x4V1Clone07.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone07 );
			//
		
			var windowBeige2x4V1Clone08 = windowBeige2x4V1OffMesh.clone();
		
			windowBeige2x4V1Clone08.position.set( 600, 180, -183 );
			windowBeige2x4V1Clone08.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone08 );
			//
			
		// --- Row 01 --- //
			var windowBeige2x4V1Clone09 = windowBeige2x4V1OffMesh.clone();
		
			windowBeige2x4V1Clone09.position.set( 600, 212, -273 );
			windowBeige2x4V1Clone09.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone09.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone09 );
			//
		
			var windowBeige2x4V1Clone10 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone10.position.set( 600, 212, -243 );
			windowBeige2x4V1Clone10.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone10.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone10 );
			//
		
			var windowBeige2x4V1Clone11 = windowBeige2x4V1OffMesh.clone();
		
			windowBeige2x4V1Clone11.position.set( 600, 212, -213 );
			windowBeige2x4V1Clone11.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone11.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone11 );
			//
		
			var windowBeige2x4V1Clone12 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone12.position.set( 600, 212, -183 );
			windowBeige2x4V1Clone12.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone12.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( windowBeige2x4V1Clone12 );
			//
		
		// Block 02 01a Windows --- //
		
			// Row 01 --- //
			var window3x4RedClone19 = window3x4RedOnMesh.clone();
		
			window3x4RedClone19.position.set( 600, 212, -150 );
			window3x4RedClone19.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone19.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone19 );
			//
		
			var window3x4RedClone20 = window3x4RedOffMesh.clone();
		
			window3x4RedClone20.position.set( 600, 212, -125 );
			window3x4RedClone20.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone20.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone20 );
			//
		
			var window3x4RedClone21 = window3x4RedOffMesh.clone();
		
			window3x4RedClone21.position.set( 600, 212, -100 );
			window3x4RedClone21.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone21.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone21 );
			//
		
			// Row 02 --- //
			var window3x4RedClone22 = window3x4RedOffMesh.clone();
		
			window3x4RedClone22.position.set( 600, 175, -150 );
			window3x4RedClone22.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone22.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone22 );
			//
		
			var window3x4RedClone23 = window3x4RedOnMesh.clone();
		
			window3x4RedClone23.position.set( 600, 175, -125 );
			window3x4RedClone23.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone23.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone23 );
			//
		
			var window3x4RedClone24 = window3x4RedOffMesh.clone();
		
			window3x4RedClone24.position.set( 600, 175, -100 );
			window3x4RedClone24.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone24.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone24 );
			//
		
			// Row 03 --- //
			var window3x4RedClone25 = window3x4RedOnMesh.clone();
		
			window3x4RedClone25.position.set( 600, 138, -150 );
			window3x4RedClone25.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone25.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone25 );
			//
		
			var window3x4RedClone26 = window3x4RedOffMesh.clone();
		
			window3x4RedClone26.position.set( 600, 138, -125 );
			window3x4RedClone26.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone26.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone26 );
			//
		
			var window3x4RedClone27 = window3x4RedOnMesh.clone();
		
			window3x4RedClone27.position.set( 600, 138, -100 );
			window3x4RedClone27.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone27.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block02Group.add( window3x4RedClone27 );
			//
		
			// Block 02 01 Front Trim ---------------------- //
			var block0201TrimGeo = new THREE.BoxGeometry( 5, 9, 128 );
		
			var block0201TrimTex = textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg", function ( block0201TrimTex ) {

				block0201TrimTex.wrapS = block0201TrimTex.wrapT = THREE.RepeatWrapping;
				block0201TrimTex.repeat.x = 100 / 50;
				block0201TrimTex.repeat.y = 12 / 100;

			} );
		
			var block0201TrimMat = new THREE.MeshPhongMaterial( { map: block0201TrimTex, side: THREE.DoubleSide } );
			// Beige Trim Material
		
			var block0201TrimMesh = new THREE.Mesh( block0201TrimGeo, block0201TrimMat );

			block0201TrimMesh.position.set( 598, 119, -228 );
			block0201TrimMesh.rotation.set( 0, 0, 0 );

			block02Group.add( block0201TrimMesh );
			//
		
			// Block 02 01 Front Pillars ---------------------- //
			var block0201PillarGeo = new THREE.BoxGeometry( 5, 30, 9 );
		
			var block0201PillarTex = textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg", function ( block0201TrimTex ) {

				block0201PillarTex.wrapS = block0201PillarTex.wrapT = THREE.RepeatWrapping;
				block0201PillarTex.repeat.x = 100 / 50;
				block0201PillarTex.repeat.y = 12 / 100;

			} );
		
			var block0201PillarMat = new THREE.MeshPhongMaterial( { map: block0201PillarTex, side: THREE.DoubleSide } );
			// Beige Pillar Material
		
			var block0201PillarMesh = new THREE.Mesh( block0201PillarGeo, block0201PillarMat );

			block0201PillarMesh.position.set( 598, 100, -287.5 );
			block0201PillarMesh.rotation.set( 0, 0, 0 );

			block02Group.add( block0201PillarMesh );
			//
		
			var block0201PillarClone01 = block0201PillarMesh.clone();
			
			block0201PillarClone01.position.set( 598, 100, -258 );
			block0201PillarClone01.rotation.set( 0, 0, 0 );

			block02Group.add( block0201PillarClone01 );
			//
		
			var block0201PillarClone02 = block0201PillarMesh.clone();
			
			block0201PillarClone02.position.set( 598, 100, -228 );
			block0201PillarClone02.rotation.set( 0, 0, 0 );

			block02Group.add( block0201PillarClone02 );
			//
		
			var block0201PillarClone03 = block0201PillarMesh.clone();
			
			block0201PillarClone03.position.set( 598, 100, -198 );
			block0201PillarClone03.rotation.set( 0, 0, 0 );

			block02Group.add( block0201PillarClone03 );
			//
		
			var block0201PillarClone04 = block0201PillarMesh.clone();
			
			block0201PillarClone04.position.set( 598, 100, -168.5 );
			block0201PillarClone04.rotation.set( 0, 0, 0 );

			block02Group.add( block0201PillarClone04 );
			//
		
		// Building 02 ------------------- //
			block0202Geo = new THREE.BoxGeometry( 160, 150, 250 );
			block0202Mesh = new THREE.Mesh ( block0202Geo, oldBrickMat02w );

			block0202Mesh.position.set( 680, 167, 40 );
			block0202Mesh.receiveShadow = true;
			block0202Mesh.castShadow = true;
			block0202Mesh.side = THREE.DoubleSide;
		
			// Building 02 Front Windows - Row 01 ---- //
//			var window3x4BeigeShuttersGeo = new THREE.BoxGeometry( 18, 18, 3 );
//			
//			var window3x4BeigeShuttersOnMat = new THREE.MeshFaceMaterial( window3x4BeigeShuttersOnMats );
//		
//			var window3x4BeigeShuttersOnMesh = new THREE.Mesh( window3x4BeigeShuttersGeo, window3x4BeigeShuttersOnMat );
//		
//			window3x4BeigeShuttersOnMesh.position.set( 601, 180, -915 );
//			window3x4BeigeShuttersOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
//			window3x4BeigeShuttersOnMesh.receiveShadow = true;
//			window3x4BeigeShuttersOnMesh.castShadow = true;
//		
//			block02Group.add( window3x4BeigeShuttersOnMesh );
//			//
//		
//			var window3x4BeigeShuttersOffMat = new THREE.MeshFaceMaterial( window3x4BeigeShuttersOffMats );
//			
//			var window3x4BeigeShuttersOffMesh = new THREE.Mesh( window3x4BeigeShuttersGeo, window3x4BeigeShuttersOffMat );
//
//			window3x4BeigeShuttersOffMesh.position.set( 601, 180 , -915 );
//			window3x4BeigeShuttersOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
//			window3x4BeigeShuttersOffMesh.receiveShadow = true;
//			window3x4BeigeShuttersOffMesh.castShadow = true;
			//
		
		// Building 03 ------------------- //
			block0203Geo = new THREE.BoxGeometry( 160, 150, 152 );
			block0203Mesh = new THREE.Mesh ( block0203Geo, oldBrickMat02w );

			block0203Mesh.position.set( 680, 147, 235 );
			block0203Mesh.receiveShadow = true;
			block0203Mesh.castShadow = true;
			block0203Mesh.side = THREE.DoubleSide;

			block02Group = new THREE.Group();
			block02Group.add( block0201Mesh );
			block02Group.add( block0202Mesh );
			block02Group.add( block0203Mesh );
		
		//scene.add( block02Group );
		block02Group.position.set( -256, 0, 0 );
		block02Group.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
		
		// Block 03 -------------------------- //
			// Building 01 ------------------- //
			block0301Geo = new THREE.BoxGeometry( 170, 150, 295 );
			block0301Mesh = new THREE.Mesh ( block0301Geo, oldBrickMat02w );

			block0301Mesh.position.set( 685, 132, 640 );
			block0301Mesh.receiveShadow = true;
			block0301Mesh.castShadow = true;
			block0301Mesh.side = THREE.DoubleSide;
		
			// Building 02 ------------------- //
			block0302Geo = new THREE.BoxGeometry( 170, 200, 221 );
			block0302Mesh = new THREE.Mesh ( block0302Geo, oldBrickMat03w );

			allBlocksGroup.add( block0302Mesh );
			block0302Mesh.position.set( 685, 143, 897 );
			block0302Mesh.receiveShadow = true;
			block0302Mesh.castShadow = true;
			block0302Mesh.side = THREE.DoubleSide;
		
			// Building 03 ------------------- //
			block0303Geo = new THREE.BoxGeometry( 170, 150, 100 );
			block0303Mesh = new THREE.Mesh ( block0303Geo, oldBrickMat02t );
		
			block0303Mesh.position.set( 685, 132, 1058 );
			block0303Mesh.receiveShadow = true;
			block0303Mesh.castShadow = true;
			block0303Mesh.side = THREE.DoubleSide;
			
			block03Group = new THREE.Group();
			block03Group.add( block0301Mesh );
			block03Group.add( block0302Mesh );
			block03Group.add( block0303Mesh );
		
			allBlocksGroup.add( block03Group );
		
		// Block 04 -------------------------- //
			// Building 01 ------------------- //
			block0401Geo = new THREE.BoxGeometry( 165, 148, 140 );
			block0401Mesh = new THREE.Mesh ( block0401Geo, oldBrickMat02t );

			block0401Mesh.position.set( 685, 130, 1367 );
			block0401Mesh.receiveShadow = true;
			block0401Mesh.castShadow = true;
			block0401Mesh.side = THREE.DoubleSide;
		
			// Building 02 ------------------- //
			block0402Geo = new THREE.BoxGeometry( 165, 160, 109 );
			block0402Mesh = new THREE.Mesh ( block0402Geo, oldBrickMat02t );

			block0402Mesh.position.set( 685, 147, 1492 );
			block0402Mesh.receiveShadow = true;
			block0402Mesh.castShadow = true;
			block0402Mesh.side = THREE.DoubleSide;
		
			// Building 03 ------------------- //
			block0403Geo = new THREE.BoxGeometry( 165, 160, 70 );
			block0403Mesh = new THREE.Mesh ( block0403Geo, oldBrickMat02t );

			block0403Mesh.position.set( 685, 125, 1582 );
			block0403Mesh.receiveShadow = true;
			block0403Mesh.castShadow = true;
			block0403Mesh.side = THREE.DoubleSide;
		
			// Building 04 ------------------- //
			block0404Geo = new THREE.BoxGeometry( 165, 100, 269 );
			block0404Mesh = new THREE.Mesh ( block0404Geo, oldBrickMat02w );

			block0404Mesh.position.set( 685, 135, 1753 );
			block0404Mesh.receiveShadow = true;
			block0404Mesh.castShadow = true;
			block0404Mesh.side = THREE.DoubleSide;
		
			block04Group = new THREE.Group();
			block04Group.add( block0401Mesh );
			block04Group.add( block0402Mesh );
			block04Group.add( block0403Mesh );
			block04Group.add( block0404Mesh );
		
			allBlocksGroup.add( block04Group );
		
		// Block 05 -------------------------- //
			// Building 01 ------------------- //
			block0501Geo = new THREE.BoxGeometry( 75, 115, 185 );
			block0501Mesh = new THREE.Mesh ( block0501Geo, oldBrickMat01w );

			block0501Mesh.position.set( 973, 175, -990 );
			block0501Mesh.receiveShadow = true;
			block0501Mesh.castShadow = true;
			block0501Mesh.side = THREE.DoubleSide;
		
			// Building 02 ------------------- //
			block0502Geo = new THREE.BoxGeometry( 95, 125, 185 );
			block0502Mesh = new THREE.Mesh ( block0502Geo, oldBrickMat01w );

			block0502Mesh.position.set( 1058, 175, -990 );
			block0502Mesh.receiveShadow = true;
			block0502Mesh.castShadow = true;
			block0502Mesh.side = THREE.DoubleSide;
		
			// Building 03 ------------------- //
			block0503Geo = new THREE.BoxGeometry( 173, 150, 80 );
			block0503Mesh = new THREE.Mesh ( block0503Geo, oldBrickMat01t );

			block0503Mesh.position.set( 1020, 185, -860 );
			block0503Mesh.receiveShadow = true;
			block0503Mesh.castShadow = true;
			block0503Mesh.side = THREE.DoubleSide;
		
			// Building 04 ------------------- //
			block0504Geo = new THREE.BoxGeometry( 173, 120, 350 );
			block0504Mesh = new THREE.Mesh ( block0504Geo, oldBrickMat01w02 );

			block0504Mesh.position.set( 1020, 175, -645 );
			block0504Mesh.receiveShadow = true;
			block0504Mesh.castShadow = true;
			block0504Mesh.side = THREE.DoubleSide;
		
			block05Group = new THREE.Group();
			block05Group.add( block0501Mesh );
			block05Group.add( block0502Mesh );
			block05Group.add( block0503Mesh );
			block05Group.add( block0504Mesh );
		
			allBlocksGroup.add( block05Group );
		
		// Block 06 -------------------------- //
			// Building 01 ------------------- //
			block0601Geo = new THREE.BoxGeometry( 170, 125, 232 );
			block0601Mesh = new THREE.Mesh ( block0601Geo, oldBrickMat02w );

			block0601Mesh.position.set( 1013, 200, -162 );
			block0601Mesh.receiveShadow = true;
			block0601Mesh.castShadow = true;
			block0601Mesh.side = THREE.DoubleSide;
		
			// Building 02 ------------------- //
			block0602Geo = new THREE.BoxGeometry( 170, 100, 210 );
			block0602Mesh = new THREE.Mesh ( block0602Geo, oldBrickMat02w );

			block0602Mesh.position.set( 1013, 190, 60 );
			block0602Mesh.receiveShadow = true;
			block0602Mesh.castShadow = true;
			block0602Mesh.side = THREE.DoubleSide;
		
			// Building 03 ------------------- //
			block0603Geo = new THREE.BoxGeometry( 170, 125, 158 );
			block0603Mesh = new THREE.Mesh (  block0603Geo, oldBrickMat02t );
		
			block0603Mesh.position.set( 1013, 198, 245 );
			block0603Mesh.receiveShadow = true;
			block0603Mesh.castShadow = true;
			block0603Mesh.side = THREE.DoubleSide;
		
			block06Group = new THREE.Group();
			block06Group.add( block0601Mesh );
			block06Group.add( block0602Mesh );
			block06Group.add( block0603Mesh );
		
			allBlocksGroup.add( block06Group );
		
		// Block 07 -------------------------- //
			// Building 01 ------------------- //
			block0701Geo = new THREE.BoxGeometry( 170, 150, 60 )
			block0701Mesh = new THREE.Mesh ( block0701Geo, oldBrickMat03t );

			allBlocksGroup.add( block0701Mesh );
			block0701Mesh.position.set( 1013, 217, 525 );
			block0701Mesh.receiveShadow = true;
			block0701Mesh.castShadow = true;
			block0701Mesh.side = THREE.DoubleSide;
			
			// Building 02 ------------------- //
			block0702Geo = new THREE.BoxGeometry( 173, 175, 290 );
			block0702Mesh = new THREE.Mesh (  block0702Geo, oldBrickMat02w );

			allBlocksGroup.add( block0702Mesh );
			block0702Mesh.position.set( 1015, 190, 700 );
			block0702Mesh.receiveShadow = true;
			block0702Mesh.castShadow = true;
			block0702Mesh.side = THREE.DoubleSide;
		
			// Building 03 ------------------- //
			block0703Geo = new THREE.BoxGeometry( 173, 150, 60 );
			block0703Mesh = new THREE.Mesh ( block0703Geo, oldBrickMat02t );

			allBlocksGroup.add( block0703Mesh );
			block0703Mesh.position.set( 1010, 215, 877 );
			block0703Mesh.receiveShadow = true;
			block0703Mesh.castShadow = true;
			block0703Mesh.side = THREE.DoubleSide;
		
			// Building 04 ------------------- //
			block0704Geo = new THREE.BoxGeometry( 170, 170, 202 );
			block0704Mesh = new THREE.Mesh ( block0704Geo, oldBrickMat02w );

			allBlocksGroup.add( block0704Mesh );
			block0704Mesh.position.set( 1010, 212, 1009 );
			block0704Mesh.receiveShadow = true;
			block0704Mesh.castShadow = true;
			block0704Mesh.side = THREE.DoubleSide;
				

		// River Flow Layer ----------------------------- // 
		var riverGroup = new THREE.Group();

		// water
			var waterGeometry = new THREE.PlaneBufferGeometry( 2100, 20000 );
				water = new THREE.Water(
					waterGeometry,
					{
						textureWidth: 1024,
						textureHeight: 1024,
						waterNormals: new THREE.TextureLoader().load( '../../tex/waternormals.jpg', function ( texture ) {
							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
						}),
						alpha: 0.5,
						sunDirection: new THREE.Vector3( 500, 300, 500 ).normalize(),
						sunColor: 0x52350E,
						waterColor: 0x52350E,
						distortionScale: 1,
						side: THREE.DoubleSide,
						flowDirection: new THREE.Vector2( 10, 1 ),
						scale: 2
					}
			);
			water.rotation.x = 270 * Math.PI / 180;
			water.position.x = -750;
			water.position.y = 67;
			water.position.z = 0;
			water.receiveShadow = true;
		
			riverGroup.add( water );

		// River Volume ----------------------------------//
//			var riverVolume = new THREE.Mesh (
//					new THREE.BoxGeometry( 2100, 275, 20000 ),
//					new THREE.MeshPhongMaterial( {
//					wireframe: false,
//					transparent: true,
//					opacity: 0.5,
//					color: 0x52350E,
//					emissive: 0x000000,
//					specular: 0x6C4716,
//					shininess: 5,
//					side: THREE.DoubleSide
//					} )
//				);
//
//			//riverGroup.add( riverVolume );
//			riverVolume.position.set( -750, -100 , 0 );
//			riverVolume.receiveShadow = true;
//			riverVolume.castShadow = true;	

		// River Wharf ----------------------------------//

			wharfTexture = new THREE.TextureLoader().load( "../../tex/wharf-tex.jpg" );
			wharfTexture.repeat.set( 1, 1 );
			wharfTexture.wrapT = THREE.RepeatWrapping;
			wharfTexture.wrapS = THREE.UVMapping;

			riverWharf = new THREE.Mesh (
					new THREE.BoxGeometry( 75, 200, 20000 ),
					new THREE.MeshLambertMaterial( {
					wireframe: false,
					transparent: false,
					map: wharfTexture,
					color: 0x777777,
					emissive: 0x000000,
					side: THREE.DoubleSide

					} )
				);

			riverGroup.add( riverWharf );
		
			riverWharf.position.set( 375, 37, 0 );
			riverWharf.rotation.set( 0, 0 , 93.5 * Math.PI / 180 );
			riverWharf.receiveShadow = true;
			riverWharf.castShadow = true;
			riverWharf.flipY = false;
		
		scene.add( riverGroup );
		//allBlocksGroup.add( riverGroup );
		
		riverGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
		
	// Boats Group ------------------------------------------------------ //

		// Boat Style 01 OBJ Model ---- //
		var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'RIVERBOAT-1-Baked.mtl', function ( boatStyle01Mat ) {

				boatStyle01Mat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( boatStyle01Mat );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load( 'RIVERBOAT-1-Baked.obj', function ( boatStyle01OBJ ) {
					
					boatStyle01OBJ.position.set( 1350, 85, -2000 );
					boatStyle01OBJ.rotation.set( 0, -100 * Math.PI / 180, 0 );
					boatStyle01OBJ.scale.set( 0.2, 0.2, 0.2 );
					boatStyle01OBJ.receiveShadow = true;
					boatStyle01OBJ.castShadow = true;

					//allBlocksGroup.add( boatStyle01OBJ );
					//
			
			// Boat Style 01 Clone 01 ---- //
			var boatStyle01Clone01 = boatStyle01OBJ.clone();
			boatStyle01Clone01.position.set( 1350, 85, -1600 );
			boatStyle01Clone01.rotation.set( 0, -100 * Math.PI / 180, 0 );
			boatStyle01Clone01.scale.set( 0.2, 0.2, 0.2 );
			boatStyle01Clone01.receiveShadow = true;
			boatStyle01Clone01.castShadow = true;
					
			//allBlocksGroup.add( boatStyle01Clone01 );
			//
			
			// Boat Style 01 Clone 02 ---- //
			var boatStyle01Clone02 = boatStyle01OBJ.clone();
			boatStyle01Clone02.position.set( 950, 85, 200 );
			boatStyle01Clone02.rotation.set( 0, -75 * Math.PI / 180, 0 );
			boatStyle01Clone02.scale.set( 0.2, 0.2, 0.2 );
			boatStyle01Clone02.receiveShadow = true;
			boatStyle01Clone02.castShadow = true;
					
			//allBlocksGroup.add( boatStyle01Clone02 );
			//

				});

			});
		
		// Boat 08 --------------------------------------//
		// Boat Style 02 OBJ Model ---- //
		var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'RIVERBOAT-2-Baked-Flat.mtl', function ( boatStyle02Mat ) {

				boatStyle02Mat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( boatStyle02Mat );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load( 'RIVERBOAT-2-Baked-Flat.obj', function ( boatStyle02OBJ ) {
					
					boatStyle02OBJ.position.set( -935, 125, 200 );
					boatStyle02OBJ.rotation.set( 0, 0 * Math.PI / 180, 0 );
					boatStyle02OBJ.scale.set( 0.15, 0.15, 0.15 );
					boatStyle02OBJ.receiveShadow = true;
					boatStyle02OBJ.castShadow = true;

					//allBlocksGroup.add( boatStyle02OBJ );
					//
					
				// Boat Style 02 Clone 01 --- //
				var boatStyle02Clone01 = boatStyle02OBJ.clone();

				boatStyle02Clone01.position.set( -940, 125, -500 );
				boatStyle02Clone01.rotation.set( 0, 0 * Math.PI / 180, 0 );
				boatStyle02Clone01.scale.set( 0.15, 0.15, 0.15 );
				boatStyle02Clone01.receiveShadow = true;
				boatStyle02Clone01.castShadow = true;

				//allBlocksGroup.add( boatStyle02Clone01 );
				//
					
				// Boat Style 02 Clone 02 --- //
				var boatStyle02Clone02 = boatStyle02OBJ.clone();

				boatStyle02Clone02.position.set( 500, 100, -2000 );
				boatStyle02Clone02.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone02.scale.set( 0.075, 0.075, 0.075 );
				boatStyle02Clone02.receiveShadow = true;
				boatStyle02Clone02.castShadow = true;

				//allBlocksGroup.add( boatStyle02Clone02 );
				//
					
				// Boat Style 02 Clone 03 --- //
				var boatStyle02Clone03 = boatStyle02OBJ.clone();

				boatStyle02Clone03.position.set( 500, 100, -1550 );
				boatStyle02Clone03.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone03.scale.set( 0.075, 0.075, 0.075 );
				boatStyle02Clone03.receiveShadow = true;
				boatStyle02Clone03.castShadow = true;

				//allBlocksGroup.add( boatStyle02Clone03 );
				//
				
				// Boat Style 02 Clone 04 --- //
				var boatStyle02Clone04 = boatStyle02OBJ.clone();

				boatStyle02Clone04.position.set( 725, 110, -1450 );
				boatStyle02Clone04.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone04.scale.set( 0.125, 0.125, 0.125 );
				boatStyle02Clone04.receiveShadow = true;
				boatStyle02Clone04.castShadow = true;

				//allBlocksGroup.add( boatStyle02Clone04 );
				//
					
				// Boat Style 02 Clone 05 --- //
				var boatStyle02Clone05 = boatStyle02OBJ.clone();

				boatStyle02Clone05.position.set( 600, 100, -1225 );
				boatStyle02Clone05.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone05.scale.set( 0.125, 0.125, 0.125 );
				boatStyle02Clone05.receiveShadow = true;
				boatStyle02Clone05.castShadow = true;

				//allBlocksGroup.add( boatStyle02Clone05 );
				//
					
				// Boat Style 02 Clone 06 --- //
				var boatStyle02Clone06 = boatStyle02OBJ.clone();

				boatStyle02Clone06.position.set( 200, 100, 1000 );
				boatStyle02Clone06.rotation.set( 0, -70 * Math.PI / 180, 0 );
				boatStyle02Clone06.scale.set( 0.075, 0.075, 0.075 );
				boatStyle02Clone06.receiveShadow = true;
				boatStyle02Clone06.castShadow = true;

				//allBlocksGroup.add( boatStyle02Clone06 );
				//

				});

			});
	
	scene.add( allBlocksGroup );
	allBlocksGroup.position.set( -256, 0, 0 );
	allBlocksGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
	//
	
}


	// Toggle between Orbit Controls and First Person Controls --------------------------------- //
	function setupControls() {

		// Orbit Controls --------------------------------------------------------- //
		orbitControlsCamera = new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 6144 );
		orbitControlsCamera.position.set( 0, 256, 2048 );
		orbitControlsCamera.lookAt( 0, 256, 0 );

		//orbitControls = new THREE.OrbitAndPanControls(  orbitControlsCamera, renderer.domElement  );
		orbitControls = new THREE.OrbitControls(  orbitControlsCamera, renderer.domElement  );
		orbitControls.enableZoom = true;
		orbitControls.enablePan = false;
		orbitControls.enableDamping = false;
		//orbitControls.dampingFactor = 0.55;
		orbitControls.maxDistance = 2048;
		orbitControls.minDistance = 256;
		orbitControls.maxPolarAngle = 90 * Math.PI / 180;  
		orbitControls.minPolarAngle = 70 * Math.PI / 180;
		orbitControls.maxAzimuthAngle = 110 * Math.PI / 180;
		orbitControls.minAzimuthAngle = -110 * Math.PI / 180;
		orbitControls.rotateSpeed = 0.5;
		orbitControls.zoomSpeed = 0.75;
		orbitControls.panSpeed =0.5;
		orbitControls.target = new THREE.Vector3 ( 0, 256, 0 );
		orbitControls.addEventListener( 'change', render );

		// First Person Controls --------------------------------------------------------- //

		var options = {
		speedFactor: 10,
		delta: 1,
		rotationFactor: 0.025,
		maxPitch: 55,
		hitTest: true,
		hitTestDistance: 40
		};

		firstPersonCamera = new THREE.PerspectiveCamera( 60, mapWidth / mapHeight, 1, 6144 );

		firstPersonControls = new TouchControls( container.parent(), firstPersonCamera, options );
		firstPersonControls.setRotation( 0, 0 );
		firstPersonControls.setPosition( 375, 150, 0 );
		firstPersonControls.addToScene( scene );
		firstPersonControls.lookSpeed = 2;
		firstPersonControls.movementSpeed = 20;

		}

		function setControlsFirstPerson() {
			camera = firstPersonCamera;
			controls = firstPersonControls;
			$("#touchControls").show();
			$("#gestureLegend").hide();
			orbitControlsCamera.position.set( 0, 256, 2048 );
		}


		function setControlsOrbit() {
			camera = orbitControlsCamera;	
			controls = orbitControls;
			$("#touchControls").hide();
			$("#gestureLegend").show();
			firstPersonControls.setPosition( 375, 150, 0 );
			firstPersonControls.setRotation( 0, 0 );

		}
	
    // Animate Functions ------------------- //
	function animate() {
		requestAnimationFrame( animate );
		orbitControls.update();
		firstPersonControls.update( clock.getDelta() );
		
	render();

	};


	// Render Function ------------------------- //
	function render() {
		
			var delta = clock.getDelta();
			renderer.render( scene, camera );
	};

	// Raycaster Mouse / Touch Events

	function onMouseUp( event ) {

		event.preventDefault();

		var x = event.offsetX == undefined ? event.layerX : event.offsetX;
		var y = event.offsetY == undefined ? event.layerY : event.offsetY;
		
		var vector = new THREE.Vector3();
		vector.set( ( x / renderer.domElement.width ) * 1.875 - 1, - ( y / renderer.domElement.height ) * 1.875 + 1, 0.9 );
		vector.unproject( camera );
		
		raycaster.ray.set( camera.position, vector.sub( camera.position ).normalize() );

					// Manipulate Objects

					var intersects = raycaster.intersectObjects( items );
					if ( intersects.length > 0 ) {
					
					if ( INTERSECTED != intersects[ 0 ].object ) {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

							INTERSECTED = intersects[ 0 ].object;
							var focusDiv = INTERSECTED.userData.id ;
							INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
							INTERSECTED.material.emissive.setHex( 0xff00ff );
						
							orbitControls.noZoom = true;
							orbitControls.noPan = true;
							//orbitControls.autoRotate = false;
							orbitControls.enabled = false;

							}

							} else {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

						INTERSECTED = null;
								
						orbitControls.noZoom = false;
						orbitControls.noPan = false;
						//orbitControls.autoRotate = true;
						orbitControls.enabled = true;

					}

					renderer.render( scene, camera );
					
				};


	// Object Collision Detection --------------------------------------------------------------- //
		getObstacles = function () {
			'use strict';
			return this.obstacles.concat(this.items);
		}

		initCollide = function (args) {
		/* ... */
		// Set the character modelisation object
		this.mesh = new THREE.Object3D();
		/* ... */
		// Set the rays : one vector for every potential direction
		this.rays = [
		  new THREE.Vector3(0, 0, 1),
		  new THREE.Vector3(1, 0, 1),
		  new THREE.Vector3(1, 0, 0),
		  new THREE.Vector3(1, 0, -1),
		  new THREE.Vector3(0, 0, -1),
		  new THREE.Vector3(-1, 0, -1),
		  new THREE.Vector3(-1, 0, 0),
		  new THREE.Vector3(-1, 0, 1)
		];
		// And the "RayCaster", able to test for intersections
		this.caster = new THREE.Raycaster();
		},
		// Test and avoid collisions
		collision = function () {
		'use strict';
		var collisions, i,
		  // Maximum distance from the origin before we consider collision
		  distance = 32,
		  // Get the obstacles array from our world
		  obstacles = raycaster.intersectObjects( items );
		// For each ray
		for (i = 0; i < this.rays.length; i += 1) {
		  // We reset the raycaster to this direction
		  this.caster.set(this.mesh.position, this.rays[i]);
		  // Test if we intersect with any obstacle mesh
		  collisions = this.caster.intersectObjects(items);
		  // And disable that direction if we do
		  if (collisions.length > 0 && collisions[0].distance <= distance) {
			// Yep, this.rays[i] gives us : 0 => up, 1 => up-left, 2 => left, ...
			if ((i === 0 || i === 1 || i === 7) && this.direction.z === 1) {
			  this.direction.setZ(0);
			} else if ((i === 3 || i === 4 || i === 5) && this.direction.z === -1) {
			  this.direction.setZ(0);
			}
			if ((i === 1 || i === 2 || i === 3) && this.direction.x === 1) {
			  this.direction.setX(0);
			} else if ((i === 5 || i === 6 || i === 7) && this.direction.x === -1) {
			  this.direction.setX(0);
			}
		  }
		}
		},
		// Process the character motions
		motion = function () {
		'use strict';
		// Update the directions if we intersect with an obstacle
		this.collision();
		// If we're not static
		if (this.direction.x !== 0 || this.direction.z !== 0) {
		  // Rotate the character
		  this.rotate();
		  // Move the character
		  this.move();
		  return true;
		}
		}
		/* ... */
		



