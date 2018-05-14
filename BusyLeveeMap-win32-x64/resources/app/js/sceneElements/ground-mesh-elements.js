// Ground Mesh Elements -------------- //
function loadGroundMeshElements(){
	
	var cityScapeMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-front-v2.png" ), side: THREE.DoubleSide, transparent: true } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ) // Back side
		];
	
	var cityScapeClone01Mats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-clone-01.png" ), side: THREE.DoubleSide, transparent: true } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-clone-01.png" ), side: THREE.DoubleSide, transparent: true } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ) // Back side
		];
	
	var cityScapeClone02Mats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-clone-02.png" ), side: THREE.DoubleSide, transparent: true } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-clone-02.png" ), side: THREE.DoubleSide, transparent: true } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ) // Back side
		];
	
	var treeLineMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/treeline-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/treeline-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/cityscape-blank.png" ), side: THREE.DoubleSide, transparent: true } ) // Back side
		];
	
		// [ BEGIN ] ---------- Ground Elements Group ---------- //
		var groundElementsGroup = new THREE.Group();
		
	// Boundaries----------------------------------------------------------------------------------- //
		// Left Wall ----------------------------------//
			//var leftWallMesh = new THREE.Mesh (
			//		new THREE.BoxGeometry( 2750, 300, 10 ),
			//		new THREE.MeshBasicMaterial( {
			//		wireframe: false,
			//		transparent: true,
			//		opacity: 0.5,
			//		color: 0xffffff,
			//		side: THREE.DoubleSide
			//		} )
			//	);

			//allBlocksGroup.add( leftMesh );
			//scene.add( leftWallMesh );
		
			//leftWallMesh.position.set( -2050, 200 , 150 );
			//leftWallMesh.rotation.set( 0, 90 * Math.PI / 180 , 0 );
			//
		
		// Right Wall ----------------------------------//
			//var rightWallMesh = new THREE.Mesh (
			//		new THREE.BoxGeometry( 2750, 300, 10 ),
			//		new THREE.MeshBasicMaterial( {
			//		wireframe: false,
			//		transparent: true,
			//		opacity: 0.5,
			//		color: 0xffffff,
			//		side: THREE.DoubleSide
			//		} )
			//	);

			////scene.add( rightWallMesh );
			//scene.add( rightWallMesh );
		
			//rightWallMesh.position.set( 2050, 200 , 150 );
			//rightWallMesh.rotation.set( 0, 90 * Math.PI / 180 , 0 );
			//
		
	// Treeline ----------------------------------//
	
			// Rear Wall ----------------------------------//
			//var rearWallMesh = new THREE.Mesh (
			//		new THREE.BoxGeometry( 64, 300, 4096 ),
			//		new THREE.MeshPhongMaterial( {
			//		wireframe: false,
			//		transparent: true,
			//		opacity: 0.0,
			//		color: 0xffffff,
			//		side: THREE.DoubleSide
			//		} )
			//	);
			
			//rearWallMesh.position.set( 0, 150 , 1900 );
			//rearWallMesh.rotation.set( 0, 90 * Math.PI / 180 , 0 );
	
			//scene.add( rearWallMesh );
			//
	
			var treeLineGeo = new THREE.BoxGeometry( 64, 256, 4096 );
		
			var treeLineMesh = new THREE.Mesh( treeLineGeo, treeLineMats );
	
			//scene.add( treeLineMesh );
			scene.add( treeLineMesh );
		
			treeLineMesh.position.set( 0, 200 , 2000 );
			treeLineMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
			treeLineMesh.side = THREE.DoubleSide;
			treeLineMesh.receiveShadow = false;
			treeLineMesh.castShadow = false;
			//
		
		// CityScape ----------------------------------//
            var cityScapeGeo = new THREE.BoxGeometry(64, 512, 4096 );

            //var cityPlaneMat01 = new THREE.MeshPhongMaterial({ map: textureLoader.load("tex/cityscape-front-v2.png"), side: THREE.DoubleSide, transparent: true });
            //var cityPlaneMat02 = new THREE.MeshPhongMaterial({ map: textureLoader.load("tex/cityscape-clone-01.png"), side: THREE.DoubleSide, transparent: true });
            //var cityPlaneMat03 = new THREE.MeshPhongMaterial({ map: textureLoader.load("tex/cityscape-clone-02.png"), side: THREE.DoubleSide, transparent: true });
		
			var cityScapeMesh = new THREE.Mesh( cityScapeGeo, cityScapeMats );
            //var cityScapeMesh = new THREE.Mesh(cityScapeGeo, cityPlaneMat01);
	
			var cityScapeClone01Mesh = new THREE.Mesh( cityScapeGeo, cityScapeClone01Mats );
	
			var cityScapeClone02Mesh = new THREE.Mesh( cityScapeGeo, cityScapeClone02Mats );

			cityScapeMesh.position.set( 0, 225 , -2048 );
			cityScapeMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
			cityScapeMesh.side = THREE.DoubleSide;
			cityScapeMesh.receiveShadow = false;
			cityScapeMesh.castShadow = true;

			scene.add( cityScapeMesh );
			//
	
			//cityScapeClone01 = cityScapeClone01Mesh.clone();
	
			//cityScapeClone01.position.set( -2500, 200 , -1750 );
			//cityScapeClone01.rotation.set( 0, 93 * Math.PI / 180, 0 );
			//cityScapeClone01.side = THREE.DoubleSide;
			//cityScapeClone01.receiveShadow = false;
			//cityScapeClone01.castShadow = true;

			//scene.add( cityScapeClone01 );
			//
	
			//cityScapeClone02 = cityScapeClone02Mesh.clone();
	
			//cityScapeClone02.position.set( 2500, 200 , -1750 );
			//cityScapeClone02.rotation.set( 0, 87 * Math.PI / 180, 0 );
			//cityScapeClone02.side = THREE.DoubleSide;
			//cityScapeClone02.receiveShadow = false;
			//cityScapeClone02.castShadow = true;

			//scene.add( cityScapeClone02 );
			
		
		// Levee Ground Elevation JSON ---------------------------------------------------------------- //
			JSONLoader.load( "models/json/ground-elevation-plane-v2.json", function( elevationGeometry ) {
				elevationMesh = new THREE.Mesh( elevationGeometry, new THREE.MeshLambertMaterial( {
				    color: 0x0f0c09,
				    //normalMap: textureLoader.load( "models/json/tex/GroundSurface_Color.jpg" ),
					map: textureLoader.load( "models/json/tex/GroundSurface_Color.jpg" )
                    
					})
				);

				elevationMesh.receiveShadow = true;
				elevationMesh.material.side = THREE.DoubleSide;
				elevationMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
				elevationMesh.position.set(0, -500, 0);
				//elevationMesh.userData.id = "elevationMesh";

				scene.add( elevationMesh );

				items.push(elevationMesh);

			} );
			//
	
		// City Market foundations JSON ---------------------------------------------------------------- //
			var blockFoundationsGroup = new THREE.Group();
		
