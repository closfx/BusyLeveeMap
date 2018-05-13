// Toggle between Orbit Controls and First Person Controls --------------------------------- //
	function setControls() {	

		// First Person Controls --------------------------------------------------------- //

		var options = {
		speedFactor: 10,
		delta: 1,
		rotationFactor: 0.025,
		maxPitch: 55,
		hitTest: true,
		hitTestDistance: 25
		};

		firstPersonCamera = new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 1, 6144 );

		firstPersonControls = new TouchControls( container.parent(), firstPersonCamera, options );
		firstPersonControls.setRotation( 0, 0 );
		firstPersonControls.setPosition( 350, 192, 0 );
		firstPersonControls.addToScene( scene );
		firstPersonControls.lookSpeed = 2;
		firstPersonControls.movementSpeed = 20;

		}

		function setControlsFirstPerson() {
			camera = firstPersonCamera;
			controls = firstPersonControls;
			//$("#touchControls").show();
			//$("#gestureLegend").hide();
			defaultCamera.position.set( 350, 192, 0 );
			
			var from = {
					x: camera.position.x,
					y: camera.position.y,
					z: camera.position.z
				};

				var to = {
					x: 350, 
					y: 192,
					z: 0

				};
			
				var tween = new TWEEN.Tween(from)
					.to(to, 2000)
					.easing( TWEEN.Easing.Sinusoidal.Out )
					.onUpdate(function () {
					camera.position.set(this.x, this.y, this.z);
					//camera.lookAt(new THREE.Vector3(0, 0, 0));
					var vector = new THREE.Vector3( 0, 192, 0 );
					vector.applyQuaternion( camera.quaternion );
					camera.lookAt( vector );
				})
				
					.onComplete(function () {
					//camera.lookAt(new THREE.Vector3(0, 0, 0));
					var vector = new THREE.Vector3( 0, 192, 0 );
					vector.applyQuaternion( camera.quaternion );
					camera.lookAt( vector );
				})
				
					.start();
			
		}


		function setDefaultControls() {
			// Default Controls --------------------------------------------------------- //
			defaultCamera = new THREE.PerspectiveCamera( 45, mapWidth / mapHeight, 1, 6144 );
			defaultCamera.position.set( 350, 192, 0 );
			defaultCamera.lookAt( 0, 192, 0 );

			camera = defaultCamera;	
			//controls = defaultControls;
			//$("#touchControls").hide();
			//$("#gestureLegend").show();
			firstPersonControls.setPosition( 350, 192, 0 );
			//firstPersonControls.setRotation( 0, 0, 0 );
	
			
				var from = {
					x: camera.position.x,
					y: camera.position.y,
					z: camera.position.z
				};

				var to = {
					x: 0, 
					y: 192,
					z: 0

				};
			
				var tween = new TWEEN.Tween(from)
					.to(to, 2000)
					.easing( TWEEN.Easing.Sinusoidal.Out )
					.onUpdate(function () {
					camera.position.set(this.x, this.y, this.z);
					//camera.lookAt(new THREE.Vector3(0, 0, 0));
					var vector = new THREE.Vector3( 350, 192, 0 );
					vector.applyQuaternion( camera.quaternion );
					camera.lookAt( vector );
				})
				
					.onComplete(function () {
					//camera.lookAt(new THREE.Vector3(0, 0, 0));
					var vector = new THREE.Vector3( 350, 192, 0 );
					vector.applyQuaternion( camera.quaternion );
					camera.lookAt( vector );
				})
				
					.start();
					

			}