// HUD Canvas ------------------------------ //

var hudCanvas = document.createElement('canvas');
hudCanvas.width = width;
hudCanvas.height = height;
var hudBitmap = hudCanvas.getContext('2d');

hudBitmap.font = "Normal 40px Arial";
hudBitmap.textAlign = 'center';
hudBitmap.fillStyle = "rgba(245,245,245,0.75)";
hudBitmap.fillText('Initializing...', width / 2, height / 2);

var cameraHUD = new THREE.OrthographicCamera(
-width/2, width/2,
height/2, -height/2,
0, 30
);

sceneHUD = new THREE.Scene();

var hudTexture = new THREE.Texture(hudCanvas)
hudTexture.needsUpdate = true;
var material = new THREE.MeshBasicMaterial( {map: hudTexture } );
material.transparent = true;

var planeGeometry = new THREE.PlaneGeometry( width, height );
var plane = new THREE.Mesh( planeGeometry, material );
sceneHUD.add( plane );

renderer.render(sceneHUD, cameraHUD);