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

	var radius = 20, theta = 0;
	
	var items = [], raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(), INTERSECTED;
    var objects = [];

    var options = {
        speedFactor: 3,
        delta: 1,
        rotationFactor: 0.0125,
        maxPitch: 30 * Math.PI / 180,
        hitTest: true,
        hitTestDistance: 20
    };

	function orbitHitTest(container, camera, options) {
	
	var self = this;
	self.orbitConfig = $.extend({
        speedFactor: 3,
        delta: 1,
        rotationFactor: 0.0125,
        maxPitch: 30 * Math.PI / 180,
        hitTest: true,
        hitTestDistance: 20
	}, options);

	var orbitMatrices = [];
	var hitSurfaces = [];

	var cameraHolder = new THREE.Object3D();
	cameraHolder.name = "cameraHolder";
	cameraHolder.add(camera);

	self.scene = null;
	self.orbitBody = new THREE.Object3D();
	self.orbitBody.add( cameraHolder );
    self.enabled = true;
	}

	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(), INTERSECTED;
	var sprites = [];

	init();
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
		renderer.setClearColor( 0x000000, 0.25 );
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.gammaInput = true;
		renderer.gammaOutput = true;

		leveeMap.appendChild( renderer.domElement );
		
        // ---------------------- Default Camera --------------------- //
        camera = new THREE.PerspectiveCamera(50, mapWidth / mapHeight, 1, 4096);
		
        camera.position.set( 0, 125, 1750 );
        //
		
        // ---------- Touch Controls ( Virtual Joystick ) ------------------------ //
        firstPersonControls = new TouchControls(container.parent(), camera, options);
		firstPersonControls.addToScene( scene );
		firstPersonControls.lookSpeed = 1;
        firstPersonControls.movementSpeed = 10;
        //


		// ----------------- Event Listeners -------------------- //
		leveeMap.addEventListener( 'change', render );
		
		window.addEventListener( "resize", onWindowResize, false );
 
		function onWindowResize() {
		camera.aspect = mapWidth / mapHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( mapWidth, mapHeight );
		};


		// Skybox Background
		var r = "tex/cube/sky02/";
		var urls = [
			r + "front_v2.jpg",
			r + "back_v2.jpg",
			r + "top_v2.jpg",
			r + "bottom_v2.jpg",
			r + "right_v2.jpg",
			r + "left_v2.jpg"
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
		floorLight01.position.copy(new THREE.Vector3( 0, 2048, -2048 ));
		floorLight01.castShadow = true;
		floorLight01.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 1, 4096 ) );
		floorLight01.shadow.bias = 0.0001;
		floorLight01.shadow.mapSize.width = 1024;
		floorLight01.shadow.mapSize.height = 1024;
		floorLight01.shadow.camera.fov = 45;
		floorLight01.shadow.camera.near = 1024;
		floorLight01.shadow.camera.far = 4096;
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
		spotLight.position.set( 0, 3000, 0 );

		spotLight.castShadow = true;

		spotLight.shadow.camera.near = 512;
		spotLight.shadow.camera.far = 4096; //camera.far;
		spotLight.shadow.camera.fov = 45;

		spotLight.shadowMapBias = 0.0001;
		spotLight.shadowMapDarkness = 0.5;
		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024; 
			 

		scene.add( spotLight );

		// Fog
		scene.fog = new THREE.FogExp2(0x0f0c09, 0.0005);
		
		//loadSpriteElements();
		loadCityMarketMeshElements();
		loadBlock01MeshElements();
		loadGroundMeshElements();
		riverFrontElements();
		loadMeshElements();
		
	};

	// [ BEGIN ] --------------- Sprites Group ---------------------------- //

	document.addEventListener('click', clickOnSprite01, false);
	document.addEventListener('click', clickOnSprite02, false);
	document.addEventListener('click', clickOnSprite03, false);
	document.addEventListener('click', clickOnSprite04, false);


	// ----------- Hotspot Targets and Sprites -------------- //

	// St. Louis Riverboat label Sprite --------- //
	theStLouisSpriteMap = new THREE.TextureLoader().load("img/label-sprite-01-v2.png");

	theStLouisSpriteMaterial = new THREE.SpriteMaterial({ map: theStLouisSpriteMap, color: 0xffffff });

	var theStLouisSprite = new THREE.Sprite(theStLouisSpriteMaterial);
	theStLouisSprite.position.set(0, 150, 500);
	theStLouisSprite.userData.id = "theStLouisSprite";
	theStLouisSprite.name = "theStLouisSprite";

	theStLouisSprite.scale.set(128, 32);

	sprites.push(theStLouisSprite);

	//scene.add( theStLouisSprite );

	theStLouisSpriteActiveMap = new THREE.TextureLoader().load("img/label-sprite-01-v2-active.png");

	theStLouisSpriteActiveMaterial = new THREE.SpriteMaterial({ map: theStLouisSpriteActiveMap, color: 0xffffff });

	var theStLouisActiveSprite = new THREE.Sprite(theStLouisSpriteActiveMaterial);
	theStLouisActiveSprite.position.set(0, 150, 500);
	theStLouisActiveSprite.userData.id = "theStLouisActiveSprite";
	theStLouisActiveSprite.name = "theStLouisActiveSprite";
	theStLouisActiveSprite.visible = false;

	theStLouisActiveSprite.scale.set(128, 32);

	sprites.push(theStLouisActiveSprite);

	theStLouisSprite.add(theStLouisActiveSprite);
	//

	// ------------------------------ [ BEGIN ] Sprite 01 Raycaster --------------------------- //
	function clickOnSprite01(event) {

	    event.preventDefault();

	    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	    raycaster.setFromCamera(mouse, camera);

	    var intersect01 = raycaster.intersectObjects([theStLouisSprite, theStLouisActiveSprite]);

	    intersect01.forEach(function (object) {

	        if (theStLouisSprite.visible == true && theStLouisActiveSprite.visible == false) {

	            theStLouisActiveSprite.visible = true;
	            mainStreetActiveSprite.visible = false;
	            commercialAlleyActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;

	            theStLouisSprite.visible = false;
	            mainStreetSprite.visible = true;
	            commercialAlleySprite.visible = true;
	            cityMarketSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').removeClass('hidden');
	            $('#overlay01Text.overlayText').removeClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').removeClass('hidden');
	        } else if (theStLouisSprite.visible == false && theStLouisActiveSprite.visible == true) {

	            mainStreetActiveSprite.visible = false;
	            commercialAlleyActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;

	            mainStreetSprite.visible = true;
	            commercialAlleySprite.visible = true;
	            cityMarketSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').addClass('hidden');
	        }

	    });

	}

	//

	// City Market Label Sprite --------- //
	var cityMarketSpriteMap = new THREE.TextureLoader().load("img/label-sprite-02-v2.png");

	var cityMarketSpriteMaterial = new THREE.SpriteMaterial({ map: cityMarketSpriteMap, color: 0xffffff });

	var cityMarketSprite = new THREE.Sprite(cityMarketSpriteMaterial);
	cityMarketSprite.position.set(525, 165, -1540);
	cityMarketSprite.name = "cityMarketSprite";

	sprites.push(cityMarketSprite);

	cityMarketSprite.scale.set(128, 32);

	//scene.add( cityMarketSprite );

	cityMarketSpriteActiveMap = new THREE.TextureLoader().load("img/label-sprite-02-v2-active.png");

	cityMarketSpriteActiveMaterial = new THREE.SpriteMaterial({ map: cityMarketSpriteActiveMap, color: 0xffffff });

	var cityMarketActiveSprite = new THREE.Sprite(cityMarketSpriteActiveMaterial);
	cityMarketActiveSprite.position.set(525, 165, -1540);
	cityMarketActiveSprite.userData.id = "cityMarketActiveSprite";
	cityMarketActiveSprite.name = "cityMarketActiveSprite";
	cityMarketActiveSprite.visible = false;

	cityMarketActiveSprite.scale.set(128, 32);

	sprites.push(cityMarketActiveSprite);

	cityMarketSprite.add(cityMarketActiveSprite);
	//

	// ------------------------------ [ BEGIN ] Sprite 02 Raycaster --------------------------- //
	function clickOnSprite02(event) {

	    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	    raycaster.setFromCamera(mouse, camera);

	    var intersect02 = raycaster.intersectObjects([cityMarketSprite, cityMarketActiveSprite]);

	    intersect02.forEach(function (object) {

	        if (cityMarketSprite.visible == true && cityMarketActiveSprite.visible == false) {

	            cityMarketActiveSprite.visible = true;
	            mainStreetActiveSprite.visible = false;
	            commercialAlleyActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;

	            cityMarketSprite.visible = false;
	            commercialAlleySprite.visible = true;
	            mainStreetSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').removeClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').removeClass('hidden');
	        } else if (cityMarketSprite.visible == false && cityMarketActiveSprite.visible == true) {

	            mainStreetActiveSprite.visible = false;
	            commercialAlleyActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;

	            mainStreetSprite.visible = true;
	            commercialAlleySprite.visible = true;
	            cityMarketSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').addClass('hidden');
	        }

	    });

	}

	// Commercial Alley Label Sprite --------- //
	var commercialAlleySpriteMap = new THREE.TextureLoader().load("img/label-sprite-03-v2.png");

	var commercialAlleySpriteMaterial = new THREE.SpriteMaterial({ map: commercialAlleySpriteMap, color: 0xffffff });

	var commercialAlleySprite = new THREE.Sprite(commercialAlleySpriteMaterial);
	commercialAlleySprite.position.set(855, 165, -1000);

	commercialAlleySprite.name = "commerciaAlleySprite";

	sprites.push(commercialAlleySprite);

	commercialAlleySprite.scale.set(128, 32);

	//scene.add( commercialAlleySprite );

	commercialAlleySpriteActiveMap = new THREE.TextureLoader().load("img/label-sprite-03-v2-active.png");

	commercialAlleySpriteActiveMaterial = new THREE.SpriteMaterial({ map: commercialAlleySpriteActiveMap, color: 0xffffff });

	var commercialAlleyActiveSprite = new THREE.Sprite(commercialAlleySpriteActiveMaterial);
	commercialAlleyActiveSprite.position.set(855, 165, -1000);
	commercialAlleyActiveSprite.userData.id = "commercialAlleyActiveSprite";
	commercialAlleyActiveSprite.name = "commercialAlleyActiveSprite";
	commercialAlleyActiveSprite.visible = false;

	commercialAlleyActiveSprite.scale.set(128, 32);

	sprites.push(commercialAlleyActiveSprite);

	commercialAlleySprite.add(commercialAlleyActiveSprite);
	//

	// ------------------------------ [ BEGIN ] Sprite 03 Raycaster --------------------------- //
	function clickOnSprite03(event) {

	    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	    raycaster.setFromCamera(mouse, camera);

	    var intersect03 = raycaster.intersectObjects([commercialAlleySprite, commercialAlleyActiveSprite]);

	    intersect03.forEach(function (object) {

	        if (commercialAlleySprite.visible == true && commercialAlleyActiveSprite.visible == false) {

	            commercialAlleyActiveSprite.visible = true;
	            mainStreetActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;

	            commercialAlleySprite.visible = false;
	            mainStreetSprite.visible = true;
	            cityMarketSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').removeClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').removeClass('hidden');
	        } else if (commercialAlleySprite.visible == false && commercialAlleyActiveSprite.visible == true) {

	            mainStreetActiveSprite.visible = false;
	            commercialAlleyActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;

	            mainStreetSprite.visible = true;
	            commercialAlleySprite.visible = true;
	            cityMarketSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').addClass('hidden');
	        }

	    });

	}

	// Main Street Label Sprite --------- //
	var mainStreetSpriteMap = new THREE.TextureLoader().load("img/label-sprite-04-v2.png");

	var mainStreetSpriteMaterial = new THREE.SpriteMaterial({ map: mainStreetSpriteMap, color: 0xffffff });

	var mainStreetSprite = new THREE.Sprite(mainStreetSpriteMaterial);
	mainStreetSprite.position.set(950, 190, -400);

	mainStreetSprite.name = "mainStreetSprite";

	sprites.push(mainStreetSprite);

	mainStreetSprite.scale.set(128, 32);

	//scene.add( mainStreetSprite );

	mainStreetSpriteActiveMap = new THREE.TextureLoader().load("img/label-sprite-04-v2-active.png");

	mainStreetSpriteActiveMaterial = new THREE.SpriteMaterial({ map: mainStreetSpriteActiveMap, color: 0xffffff });

	var mainStreetActiveSprite = new THREE.Sprite(mainStreetSpriteActiveMaterial);
	mainStreetActiveSprite.position.set(950, 190, -400);
	mainStreetActiveSprite.userData.id = "mainStreetActiveSprite";
	mainStreetActiveSprite.name = "mainStreetActiveSprite";
	mainStreetActiveSprite.visible = false;

	mainStreetActiveSprite.scale.set(128, 32);

	sprites.push(mainStreetActiveSprite);

	mainStreetSprite.add(mainStreetActiveSprite);

	//
	// ------------------------------ [ BEGIN ] Sprite 04 Raycaster --------------------------- //
	function clickOnSprite04(event) {

	    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	    raycaster.setFromCamera(mouse, camera);

	    var intersect04 = raycaster.intersectObjects([mainStreetSprite, mainStreetActiveSprite]);

	    intersect04.forEach(function (object) {

	        if (mainStreetSprite.visible == true && mainStreetActiveSprite.visible == false) {

	            mainStreetActiveSprite.visible = true;
	            commercialAlleyActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;

	            mainStreetSprite.visible = false;
	            commercialAlleySprite.visible = true;
	            cityMarketSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').removeClass('hidden');

	            //$('#popUp01.popUp').removeClass('hidden');
	        } else if (mainStreetSprite.visible == false && mainStreetActiveSprite.visible == true) {

	            mainStreetActiveSprite.visible = false;
	            commercialAlleyActiveSprite.visible = false;
	            cityMarketActiveSprite.visible = false;
	            theStLouisActiveSprite.visible = false;


	            mainStreetSprite.visible = true;
	            commercialAlleySprite.visible = true;
	            cityMarketSprite.visible = true;
	            theStLouisSprite.visible = true;

	            $('#overlayDefault.overlayBTN').addClass('hidden');
	            $('#overlay01.overlayBTN').addClass('hidden');
	            $('#overlay01Text.overlayText').addClass('hidden');
	            $('#overlay02.overlayBTN').addClass('hidden');
	            $('#overlay03.overlayBTN').addClass('hidden');
	            $('#overlay04.overlayBTN').addClass('hidden');

	            //$('#popUp01.popUp').addClass('hidden');
	        }

	    });

	}


	var spritesGroup = new THREE.Group();

	spritesGroup.add(theStLouisSprite);
	spritesGroup.add(theStLouisActiveSprite);
	spritesGroup.add(cityMarketSprite);
	spritesGroup.add(cityMarketActiveSprite);
	spritesGroup.add(commercialAlleySprite);
	spritesGroup.add(commercialAlleyActiveSprite);
	spritesGroup.add(mainStreetSprite);
	spritesGroup.add(mainStreetActiveSprite);

	spritesGroup.position.set(-125, 0, 0);
	spritesGroup.rotation.set(0, 90 * Math.PI / 180, 0);

	scene.add(spritesGroup);


	// [ END ] --------------- Sprites Group ---------------------------- //


	// Default Controls --------------------------------------------------------- //
	function setDefaultPosition() {

	    camera.updateProjectionMatrix();

	    firstPersonControls.setRotation(0, 0);
	    firstPersonControls.setPosition(0, 0, 0);

	    TWEEN.removeAll();

	    var from = {
	        x: camera.position.x,
	        y: camera.position.y,
	        z: camera.position.z
	    };

	    var to = {
	        x: 0,
	        y: 125,
	        z: 1750

	    };

	    mainStreetActiveSprite.visible = false;
	    commercialAlleyActiveSprite.visible = false;
	    cityMarketActiveSprite.visible = false;
	    theStLouisActiveSprite.visible = false;

	    mainStreetSprite.visible = true;
	    commercialAlleySprite.visible = true;
	    cityMarketSprite.visible = true;
	    theStLouisSprite.visible = true;

	    var lookStart = new THREE.Vector3(this.x, this.y, this.z);
	    var lookEnd = new THREE.Vector3(0, 125, 0);

	    new TWEEN.Tween(from)
            .to(to, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                camera.lookAt(camera.position.x, camera.position.y, camera.position.z);
                //console.log(this.x, this.y, this.z);
            })

            .onComplete(function () {
                if ($('#btn-tab-OV').hasClass('tab-active')) {
                    $('#overlayDefault.overlayBTN').removeClass('hidden');
                    $('#overlayDefaultText.overlayText').removeClass('hidden');
                }

            }).start();
	};

	function setPosition00() {

	    camera.updateProjectionMatrix();

	    firstPersonControls.setRotation(0, 0);
	    firstPersonControls.setPosition(0, 0, 0);

	    TWEEN.removeAll();

	    var from = {
	        x: camera.position.x,
	        y: camera.position.y,
	        z: camera.position.z
	    };

	    var to = {
	        x: 0,
	        y: 135,
	        z: -250

	    };

	    mainStreetActiveSprite.visible = false;
	    commercialAlleyActiveSprite.visible = false;
	    cityMarketActiveSprite.visible = false;
	    theStLouisActiveSprite.visible = false;

	    mainStreetSprite.visible = true;
	    commercialAlleySprite.visible = true;
	    cityMarketSprite.visible = true;
	    theStLouisSprite.visible = true;

	    new TWEEN.Tween(from)
            .to(to, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                camera.lookAt(this.x, this.y, this.z);
            })

            .onComplete(function () {
                $('#overlay00.overlayBTN').removeClass('hidden');
                $('#overlay00Text.overlayText').removeClass('hidden');
            }).start();
	};

	function setPosition01() {

	    camera.updateProjectionMatrix();

	    firstPersonControls.setRotation(0, 0);
	    firstPersonControls.setPosition(0, 0, 0);

	    TWEEN.removeAll();

	    var from = {
	        x: camera.position.x,
	        y: camera.position.y,
	        z: camera.position.z
	    };

	    var to = {
	        x: 350,
	        y: 250,
	        z: 250

	    };

	    mainStreetActiveSprite.visible = false;
	    commercialAlleyActiveSprite.visible = false;
	    cityMarketActiveSprite.visible = false;
	    theStLouisActiveSprite.visible = false;

	    mainStreetSprite.visible = true;
	    commercialAlleySprite.visible = true;
	    cityMarketSprite.visible = true;
	    theStLouisSprite.visible = true;

	    new TWEEN.Tween(from)
            .to(to, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                camera.lookAt(new THREE.Vector3(400, 150, -50));

            })

            .onComplete(function () {
                $('#overlay01.overlayBTN').removeClass('hidden');
                $('#overlay01Text.overlayText').removeClass('hidden');
                theStLouisActiveSprite.visible = true;
                theStLouisSprite.visible = false;
            }).start();

	};

	function setPosition02() {

	    camera.updateProjectionMatrix();

	    firstPersonControls.setRotation(0, 0);
	    firstPersonControls.setPosition(0, 0, 0);

	    TWEEN.removeAll();

	    var from = {
	        x: camera.position.x,
	        y: camera.position.y,
	        z: camera.position.z
	    };

	    var to = {
	        x: -1600,
	        y: 200,
	        z: -280

	    };

	    mainStreetActiveSprite.visible = false;
	    commercialAlleyActiveSprite.visible = false;
	    cityMarketActiveSprite.visible = false;
	    theStLouisActiveSprite.visible = false;

	    mainStreetSprite.visible = true;
	    commercialAlleySprite.visible = true;
	    cityMarketSprite.visible = true;
	    theStLouisSprite.visible = true;

	    new TWEEN.Tween(from)
            .to(to, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                camera.lookAt(new THREE.Vector3(-1625, 175, -550));
            })

            .onComplete(function () {
                $('#overlay02.overlayBTN').removeClass('hidden');
                $('#overlay02Text.overlayText').removeClass('hidden');
                cityMarketActiveSprite.visible = true;
                cityMarketSprite.visible = false;
            }).start();
	};

	function setPosition03() {

	    camera.updateProjectionMatrix();

	    firstPersonControls.setRotation(0, 0);
	    firstPersonControls.setPosition(0, 0, 0);

	    TWEEN.removeAll();

	    var from = {
	        x: camera.position.x,
	        y: camera.position.y,
	        z: camera.position.z
	    };

	    var to = {
	        x: -1300,
	        y: 250,
	        z: -900

	    };

	    mainStreetActiveSprite.visible = false;
	    commercialAlleyActiveSprite.visible = false;
	    cityMarketActiveSprite.visible = false;
	    theStLouisActiveSprite.visible = false;

	    mainStreetSprite.visible = true;
	    commercialAlleySprite.visible = true;
	    cityMarketSprite.visible = true;
	    theStLouisSprite.visible = true;

	    new TWEEN.Tween(from)
            .to(to, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                camera.lookAt(new THREE.Vector3(-1100, 180, -850));
            })

            .onComplete(function () {
                $('#overlay03.overlayBTN').removeClass('hidden');
                $('#overlay03Text.overlayText').removeClass('hidden');
                commercialAlleyActiveSprite.visible = true;
                commercialAlleySprite.visible = false;
            }).start();
	};

	function setPosition04() {

	    camera.updateProjectionMatrix();

	    firstPersonControls.setRotation(0, 0);
	    firstPersonControls.setPosition(0, 0, 0);

	    TWEEN.removeAll();

	    var from = {
	        x: camera.position.x,
	        y: camera.position.y,
	        z: camera.position.z
	    };

	    var to = {
	        x: -500,
	        y: 300,
	        z: -750

	    };

	    mainStreetActiveSprite.visible = false;
	    commercialAlleyActiveSprite.visible = false;
	    cityMarketActiveSprite.visible = false;
	    theStLouisActiveSprite.visible = false;

	    mainStreetSprite.visible = true;
	    commercialAlleySprite.visible = true;
	    cityMarketSprite.visible = true;
	    theStLouisSprite.visible = true;

	    new TWEEN.Tween(from)
            .to(to, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                camera.lookAt(new THREE.Vector3(-500, 200, -1000));
            })

            .onComplete(function () {
                $('#overlay04.overlayBTN').removeClass('hidden');
                $('#overlay04Text.overlayText').removeClass('hidden');
                mainStreetActiveSprite.visible = true;
                mainStreetSprite.visible = false;
            }).start();

	};
		
	// ----------------- Controls --------------------------- //
	
    // Animate Functions ------------------- //
	function animate() {

        var delta = clock.getDelta();
		requestAnimationFrame( animate );
		camera.updateProjectionMatrix();
		firstPersonControls.update( clock.getDelta() );
		TWEEN.update();
		
		render();

	};


	// Render Function ------------------------- //
	function render() {

		renderer.render( scene, camera );
		camera.updateProjectionMatrix();
		firstPersonControls.update(clock.getDelta());
		scene.updateMatrixWorld()
	};

	



