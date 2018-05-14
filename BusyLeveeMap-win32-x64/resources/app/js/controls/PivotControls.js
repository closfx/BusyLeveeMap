/**
 * @author be9concepts / https://github.com/be9concepts (10/05/17)
 */

// This set of controls performs orbiting, dollying (zooming).
//
//    Orbit - directional keys / mousewheel drag
//    Zoom - mousewheel scoll

// # var controls = new THREE.PivotControls(camera, document.documentElement);
// # controls.focus = new THREE.Vector3(0,0,0); // the position to orbit
// # controls.update(); // keep in your animation loop

THREE.PivotControls = function (object, domElement, focus) {
  this.object = object;
  var scope = this;

  this.domElement = (domElement !== undefined) ? domElement : document;

  this.enabled = true;

  this.dragButton = 1; // mouse wheel
  this.dragDelta = {x:0,y:0}
  this.dragging = false;
  this.downDelta = {x:0,y:0}

  this.keyboard = [];

  this.focus = focus;
  if (!focus) this.focus = new THREE.Vector3(0,0,0);

  this.angle = {x: -(Math.PI/2),y: undefined}

  this.moveAngle = {x:0,y:0}

  this.orbit = {
  	depth: {
  		min:2,
  		max:10,
  		current:5
  	},
  	height: {
  		min:2,
  		max:20,
  		current:5
  	},
  	constrain: function(){
  		scope.orbit.depth.current = Math.clamp(scope.orbit.depth)
  		scope.orbit.height.current = Math.clamp(scope.orbit.height)
  	}
  }


  // Add Local Event Listeners
    domElement.addEventListener('wheel', onMouseWheel, false);
    domElement.addEventListener('mousedown', onMouseDown, false);
    domElement.addEventListener('mousemove', onMouseMove, false);
    domElement.addEventListener('mouseup', onMouseUp, false);
    domElement.addEventListener('keydown', onKeyDown, false);
    domElement.addEventListener('keyup', onKeyUp, false);

  // Handle Local Event Listeners
  function onMouseWheel(event){
  	scope.orbit.depth.current += event.wheelDeltaY/120/5;
  }
  function onMouseDown(event){
  	if (event.button == scope.dragButton){
  		scope.downDelta = {
  			x:event.screenX,
  			y:event.screenY
  		}
  		scope.dragging = true;
  	}
  }
  function onMouseMove(event){
  	if (scope.dragging == true){
  		scope.dragDelta = {
  			x:scope.downDelta.x-event.screenX,
  			y:scope.downDelta.y-event.screenY
  		}
  		scope.orbit.height.current += scope.dragDelta.y/5;
  		scope.angle.x += ((scope.dragDelta.x/5)*Math.PI)/180;
  		scope.downDelta = {
  			x:event.screenX,
  			y:event.screenY
  		}
  	}
  }
  function onMouseUp(event){
  	if (event.button == scope.dragButton){
		scope.dragging = false;
  	}
  }
  function onKeyDown(event){
  	scope.keyboard[event.key] = true;
  }
  function onKeyUp(event){
  	scope.keyboard[event.key] = false;
  }

  this.update = function(){
  	scope.orbit.constrain();
  	scope.moveAngle = {x:0,y:0}
	if (scope.keyboard['ArrowLeft'] === true){
		scope.moveAngle.x = 1;
	}
	else if (scope.keyboard['ArrowRight'] === true){
		scope.moveAngle.x = -1;
	}
	if (scope.keyboard['ArrowUp'] === true){
		scope.orbit.height.current += .1;
	}
	else if (scope.keyboard['ArrowDown'] === true){
		scope.orbit.height.current += -.1;
	}
    if (scope.enabled === true) scope.angle.x += (scope.moveAngle.x*Math.PI)/180;

    scope.object.position.x = Math.cos(scope.angle.x) * scope.orbit.depth.current + scope.focus.x;
    scope.object.position.y = scope.orbit.height.current;
    scope.object.position.z = Math.sin(scope.angle.x) * scope.orbit.depth.current + scope.focus.z;

    scope.object.lookAt(scope.focus);
    scope.orbit.constrain();

  }
}