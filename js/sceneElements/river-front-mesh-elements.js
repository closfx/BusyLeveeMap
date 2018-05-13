// City Market Mesh Elements -------------- //
function riverFrontElements(){
	
	// River Flow Layer ----------------------------- // 
	var riverGroup = new THREE.Group();

		// water
			var waterGeometry = new THREE.PlaneBufferGeometry( 2500, 8192 );
				water = new THREE.Water(
					waterGeometry,
					{
						textureWidth: 256,
						textureHeight: 256,
						waterNormals: new THREE.TextureLoader().load( '../../tex/waternormals.jpg', function ( texture ) {
							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
						}),
						alpha: 0.5,
						sunDirection: new THREE.Vector3( 0, 2400, 0 ).normalize(),
						sunColor: 0x52350E,
						color: 0x52350E,
						distortionScale: 2,
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
			wharfTexture.wrapT = wharfTexture.wrapS = THREE.RepeatWrapping;

			riverWharf = new THREE.Mesh (
					new THREE.BoxGeometry( 75, 200, 8192 ),
					new THREE.MeshPhongMaterial( {
					map: wharfTexture,
					side: THREE.DoubleSide

					} )
				);

			riverWharf.traverse(function (child) {

			    if (child instanceof THREE.Mesh) {

			        child.geometry.computeVertexNormals();
			        child.castShadow = true;
			        child.receiveShadow = true;

			    }

			});

			riverGroup.add( riverWharf );
		
			riverWharf.position.set( 375, 37, 0 );
			riverWharf.rotation.set( 0, 0 , 93.5 * Math.PI / 180 );
			riverWharf.receiveShadow = true;
			riverWharf.castShadow = true;
		
	// Boats Group ------------------------------------------------------ //

        // Boat Style 01 FBX Model ---- //
        //var FBXloader = new THREE.FBXLoader();
        //FBXloader.load('../../models/fbx/riverboat-02.2.fbx', function ( boatsStyle02fbx ) {
        //    boatStyle02fbx.traverse(function (child) {
        //        if (child.isMesh) {
        //            child.castShadow = true;
        //            child.receiveShadow = true;
        //        }
        //    });

        //    riverGroup.add( boatStyle02fbx );

        //    boatStyle02fbx.position.set(0, 300, 0);
        //});

		// Boat Style 01 OBJ Model ---- //
		var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'RIVERBOAT-1-Baked.mtl', function ( boatStyle01Mat ) {

				boatStyle01Mat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( boatStyle01Mat );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load('RIVERBOAT-1-Baked.obj', function (boatStyle01OBJ) {

				    boatStyle01OBJ.traverse(function (child) {

				        if (child instanceof THREE.Mesh) {

				            child.geometry.computeVertexNormals();
				            child.castShadow = true;
				            child.receiveShadow = true;

				        }

				    });
					
					boatStyle01OBJ.position.set( 1350, 85, -2000 );
					boatStyle01OBJ.rotation.set( 0, -100 * Math.PI / 180, 0 );
					boatStyle01OBJ.scale.set( 0.2, 0.2, 0.2 );
					boatStyle01OBJ.receiveShadow = true;
					boatStyle01OBJ.castShadow = true;

					riverGroup.add( boatStyle01OBJ );
					//
			
			// Boat Style 01 Clone 01 ---- //
			var boatStyle01Clone01 = boatStyle01OBJ.clone();
			boatStyle01Clone01.position.set( 1350, 85, -1600 );
			boatStyle01Clone01.rotation.set( 0, -100 * Math.PI / 180, 0 );
			boatStyle01Clone01.scale.set( 0.2, 0.2, 0.2 );
			boatStyle01Clone01.receiveShadow = true;
			boatStyle01Clone01.castShadow = true;
					
			riverGroup.add( boatStyle01Clone01 );
			//
			
			// Boat Style 01 Clone 02 ---- //
			var boatStyle01Clone02 = boatStyle01OBJ.clone();
			boatStyle01Clone02.position.set( 950, 85, 200 );
			boatStyle01Clone02.rotation.set( 0, -75 * Math.PI / 180, 0 );
			boatStyle01Clone02.scale.set( 0.2, 0.2, 0.2 );
			boatStyle01Clone02.receiveShadow = true;
			boatStyle01Clone02.castShadow = true;
					
			riverGroup.add( boatStyle01Clone02 );
			//

				});

			});
		
		// Boat 08 --------------------------------------//
		// Boat Style 02 OBJ Model ---- //
		var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
            MTLLoader.load( 'riverboat-02.2.mtl', function ( boatStyle02Mat ) {

				boatStyle02Mat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( boatStyle02Mat );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load('riverboat-02.2.obj', function (boatStyle02OBJ) {

				    boatStyle02OBJ.traverse(function (child) {

				        if (child instanceof THREE.Mesh) {

				            child.geometry.computeVertexNormals();
				            child.castShadow = true;
				            child.receiveShadow = true;

				        }

				    });
					
					boatStyle02OBJ.position.set( 125, 110, 400 );
					boatStyle02OBJ.rotation.set( 0, 180 * Math.PI / 180, 0 );
                    boatStyle02OBJ.scale.set(0.5, 0.5, 0.5 );
					boatStyle02OBJ.receiveShadow = true;
					boatStyle02OBJ.castShadow = true;

					riverGroup.add( boatStyle02OBJ );
					//
					
				// Boat Style 02 Clone 01 --- //
				var boatStyle02Clone01 = boatStyle02OBJ.clone();

				boatStyle02Clone01.position.set( 125, 110, -300 );
				boatStyle02Clone01.rotation.set( 0, 0 * Math.PI / 180, 0 );
				boatStyle02Clone01.scale.set( 0.5, 0.5, 0.5 );
				boatStyle02Clone01.receiveShadow = true;
				boatStyle02Clone01.castShadow = true;

				riverGroup.add( boatStyle02Clone01 );
				//
					
				// Boat Style 02 Clone 02 --- //
				var boatStyle02Clone02 = boatStyle02OBJ.clone();

				boatStyle02Clone02.position.set( 500, 100, -2000 );
				boatStyle02Clone02.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone02.scale.set( 0.075, 0.075, 0.075 );
				boatStyle02Clone02.receiveShadow = true;
				boatStyle02Clone02.castShadow = true;

				//riverGroup.add( boatStyle02Clone02 );
				//
					
				// Boat Style 02 Clone 03 --- //
				var boatStyle02Clone03 = boatStyle02OBJ.clone();

				boatStyle02Clone03.position.set( 500, 100, -1550 );
				boatStyle02Clone03.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone03.scale.set( 0.075, 0.075, 0.075 );
				boatStyle02Clone03.receiveShadow = true;
				boatStyle02Clone03.castShadow = true;

				//riverGroup.add( boatStyle02Clone03 );
				//
				
				// Boat Style 02 Clone 04 --- //
				var boatStyle02Clone04 = boatStyle02OBJ.clone();

				boatStyle02Clone04.position.set( 725, 110, -1450 );
				boatStyle02Clone04.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone04.scale.set( 0.125, 0.125, 0.125 );
				boatStyle02Clone04.receiveShadow = true;
				boatStyle02Clone04.castShadow = true;

				//riverGroup.add( boatStyle02Clone04 );
				//
					
				// Boat Style 02 Clone 05 --- //
				var boatStyle02Clone05 = boatStyle02OBJ.clone();

				boatStyle02Clone05.position.set( 600, 100, -1225 );
				boatStyle02Clone05.rotation.set( 0, -100 * Math.PI / 180, 0 );
				boatStyle02Clone05.scale.set( 0.125, 0.125, 0.125 );
				boatStyle02Clone05.receiveShadow = true;
				boatStyle02Clone05.castShadow = true;

				//riverGroup.add( boatStyle02Clone05 );
				//
					
				// Boat Style 02 Clone 06 --- //
				var boatStyle02Clone06 = boatStyle02OBJ.clone();

				boatStyle02Clone06.position.set( 200, 100, 1000 );
				boatStyle02Clone06.rotation.set( 0, -70 * Math.PI / 180, 0 );
				boatStyle02Clone06.scale.set( 0.075, 0.075, 0.075 );
				boatStyle02Clone06.receiveShadow = true;
				boatStyle02Clone06.castShadow = true;

				//riverGroup.add( boatStyle02Clone06 );
				//

				});

			});
	
		scene.add( riverGroup );
		
		riverGroup.rotation.set( 0, 0, 0 );
		riverGroup.position.set( 0, 0, 0 );
		riverGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
	
	
}