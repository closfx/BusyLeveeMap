function loadTexElements() {
	
	// ---------- [ BEGIN ] Tex Elements ---------------- //

				// Brick / Stone Textures -------------- //
					// Flat Grey ------------- //
					var flatGreyMat = new THREE.MeshLambertMaterial( { color: 0x464646 } ); // #464646
					
	
					// Old Brick 01 Wide ----------- //
					var oldBrickTex01w = new THREE.TextureLoader().load( "../tex/smooth_brick-01.jpg" );
					oldBrickTex01w.wrapS = oldBrickTex01w.wrapT = THREE.RepeatWrapping;
					oldBrickTex01w.repeat.x = 100 / 24;
					oldBrickTex01w.repeat.y = 100 / 32;

					var oldBrickMat01w = new THREE.MeshPhongMaterial( {
											map: oldBrickTex01w,
											side: THREE.DoubleSide
											} );
					
					// Old Brick 01 Wide 02----------- //
					var oldBrickTex01w02 = new THREE.TextureLoader().load( "../tex/smooth_brick-01.jpg" );
					oldBrickTex01w02.wrapS = oldBrickTex01w02.wrapT = THREE.RepeatWrapping;
					oldBrickTex01w02.repeat.x = 100 / 8;
					oldBrickTex01w02.repeat.y = 100 / 32;

					var oldBrickMat01w02 = new THREE.MeshPhongMaterial( {
											map: oldBrickTex01w02,
											side: THREE.DoubleSide
											} );

					// Old Brick 01 Tall ----------- //
					var oldBrickTex01t = new THREE.TextureLoader().load( "../tex/smooth_brick-01.jpg" );
					oldBrickTex01t.wrapS = oldBrickTex01t.wrapT = THREE.RepeatWrapping;
					oldBrickTex01t.repeat.x = 100 / 32;
					oldBrickTex01t.repeat.y = 100 / 32;

					var oldBrickMat01t = new THREE.MeshPhongMaterial( {
											map: oldBrickTex01t,
											side: THREE.DoubleSide
											} );
		
					// Old Brick 01 Roof ----------- //
					var oldBrickTex01r = new THREE.TextureLoader().load( "../tex/smooth_brick-01.jpg" );
					oldBrickTex01r.wrapS = oldBrickTex01r.wrapT = THREE.RepeatWrapping;
					oldBrickTex01r.repeat.x = 100 / 32;
					oldBrickTex01r.repeat.y = 64 / 100;

					var oldBrickMat01r = new THREE.MeshPhongMaterial( {
											map: oldBrickTex01r,
											side: THREE.DoubleSide
											} );
		
					// Old Brick 01 Roof 2 ----------- //
					var oldBrickTex01r2 = new THREE.TextureLoader().load( "../tex/smooth_brick-01.jpg" );
					oldBrickTex01r2.wrapS = oldBrickTex01r2.wrapT = THREE.RepeatWrapping;
					oldBrickTex01r2.repeat.x = 100 / 32;
					oldBrickTex01r2.repeat.y = 32 / 100;

					var oldBrickMat01r2 = new THREE.MeshPhongMaterial( {
											map: oldBrickTex01r2,
											side: THREE.DoubleSide
											} );

					// Old Brick 02 Wide ----------- //
					var oldBrickTex02w = new THREE.TextureLoader().load( "../tex/smooth_brick-02.jpg" );
					oldBrickTex02w.wrapS = oldBrickTex02w.wrapT = THREE.RepeatWrapping;
					oldBrickTex02w.repeat.x = 100 / 24;
					oldBrickTex02w.repeat.y = 100 / 64;

					var oldBrickMat02w = new THREE.MeshPhongMaterial( {
											map: oldBrickTex02w,
											side: THREE.DoubleSide
											} );

					// Old Brick 02 Tall ----------- //
					var oldBrickTex02t = new THREE.TextureLoader().load( "../tex/smooth_brick-02.jpg" );
					oldBrickTex02t.wrapS = oldBrickTex02t.wrapT = THREE.RepeatWrapping;
					oldBrickTex02t.repeat.x = 100 / 32;
					oldBrickTex02t.repeat.y = 100 / 24;

					var oldBrickMat02t = new THREE.MeshPhongMaterial( {
											map: oldBrickTex02t,
											side: THREE.DoubleSide
											} );

					// Old Brick 03 Wide ----------- //
					var oldBrickTex03w = new THREE.TextureLoader().load( "../tex/smooth_brick-03.jpg" );
					oldBrickTex03w.wrapS = oldBrickTex03w.wrapT = THREE.RepeatWrapping;
					oldBrickTex03w.repeat.x = 100 / 24;
					oldBrickTex03w.repeat.y = 100 / 32;

					var oldBrickMat03w = new THREE.MeshPhongMaterial( {
											map: oldBrickTex03w,
											side: THREE.DoubleSide
											} );

					// Old Brick 03 Tall ----------- //
					var oldBrickTex03t = new THREE.TextureLoader().load( "../tex/smooth_brick-03.jpg" );
					oldBrickTex03t.wrapS = oldBrickTex03t.wrapT = THREE.RepeatWrapping;
					oldBrickTex03t.repeat.x = 100 / 64;
					oldBrickTex03t.repeat.y = 100 / 32;

					var oldBrickMat03t = new THREE.MeshPhongMaterial( {
											map: oldBrickTex03t,
											side: THREE.DoubleSide
											} );

					// Stone Coursed Rough 01 Wide ----------- //
					var coursedStoneTex01w = new THREE.TextureLoader().load( "../tex/stone-coursed-rough-01.jpg" );
					coursedStoneTex01w.wrapS = coursedStoneTex01w.wrapT = THREE.RepeatWrapping;
					coursedStoneTex01w.repeat.x = 100 / 64;
					coursedStoneTex01w.repeat.y = 100 / 52;

					var sailLoftMat01w = new THREE.MeshLambertMaterial( {
											map: coursedStoneTex01w,
											side: THREE.DoubleSide
											} );

					// Stone Coursed Rough 01 Tall ----------- //
					var coursedStoneTex01t = new THREE.TextureLoader().load( "../tex/stone-coursed-rough-01.jpg" );
					coursedStoneTex01t.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
					coursedStoneTex01t.repeat.x = 100 / 48;
					coursedStoneTex01t.repeat.y = 100 / 64;

					var sailLoftMat01t = new THREE.MeshLambertMaterial( {
											map: coursedStoneTex01t,
											side: THREE.DoubleSide
											} );
		
					// Concrete Beige Rooftop 01 ----------- //
					var concreteBeigeTex01 = new THREE.TextureLoader().load( "../tex/concrete_beige_tex.jpg" );
					concreteBeigeTex01.wrapS = concreteBeigeTex01.wrapT = THREE.MirrorRepeatWrapping;
					concreteBeigeTex01.repeat.x = 10 / 2;
					concreteBeigeTex01.repeat.y = 1 / 1;

					var concreteBeigeMat01 = new THREE.MeshLambertMaterial( {
											map: concreteBeigeTex01,
											side: THREE.DoubleSide
											} );
		
				// Stone Coursed Rough 01 Roof ----------- //
					var coursedStoneTex01r = new THREE.TextureLoader().load( "../tex/stone-coursed-rough-01.jpg" );
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
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-On-Tex.png" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-On-Tex.png" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- City Market Window Yellow V1 Off Tex --- //
			var windowYellowV1OffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Off-Tex.png" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Off-Tex.png" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- City Market Yellow Window V2 On Tex --- //
			var windowYellowV2OnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Yellow-Shutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Yellow-Shutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- City Market Yellow Window V2 Off Tex --- //
			var windowYellowV2OffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Yellow-Shutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Yellow-Shutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Yellow Door V1 Tex --- //
			var doorV1YellowMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Yellow.jpg" ), side: THREE.DoubleSide } ), // Front side
				
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Yellow.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Grey 3x6 Window Off Tex --- //
			var window3x6GreyOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Grey 3x6 Window On Tex --- //
			var window3x6GreyOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x6-Grey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Lite Grey Window On Tex --- //
			var window3x4LiteGreyOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Lite Grey Window Off Tex --- //
			var window3x4LiteGreyOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Red Window On Tex --- //
			var window3x4RedOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Lite Grey Window Off Tex --- //
			var window3x4RedOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Green Door v1 On Tex --- //
			var doorGreenV1OnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Green Door v1 Off Tex --- //
			var doorGreenV1OffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 02 Green Window On Tex --- //
			var window3x4GreenOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 02 Green Window Off Tex --- //
			var window3x4GreenOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 04 Rusty Window On Tex --- //
			var window3x4RustyOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
			var window3x4RustyOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			// --- Block 01 04 Beige Door On Tex --- //
			var doorV1BeigeOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 04 Beige Door Off Tex --- //
			var doorV1BeigeOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			// --- 3x4 Block 01 04 Beige Window On Tex --- //
			var window3x4BeigeOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 04 Beige Window Off Tex --- //
			var window3x4BeigeOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Block 01 04 Rusty Door On Tex --- //
			var doorV1RustyOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
			var doorV1RustyOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			// --- Yellow Door V2 On Tex --- //
			var doorV2YellowOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v2-Yellow-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v2-Yellow-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Yellow Door V2 Off Tex --- //
			var doorV2YellowOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v2-Yellow-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v2-Yellow-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			// --- 3x4 Red Window Shutters Tex --- //
			var window3x4RedShuttersOnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			var window3x4RedShuttersOffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			// --- Red Door v1 On Tex --- //
			var doorRedV1OnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side
				
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Red Door v1 Off Tex --- //
			var doorRedV1OffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
		
			// --- Beige 2x4 Window V1 On Tex --- //
			var windowBeige2x4V1OnMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
		
			// --- Beige 2x4 Window V1 Off Tex --- //
			var windowBeige2x4V1OffMats =
			[
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
				new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
			];
			//
	
}