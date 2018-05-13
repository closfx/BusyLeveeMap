// City Market Mesh Elements -------------- //
function loadCityMarketMeshElements(){
	
	// [ BEGIN ] ----------- ALL Tex ---------- //
	// ---------- [ BEGIN ] Tex Elements ---------------- //
		// Brick / Stone Textures -------------- //
			// Flat Grey ------------- //
			var flatGreyMat = new THREE.MeshPhongMaterial( { color: 0x464646 } ); // #464646


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

			
			// Concrete Beige Rooftop 01 ----------- //
			var concreteBeigeTex01 = new THREE.TextureLoader().load( "../../tex/concrete_beige_tex.jpg" );
			concreteBeigeTex01.wrapS = concreteBeigeTex01.wrapT = THREE.MirrorRepeatWrapping;
			concreteBeigeTex01.repeat.x = 10 / 2;
			concreteBeigeTex01.repeat.y = 1 / 1;

			var concreteBeigeMat01 = new THREE.MeshPhongMaterial( {
									map: concreteBeigeTex01,
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
	
	// ---------- [ END ] Tex Elements ---------------- //

	// [ BEGIN ]--------- City Market ---------------------- //
			var cityMarketGroup = new THREE.Group();
	
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
				var flatGreyMat = new THREE.MeshPhongMaterial( { color: 0x464646 } ); // #464646
		
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
		
			var windowYellowV1OffMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OffMats );

			windowYellowV1OffMesh.position.set( 603, 126 , -1634 );
			windowYellowV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;

			//scene.add( windowYellowV1OffMesh );
			cityMarketGroup.add( windowYellowV1OffMesh );
			//
			
		// Yellow Window V1 On ---- //
		
			var windowYellowV1OnMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OnMats );

			windowYellowV1OnMesh.position.set( 665, 126 , -1685 );
			windowYellowV1OnMesh.receiveShadow = true;
			windowYellowV1OnMesh.castShadow = true;

			//scene.add( windowYellowV1OnMesh );
			cityMarketGroup.add(windowYellowV1OnMesh);
			//
		
		// City Market Front Left Side Windows ---------------------- //
			var windowYellowV1Geo = new THREE.BoxGeometry( 8, 12, 1 );
		
			var windowYellowV2Geo = new THREE.BoxGeometry( 8, 6, 1 );
		
		// Yellow Window V1 Off ---- //
		
			var windowYellowV1OffMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OffMats );

			windowYellowV1OffMesh.position.set( 603, 126 , -1634 );
			windowYellowV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;

			//scene.add( windowYellowV1OffMesh );
			cityMarketGroup.add( windowYellowV1OnMesh );
			//
			
		// Yellow Window V1 On ---- //
		
			var windowYellowV1OnMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OnMats );

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
		
			var windowYellowV2OffMesh = new THREE.Mesh( windowYellowV2Geo, windowYellowV2OffMats );

			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;
			//
			
		// Yellow Window V2 On ---- //
		
			var windowYellowV2OnMesh = new THREE.Mesh( windowYellowV2Geo, windowYellowV2OnMats );

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
		
			var doorV1YellowMesh = new THREE.Mesh( doorV1Geo, doorV1YellowMats );
		
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
		
			var window3x6GreyOffMesh = new THREE.Mesh( window3x6Geo, window3x6GreyOffMats );

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
			//scene.add( window3x6GreyClone01 );
			cityMarketGroup.add( window3x6GreyClone01 );
			//
		
			// Window 3x6 Grey On ---- //
		
			var window3x6GreyOnMesh = new THREE.Mesh( window3x6Geo, window3x6GreyOnMats );

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
	// [ END ]--------- City Market ---------------------- //

			scene.add(cityMarketGroup);
			cityMarketGroup.name = "cityMarketGroup";
	cityMarketGroup.position.set( -128, 0, 0 );
	cityMarketGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
	//
	
}