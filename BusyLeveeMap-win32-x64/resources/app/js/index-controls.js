// [ BEGIN ] --------------- Sprites Group ---------------------------- //	

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(), INTERSECTED;
var sprites = [];

document.addEventListener('click', clickOnSprite01, false);
document.addEventListener('click', clickOnSprite02, false);
document.addEventListener('click', clickOnSprite03, false);
document.addEventListener('click', clickOnSprite04, false);


// ----------- Hotspot Targets and Sprites -------------- //

// St. Louis Riverboat label Sprite --------- //
theStLouisSpriteMap = new THREE.TextureLoader().load("../img/label-sprite-01-v2.png");

theStLouisSpriteMaterial = new THREE.SpriteMaterial({ map: theStLouisSpriteMap, color: 0xffffff });

var theStLouisSprite = new THREE.Sprite(theStLouisSpriteMaterial);
theStLouisSprite.position.set(150, 175, 525);
theStLouisSprite.userData.id = "theStLouisSprite";
theStLouisSprite.name = "theStLouisSprite";

theStLouisSprite.scale.set(128, 32);

sprites.push(theStLouisSprite);

//scene.add( theStLouisSprite );

theStLouisSpriteActiveMap = new THREE.TextureLoader().load("../img/label-sprite-01-v2-active.png");

theStLouisSpriteActiveMaterial = new THREE.SpriteMaterial({ map: theStLouisSpriteActiveMap, color: 0xffffff });

var theStLouisActiveSprite = new THREE.Sprite(theStLouisSpriteActiveMaterial);
theStLouisActiveSprite.position.set(150, 175, 525);
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

            //$('#popUp01.popUp').addClass('hidden');
        }

    });

}

//

// City Market Label Sprite --------- //
var cityMarketSpriteMap = new THREE.TextureLoader().load("../img/label-sprite-02-v2.png");

var cityMarketSpriteMaterial = new THREE.SpriteMaterial({ map: cityMarketSpriteMap, color: 0xffffff });

var cityMarketSprite = new THREE.Sprite(cityMarketSpriteMaterial);
cityMarketSprite.position.set(575, 220, -1480);
cityMarketSprite.name = "cityMarketSprite";

sprites.push(cityMarketSprite);

cityMarketSprite.scale.set(128, 32);

//scene.add( cityMarketSprite );

cityMarketSpriteActiveMap = new THREE.TextureLoader().load("../img/label-sprite-02-v2-active.png");

cityMarketSpriteActiveMaterial = new THREE.SpriteMaterial({ map: cityMarketSpriteActiveMap, color: 0xffffff });

var cityMarketActiveSprite = new THREE.Sprite(cityMarketSpriteActiveMaterial);
cityMarketActiveSprite.position.set(575, 220, -1480);
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

            //$('#popUp01.popUp').addClass('hidden');
        }

    });

}

// Commercial Alley Label Sprite --------- //
var commercialAlleySpriteMap = new THREE.TextureLoader().load("../img/label-sprite-03-v2.png");

var commercialAlleySpriteMaterial = new THREE.SpriteMaterial({ map: commercialAlleySpriteMap, color: 0xffffff });

var commercialAlleySprite = new THREE.Sprite(commercialAlleySpriteMaterial);
commercialAlleySprite.position.set(850, 175, -900);

commercialAlleySprite.name = "commercialAlleySprite";

sprites.push(commercialAlleySprite);

commercialAlleySprite.scale.set(128, 32);

//scene.add( commercialAlleySprite );

commercialAlleySpriteActiveMap = new THREE.TextureLoader().load("../img/label-sprite-03-v2-active.png");

commercialAlleySpriteActiveMaterial = new THREE.SpriteMaterial({ map: commercialAlleySpriteActiveMap, color: 0xffffff });

var commercialAlleyActiveSprite = new THREE.Sprite(commercialAlleySpriteActiveMaterial);
commercialAlleyActiveSprite.position.set(850, 175, -900);
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

            //$('#popUp01.popUp').addClass('hidden');
        }

    });

}

// Main Street Label Sprite --------- //
var mainStreetSpriteMap = new THREE.TextureLoader().load("../img/label-sprite-04-v2.png");

var mainStreetSpriteMaterial = new THREE.SpriteMaterial({ map: mainStreetSpriteMap, color: 0xffffff });

var mainStreetSprite = new THREE.Sprite(mainStreetSpriteMaterial);
mainStreetSprite.position.set(1050, 190, -400);

mainStreetSprite.name = "mainStreetSprite";

sprites.push(mainStreetSprite);

mainStreetSprite.scale.set(128, 32);

//scene.add( mainStreetSprite );

mainStreetSpriteActiveMap = new THREE.TextureLoader().load("../img/label-sprite-04-v2-active.png");

mainStreetSpriteActiveMaterial = new THREE.SpriteMaterial({ map: mainStreetSpriteActiveMap, color: 0xffffff });

var mainStreetActiveSprite = new THREE.Sprite(mainStreetSpriteActiveMaterial);
mainStreetActiveSprite.position.set(1050, 190, -400);
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
                $('#overlayDefault.overlay').removeClass('hidden');
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

    new TWEEN.Tween(from)
        .to(to, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
            camera.position.set(this.x, this.y, this.z);
            camera.lookAt(this.x, this.y, this.z);
        })

        .onComplete(function () {
            $('#overlay00.overlay').removeClass('hidden');
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

    new TWEEN.Tween(from)
        .to(to, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
            camera.position.set(this.x, this.y, this.z);
            camera.lookAt(new THREE.Vector3(400, 150, -50));

        })

        .onComplete(function () {
            $('#overlay01.overlay').removeClass('hidden');
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
        x: -1850,
        y: 250,
        z: -200

    };

    new TWEEN.Tween(from)
        .to(to, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
            camera.position.set(this.x, this.y, this.z);
            camera.lookAt(new THREE.Vector3(-1550, 100, -750));
        })

        .onComplete(function () {
            $('#overlay02.overlay').removeClass('hidden');
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

    new TWEEN.Tween(from)
        .to(to, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
            camera.position.set(this.x, this.y, this.z);
            camera.lookAt(new THREE.Vector3(-1100, 200, -900));
        })

        .onComplete(function () {
            $('#overlay03.overlay').removeClass('hidden');
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
        y: 200,
        z: -750

    };

    new TWEEN.Tween(from)
        .to(to, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
            camera.position.set(this.x, this.y, this.z);
            camera.lookAt(new THREE.Vector3(-500, 190, -850));
        })

        .onComplete(function () {
            $('#overlay04.overlay').removeClass('hidden');
        }).start();

};