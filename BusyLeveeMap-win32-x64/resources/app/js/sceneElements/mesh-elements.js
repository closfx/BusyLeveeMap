function loadMeshElements() {
	
	// [ BEGIN ] ----------- ALL Tex ---------- //
	// ---------- [ BEGIN ] Tex Elements ---------------- //
		// Brick / Stone Textures -------------- //
			// Flat Grey ------------- //
			var flatGreyMat = new THREE.MeshPhongMaterial( { color: 0x464646 } ); // #464646

			//var smoothBrickNormalMap = new THREE.TextureLoader().load( "tex/smooth_brick-normal.jpg" );
	
			//var coursedStoneNormalMap = new THREE.TextureLoader().load( "tex/_Stone_Coursed_Rough_3_normal.jpg" );

			// Old Brick 01 Wide ----------- //
			var oldBrickTex01w = new THREE.TextureLoader().load( "tex/smooth_brick-01.jpg" );
			oldBrickTex01w.wrapS = oldBrickTex01w.wrapT = THREE.RepeatWrapping;
			oldBrickTex01w.repeat.x = 100 / 24;
            oldBrickTex01w.repeat.y = 100 / 32;

			var oldBrickMat01w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01w,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Wide 02----------- //
			var oldBrickTex01w02 = new THREE.TextureLoader().load( "tex/smooth_brick-01.jpg" );
			oldBrickTex01w02.wrapS = oldBrickTex01w02.wrapT = THREE.RepeatWrapping;
			oldBrickTex01w02.repeat.x = 100 / 8;
            oldBrickTex01w02.repeat.y = 100 / 32;

			var oldBrickMat01w02 = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01w02,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Tall ----------- //
			var oldBrickTex01t = new THREE.TextureLoader().load( "tex/smooth_brick-01.jpg" );
			oldBrickTex01t.wrapS = oldBrickTex01t.wrapT = THREE.RepeatWrapping;
			oldBrickTex01t.repeat.x = 100 / 32;
			oldBrickTex01t.repeat.y = 100 / 32;

			var oldBrickMat01t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01t,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Roof ----------- //
			var oldBrickTex01r = new THREE.TextureLoader().load( "tex/smooth_brick-01.jpg" );
			oldBrickTex01r.wrapS = oldBrickTex01r.wrapT = THREE.RepeatWrapping;
			oldBrickTex01r.repeat.x = 100 / 32;
			oldBrickTex01r.repeat.y = 64 / 100;

			var oldBrickMat01r = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01r,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Roof 2 ----------- //
			var oldBrickTex01r2 = new THREE.TextureLoader().load( "tex/smooth_brick-01.jpg" );
			oldBrickTex01r2.wrapS = oldBrickTex01r2.wrapT = THREE.RepeatWrapping;
			oldBrickTex01r2.repeat.x = 100 / 32;
			oldBrickTex01r2.repeat.y = 32 / 100;

			var oldBrickMat01r2 = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01r2,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 02 Wide ----------- //
			var oldBrickTex02w = new THREE.TextureLoader().load( "tex/smooth_brick-02.jpg" );
			oldBrickTex02w.wrapS = oldBrickTex02w.wrapT = THREE.RepeatWrapping;
			oldBrickTex02w.repeat.x = 100 / 24;
			oldBrickTex02w.repeat.y = 100 / 64;

			var oldBrickMat02w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex02w,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 02 Tall ----------- //
			var oldBrickTex02t = new THREE.TextureLoader().load( "tex/smooth_brick-02.jpg" );
			oldBrickTex02t.wrapS = oldBrickTex02t.wrapT = THREE.RepeatWrapping;
			oldBrickTex02t.repeat.x = 100 / 32;
			oldBrickTex02t.repeat.y = 100 / 24;

			var oldBrickMat02t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex02t,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 03 Wide ----------- //
			var oldBrickTex03w = new THREE.TextureLoader().load( "tex/smooth_brick-03.jpg" );
			oldBrickTex03w.wrapS = oldBrickTex03w.wrapT = THREE.RepeatWrapping;
			oldBrickTex03w.repeat.x = 100 / 24;
			oldBrickTex03w.repeat.y = 100 / 32;

			var oldBrickMat03w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex03w,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 03 Tall ----------- //
			var oldBrickTex03t = new THREE.TextureLoader().load( "tex/smooth_brick-03.jpg" );
			oldBrickTex03t.wrapS = oldBrickTex03t.wrapT = THREE.RepeatWrapping;
			oldBrickTex03t.repeat.x = 100 / 64;
			oldBrickTex03t.repeat.y = 100 / 32;

			var oldBrickMat03t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex03t,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Stone Coursed Rough 01 Wide ----------- //
			var coursedStoneTex01w = new THREE.TextureLoader().load( "tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01w.wrapS = coursedStoneTex01w.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01w.repeat.x = 100 / 64;
			coursedStoneTex01w.repeat.y = 100 / 52;

			var sailLoftMat01w = new THREE.MeshPhongMaterial( {
									map: coursedStoneTex01w,
									//normalMap: coursedStoneNormalMap,
									side: THREE.DoubleSide
									} );

			// Stone Coursed Rough 01 Tall ----------- //
			var coursedStoneTex01t = new THREE.TextureLoader().load( "tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01t.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01t.repeat.x = 100 / 48;
			coursedStoneTex01t.repeat.y = 100 / 64;

			var sailLoftMat01t = new THREE.MeshPhongMaterial( {
									map: coursedStoneTex01t,
									//normalMap: coursedStoneNormalMap,
									side: THREE.DoubleSide
									} );

			// Concrete Beige Rooftop 01 ----------- //
			var concreteBeigeTex01 = new THREE.TextureLoader().load( "tex/concrete_beige_tex.jpg" );
			concreteBeigeTex01.wrapS = concreteBeigeTex01.wrapT = THREE.MirrorRepeatWrapping;
			concreteBeigeTex01.repeat.x = 10 / 2;
			concreteBeigeTex01.repeat.y = 1 / 1;

			var concreteBeigeMat01 = new THREE.MeshPhongMaterial( {
									map: concreteBeigeTex01,
									side: THREE.DoubleSide
									} );

		// Stone Coursed Rough 01 Roof ----------- //
			var coursedStoneTex01r = new THREE.TextureLoader().load( "tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01r.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01r.repeat.x = 100 / 32;
			coursedStoneTex01r.repeat.y = 44 / 100;

			var sailLoftMat01r = new THREE.MeshPhongMaterial( {
									map: coursedStoneTex01r,
									//normalMap: coursedStoneNormalMap,
									side: THREE.DoubleSide
									} );

		// ------- End Brick/Stone Textures ----------------- //

		// ------- Window Textures ------ //
		//City Market Yellow V1 Windows ---------------------------------------------------------------------------------------------- //
		// --- City Market Window Yellow V1 On Tex --- //
		var windowYellowV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-On-Tex.png" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-On-Tex.png" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- City Market Window Yellow V1 Off Tex --- //
		var windowYellowV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Off-Tex.png" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Off-Tex.png" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- City Market Yellow Window V2 On Tex --- //
		var windowYellowV2OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Yellow-Shutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Yellow-Shutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- City Market Yellow Window V2 Off Tex --- //
		var windowYellowV2OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Yellow-Shutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Yellow-Shutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Yellow Door V1 Tex --- //
		var doorV1YellowMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Yellow.jpg" ), side: THREE.DoubleSide } ), // Front side

			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Yellow.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Grey 3x6 Window Off Tex --- //
		var window3x6GreyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Grey 3x6 Window On Tex --- //
		var window3x6GreyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x6-Grey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window On Tex --- //
		var window3x4LiteGreyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window Off Tex --- //
		var window3x4LiteGreyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Red Window On Tex --- //
		var window3x4RedOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window Off Tex --- //
		var window3x4RedOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Green Door v1 On Tex --- //
		var doorGreenV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Green Door v1 Off Tex --- //
		var doorGreenV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 02 Green Window On Tex --- //
		var window3x4GreenOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 02 Green Window Off Tex --- //
		var window3x4GreenOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window On Tex --- //
		var window3x4RustyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
		var window3x4RustyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Block 01 04 Beige Door On Tex --- //
		var doorV1BeigeOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Beige Door Off Tex --- //
		var doorV1BeigeOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- 3x4 Block 01 04 Beige Window On Tex --- //
		var window3x4BeigeOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Beige Window Off Tex --- //
		var window3x4BeigeOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Block 01 04 Rusty Door On Tex --- //
		var doorV1RustyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
		var doorV1RustyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Yellow Door V2 On Tex --- //
		var doorV2YellowOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v2-Yellow-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v2-Yellow-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Yellow Door V2 Off Tex --- //
		var doorV2YellowOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window01/Window-01-Sides-Tex.png" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v2-Yellow-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v2-Yellow-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- 3x4 Red Window Shutters Tex --- //
		var window3x4RedShuttersOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		var window3x4RedShuttersOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Red Door v1 On Tex --- //
		var doorRedV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side

			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Red Door v1 Off Tex --- //
		var doorRedV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Beige 2x4 Window V1 On Tex --- //
		var windowBeige2x4V1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Beige 2x4 Window V1 Off Tex --- //
		var windowBeige2x4V1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//
	
	// ---------- [ END ] Tex Elements ---------------- //
	
	// Levee Blocks JSON ------------------------------------------------------------------ //
	
		// Blocks Group ------- //
		var allBlocksGroup = new THREE.Group();

		// Block 02 Group -------------------------- //
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
		
			var windowBeige2x4V1OffMesh = new THREE.Mesh( windowBeige2x4V1Geo, windowBeige2x4V1OffMats );

			windowBeige2x4V1OffMesh.receiveShadow = true;
			windowBeige2x4V1OffMesh.castShadow = true;
			//
			
		// Beige 2x4 Window V1 On ---- //
		
			var windowBeige2x4V1OnMesh = new THREE.Mesh( windowBeige2x4V1Geo, windowBeige2x4V1OnMats );

			windowBeige2x4V1OnMesh.receiveShadow = true;
			windowBeige2x4V1OnMesh.castShadow = true;
			//
			
		// --- Row 03 --- //
			var windowBeige2x4V1Clone01 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone01.position.set( 600, 143, -273 );
			windowBeige2x4V1Clone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add(windowBeige2x4V1Clone01);

			var width = 20;
			var height = 30;
			var intensity = 100;
			var rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
			rectLight.position.set(599, 143, -273);
			rectLight.rotation.set(0, 90 * Math.PI / 180, 0);
			//scene.add(rectLight);
			allBlocksGroup.add(rectLight);

			//var rectLightMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial());
			//rectLightMesh.scale.x = rectLight.width;
			//rectLightMesh.scale.y = rectLight.height;
			//rectLight.add(rectLightMesh);
			//rectLight.add(rectLightMesh);

			//var rectLightMeshBack = new THREE.Mesh(new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({ color: 0x080808 }));
			////rectLightMeshBack.rotation.y = Math.PI;
			//rectLightMesh.add(rectLightMeshBack);

			//rectLightHelper = new THREE.RectAreaLightHelper(rectLight);
			//scene.add(rectLightHelper);
			
		
			var windowBeige2x4V1Clone02 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone02.position.set( 600, 143, -243 );
			windowBeige2x4V1Clone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone02 );
			//
		
			var windowBeige2x4V1Clone03 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone03.position.set( 600, 143, -213 );
			windowBeige2x4V1Clone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone03 );
			//
		
			var windowBeige2x4V1Clone04 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone04.position.set( 600, 143, -183 );
			windowBeige2x4V1Clone04.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add(windowBeige2x4V1Clone04);
			//
			
		// --- Row 02 --- //
			var windowBeige2x4V1Clone05 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone05.position.set( 600, 180, -273 );
			windowBeige2x4V1Clone05.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone05 );
			//
		
			var windowBeige2x4V1Clone06 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone06.position.set( 600, 180, -243 );
			windowBeige2x4V1Clone06.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone06 );
			//
		
			var windowBeige2x4V1Clone07 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone07.position.set( 600, 180, -213 );
			windowBeige2x4V1Clone07.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone07 );
			//
		
			var windowBeige2x4V1Clone08 = windowBeige2x4V1OffMesh.clone();
		
			windowBeige2x4V1Clone08.position.set( 600, 180, -183 );
			windowBeige2x4V1Clone08.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone08 );
			//
			
		// --- Row 01 --- //
			var windowBeige2x4V1Clone09 = windowBeige2x4V1OffMesh.clone();
		
			windowBeige2x4V1Clone09.position.set( 600, 212, -273 );
			windowBeige2x4V1Clone09.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone09.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone09 );
			//
		
			var windowBeige2x4V1Clone10 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone10.position.set( 600, 212, -243 );
			windowBeige2x4V1Clone10.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone10.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone10 );
			//
		
			var windowBeige2x4V1Clone11 = windowBeige2x4V1OffMesh.clone();
		
			windowBeige2x4V1Clone11.position.set( 600, 212, -213 );
			windowBeige2x4V1Clone11.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone11.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone11 );
			//
		
			var windowBeige2x4V1Clone12 = windowBeige2x4V1OnMesh.clone();
		
			windowBeige2x4V1Clone12.position.set( 600, 212, -183 );
			windowBeige2x4V1Clone12.scale.set( 1, 0.7, 1 );
			windowBeige2x4V1Clone12.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( windowBeige2x4V1Clone12 );
			//
		
		// Block 02 01a Windows --- //
			var window3x4RedGeo = new THREE.BoxGeometry( 10, 22, 3 );

			// Row 01 ---- //
		
			var window3x4RedOnMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOnMats );

			window3x4RedOnMesh.receiveShadow = true;
			window3x4RedOnMesh.castShadow = true;
			//
		
			var window3x4RedOffMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOffMats );

			//window3x4RedOffMesh.position.set( 602, 180 , -972 );
			window3x4RedOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOffMesh.receiveShadow = true;
			window3x4RedOffMesh.castShadow = true;
			//
			
		
			// Row 01 --- //
			var window3x4RedClone19 = window3x4RedOnMesh.clone();
		
			window3x4RedClone19.position.set( 600, 212, -150 );
			window3x4RedClone19.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone19.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone19 );
			//
		
			var window3x4RedClone20 = window3x4RedOffMesh.clone();
		
			window3x4RedClone20.position.set( 600, 212, -125 );
			window3x4RedClone20.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone20.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone20 );
			//
		
			var window3x4RedClone21 = window3x4RedOffMesh.clone();
		
			window3x4RedClone21.position.set( 600, 212, -100 );
			window3x4RedClone21.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone21.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone21 );
			//
		
			// Row 02 --- //
			var window3x4RedClone22 = window3x4RedOffMesh.clone();
		
			window3x4RedClone22.position.set( 600, 175, -150 );
			window3x4RedClone22.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone22.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone22 );
			//
		
			var window3x4RedClone23 = window3x4RedOnMesh.clone();
		
			window3x4RedClone23.position.set( 600, 175, -125 );
			window3x4RedClone23.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone23.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone23 );
			//
		
			var window3x4RedClone24 = window3x4RedOffMesh.clone();
		
			window3x4RedClone24.position.set( 600, 175, -100 );
			window3x4RedClone24.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone24.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone24 );
			//
		
			// Row 03 --- //
			var window3x4RedClone25 = window3x4RedOnMesh.clone();
		
			window3x4RedClone25.position.set( 600, 138, -150 );
			window3x4RedClone25.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone25.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone25 );
			//
		
			var window3x4RedClone26 = window3x4RedOffMesh.clone();
		
			window3x4RedClone26.position.set( 600, 138, -125 );
			window3x4RedClone26.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone26.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone26 );
			//
		
			var window3x4RedClone27 = window3x4RedOnMesh.clone();
		
			window3x4RedClone27.position.set( 600, 138, -100 );
			window3x4RedClone27.scale.set( 1.5, 1.25, 1 );
			window3x4RedClone27.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			allBlocksGroup.add( window3x4RedClone27 );
			//
		
			// Block 02 01 Front Trim ---------------------- //
			var block0201TrimGeo = new THREE.BoxGeometry( 5, 9, 128 );
		
			var block0201TrimTex = textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg", function ( block0201TrimTex ) {

				block0201TrimTex.wrapS = block0201TrimTex.wrapT = THREE.RepeatWrapping;
				block0201TrimTex.repeat.x = 100 / 50;
				block0201TrimTex.repeat.y = 12 / 100;

			} );
		
			var block0201TrimMat = new THREE.MeshPhongMaterial( { map: block0201TrimTex, side: THREE.DoubleSide } );
			// Beige Trim Material
		
			var block0201TrimMesh = new THREE.Mesh( block0201TrimGeo, block0201TrimMat );

			block0201TrimMesh.position.set( 598, 119, -228 );
			block0201TrimMesh.rotation.set( 0, 0, 0 );

			allBlocksGroup.add( block0201TrimMesh );
			//
		
			// Block 02 01 Front Pillars ---------------------- //
			var block0201PillarGeo = new THREE.BoxGeometry( 5, 30, 9 );
		
			var block0201PillarTex = textureLoader.load( "tex/Windows/Window-3x4-Beige-Sides.jpg", function ( block0201TrimTex ) {

				block0201PillarTex.wrapS = block0201PillarTex.wrapT = THREE.RepeatWrapping;
				block0201PillarTex.repeat.x = 100 / 50;
				block0201PillarTex.repeat.y = 12 / 100;

			} );
		
			var block0201PillarMat = new THREE.MeshPhongMaterial( { map: block0201PillarTex, side: THREE.DoubleSide } );
			// Beige Pillar Material
		
			var block0201PillarMesh = new THREE.Mesh( block0201PillarGeo, block0201PillarMat );

			block0201PillarMesh.position.set( 598, 100, -287.5 );
			block0201PillarMesh.rotation.set( 0, 0, 0 );

			allBlocksGroup.add( block0201PillarMesh );
			//
		
			var block0201PillarClone01 = block0201PillarMesh.clone();
			
			block0201PillarClone01.position.set( 598, 100, -258 );
			block0201PillarClone01.rotation.set( 0, 0, 0 );

			allBlocksGroup.add( block0201PillarClone01 );
			//
		
			var block0201PillarClone02 = block0201PillarMesh.clone();
			
			block0201PillarClone02.position.set( 598, 100, -228 );
			block0201PillarClone02.rotation.set( 0, 0, 0 );

			allBlocksGroup.add( block0201PillarClone02 );
			//
		
			var block0201PillarClone03 = block0201PillarMesh.clone();
			
			block0201PillarClone03.position.set( 598, 100, -198 );
			block0201PillarClone03.rotation.set( 0, 0, 0 );

			allBlocksGroup.add( block0201PillarClone03 );
			//
		
			var block0201PillarClone04 = block0201PillarMesh.clone();
			
			block0201PillarClone04.position.set( 598, 100, -168.5 );
			block0201PillarClone04.rotation.set( 0, 0, 0 );

			allBlocksGroup.add( block0201PillarClone04 );
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
//			var window3x4BeigeShuttersOnMesh = new THREE.Mesh( window3x4BeigeShuttersGeo, window3x4BeigeShuttersOnMats );
//		
//			window3x4BeigeShuttersOnMesh.position.set( 601, 180, -915 );
//			window3x4BeigeShuttersOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
//			window3x4BeigeShuttersOnMesh.receiveShadow = true;
//			window3x4BeigeShuttersOnMesh.castShadow = true;
//		
//			allBlocksGroup.add( window3x4BeigeShuttersOnMesh );
//			//
	
//			var window3x4BeigeShuttersOffMesh = new THREE.Mesh( window3x4BeigeShuttersGeo, window3x4BeigeShuttersOffMats );
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
		
			allBlocksGroup.add( block02Group );
		
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
	
	scene.add( allBlocksGroup );
	allBlocksGroup.position.set( -128, 0, 0 );
	allBlocksGroup.rotation.set( 0, 90 * Math.PI / 180, 0 );
	//
	
}