//			// City Market Foundation OBJ ---- //
			var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( 'models/obj/' );
			MTLLoader.setPath( 'models/obj/' );
			MTLLoader.load( 'city-market-foundation.mtl', function ( cityMarketFoundationMat ) {

				cityMarketFoundationMat.preload();
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( cityMarketFoundationMat );
				OBJLoader.setPath( 'models/obj/' );
				OBJLoader.load( 'city-market-foundation.obj', function ( cityMarketFoundationOBJ ) {
	
					cityMarketFoundationOBJ.traverse( function ( child ) {

						if (child instanceof THREE.Mesh ) {
							
						    child.geometry.computeVertexNormals();
						    child.castShadow = true;
						    child.receiveShadow = true;
							
						}
						
					});
					
					scene.add( cityMarketFoundationOBJ );
					
					cityMarketFoundationOBJ.scale.set( 32, 32, 32 );
					cityMarketFoundationOBJ.rotation.set( 0, 90 * Math.PI / 180, -7 * Math.PI / 180 );
					cityMarketFoundationOBJ.position.set( -1630, 43, -775 );

				});

			});
//		
//			// Blocks Foundations ----//
//			// Blocks 01 / 05 ---//
//			var MTLLoader = new THREE.MTLLoader();
//			
//			MTLLoader.setTexturePath( 'models/obj/' );
//			MTLLoader.setPath( 'models/obj/' );
//			MTLLoader.load( 'blocks01-foundation.mtl', function ( blockFoundationsMat ) {
//
//				blockFoundationsMat.preload();
//				//blockFoundationsMat.ambient.setHex(0x6a6860);
//                //blockFoundationsMat.color.setHex(0x6a6860);
//				
//				var OBJLoader = new THREE.OBJLoader();
//
//				OBJLoader.setMaterials( blockFoundationsMat );
//				OBJLoader.setPath( 'models/obj/' );
//				OBJLoader.load( 'blocks01-foundation.obj', function ( blockFoundationsOBJ ) {
//
//					blockFoundationsOBJ.traverse( function ( child ) {
//
//						if (child instanceof THREE.Mesh ) {
//							
//							child.geometry.computeVertexNormals(); 
//						}
//						
//					});
//					
//					//scene.add( blockFoundationsOBJ );
//					
//					blockFoundationsOBJ.scale.set( 1, 1, 1.05 );
//					blockFoundationsOBJ.rotation.set( 0, 90 * Math.PI / 180, 0);
//					blockFoundationsOBJ.position.set( 850, 16, -775 );
//					
//			// Blocks 02 / 06 ---//
//				blockFoundationsClone01 = blockFoundationsOBJ.clone();
//				
//				//scene.add( blockFoundationsClone01 );
//					
//				blockFoundationsClone01.scale.set( 1, 1, 1.05 );
//				blockFoundationsClone01.rotation.set( 0, 0, 0);
//				blockFoundationsClone01.position.set( 850, 16, 20 );
//					
//			// Blocks 03 / 07 ---//
//				blockFoundationsClone02 = blockFoundationsOBJ.clone();
//				
//				//scene.add( blockFoundationsClone02 );
//					
//				blockFoundationsClone02.scale.set( 1, 1, 1.05 );
//				blockFoundationsClone02.rotation.set( 0, 0, 0);
//				blockFoundationsClone02.position.set( 850, 16, 800 );
//					
//			// Blocks 04 / 08 ---//
//				blockFoundationsClone03 = blockFoundationsOBJ.clone();
//				
//				//scene.add( blockFoundationsClone03 );
//					
//				blockFoundationsClone03.scale.set( 1, 1, 1.05 );
//				blockFoundationsClone03.rotation.set( 0, 0, 0);
//				blockFoundationsClone03.position.set( 850, 16, 1600 );
//				
//				});
//				//
//				
//			});
		
		
		//
		
	// [ END ] ---------- Ground Elements Group ---------- //
	
}