function loadBlock01MeshElements() {
	
	// [ BEGIN ] ----------- ALL Tex ---------- //
	// ---------- [ BEGIN ] Tex Elements ---------------- //
		// Brick / Stone Textures -------------- //
			// Flat Grey ------------- //
			var flatGreyMat = new THREE.MeshPhongMaterial( { color: 0x464646 } ); // #464646

			//var smoothBrickNormalMap = new THREE.TextureLoader().load( "../../tex/smooth_brick-normal.jpg" );
	
			//var coursedStoneNormalMap = new THREE.TextureLoader().load( "../../tex/_Stone_Coursed_Rough_3_normal.jpg" );
			
			// Old Brick 01 Wide ----------- //
			var oldBrickTex01w = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01w.wrapS = oldBrickTex01w.wrapT = THREE.RepeatWrapping;
			oldBrickTex01w.repeat.x = 100 / 24;
			oldBrickTex01w.repeat.y = 100 / 32;

			var oldBrickMat01w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01w,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Wide 02----------- //
			var oldBrickTex01w02 = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01w02.wrapS = oldBrickTex01w02.wrapT = THREE.RepeatWrapping;
			oldBrickTex01w02.repeat.x = 100 / 8;
			oldBrickTex01w02.repeat.y = 100 / 32;

			var oldBrickMat01w02 = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01w02,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Tall ----------- //
			var oldBrickTex01t = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01t.wrapS = oldBrickTex01t.wrapT = THREE.RepeatWrapping;
			oldBrickTex01t.repeat.x = 100 / 32;
			oldBrickTex01t.repeat.y = 100 / 32;

			var oldBrickMat01t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01t,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Roof ----------- //
			var oldBrickTex01r = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01r.wrapS = oldBrickTex01r.wrapT = THREE.RepeatWrapping;
			oldBrickTex01r.repeat.x = 100 / 32;
			oldBrickTex01r.repeat.y = 64 / 100;

			var oldBrickMat01r = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01r,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 01 Roof 2 ----------- //
			var oldBrickTex01r2 = new THREE.TextureLoader().load( "../../tex/smooth_brick-01.jpg" );
			oldBrickTex01r2.wrapS = oldBrickTex01r2.wrapT = THREE.RepeatWrapping;
			oldBrickTex01r2.repeat.x = 100 / 32;
			oldBrickTex01r2.repeat.y = 32 / 100;

			var oldBrickMat01r2 = new THREE.MeshPhongMaterial( {
									map: oldBrickTex01r2,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 02 Wide ----------- //
			var oldBrickTex02w = new THREE.TextureLoader().load( "../../tex/smooth_brick-02.jpg" );
			oldBrickTex02w.wrapS = oldBrickTex02w.wrapT = THREE.RepeatWrapping;
			oldBrickTex02w.repeat.x = 100 / 24;
			oldBrickTex02w.repeat.y = 100 / 64;

			var oldBrickMat02w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex02w,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 02 Tall ----------- //
			var oldBrickTex02t = new THREE.TextureLoader().load( "../../tex/smooth_brick-02.jpg" );
			oldBrickTex02t.wrapS = oldBrickTex02t.wrapT = THREE.RepeatWrapping;
			oldBrickTex02t.repeat.x = 100 / 32;
			oldBrickTex02t.repeat.y = 100 / 24;

			var oldBrickMat02t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex02t,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 03 Wide ----------- //
			var oldBrickTex03w = new THREE.TextureLoader().load( "../../tex/smooth_brick-03.jpg" );
			oldBrickTex03w.wrapS = oldBrickTex03w.wrapT = THREE.RepeatWrapping;
			oldBrickTex03w.repeat.x = 100 / 24;
			oldBrickTex03w.repeat.y = 100 / 32;

			var oldBrickMat03w = new THREE.MeshPhongMaterial( {
									map: oldBrickTex03w,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Old Brick 03 Tall ----------- //
			var oldBrickTex03t = new THREE.TextureLoader().load( "../../tex/smooth_brick-03.jpg" );
			oldBrickTex03t.wrapS = oldBrickTex03t.wrapT = THREE.RepeatWrapping;
			oldBrickTex03t.repeat.x = 100 / 64;
			oldBrickTex03t.repeat.y = 100 / 32;

			var oldBrickMat03t = new THREE.MeshPhongMaterial( {
									map: oldBrickTex03t,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

			// Stone Coursed Rough 01 Wide ----------- //
			var coursedStoneTex01w = new THREE.TextureLoader().load( "../../tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01w.wrapS = coursedStoneTex01w.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01w.repeat.x = 100 / 64;
			coursedStoneTex01w.repeat.y = 100 / 52;

			var sailLoftMat01w = new THREE.MeshPhongMaterial( {
									map: coursedStoneTex01w,
									//normalMap: coursedStoneNormalMap,
									side: THREE.DoubleSide
									} );

			// Stone Coursed Rough 01 Tall ----------- //
			var coursedStoneTex01t = new THREE.TextureLoader().load( "../../tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01t.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01t.repeat.x = 100 / 48;
			coursedStoneTex01t.repeat.y = 100 / 64;

			var sailLoftMat01t = new THREE.MeshPhongMaterial( {
									map: coursedStoneTex01t,
									//normalMap: coursedStoneNormalMap,
									side: THREE.DoubleSide
									} );

			// Concrete Beige Rooftop 01 ----------- //
			var concreteBeigeTex01 = new THREE.TextureLoader().load( "../../tex/concrete_beige_tex.jpg" );
			concreteBeigeTex01.wrapS = concreteBeigeTex01.wrapT = THREE.MirrorRepeatWrapping;
			concreteBeigeTex01.repeat.x = 10 / 2;
			concreteBeigeTex01.repeat.y = 1 / 1;

			var concreteBeigeMat01 = new THREE.MeshPhongMaterial( {
									map: concreteBeigeTex01,
									//normalMap: smoothBrickNormalMap,
									side: THREE.DoubleSide
									} );

		// Stone Coursed Rough 01 Roof ----------- //
			var coursedStoneTex01r = new THREE.TextureLoader().load( "../../tex/stone-coursed-rough-01.jpg" );
			coursedStoneTex01r.wrapS = coursedStoneTex01t.wrapT = THREE.RepeatWrapping;
			coursedStoneTex01r.repeat.x = 100 / 32;
			coursedStoneTex01r.repeat.y = 44 / 100;

			var sailLoftMat01r = new THREE.MeshPhongMaterial( {
									map: coursedStoneTex01r,
									//normalMap: smoothBrickNormalMap,
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

		// --- 3x4 Lite Grey Window On Tex --- //
		var window3x4LiteGreyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window Off Tex --- //
		var window3x4LiteGreyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-LiteGrey-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Red Window On Tex --- //
		var window3x4RedOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Lite Grey Window Off Tex --- //
		var window3x4RedOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Green Door v1 On Tex --- //
		var doorGreenV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Green Door v1 Off Tex --- //
		var doorGreenV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 02 Green Window On Tex --- //
		var window3x4GreenOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 02 Green Window Off Tex --- //
		var window3x4GreenOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Green-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window On Tex --- //
		var window3x4RustyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
		var window3x4RustyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Block 01 04 Beige Door On Tex --- //
		var doorV1BeigeOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Beige Door Off Tex --- //
		var doorV1BeigeOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- 3x4 Block 01 04 Beige Window On Tex --- //
		var window3x4BeigeOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Beige Window Off Tex --- //
		var window3x4BeigeOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Block 01 04 Rusty Door On Tex --- //
		var doorV1RustyOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- 3x4 Block 01 04 Rusty Window Off Tex --- //
		var doorV1RustyOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Rusty-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Rusty-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

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

		// --- 3x4 Red Window Shutters Tex --- //
		var window3x4RedShuttersOnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		var window3x4RedShuttersOffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-RedShutters-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Red Door v1 On Tex --- //
		var doorRedV1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ), // Front side

			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-On.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Red Door v1 Off Tex --- //
		var doorRedV1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Door-v1-Red-Off.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//

		// --- Beige 2x4 Window V1 On Tex --- //
		var windowBeige2x4V1OnMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-On-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
		];

		// --- Beige 2x4 Window V1 Off Tex --- //
		var windowBeige2x4V1OffMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Beige-Sides.jpg" ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-2x4-NoShutters-v2-Off-Tex.jpg" ), side: THREE.DoubleSide } ) // Back side
		];
		//
	
		var cityScapeMats =
		[
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Right side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Left side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Top side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-front.png" ), side: THREE.DoubleSide, transparent: true } ), // Bottom side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-side.png" ), side: THREE.DoubleSide, transparent: true } ), // Front side
			new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/cityscape-side.png" ), side: THREE.DoubleSide, transparent: true } ) // Back side
		];
	
	// ---------- [ END ] Tex Elements ---------------- //
	
	
	
	// Levee Blocks JSON ------------------------------------------------------------------ //
		// Blocks Group ------- //
		var block01Group = new THREE.Group();
	
	// [ BEGIN ]--------- Block 01 ---------------------- //
		// Block 01 Group -------------------------- //
		var block0101Geo = new THREE.BoxBufferGeometry( 110, 180, 105 );
		var block0101Mesh = new THREE.Mesh( block0101Geo, oldBrickMat01t );
		block0101Mesh.position.set( 654, 130, -1035 );
		block0101Mesh.castShadow = true;
		block0101Mesh.receiveShadow = true;

		var block0101aGeo = new THREE.BoxBufferGeometry( 65, 125, 105 );
		var block0101aMesh = new THREE.Mesh( block0101aGeo, oldBrickMat01t );
		block0101aMesh.position.set( 741, 100, -1035 );
		block0101aMesh.castShadow = true;
		block0101aMesh.receiveShadow = true;

		var block0102Geo = new THREE.BoxBufferGeometry( 135, 150, 142 );
		var block0102Mesh = new THREE.Mesh( block0102Geo, oldBrickMat01w );
		block0102Mesh.position.set( 669, 120, -912 );
		block0102Mesh.castShadow = true;
		block0102Mesh.receiveShadow = true;

		var block0103Geo = new THREE.BoxBufferGeometry( 135, 120, 81 );
		var block0103Mesh = new THREE.Mesh( block0103Geo, sailLoftMat01w );
		block0103Mesh.position.set( 670, 100, -801 );
		block0103Mesh.castShadow = true;
		block0103Mesh.receiveShadow = true;

		var block0104Geo = new THREE.BoxBufferGeometry( 135, 100, 126 );
		var block0104Mesh = new THREE.Mesh( block0104Geo, oldBrickMat01w );
		block0104Mesh.position.set( 670, 90, -698 );
		block0104Mesh.castShadow = true;
		block0104Mesh.receiveShadow = true;

		var block0105Geo = new THREE.BoxBufferGeometry( 135, 125, 70 );
		var block0105Mesh = new THREE.Mesh( block0105Geo, oldBrickMat01t );
		block0105Mesh.position.set( 669, 85.5, -600 );
		block0105Mesh.castShadow = true;
		block0105Mesh.receiveShadow = true;

		var block0106Geo = new THREE.BoxBufferGeometry( 160, 70, 70 );
		var block0106Mesh = new THREE.Mesh( block0106Geo, sailLoftMat01t );
		block0106Mesh.position.set( 680, 105, -530 );
		block0106Mesh.castShadow = true;
		block0106Mesh.receiveShadow = true;

		block01Group = new THREE.Group();
		block01Group.add( block0101Mesh );
		block01Group.add( block0101aMesh );
		block01Group.add( block0102Mesh );
		block01Group.add( block0103Mesh );
		block01Group.add( block0104Mesh );
		block01Group.add( block0105Mesh );
		block01Group.add( block0106Mesh );
		
		// --------------- Block 01 01 Windows ------------- //
		// Block 01 01 Front Windows ---------------------- //
			var window3x4LiteGreyGeo = new THREE.BoxBufferGeometry( 18, 18, 3 );

		// Block 01 01 Front Windows - Row 01 ---- //
		
			var window3x4LiteGreyOnMesh = new THREE.Mesh( window3x4LiteGreyGeo, window3x4LiteGreyOnMats );

			window3x4LiteGreyOnMesh.position.set( 598, 205 , -1075 );
			window3x4LiteGreyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4LiteGreyOnMesh.receiveShadow = true;
			window3x4LiteGreyOnMesh.castShadow = true;
			window3x4LiteGreyOnMesh.transparency = true;

			//scene.add( window3x4LiteGreyOnMesh );
			block01Group.add( window3x4LiteGreyOnMesh );
			//
		
			window3x4LiteGreyClone01 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone01.position.set( 598, 205 , -1055 );
						
			//scene.add( window3x4LiteGreyClone01 );
			block01Group.add( window3x4LiteGreyClone01 );
			//
		
			window3x4LiteGreyClone02 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone02.position.set( 598, 205 , -1035 );
						
			//scene.add( window3x4LiteGreyClone02 );
			block01Group.add( window3x4LiteGreyClone02 );
			//
		
			window3x4LiteGreyClone03 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone03.position.set( 598, 205 , -1015 );
						
			//scene.add( window3x4LiteGreyClone03 );
			block01Group.add( window3x4LiteGreyClone03 );
			//
		
			window3x4LiteGreyClone04 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone04.position.set( 598, 205 , -995 );
						
			//scene.add( window3x4LiteGreyClone04 );
			block01Group.add( window3x4LiteGreyClone04 );
			//
		
		// Block 01 01 Front Windows - Row 02 ---- //
			window3x4LiteGreyClone05 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone05.position.set( 598, 180 , -1075 );
						
			//scene.add( window3x4LiteGreyClone05 );
			block01Group.add( window3x4LiteGreyClone05 );
			//
		
			window3x4LiteGreyClone06 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone06.position.set( 598, 180 , -1055 );
						
			//scene.add( window3x4LiteGreyClone06 );
			block01Group.add( window3x4LiteGreyClone06 );
			//
		
			window3x4LiteGreyClone07 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone07.position.set( 598, 180 , -1035 );
						
			scene.add( window3x4LiteGreyClone07 );
			block01Group.add( window3x4LiteGreyClone07 );
			//
		
			window3x4LiteGreyClone08 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone08.position.set( 598, 180 , -1015 );
						
			//scene.add( window3x4LiteGreyClone08 );
			block01Group.add( window3x4LiteGreyClone08 );
			//
		
			window3x4LiteGreyClone09 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone09.position.set( 598, 180 , -995 );
						
			//scene.add( window3x4LiteGreyClone09 );
			block01Group.add( window3x4LiteGreyClone09 );
			//
		
		// Block 01 01 Front Windows - Row 03 ---- //
			window3x4LiteGreyClone10 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone10.position.set( 598, 155 , -1075 );
						
			//scene.add( window3x4LiteGreyClone10 );
			block01Group.add( window3x4LiteGreyClone10 );
			//
		
			window3x4LiteGreyClone11 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone11.position.set( 598, 155 , -1055 );
						
			//scene.add( window3x4LiteGreyClone11 );
			block01Group.add( window3x4LiteGreyClone11 );
			//
		
			window3x4LiteGreyClone12 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone12.position.set( 598, 155 , -1035 );
						
			//scene.add( window3x4LiteGreyClone12 );
			block01Group.add( window3x4LiteGreyClone12 );
			//
		
			window3x4LiteGreyClone13 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone13.position.set( 598, 155 , -1015 );
						
			//scene.add( window3x4LiteGreyClone13 );
			block01Group.add( window3x4LiteGreyClone13 );
			//
		
			window3x4LiteGreyClone14 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone14.position.set( 598, 155 , -995 );
						
			//scene.add( window3x4LiteGreyClone14 );
			block01Group.add( window3x4LiteGreyClone14 );
			//
		
		// Block 01 01 Front Windows - Row 04 ---- //
			window3x4LiteGreyClone15 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone15.position.set( 598, 130 , -1075 );
						
			//scene.add( window3x4LiteGreyClone15 );
			block01Group.add( window3x4LiteGreyClone15 );
			//
		
			window3x4LiteGreyClone16 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone16.position.set( 598, 130 , -1055 );
						
			//scene.add( window3x4LiteGreyClone16 );
			block01Group.add( window3x4LiteGreyClone16 );
			//
		
			window3x4LiteGreyClone17 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone17.position.set( 598, 130 , -1035 );
						
			//scene.add( window3x4LiteGreyClone17 );
			block01Group.add( window3x4LiteGreyClone17 );
			//
		
			window3x4LiteGreyClone18 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone18.position.set( 598, 130 , -1015 );
						
			//scene.add( window3x4LiteGreyClone18 );
			block01Group.add( window3x4LiteGreyClone18 );
			//
		
			window3x4LiteGreyClone19 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone19.position.set( 598, 130 , -995 );
						
			//scene.add( window3x4LiteGreyClone19 );
			block01Group.add( window3x4LiteGreyClone19 );
			//
		
		// Block 01 01 Front Windows - Row 05 ---- //
			window3x4LiteGreyClone20 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone20.position.set( 598, 105 , -1075 );
						
			//scene.add( window3x4LiteGreyClone20 );
			block01Group.add( window3x4LiteGreyClone20 );
			//
		
			window3x4LiteGreyClone21 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone21.position.set( 598, 105 , -1055 );
						
			//scene.add( window3x4LiteGreyClone21 );
			block01Group.add( window3x4LiteGreyClone21 );
			//
		
			window3x4LiteGreyClone22 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone22.position.set( 598, 105 , -1035 );
						
			//scene.add( window3x4LiteGreyClone22 );
			block01Group.add( window3x4LiteGreyClone22 );
			//
		
			window3x4LiteGreyClone23 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone23.position.set( 598, 105 , -1015 );
						
			//scene.add( window3x4LiteGreyClone23 );
			block01Group.add( window3x4LiteGreyClone23 );
			//
		
			window3x4LiteGreyClone24 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone24.position.set( 598, 105 , -995 );
						
			//scene.add( window3x4LiteGreyClone24 );
			block01Group.add( window3x4LiteGreyClone24 );
			//
		
		// Block 01 01 Rear Windows ---------------------- //
		// Block 01 01 Rear Windows - Row 01 ---- //
			window3x4LiteGreyClone25 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone25.position.set( 708, 205 , -1075 );
						
			//scene.add( window3x4LiteGreyClone25 );
			block01Group.add( window3x4LiteGreyClone25 );
			//
		
			window3x4LiteGreyClone26 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone26.position.set( 708, 205 , -1055 );
						
			//scene.add( window3x4LiteGreyClone26 );
			block01Group.add( window3x4LiteGreyClone26 );
			//
		
			window3x4LiteGreyClone27 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone27.position.set( 708, 205 , -1035 );
						
			//scene.add( window3x4LiteGreyClone27 );
			block01Group.add( window3x4LiteGreyClone27 );
			//
		
			window3x4LiteGreyClone28 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone28.position.set( 708, 205 , -1015 );
						
			//scene.add( window3x4LiteGreyClone28 );
			block01Group.add( window3x4LiteGreyClone28 );
			//
		
			window3x4LiteGreyClone29 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone29.position.set( 708, 205 , -995 );
						
			//scene.add( window3x4LiteGreyClone29 );
			block01Group.add( window3x4LiteGreyClone29 );
			//
		
		// Block 01 01 Rear Windows - Row 02 ---- //
			window3x4LiteGreyClone30 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone30.position.set( 708, 180 , -1075 );
						
			//scene.add( window3x4LiteGreyClone30 );
			block01Group.add( window3x4LiteGreyClone30 );
			//
		
			window3x4LiteGreyClone31 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone31.position.set( 708, 180 , -1055 );
						
			//scene.add( window3x4LiteGreyClone31 );
			block01Group.add( window3x4LiteGreyClone31 );
			//
		
			window3x4LiteGreyClone32 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone32.position.set( 708, 180 , -1035 );
						
			//scene.add( window3x4LiteGreyClone32 );
			block01Group.add( window3x4LiteGreyClone32 );
			//
		
			window3x4LiteGreyClone33 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone33.position.set( 708, 180 , -1015 );
						
			//scene.add( window3x4LiteGreyClone33 );
			block01Group.add( window3x4LiteGreyClone33 );
			//
		
			window3x4LiteGreyClone34 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone34.position.set( 708, 180 , -995 );
						
			//scene.add( window3x4LiteGreyClone34 );
			block01Group.add( window3x4LiteGreyClone34 );
			//
		
		// Block 01 01 Side Windows ---- //
			window3x4LiteGreyClone35 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone35.position.set( 730, 130 , -1087 );
			window3x4LiteGreyClone35.rotation.set( 0, 0, 0 );
			window3x4LiteGreyClone35.scale.set( 0.8, 1.25, 1 );
						
			//scene.add( window3x4LiteGreyClone35 );
			block01Group.add( window3x4LiteGreyClone35 );
			//
		
			window3x4LiteGreyClone36 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone36.position.set( 752, 137 , -1087 );
			window3x4LiteGreyClone36.rotation.set( 0, 0, 0 );
						
			//scene.add( window3x4LiteGreyClone36 );
			block01Group.add( window3x4LiteGreyClone36 );
			//
		
			window3x4LiteGreyClone37 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone37.position.set( 765, 137 , -1087 );
			window3x4LiteGreyClone37.rotation.set( 0, 0, 0 );
						
			//scene.add( window3x4LiteGreyClone37 );
			block01Group.add( window3x4LiteGreyClone37 );
			//
		
			window3x4LiteGreyClone38 = window3x4LiteGreyOnMesh.clone();
			window3x4LiteGreyClone38.position.set( 772.5, 137 , -1077 );
						
			//scene.add( window3x4LiteGreyClone38 );
			block01Group.add( window3x4LiteGreyClone38 );
			//
		
		// Block 01 01 Side Trim --- //
			var block0101SideTrimGeo = new THREE.BoxBufferGeometry( 3, 5, 31 );
		
			var block0101TrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ); // Block 01 01 Side Trim Tex
		
			var block0101SideTrimMesh = new THREE.Mesh( block0101SideTrimGeo, block0101TrimMat );
			block0101SideTrimMesh.position.set( 758.5, 125.5, -1088 );
			block0101SideTrimMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			block0101SideTrimMesh.castShadow = true;
			block0101SideTrimMesh.receiveShadow = true;
		
			//scene.add( block0101SideTrimMesh );
			block01Group.add( block0101SideTrimMesh );
			//
		
			var block0101SideTrimClone01 = block0101SideTrimMesh.clone();
			block0101SideTrimClone01.position.set( 773.5, 125.5 , -1078.5 );
			block0101SideTrimClone01.scale.set( 1, 1, 0.7 );
			block0101SideTrimClone01.rotation.set( 0, 0, 0 );

			//scene.add( block0101SideTrimClone01 );
			block01Group.add( block0101SideTrimClone01 );
			//

			// Block 0101 Trim ------------------------ //
				// Row 01 --- //
				var block0101TrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../tex/Windows/Window-3x4-LiteGrey-Sides.jpg" ), side: THREE.DoubleSide } ); // Lite Grey Trim Material
					
				var block0101TrimGeo = new THREE.BoxBufferGeometry( 6, 8, 103 );
		
				var block0101TrimMesh = new THREE.Mesh( block0101TrimGeo, block0101TrimMat );
				block0101TrimMesh.position.set( 600, 192, -1035 );
				block0101TrimMesh.castShadow = true;
				block0101TrimMesh.receiveShadow = true;
		
				//scene.add( block0101TrimMesh );
				block01Group.add( block0101TrimMesh );
				//
				
				// Row 02 --- //
				var block0101TrimClone01 = block0101TrimMesh.clone();
				block0101TrimClone01.position.set( 600, 167, -1035 );
		
				//scene.add( block0101TrimClone01 );
				block01Group.add( block0101TrimClone01 );
				//
		
				// Row 03 --- //
				var block0101TrimClone02 = block0101TrimMesh.clone();
				block0101TrimClone02.position.set( 600, 142, -1035 );
		
				//scene.add( block0101TrimClone02 );
				block01Group.add( block0101TrimClone02 );
				//
		
				// Row 04 --- //
				var block0101TrimClone03 = block0101TrimMesh.clone();
				block0101TrimClone03.position.set( 600, 117, -1035 );
		
				scene.add( block0101TrimClone03 );
				block01Group.add( block0101TrimClone03 );
				//
		
				// Row 05 --- //
				var block0101TrimClone04 = block0101TrimMesh.clone();
				block0101TrimClone04.position.set( 600, 92, -1035 );
		
				//scene.add( block0101TrimClone04 );
				block01Group.add( block0101TrimClone04 );
				//

		
		// --------------------- Block 01 02 Windows ------------------------- //
		// Block 01 02 Front Windows ---------------------- //
			var window3x4RedGeo = new THREE.BoxBufferGeometry( 10, 22, 3 );

			// Row 01 ---- //
			var window3x4RedOnMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOnMats );

			window3x4RedOnMesh.position.set( 602, 180 , -972 );
			window3x4RedOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOnMesh.receiveShadow = true;
			window3x4RedOnMesh.castShadow = true;

			//scene.add( window3x4RedOnMesh );
			block01Group.add( window3x4RedOnMesh );
			//
		
			var window3x4RedOffMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOffMats );

			//window3x4RedOffMesh.position.set( 602, 180 , -972 );
			window3x4RedOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOffMesh.receiveShadow = true;
			window3x4RedOffMesh.castShadow = true;
		
			window3x4RedClone01 = window3x4RedOffMesh.clone();
			window3x4RedClone01.position.set( 602, 180 , -955 );
						
			//scene.add( window3x4RedClone01 );
			block01Group.add( window3x4RedClone01 );
			//
		
			window3x4RedClone02 = window3x4RedOffMesh.clone();
			window3x4RedClone02.position.set( 602, 180 , -938 );
						
			//scene.add( window3x4RedClone02 );
			block01Group.add( window3x4RedClone02 );
			//
		
			// Row 02 ---- //
			window3x4RedClone03 = window3x4RedOnMesh.clone();
			window3x4RedClone03.position.set( 602, 155 , -972 );
						
			//scene.add( window3x4RedClone03 );
			block01Group.add( window3x4RedClone03 );
			//
		
			window3x4RedClone04 = window3x4RedOnMesh.clone();
			window3x4RedClone04.position.set( 602, 155 , -955 );
						
			//scene.add( window3x4RedClone04 );
			block01Group.add( window3x4RedClone04 );
			//
		
			window3x4RedClone05 = window3x4RedOffMesh.clone();
			window3x4RedClone05.position.set( 602, 155 , -938 );
						
			//scene.add( window3x4RedClone05 );
			block01Group.add( window3x4RedClone05 );
			//
		
			// Row 03 ---- //
			window3x4RedClone06 = window3x4RedOffMesh.clone();
			window3x4RedClone06.position.set( 602, 130 , -972 );
						
			//scene.add( window3x4RedClone06 );
			block01Group.add( window3x4RedClone06 );
			//
		
			window3x4RedClone07 = window3x4RedOffMesh.clone();
			window3x4RedClone07.position.set( 602, 130 , -955 );
						
			//scene.add( window3x4RedClone07 );
			block01Group.add( window3x4RedClone07 );
			//
		
			window3x4RedClone08 = window3x4RedOnMesh.clone();
			window3x4RedClone08.position.set( 602, 130 , -938 );
						
			//scene.add( window3x4RedClone08 );
			block01Group.add( window3x4RedClone08 );
			//
		
		// Block 01 02 Front Doors ---- //
			// Window 3x6 Grey On ---- //
			var window3x6Geo = new THREE.BoxBufferGeometry( 12, 20, 1 );
		
			var window3x6GreyOnMesh = new THREE.Mesh( window3x6Geo, window3x6GreyOnMats );

			window3x6GreyOnMesh.position.set( 590, 172 , -1484 );
			window3x6GreyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x6GreyOnMesh.receiveShadow = true;
			window3x6GreyOnMesh.castShadow = true;
			window3x6GreyOnMesh.transparency = true;
	
			var window3x6GreyClone18 = window3x6GreyOnMesh.clone();
			window3x6GreyClone18.position.set( 601, 103.5 , -972 );
			window3x6GreyClone18.scale.set( 0.85, 1.05 , 1 );
			//scene.add( window3x6GreyClone18 );
			block01Group.add( window3x6GreyClone18 );
			//
		
			var window3x6GreyClone19 = window3x6GreyOnMesh.clone();
			window3x6GreyClone19.position.set( 601, 103.5 , -955.5 );
			window3x6GreyClone19.scale.set( 0.85, 1.05 , 1 );
			//scene.add( window3x6GreyClone19 );
			block01Group.add( window3x6GreyClone19 );
			//
		
			var window3x6GreyClone20 = window3x6GreyOnMesh.clone();
			window3x6GreyClone20.position.set( 601, 103.5 , -938.5 );
			window3x6GreyClone20.scale.set( 0.85, 1.05 , 1 );
			//scene.add( window3x6GreyClone20 );
			block01Group.add( window3x6GreyClone20 );
			//
		
		// Block 01 02 Rear Windows ---------------------- //
			window3x4RedClone09 = window3x4RedOffMesh.clone();
			window3x4RedClone09.position.set( 736, 180 , -972 );
						
			//scene.add( window3x4RedClone09 );
			block01Group.add( window3x4RedClone09 );
			//
			
			window3x4RedClone10 = window3x4RedOffMesh.clone();
			window3x4RedClone10.position.set( 736, 180 , -955 );
						
			//scene.add( window3x4RedClone10 );
			block01Group.add( window3x4RedClone10 );
			//
		
			window3x4RedClone11 = window3x4RedOffMesh.clone();
			window3x4RedClone11.position.set( 736, 180 , -938 );
						
			//scene.add( window3x4RedClone11 );
			block01Group.add( window3x4RedClone11 );
			//
		
			// Row 02 ---- //
			window3x4RedClone12 = window3x4RedOnMesh.clone();
			window3x4RedClone12.position.set( 736, 155 , -972 );
						
			//scene.add( window3x4RedClone12 );
			block01Group.add( window3x4RedClone12 );
			//
		
			window3x4RedClone13 = window3x4RedOnMesh.clone();
			window3x4RedClone13.position.set( 736, 155 , -955 );
						
			//scene.add( window3x4RedClone13 );
			block01Group.add( window3x4RedClone13 );
			//
		
			window3x4RedClone14 = window3x4RedOffMesh.clone();
			window3x4RedClone14.position.set( 736, 155 , -938 );
						
			//scene.add( window3x4RedClone14 );
			block01Group.add( window3x4RedClone14 );
			//
		
			// Row 03 ---- //
			window3x4RedClone16 = window3x4RedOffMesh.clone();
			window3x4RedClone16.position.set( 736, 130 , -972 );
						
			//scene.add( window3x4RedClone16 );
			block01Group.add( window3x4RedClone16 );
			//
		
			window3x4RedClone17 = window3x4RedOffMesh.clone();
			window3x4RedClone17.position.set( 736, 130 , -955 );
						
			//scene.add( window3x4RedClone17 );
			block01Group.add( window3x4RedClone17 );
			//
		
			window3x4RedClone18 = window3x4RedOnMesh.clone();
			window3x4RedClone18.position.set( 736, 130 , -938 );
						
			//scene.add( window3x4RedClone18 );
			block01Group.add( window3x4RedClone18 );
			//
		
		// Block 01 02 Front Trim ---------------------- //
			var block0102RedTrimGeo = new THREE.BoxBufferGeometry( 5, 5, 55 );

			var block0102RedTrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ); // Red Trim Material
		
			var block0102RedTrimMesh = new THREE.Mesh( block0102RedTrimGeo, block0102RedTrimMat );

			block0102RedTrimMesh.position.set( 600, 117, -955 );
			block0102RedTrimMesh.rotation.set( 0, 0, 0 );
			block0102RedTrimMesh.receiveShadow = true;
			block0102RedTrimMesh.castShadow = true;

			//scene.add( block0102RedTrimMesh );
			block01Group.add( block0102RedTrimMesh );
			//
		
		// Block 01 02 Front Pillars ---------------------- //
			var block0102RedPillarGeo = new THREE.BoxBufferGeometry( 4, 30, 5 );
		
			var block0102RedPillarMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ); // Red Trim Material
		
			var block0102RedPillarMesh = new THREE.Mesh( block0102RedPillarGeo, block0102RedPillarMat );

			block0102RedPillarMesh.position.set( 600, 100, -980 );
			block0102RedPillarMesh.rotation.set( 0, 0, 0 );
			block0102RedPillarMesh.receiveShadow = true;
			block0102RedPillarMesh.castShadow = true;

			//scene.add( block0102RedPillarMesh );
			block01Group.add( block0102RedPillarMesh );
			//
		
			var block0102RedPillarClone01 = block0102RedPillarMesh.clone();
		
			block0102RedPillarClone01.position.set( 600, 100, -964 );
			block0102RedPillarClone01.rotation.set( 0, 0, 0 );
			block0102RedPillarClone01.receiveShadow = true;
			block0102RedPillarClone01.castShadow = true;

			//scene.add( block0102RedPillarClone01 );
			block01Group.add( block0102RedPillarClone01 );
			//
		
			var block0102RedPillarClone02 = block0102RedPillarMesh.clone();
		
			block0102RedPillarClone02.position.set( 600, 100, -947 );
			block0102RedPillarClone02.rotation.set( 0, 0, 0 );
			block0102RedPillarClone02.receiveShadow = true;
			block0102RedPillarClone02.castShadow = true;

			//scene.add( block0102RedPillarClone02 );
			block01Group.add( block0102RedPillarClone02 );
			//
		
			var block0102RedPillarClone03 = block0102RedPillarMesh.clone();
		
			block0102RedPillarClone03.position.set( 600, 100, -930 );
			block0102RedPillarClone03.rotation.set( 0, 0, 0 );
			block0102RedPillarClone03.receiveShadow = true;
			block0102RedPillarClone03.castShadow = true;

			//scene.add( block0102RedPillarClone03 );
			block01Group.add( block0102RedPillarClone03 );
			//
		
		// Block 01 02a Front Trim ---------------------- //
			var block0102aTrimGeo = new THREE.BoxBufferGeometry( 5, 5, 85 );
		
			var block0102aTrimTex = textureLoader.load( "../../tex/smooth_brick-01.jpg", function ( block0102aTrimTex ) {

				block0102aTrimTex.wrapS = block0102aTrimTex.wrapT = THREE.RepeatWrapping;
				block0102aTrimTex.repeat.x = 100 / 50;
				block0102aTrimTex.repeat.y = 12 / 100;

			} );
		
			var block0102aTrimMat = new THREE.MeshPhongMaterial( { map: block0102aTrimTex, side: THREE.DoubleSide } );
			// Brick Trim Material
		
			var block0102aTrimMesh = new THREE.Mesh( block0102aTrimGeo, block0102aTrimMat );

			block0102aTrimMesh.position.set( 600, 117, -884 );
			block0102aTrimMesh.rotation.set( 0, 0, 0 );

			//scene.add( block0102aTrimMesh );
			block01Group.add( block0102aTrimMesh );
			//
		
		// Block 01 02a Front Pillars ---------------------- //
			var block0102aPillarGeo = new THREE.BoxBufferGeometry( 4, 30, 5 );
		
			var block0102aPillarTex = textureLoader.load( "../../tex/smooth_brick-01.jpg", function ( block0102aPillarTex ) {

				block0102aPillarTex.wrapS = block0102aPillarTex.wrapT = THREE.RepeatWrapping;
				block0102aPillarTex.repeat.x = 18 / 100;
				block0102aPillarTex.repeat.y = 60 / 100;

			} );
		
			var block0102aPillarMat = new THREE.MeshPhongMaterial( { map: block0102aPillarTex, side: THREE.DoubleSide } );
			// Brick Pillar Material
		
			var block0102aPillarMesh = new THREE.Mesh( block0102aPillarGeo, block0102aPillarMat );

			block0102aPillarMesh.position.set( 600, 100, -924 );
			block0102aPillarMesh.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarMesh );
			block01Group.add( block0102aPillarMesh );
			//
		
			var block0102aPillarClone01 = block0102aPillarMesh.clone();
		
			block0102aPillarClone01.position.set( 600, 100, -905 );
			block0102aPillarClone01.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone01 );
			block01Group.add( block0102aPillarClone01 );
			//
		
			var block0102aPillarClone02 = block0102aPillarMesh.clone();

		
			block0102aPillarClone02.position.set( 600, 100, -885 );
			block0102aPillarClone02.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone02 );
			block01Group.add( block0102aPillarClone02 );
			//
		
			var block0102aPillarClone03 = block0102aPillarMesh.clone();
		
			block0102aPillarClone03.position.set( 600, 100, -865 );
			block0102aPillarClone03.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone03 );
			block01Group.add( block0102aPillarClone03 );
			//
		
			var block0102aPillarClone04 = block0102aPillarMesh.clone();
		
			block0102aPillarClone04.position.set( 600, 100, -845 );
			block0102aPillarClone04.rotation.set( 0, 0, 0 );

			//scene.add( block0102aPillarClone04 );
			block01Group.add( block0102aPillarClone04 );
			//
		
		// Block 01 02a Front Doors ---- //
			var window3x6GreyClone21 = window3x6GreyOnMesh.clone();
			window3x6GreyClone21.position.set( 601, 103.5 , -915 );
			window3x6GreyClone21.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone21 );
			block01Group.add( window3x6GreyClone21 );
			//
		
			var window3x6GreyClone22 = window3x6GreyOnMesh.clone();
			window3x6GreyClone22.position.set( 601, 103.5 , -895 );
			window3x6GreyClone22.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone22 );
			block01Group.add( window3x6GreyClone22 );
			//
		
			var window3x6GreyClone23 = window3x6GreyOnMesh.clone();
			window3x6GreyClone23.position.set( 601, 103.5 , -875 );
			window3x6GreyClone23.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone23 );
			block01Group.add( window3x6GreyClone23 );
			//
		
			var window3x6GreyClone24 = window3x6GreyOnMesh.clone();
			window3x6GreyClone24.position.set( 601, 103.5 , -855 );
			window3x6GreyClone24.scale.set( 1, 1.05 , 1 );
		
			//scene.add( window3x6GreyClone24 );
			block01Group.add( window3x6GreyClone24 );
			//
		
			
		
		//Block 01 02 Green Windows ---------------------------------------------------------------------------------------------- //
		// Block 01 02 Rear Windows ---------------------- //
			var window3x4RedGeo = new THREE.BoxBufferGeometry( 10, 22, 3 );

			// Row 01 ---- //
		
			var window3x4RedOnMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOnMats );

			window3x4RedOnMesh.position.set( 602, 180 , -972 );
			window3x4RedOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOnMesh.receiveShadow = true;
			window3x4RedOnMesh.castShadow = true;

			//scene.add( window3x4RedOnMesh );
			block01Group.add( window3x4RedOnMesh );
			//
		
			var window3x4RedOffMesh = new THREE.Mesh( window3x4RedGeo, window3x4RedOffMats );

			//window3x4RedOffMesh.position.set( 602, 180 , -972 );
			window3x4RedOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4RedOffMesh.receiveShadow = true;
			window3x4RedOffMesh.castShadow = true;
		
			window3x4RedClone01 = window3x4RedOffMesh.clone();
			window3x4RedClone01.position.set( 602, 180 , -955 );
						
			block01Group.add( window3x4RedClone01 );
			//
		
			window3x4RedClone02 = window3x4RedOffMesh.clone();
			window3x4RedClone02.position.set( 602, 180 , -938 );
						
			block01Group.add( window3x4RedClone02 );
			//
		
			// Row 02 ---- //
			window3x4RedClone03 = window3x4RedOnMesh.clone();
			window3x4RedClone03.position.set( 602, 155 , -972 );
						
			block01Group.add( window3x4RedClone03 );
			//
		
			window3x4RedClone04 = window3x4RedOnMesh.clone();
			window3x4RedClone04.position.set( 602, 155 , -955 );
						
			block01Group.add( window3x4RedClone04 );
			//
		
			window3x4RedClone05 = window3x4RedOffMesh.clone();
			window3x4RedClone05.position.set( 602, 155 , -938 );
						
			block01Group.add( window3x4RedClone05 );
			//
		
			// Row 03 ---- //
			window3x4RedClone06 = window3x4RedOffMesh.clone();
			window3x4RedClone06.position.set( 602, 130 , -972 );
						
			block01Group.add( window3x4RedClone06 );
			//
		
			window3x4RedClone07 = window3x4RedOffMesh.clone();
			window3x4RedClone07.position.set( 602, 130 , -955 );
						
			block01Group.add( window3x4RedClone07 );
			//
		
			window3x4RedClone08 = window3x4RedOnMesh.clone();
			window3x4RedClone08.position.set( 602, 130 , -938 );
						
			block01Group.add( window3x4RedClone08 );
			//
		
		// Block 01 02b Front Windows ---------------------- //
			var window3x4GreenLargeGeo = new THREE.BoxBufferGeometry( 18, 18, 3 );

			// Block 01 02b Front Windows - Row 01 ---- //
		
			var window3x4GreenLargeOnMesh = new THREE.Mesh( window3x4GreenLargeGeo, window3x4GreenOnMats );
		
			window3x4GreenLargeOnMesh.position.set( 601, 180, -915 );
			window3x4GreenLargeOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenLargeOnMesh.receiveShadow = true;
			window3x4GreenLargeOnMesh.castShadow = true;
		
			block01Group.add( window3x4GreenLargeOnMesh );
			
			var window3x4GreenLargeOffMesh = new THREE.Mesh( window3x4GreenLargeGeo, window3x4GreenOffMats );

			window3x4GreenLargeOffMesh.position.set( 601, 180 , -915 );
			window3x4GreenLargeOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenLargeOffMesh.receiveShadow = true;
			window3x4GreenLargeOffMesh.castShadow = true;
			//
		
			window3x4GreenLargeClone01 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone01.position.set( 601, 180, -895 );
						
			block01Group.add( window3x4GreenLargeClone01 );
			//
		
			window3x4GreenLargeClone02 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone02.position.set( 601, 180, -875 );
						
			block01Group.add( window3x4GreenLargeClone02 );
			//
		
			window3x4GreenLargeClone03 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone03.position.set( 601, 180 , -855 );
						
			block01Group.add( window3x4GreenLargeClone03 );
			//
		
			// Row 02 ----------- //
			window3x4GreenLargeClone04 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone04.position.set( 601, 155, -915 );
						
			block01Group.add( window3x4GreenLargeClone04 );
			//
		
			window3x4GreenLargeClone05 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone05.position.set( 601, 155, -895 );
						
			block01Group.add( window3x4GreenLargeClone05 );
			//
		
			window3x4GreenLargeClone06 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone06.position.set( 601, 155, -875 );
						
			block01Group.add( window3x4GreenLargeClone06 );
			//
		
			window3x4GreenLargeClone07 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone07.position.set( 601, 155, -855 );
						
			block01Group.add( window3x4GreenLargeClone07 );
			//
		
			// Row 03 ----------- //
			window3x4GreenLargeClone08 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone08.position.set( 601, 130 , -915 );
						
			block01Group.add( window3x4GreenLargeClone08 );
			//
		
			window3x4GreenLargeClone09 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone09.position.set( 601, 130, -895 );
						
			block01Group.add( window3x4GreenLargeClone09 );
			//
		
			window3x4GreenLargeClone10 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone10.position.set( 601, 130, -875 );
						
			block01Group.add( window3x4GreenLargeClone10 );
			//
		
			window3x4GreenLargeClone11 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone11.position.set( 601, 130, -855 );
						
			block01Group.add( window3x4GreenLargeClone11 );
			//
		
		// Block 01 02b Rear Windows ---------------------- //
			window3x4GreenLargeClone12 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone12.position.set( 736, 180, -915 );
						
			block01Group.add( window3x4GreenLargeClone12 );
			//
		
			window3x4GreenLargeClone13 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone13.position.set( 736, 180, -895 );
						
			block01Group.add( window3x4GreenLargeClone13 );
			//
		
			window3x4GreenLargeClone14 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone14.position.set( 736, 180, -875 );
						
			block01Group.add( window3x4GreenLargeClone14 );
			//
		
			window3x4GreenLargeClone15 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone15.position.set( 736, 180 , -855 );
						
			block01Group.add( window3x4GreenLargeClone15 );
			//
		
			// Row 02 ----------- //
			window3x4GreenLargeClone16 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone16.position.set( 736, 155, -915 );
						
			block01Group.add( window3x4GreenLargeClone16 );
			//
		
			window3x4GreenLargeClone17 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone17.position.set( 736, 155, -895 );
						
			block01Group.add( window3x4GreenLargeClone17 );
			//
		
			window3x4GreenLargeClone18 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone18.position.set( 736, 155, -875 );
						
			block01Group.add( window3x4GreenLargeClone18 );
			//
		
			window3x4GreenLargeClone19 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone19.position.set( 736, 155, -855 );
						
			block01Group.add( window3x4GreenLargeClone19 );
			//
		
			// Row 03 ----------- //
			window3x4GreenLargeClone20 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone20.position.set( 736, 130 , -915 );
						
			block01Group.add( window3x4GreenLargeClone20 );
			//
		
			window3x4GreenLargeClone21 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone21.position.set( 736, 130, -895 );
						
			block01Group.add( window3x4GreenLargeClone21 );
			//
		
			window3x4GreenLargeClone22 = window3x4GreenLargeOffMesh.clone();
			window3x4GreenLargeClone22.position.set( 736, 130, -875 );
						
			block01Group.add( window3x4GreenLargeClone22 );
			//
		
			window3x4GreenLargeClone23 = window3x4GreenLargeOnMesh.clone();
			window3x4GreenLargeClone23.position.set( 736, 130, -855 );
						
			block01Group.add( window3x4GreenLargeClone23 );
			//
		
		// Block 01 03 Front Windows ---------------------- //
			var window3x4GreenSmallGeo = new THREE.BoxBufferGeometry( 10, 12, 3 );

			// Block 01 03 Front Windows - Row 01 ---- //
		
			var window3x4GreenSmallOnMesh = new THREE.Mesh( window3x4GreenSmallGeo, window3x4GreenOnMats );
		
			window3x4GreenSmallOnMesh.position.set( 603, 148, -830 );
			window3x4GreenSmallOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenSmallOnMesh.receiveShadow = true;
			window3x4GreenSmallOnMesh.castShadow = true;
		
			block01Group.add( window3x4GreenSmallOnMesh );
			//
			
			var window3x4GreenSmallOffMesh = new THREE.Mesh( window3x4GreenSmallGeo, window3x4GreenOffMats );

			window3x4GreenSmallOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4GreenSmallOffMesh.receiveShadow = true;
			window3x4GreenSmallOffMesh.castShadow = true;
			//
		
			window3x4GreenSmallClone01 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone01.position.set( 603, 148, -818 );
						
			block01Group.add( window3x4GreenSmallClone01 );
			//
		
			window3x4GreenSmallClone02 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone02.position.set( 603, 148, -806 );
						
			block01Group.add( window3x4GreenSmallClone02 );
			//
		
			window3x4GreenSmallClone03 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone03.position.set( 603, 148 , -794 );
						
			block01Group.add( window3x4GreenSmallClone03 );
			//
		
			window3x4GreenSmallClone04 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone04.position.set( 603, 148, -782 );
						
			block01Group.add( window3x4GreenSmallClone04 );
			//
		
			window3x4GreenSmallClone05 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone05.position.set( 603, 148, -770 );
						
			block01Group.add( window3x4GreenSmallClone05 );
			//
		
		// Block 01 03 Front Windows - Row 02 ------ //
			window3x4GreenSmallClone06 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone06.position.set( 603, 130, -830 );
						
			block01Group.add( window3x4GreenSmallClone06 );
			//
		
			window3x4GreenSmallClone07 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone07.position.set( 603, 130, -818 );
						
			block01Group.add( window3x4GreenSmallClone07 );
			//
		
			window3x4GreenSmallClone08 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone08.position.set( 603, 130, -806 );
						
			block01Group.add( window3x4GreenSmallClone08 );
			//
		
			window3x4GreenSmallClone09 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone09.position.set( 603, 130 , -794 );
						
			block01Group.add( window3x4GreenSmallClone09 );
			//
		
			window3x4GreenSmallClone10 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone10.position.set( 603, 130, -782 );
						
			block01Group.add( window3x4GreenSmallClone10 );
			//
		
			window3x4GreenSmallClone11 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone11.position.set( 603, 130, -770 );
						
			block01Group.add( window3x4GreenSmallClone11 );
			//
		
		// Block 01 03 Rear Windows ---------------------- //
			window3x4GreenSmallClone12 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone12.position.set( 737, 148, -830 );
						
			block01Group.add( window3x4GreenSmallClone12 );
			//
		
			window3x4GreenSmallClone13 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone13.position.set( 737, 148, -818 );
						
			block01Group.add( window3x4GreenSmallClone13 );
			//
		
			window3x4GreenSmallClone14 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone14.position.set( 737, 148, -806 );
						
			block01Group.add( window3x4GreenSmallClone14 );
			//
		
			window3x4GreenSmallClone15 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone15.position.set( 737, 148 , -794 );
						
			block01Group.add( window3x4GreenSmallClone15 );
			//
		
			window3x4GreenSmallClone16 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone16.position.set( 737, 148, -782 );
						
			block01Group.add( window3x4GreenSmallClone16 );
			//
		
			window3x4GreenSmallClone17 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone17.position.set( 737, 148, -770 );
						
			block01Group.add( window3x4GreenSmallClone17 );
			//
		
		// Block 01 03 Rear Windows - Row 02 ------ //
			window3x4GreenSmallClone18 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone18.position.set( 737, 130, -830 );
						
			block01Group.add( window3x4GreenSmallClone18 );
			//
		
			window3x4GreenSmallClone19 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone19.position.set( 737, 130, -818 );
						
			block01Group.add( window3x4GreenSmallClone19 );
			//
		
			window3x4GreenSmallClone22 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone22.position.set( 737, 130, -782 );
						
			block01Group.add( window3x4GreenSmallClone22 );
			//
		
			window3x4GreenSmallClone23 = window3x4GreenSmallOnMesh.clone();
			window3x4GreenSmallClone23.position.set( 737, 130, -770 );
						
			block01Group.add( window3x4GreenSmallClone23 );
			//
		
		// Block 01 03 Front Doors ------ //
			var doorGreenV1Geo = new THREE.BoxBufferGeometry( 10, 22, 3 );
		
			var doorGreenV1OnMesh = new THREE.Mesh( doorGreenV1Geo, doorGreenV1OnMats );
		
			doorGreenV1OnMesh.position.set( 603, 104, -830 );
			doorGreenV1OnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorGreenV1OnMesh.receiveShadow = true;
			doorGreenV1OnMesh.castShadow = true;
		
			block01Group.add( doorGreenV1OnMesh );
			//
			
			var doorGreenV1OffMesh = new THREE.Mesh( doorGreenV1Geo, doorGreenV1OffMats );
		
			doorGreenV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorGreenV1OffMesh.receiveShadow = true;
			doorGreenV1OffMesh.castShadow = true;
			//
		
			doorGreenV1Clone01 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone01.position.set( 603, 104, -818 );
						
			block01Group.add( doorGreenV1Clone01 );
			//
		
			doorGreenV1Clone02 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone02.position.set( 603, 104, -806 );
						
			block01Group.add( doorGreenV1Clone02 );
			//
		
			doorGreenV1Clone03 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone03.position.set( 603, 104, -794 );
						
			block01Group.add( doorGreenV1Clone03 );
			//
		
			doorGreenV1Clone04 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone04.position.set( 603, 104, -782 );
						
			block01Group.add( doorGreenV1Clone04 );
			//
		
			doorGreenV1Clone05 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone05.position.set( 603, 104, -770 );
						
			block01Group.add( doorGreenV1Clone05 );
			//
		
			// Block 01 03 Back Doors ---- //
			doorGreenV1Clone06 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone06.position.set( 737, 125, -806 );
						
			block01Group.add( doorGreenV1Clone06 );
			//
		
			doorGreenV1Clone07 = doorGreenV1OnMesh.clone();
			doorGreenV1Clone07.position.set( 737, 125, -794 );
						
			block01Group.add( doorGreenV1Clone07 );
			//
		
			// Block 01 03 Rear Awning Shape ----- //
			var awningShape03 = new THREE.Shape();
			awningShape03.moveTo(-15, -10);
			awningShape03.lineTo(-15, -9);
			awningShape03.lineTo(15, -5);
			awningShape03.lineTo(15, -10);
			awningShape03.lineTo(-15, -10);

			// Extrude Awning 01 03 Rear Shape ------------ //
			var extrudedAwning03Geo = new THREE.ExtrudeGeometry( awningShape03, {amount: 80, bevelEnabled: false} );

			// Awning 01 03 Rear Mesh
			var extrudedAwning03Mesh = new THREE.Mesh( extrudedAwning03Geo, flatGreyMat );

			extrudedAwning03Mesh.position.set( 737, 148, -761 );
			extrudedAwning03Mesh.rotation.set( 0, 180* Math.PI / 180, 0 );
			block01Group.add( extrudedAwning03Mesh );
			//
		
		// Block 01 04 Awning Shape ----- //
			var awningShape01 = new THREE.Shape();
			awningShape01.moveTo(-15, -10);
			awningShape01.lineTo(-15, -9);
			awningShape01.lineTo(15, -5);
			awningShape01.lineTo(15, -10);
			awningShape01.lineTo(-15, -10);

			// Extrude Awning 01 04 Shape ------------ //
			var extrudedAwning01Geo = new THREE.ExtrudeGeometry( awningShape01, {amount: 125, bevelEnabled: false} );

			// Awning 01 04 Mesh
			var extrudedAwning01Mesh = new THREE.Mesh( extrudedAwning01Geo, flatGreyMat );

			extrudedAwning01Mesh.position.set( 590, 125, -760 );
			block01Group.add( extrudedAwning01Mesh );
			//
		
			// Block 01 05 Awning Shape ----- //
			var awningShape02 = new THREE.Shape();
			awningShape02.moveTo(-15, -10);
			awningShape02.lineTo(-15, -9);
			awningShape02.lineTo(15, -5);
			awningShape02.lineTo(15, -10);
			awningShape02.lineTo(-15, -10);

			// Extrude Awning 01 05 Shape ------------ //
			var extrudedAwning02Geo = new THREE.ExtrudeGeometry( awningShape02, {amount: 68, bevelEnabled: false} );

			// Awning 01 05 Mesh
			var extrudedAwning02Mesh = new THREE.Mesh( extrudedAwning02Geo, flatGreyMat );

			extrudedAwning02Mesh.position.set( 590, 125, -634 );
			block01Group.add( extrudedAwning02Mesh );
			//
		
		// Bolck 01 04 Awning poles ----- //
			var awningPoles01Geo = new THREE.CylinderGeometry( 0.5, 0.5, 30, 16, 16 );
		
			var awningPoles01Mat = new THREE.MeshPhongMaterial( {color: 0xffffff, emissive: 0x000000 } );
		
			var awningPoles01Mesh = new THREE.Mesh( awningPoles01Geo, awningPoles01Mat );
		
			awningPoles01Mesh.position.set( 578, 100, -638 );
		
			block01Group.add( awningPoles01Mesh );
			//
		
			var awningPoles01Clone01 = awningPoles01Mesh.clone();
			
			awningPoles01Clone01.position.set( 578, 100, -655 );
		
			block01Group.add( awningPoles01Clone01 );
			//
		
			var awningPoles01Clone02 = awningPoles01Mesh.clone();
			
			awningPoles01Clone02.position.set( 578, 100, -672 );
		
			block01Group.add( awningPoles01Clone02 );
			//
		
			var awningPoles01Clone03 = awningPoles01Mesh.clone();
			
			awningPoles01Clone03.position.set( 578, 100, -689 );
		
			block01Group.add( awningPoles01Clone03 );
			//
		
			var awningPoles01Clone04 = awningPoles01Mesh.clone();
			
			awningPoles01Clone04.position.set( 578, 100, -706 );
		
			block01Group.add( awningPoles01Clone04 );
			//
		
			var awningPoles01Clone05 = awningPoles01Mesh.clone();
			
			awningPoles01Clone05.position.set( 578, 100, -723 );
		
			block01Group.add( awningPoles01Clone05 );
			//
		
			var awningPoles01Clone06 = awningPoles01Mesh.clone();
			
			awningPoles01Clone06.position.set( 578, 100, -740 );
		
			block01Group.add( awningPoles01Clone06 );
			//
		
			var awningPoles01Clone07 = awningPoles01Mesh.clone();
			
			awningPoles01Clone07.position.set( 578, 100, -757 );
		
			block01Group.add( awningPoles01Clone07 );
			//
		
		// Block 01 05 Awning Poles --- //
			var awningPoles01Clone08 = awningPoles01Mesh.clone();
			
			awningPoles01Clone08.position.set( 578, 100, -631 );
		
			block01Group.add( awningPoles01Clone08 );
			//
		
			var awningPoles01Clone09 = awningPoles01Mesh.clone();
			
			awningPoles01Clone09.position.set( 578, 100, -611 );
		
			block01Group.add( awningPoles01Clone09 );
			//
		
			var awningPoles01Clone10 = awningPoles01Mesh.clone();
			
			awningPoles01Clone10.position.set( 578, 100, -591 );
		
			block01Group.add( awningPoles01Clone10 );
			//
		
			var awningPoles01Clone11 = awningPoles01Mesh.clone();
			
			awningPoles01Clone11.position.set( 578, 100, -571 );
		
			block01Group.add( awningPoles01Clone11 );
			//
		
		//Block 01 04 Beige / Rusty Windows ---------------------------------------------------------------------------------------------- //
			
		
		// Block 01 04 Beige / Rusty Front Windows ---------------------- //
			var window3x4BeigeGeo = new THREE.BoxBufferGeometry( 12, 18, 3 );

			// Block 01 04 Beige / Rusty Front Windows - Row 01 ---- //
		
			var window3x4BeigeOnMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4BeigeOnMats );
		
			window3x4BeigeOnMesh.position.set( 603, 129, -753 );
			window3x4BeigeOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4BeigeOnMesh.receiveShadow = true;
			window3x4BeigeOnMesh.castShadow = true;
		
			block01Group.add( window3x4BeigeOnMesh );
			//
			
			var window3x4BeigeOffMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4BeigeOffMats );

			window3x4BeigeOffMesh.position.set( 603, 129 , -739 );
			window3x4BeigeOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			window3x4BeigeOffMesh.receiveShadow = true;
			window3x4BeigeOffMesh.castShadow = true;
		
			block01Group.add( window3x4BeigeOffMesh );
			//
		
			window3x4BeigeOnClone01 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone01.position.set( 603, 129, -725 );
						
			block01Group.add( window3x4BeigeOnClone01 );
			//
		
		// Rusty Colored Window Panes ---- //
		
			var window3x4RustyOnMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RustyOnMats );
				window3x4RustyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RustyOnMesh.receiveShadow = true;
				window3x4RustyOnMesh.castShadow = true;
		
		
			var window3x4RustyOffMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RustyOffMats );
				window3x4RustyOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RustyOffMesh.receiveShadow = true;
				window3x4RustyOffMesh.castShadow = true;
		
			window3x4RustyOnClone02 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone02.position.set( 603, 129, -711 );
						
			block01Group.add( window3x4RustyOnClone02 );
			//
		
			window3x4RustyOffClone03 = window3x4RustyOffMesh.clone();
			window3x4RustyOffClone03.position.set( 603, 129, -697 );
						
			block01Group.add( window3x4RustyOffClone03 );
			//
		
			window3x4RustyOnClone04 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone04.position.set( 603, 129, -683 );
						
			block01Group.add( window3x4RustyOnClone04 );
			//
		
			window3x4BeigeOnClone05 = window3x4BeigeOffMesh.clone();
			window3x4BeigeOnClone05.position.set( 603, 129, -669 );
						
			block01Group.add( window3x4BeigeOnClone05 );
			//
		
			window3x4BeigeOnClone06 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone06.position.set( 603, 129, -655 );
						
			block01Group.add( window3x4BeigeOnClone06 );
			//
		
			window3x4BeigeOnClone07 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone07.position.set( 603, 129, -641 );
						
			block01Group.add( window3x4BeigeOnClone07 );
			//
		
		// Block 01 04 Beige / Rusty Rear Windows ---------------------- //
			window3x4BeigeOnClone08 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone08.position.set( 737, 129, -753 );
						
			block01Group.add( window3x4BeigeOnClone08 );
			//
		
			window3x4RustyOnClone09 = window3x4BeigeOffMesh.clone();
			window3x4RustyOnClone09.position.set( 737, 129, -739 );
						
			block01Group.add( window3x4RustyOnClone09 );
			//
		
			window3x4BeigeOnClone10 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone10.position.set( 737, 129, -725 );
						
			block01Group.add( window3x4BeigeOnClone10 );
			//
		
			window3x4RustyOnClone11 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone11.position.set( 737, 129, -711 );
						
			block01Group.add( window3x4RustyOnClone11 );
			//
		
			window3x4RustyOffClone12 = window3x4RustyOffMesh.clone();
			window3x4RustyOffClone12.position.set( 737, 129, -697 );
						
			block01Group.add( window3x4RustyOffClone12 );
			//
		
			window3x4RustyOnClone13 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone13.position.set( 737, 129, -683 );
						
			block01Group.add( window3x4RustyOnClone13 );
			//
		
			window3x4BeigeOnClone14 = window3x4BeigeOffMesh.clone();
			window3x4BeigeOnClone14.position.set( 737, 129, -669 );
						
			block01Group.add( window3x4BeigeOnClone14 );
			//
		
			window3x4BeigeOnClone15 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone15.position.set( 737, 129, -655 );
						
			block01Group.add( window3x4BeigeOnClone15 );
			//
		
			window3x4BeigeOnClone16 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone16.position.set( 737, 129, -641.5 );
						
			block01Group.add( window3x4BeigeOnClone16 );
			//
		
		// Block 01 04 Beige / Rusty Front Doors ---------------------- //
		
		
		// Rusty Colored Door Materials ---- //
			
			var doorV2Geo = new THREE.BoxBufferGeometry( 10, 22, 3 );
		
			var doorV1BeigeOnMesh = new THREE.Mesh( doorV2Geo, doorV1BeigeOnMats );
		
			doorV1BeigeOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1BeigeOnMesh.receiveShadow = true;
			doorV1BeigeOnMesh.castShadow = true;
			//
			
			var doorV1BeigeOffMesh = new THREE.Mesh( doorV2Geo, doorV1BeigeOffMats );

			doorV1BeigeOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1BeigeOffMesh.receiveShadow = true;
			doorV1BeigeOffMesh.castShadow = true;
			//
	
			var doorV1RustyOnMesh = new THREE.Mesh( doorV2Geo, doorV1RustyOnMats );
		
			doorV1RustyOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1RustyOnMesh.receiveShadow = true;
			doorV1RustyOnMesh.castShadow = true;
			//
			
			var doorV1RustyOffMesh = new THREE.Mesh( doorV2Geo, doorV1RustyOffMats );

			doorV1RustyOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV1RustyOffMesh.receiveShadow = true;
			doorV1RustyOffMesh.castShadow = true;
			//
		    
		// Block 01 04 Front Doors / Windows ----- //
			window3x4BeigeOnClone17 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone17.position.set( 603, 105, -753 );
			window3x4BeigeOnClone17.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone17 );
			//
		
			doorV1BeigeOnClone01 = doorV1BeigeOnMesh.clone();
			doorV1BeigeOnClone01.position.set( 603, 103.5, -739 );
						
			block01Group.add( doorV1BeigeOnClone01 );
			//
		
			window3x4BeigeOnClone18 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone18.position.set( 603, 105, -725 );
			window3x4BeigeOnClone18.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone18 );
			//
		
			window3x4RustyOnClone19 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone19.position.set( 603, 105, -711 );
			window3x4RustyOnClone19.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4RustyOnClone19 );
			//
		
			doorV1RustyOnClone02 = doorV1RustyOnMesh.clone();
			doorV1RustyOnClone02.position.set( 603, 103.5, -697 );
						
			block01Group.add( doorV1RustyOnClone02 );
			//
		
			window3x4RustyOnClone20 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone20.position.set( 603, 105, -683 );
			window3x4RustyOnClone20.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4RustyOnClone20 );
			//
		
			window3x4BeigeOnClone21 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone21.position.set( 603, 105, -669 );
			window3x4BeigeOnClone21.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone21 );
			//
		
			doorV1BeigeOnClone03 = doorV1BeigeOnMesh.clone();
			doorV1BeigeOnClone03.position.set( 603, 103.5, -655 );
						
			block01Group.add( doorV1BeigeOnClone03 );
			//
		
			window3x4BeigeOnClone22 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone22.position.set( 603, 105, -641 );
			window3x4BeigeOnClone22.scale.set( 0.75, 0.75, 1 );
						
			block01Group.add( window3x4BeigeOnClone22 );
			//
		
		// Block 01 04 Beige / Rusty Rear Windows ---------------------- //
			window3x4BeigeOnClone08 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone08.position.set( 737, 129, -753 );
						
			block01Group.add( window3x4BeigeOnClone08 );
			//
		
			window3x4RustyOnClone09 = window3x4BeigeOffMesh.clone();
			window3x4RustyOnClone09.position.set( 737, 129, -739 );
						
			block01Group.add( window3x4RustyOnClone09 );
			//
		
			window3x4BeigeOnClone10 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone10.position.set( 737, 129, -725 );
						
			block01Group.add( window3x4BeigeOnClone10 );
			//
		
			window3x4RustyOnClone11 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone11.position.set( 737, 129, -711 );
						
			block01Group.add( window3x4RustyOnClone11 );
			//
		
			window3x4RustyOffClone12 = window3x4RustyOffMesh.clone();
			window3x4RustyOffClone12.position.set( 737, 129, -697 );
						
			block01Group.add( window3x4RustyOffClone12 );
			//
		
			window3x4RustyOnClone13 = window3x4RustyOnMesh.clone();
			window3x4RustyOnClone13.position.set( 737, 129, -683 );
						
			block01Group.add( window3x4RustyOnClone13 );
			//
		
			window3x4BeigeOnClone14 = window3x4BeigeOffMesh.clone();
			window3x4BeigeOnClone14.position.set( 737, 129, -669 );
						
			block01Group.add( window3x4BeigeOnClone14 );
			//
		
			window3x4BeigeOnClone15 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone15.position.set( 737, 129, -655 );
						
			block01Group.add( window3x4BeigeOnClone15 );
			//
		
			window3x4BeigeOnClone16 = window3x4BeigeOnMesh.clone();
			window3x4BeigeOnClone16.position.set( 737, 129, -641.5 );
						
			block01Group.add( window3x4BeigeOnClone16 );
			//
		
		// Block 01 05 Yellow Door V2 ---- //
			
		
		// Block 01 05 Front Doors Mesh --- //
		
			var doorV2YellowOnMesh = new THREE.Mesh( doorV2Geo, doorV2YellowOnMats );
		
			doorV2YellowOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV2YellowOnMesh.receiveShadow = true;
			doorV2YellowOnMesh.castShadow = true;
			//
			
			var doorV2YellowOffMesh = new THREE.Mesh( doorV2Geo, doorV2YellowOffMats );

			doorV2YellowOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorV2YellowOffMesh.receiveShadow = true;
			doorV2YellowOffMesh.castShadow = true;
			//
			var doorV2YellowOffClone01 = doorV2YellowOffMesh.clone();
		
			doorV2YellowOffClone01.position.set( 602, 103.5, -625 );
			doorV2YellowOffClone01.scale.set( 1.25, 1, 1 );
			doorV2YellowOffClone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( doorV2YellowOffClone01 );
			//
		
			var doorV2YellowOnClone02 = doorV2YellowOnMesh.clone();
		
			doorV2YellowOnClone02.position.set( 602, 103.5, -600 );
			doorV2YellowOnClone02.scale.set( 1.25, 1, 1 );
			doorV2YellowOnClone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( doorV2YellowOnClone02 );
			//
		
			var doorV2YellowOnClone03 = doorV2YellowOnMesh.clone();
		
			doorV2YellowOnClone03.position.set( 602, 103.5, -575 );
			doorV2YellowOnClone03.scale.set( 1.25, 1, 1 );
			doorV2YellowOnClone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( doorV2YellowOnClone03 );
			//
		
		// Block 01 05 Front Windows --- //
			var windowYellowV1Geo = new THREE.BoxBufferGeometry( 8, 12, 1 );
		
		// Yellow Window V1 On ---- //
		
			var windowYellowV1OnMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OnMats );

			windowYellowV1OnMesh.position.set( 665, 126 , -1685 );
			windowYellowV1OnMesh.receiveShadow = true;
			windowYellowV1OnMesh.castShadow = true;
		
		// Yellow Window V1 Off ---- //
		
			var windowYellowV1OffMesh = new THREE.Mesh( windowYellowV1Geo, windowYellowV1OffMats );

			windowYellowV1OffMesh.position.set( 603, 126 , -1634 );
			windowYellowV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			windowYellowV1OffMesh.receiveShadow = true;
			windowYellowV1OffMesh.castShadow = true;
			//
	
			var windowYellowV1OffClone01 = windowYellowV1OffMesh.clone();
		
			windowYellowV1OffClone01.position.set( 601, 135, -625 );
			windowYellowV1OffClone01.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OffClone01.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OffClone01 );
			//
		
			var windowYellowV1OnClone02 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone02.position.set( 601, 135, -600 );
			windowYellowV1OnClone02.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone02.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone02 );
			//
		
			var windowYellowV1OnClone03 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone03.position.set( 601, 135, -575 );
			windowYellowV1OnClone03.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone03.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone03 );
			//
		
		// Block 01 05 Rear Windows --- //
			var windowYellowV1OffClone04 = windowYellowV1OffMesh.clone();
		
			windowYellowV1OffClone04.position.set( 736, 135, -625 );
			windowYellowV1OffClone04.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OffClone04.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OffClone04 );
			//
		
			var windowYellowV1OnClone05 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone05.position.set( 736, 135, -600 );
			windowYellowV1OnClone05.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone05.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone05 );
			//
		
			var windowYellowV1OnClone06 = windowYellowV1OnMesh.clone();
		
			windowYellowV1OnClone06.position.set( 736, 135, -575 );
			windowYellowV1OnClone06.scale.set( 1.5, 1.5, 1.5 );
			windowYellowV1OnClone06.rotation.set( 0, 90* Math.PI / 180, 0 );
		
			block01Group.add( windowYellowV1OnClone06 );
			//
		
		// Old Rock House Windows ---- //
			// Top Front Window (small)---- //
			window3x4RedORHClone01 = window3x4RedOffMesh.clone();
			window3x4RedORHClone01.position.set( 601, 145 , -530 );
			window3x4RedORHClone01.scale.set( 0.7, 0.35 , 1 );
						
			block01Group.add( window3x4RedORHClone01 );
			//
		
			// Middle Front Windows ---- //
			window3x4RedORHClone02 = window3x4RedOffMesh.clone();
			window3x4RedORHClone02.position.set( 601, 130 , -550 );
			window3x4RedORHClone02.scale.set( 1, 0.75 , 1 );
						
			block01Group.add( window3x4RedORHClone02 );
			//
		
			window3x4RedORHClone03 = window3x4RedOffMesh.clone();
			window3x4RedORHClone03.position.set( 601, 130 , -530 );
			window3x4RedORHClone03.scale.set( 1, 0.75 , 1 );
						
			block01Group.add( window3x4RedORHClone03 );
			//
		
			window3x4RedORHClone04 = window3x4RedOffMesh.clone();
			window3x4RedORHClone04.position.set( 601, 130 , -510 );
			window3x4RedORHClone04.scale.set( 1, 0.75 , 1 );
						
			block01Group.add( window3x4RedORHClone04 );
			//
		
			// Top Rear Window (small)---- //
			window3x4RedORHClone05 = window3x4RedOffMesh.clone();
			window3x4RedORHClone05.position.set( 759, 145 , -530 );
			window3x4RedORHClone05.scale.set( 0.7, 0.35 , 1 );
						
			block01Group.add( window3x4RedORHClone05 );
			//
		
		
			var window3x4RedShuttersOnMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RedShuttersOnMats );
				window3x4RedShuttersOnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RedShuttersOnMesh.receiveShadow = true;
				window3x4RedShuttersOnMesh.castShadow = true;
		
		
			var window3x4RedShuttersOffMesh = new THREE.Mesh( window3x4BeigeGeo, window3x4RedShuttersOffMats );
				window3x4RedShuttersOffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
				window3x4RedShuttersOffMesh.receiveShadow = true;
				window3x4RedShuttersOffMesh.castShadow = true;
			//
		
			window3x4RedShuttersClone01 = window3x4RedShuttersOnMesh.clone();
			window3x4RedShuttersClone01.position.set( 601, 107 , -550 );
			window3x4RedShuttersClone01.scale.set( 1.25, 0.75 , 1 );
						
			block01Group.add( window3x4RedShuttersClone01 );
			//
		
			window3x4RedShuttersClone02 = window3x4RedShuttersOnMesh.clone();
			window3x4RedShuttersClone02.position.set( 601, 107 , -510 );
			window3x4RedShuttersClone02.scale.set( 1.25, 0.75 , 1 );
						
			block01Group.add( window3x4RedShuttersClone02 );
			//
		
			// ORH Side Window --- //
			window3x4RedShuttersClone03 = window3x4RedShuttersOffMesh.clone();
			window3x4RedShuttersClone03.position.set( 725, 130 , -496 );
			window3x4RedShuttersClone03.rotation.set( 0, 0, 0 );
			window3x4RedShuttersClone03.scale.set( 1.25, 0.75 , 1 );
						
			block01Group.add( window3x4RedShuttersClone03 );
			//
		
		// Block 01 05 ORH Doors ------ //
			
		
			var doorRedV1Geo = new THREE.BoxBufferGeometry( 10, 22, 3 );
		
			var doorRedV1OnMesh = new THREE.Mesh( doorRedV1Geo, doorRedV1OnMats );
		
			doorRedV1OnMesh.position.set( 601, 103 , -530 );
			doorRedV1OnMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorRedV1OnMesh.scale.set( 1.5, 1, 1 );
			doorRedV1OnMesh.receiveShadow = true;
			doorRedV1OnMesh.castShadow = true;
		
			block01Group.add( doorRedV1OnMesh );
			//
			
			var doorRedV1OffMesh = new THREE.Mesh( doorRedV1Geo, doorRedV1OffMats );
		
			doorRedV1OffMesh.rotation.set( 0, 90* Math.PI / 180, 0 );
			doorRedV1OffMesh.receiveShadow = true;
			doorRedV1OffMesh.castShadow = true;
			//
		
			doorRedV1Clone01 = doorRedV1OffMesh.clone();
			doorRedV1Clone01.position.set( 660, 105, -496 );
			doorRedV1Clone01.rotation.set( 0, 0, 0 );
						
			block01Group.add( doorRedV1Clone01 );
			//
		
			// ORH Rear Door ----- //
			doorRedV1Clone02 = doorRedV1OnMesh.clone();
			doorRedV1Clone02.scale.set( 0.75, 0.75 , 1 );
			doorRedV1Clone02.position.set( 759, 127 , -530 );
			doorRedV1Clone02.rotation.set( 0, 90* Math.PI / 180, 0 );
						
			block01Group.add( doorRedV1Clone02 );
			//
		
		// Block 01 Roof Geometry ----- //
		// Block 01 01a Roof Shape ----- //
			var block0101aRoofShape = new THREE.Shape();
			block0101aRoofShape.moveTo(-55, -31);
			block0101aRoofShape.lineTo(0, -16);
			block0101aRoofShape.lineTo(55, -31);
			block0101aRoofShape.lineTo(-55, -31);

			// Extrude Triangle Shape ------------ //
			var block0101aRoofGeo = new THREE.ExtrudeGeometry( block0101aRoofShape, {amount: 105, bevelEnabled: false} );

			// Block 01 01a Roof Mesh
			var block0101aRoofMesh = new THREE.Mesh( block0101aRoofGeo, oldBrickMat01r2 );

			block0101aRoofMesh.position.set( 654, 251 , -1087.5 );
			block0101aRoofMesh.rotation.set( 0, 0, 0 );
			block0101aRoofMesh.castShadow = true;
			block0101aRoofMesh.receiveShadow = true;
		
			block01Group.add( block0101aRoofMesh );

			// Block 01 01a Rooftop ------------- //
			var block0101aRoofTop = new THREE.Shape();
			block0101aRoofTop.moveTo(-55, -30);
			block0101aRoofTop.lineTo(0, -15);
			block0101aRoofTop.lineTo(55, -30);
			block0101aRoofTop.lineTo(55, -31);
			block0101aRoofTop.lineTo(0, -16);
			block0101aRoofTop.lineTo(-55, -31);
			block0101aRoofTop.lineTo(-55, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0101aRoofTopGeo = new THREE.ExtrudeGeometry( block0101aRoofTop, {amount: 109, bevelEnabled: false} );

			// Block 01 01a Rooftop Mesh
			var block0101aRoofTopMesh = new THREE.Mesh( block0101aRoofTopGeo, flatGreyMat );

			block0101aRoofTopMesh.position.set( 654, 251 , -1089.5 );
			block0101aRoofTopMesh.rotation.set( 0, 0, 0 );
			block0101aRoofTopMesh.castShadow = true;
			block0101aRoofTopMesh.receiveShadow = true;
		
		
			block01Group.add( block0101aRoofTopMesh );
		
			// Block 01 01a Roof UV //
			function assignblock0101aRoofUV() {
				
			block0101aRoofGeo.computeBoundingBox();

			var max = block0101aRoofGeo.boundingBox.max,
				min = block0101aRoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0101aRoofGeo.faces;

			block0101aRoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0101aRoofGeo.vertices[faces[i].a], 
					v2 = block0101aRoofGeo.vertices[faces[i].b], 
					v3 = block0101aRoofGeo.vertices[faces[i].c];

				block0101aRoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			//assignblock0101aRoofUV();
			//
		
		// Block 01 02 Roof Shape ----- //
			var block0102RoofShape = new THREE.Shape();
			block0102RoofShape.moveTo(-70, -31);
			block0102RoofShape.lineTo(0, -14);
			block0102RoofShape.lineTo(70, -31);
			block0102RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0102RoofGeo = new THREE.ExtrudeGeometry( block0102RoofShape, {amount: 142, bevelEnabled: false} );

			// Block 01 02 Roof Mesh
			var block0102RoofMesh = new THREE.Mesh( block0102RoofGeo, oldBrickMat01r2 );

			block0102RoofMesh.position.set( 670, 226 , -983 );
			block0102RoofMesh.rotation.set( 0, 0, 0 );
			block0102RoofMesh.castShadow = true;
			block0102RoofMesh.receiveShadow = true;
		
			block01Group.add( block0102RoofMesh );

			// Block 01 02 Rooftop ------------- //
			var block0102RoofTop = new THREE.Shape();
			block0102RoofTop.moveTo(-70, -30);
			block0102RoofTop.lineTo(0, -13);
			block0102RoofTop.lineTo(70, -30);
			block0102RoofTop.lineTo(70, -31);
			block0102RoofTop.lineTo(0, -14);
			block0102RoofTop.lineTo(-70, -31);
			block0102RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0102RoofTopGeo = new THREE.ExtrudeGeometry( block0102RoofTop, {amount: 144, bevelEnabled: false} );

			// Block 01 02 Rooftop Mesh
			var block0102RoofTopMesh = new THREE.Mesh( block0102RoofTopGeo, flatGreyMat );

			block0102RoofTopMesh.position.set( 670, 226 , -983 );
			block0102RoofTopMesh.rotation.set( 0, 0, 0 );
			block0102RoofTopMesh.castShadow = true;
			block0102RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0102RoofTopMesh );
		
			// Block 01 02 Roof UV //
			function assignblock0102RoofUV() {
				
			block0102RoofGeo.computeBoundingBox();

			var max = block0102RoofGeo.boundingBox.max,
				min = block0102RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0102RoofGeo.faces;

			block0102RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0102RoofGeo.vertices[faces[i].a], 
					v2 = block0102RoofGeo.vertices[faces[i].b], 
					v3 = block0102RoofGeo.vertices[faces[i].c];

				block0102RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0102RoofUV();
			//
		
		// Block 01 03 Roof Mesh
			var block0103RoofShape = new THREE.Shape();
			block0103RoofShape.moveTo(-70, -31);
			block0103RoofShape.lineTo(0, -1);
			block0103RoofShape.lineTo(70, -31);
			block0103RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0103RoofGeo = new THREE.ExtrudeGeometry( block0103RoofShape, {amount: 81, bevelEnabled: false} );

			// Block 01 02 Roof Mesh
			var block0103RoofMesh = new THREE.Mesh( block0103RoofGeo, sailLoftMat01r );

			block0103RoofMesh.position.set( 670, 191 , -841.5 );
			block0103RoofMesh.rotation.set( 0, 0, 0 );
			block0103RoofMesh.castShadow = true;
			block0103RoofMesh.receiveShadow = true;
		
			block01Group.add( block0103RoofMesh );
		
			// Block 01 03 Rooftop ------------- //
			var block0103RoofTop = new THREE.Shape();
			block0103RoofTop.moveTo(-70, -30);
			block0103RoofTop.lineTo(0, 0);
			block0103RoofTop.lineTo(70, -30);
			block0103RoofTop.lineTo(70, -31);
			block0103RoofTop.lineTo(0, -1);
			block0103RoofTop.lineTo(-70, -31);
			block0103RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0103RoofTopGeo = new THREE.ExtrudeGeometry( block0103RoofTop, {amount: 81, bevelEnabled: false} );

			// Block 01 03 Rooftop Mesh
			var block0103RoofTopMesh = new THREE.Mesh( block0103RoofTopGeo, flatGreyMat );

			block0103RoofTopMesh.position.set( 670, 191 , -841.5 );
			block0103RoofTopMesh.rotation.set( 0, 0, 0 );
			block0103RoofTopMesh.castShadow = true;
			block0103RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0103RoofTopMesh );
		
		// Block 01 03 Roof UV //
			function assignblock0103RoofUV() {
				
			block0103RoofGeo.computeBoundingBox();

			var max = block0103RoofGeo.boundingBox.max,
				min = block0103RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0103RoofGeo.faces;

			block0103RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0103RoofGeo.vertices[faces[i].a], 
					v2 = block0103RoofGeo.vertices[faces[i].b], 
					v3 = block0103RoofGeo.vertices[faces[i].c];

				block0103RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0103RoofUV();
			//
		
		// Block 01 04 Roof Shape ----- //
			var block0104RoofShape = new THREE.Shape();
			block0104RoofShape.moveTo(-70, -31);
			block0104RoofShape.lineTo(0, -14);
			block0104RoofShape.lineTo(70, -31);
			block0104RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0104RoofGeo = new THREE.ExtrudeGeometry( block0104RoofShape, {amount: 125, bevelEnabled: false} );

			// Block 01 04 Roof Mesh
			var block0104RoofMesh = new THREE.Mesh( block0104RoofGeo, oldBrickMat01r2 );

			block0104RoofMesh.position.set( 670, 171 , -760 );
			block0104RoofMesh.rotation.set( 0, 0, 0 );
			block0104RoofMesh.castShadow = true;
			block0104RoofMesh.receiveShadow = true;
		
			block01Group.add( block0104RoofMesh );

			// Block 01 04 Rooftop ------------- //
			var block0104RoofTop = new THREE.Shape();
			block0104RoofTop.moveTo(-70, -30);
			block0104RoofTop.lineTo(0, -13);
			block0104RoofTop.lineTo(70, -30);
			block0104RoofTop.lineTo(70, -31);
			block0104RoofTop.lineTo(0, -14);
			block0104RoofTop.lineTo(-70, -31);
			block0104RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0104RoofTopGeo = new THREE.ExtrudeGeometry( block0104RoofTop, {amount: 125, bevelEnabled: false} );

			// Block 01 02 Rooftop Mesh
			var block0104RoofTopMesh = new THREE.Mesh( block0104RoofTopGeo, flatGreyMat );

			block0104RoofTopMesh.position.set( 670, 171 , -760 );
			block0104RoofTopMesh.rotation.set( 0, 0, 0 );
			block0104RoofTopMesh.castShadow = true;
			block0104RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0104RoofTopMesh );
		
			// Block 01 04 Roof UV //
			function assignblock0104RoofUV() {
				
			block0104RoofGeo.computeBoundingBox();

			var max = block0104RoofGeo.boundingBox.max,
				min = block0104RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0104RoofGeo.faces;

			block0104RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0104RoofGeo.vertices[faces[i].a], 
					v2 = block0104RoofGeo.vertices[faces[i].b], 
					v3 = block0104RoofGeo.vertices[faces[i].c];

				block0104RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0101aGeo.uvsNeedUpdate = true;
			
			}
		
			assignblock0104RoofUV();
			//
		
		// Block 01 05 Roof Shape ----- //
			var block0105RoofShape = new THREE.Shape();
			block0105RoofShape.moveTo(-70, -31);
			block0105RoofShape.lineTo(0, -1);
			block0105RoofShape.lineTo(70, -31);
			block0105RoofShape.lineTo(-70, -31);

			// Extrude Triangle Shape ------------ //
			var block0105RoofGeo = new THREE.ExtrudeGeometry( block0105RoofShape, {amount: 70, bevelEnabled: false} );

			// Block 01 05 Roof Mesh
			var block0105RoofMesh = new THREE.Mesh( block0105RoofGeo, oldBrickMat01r );

			block0105RoofMesh.position.set( 670, 179 , -635 );
			block0105RoofMesh.rotation.set( 0, 0, 0 );
			block0105RoofMesh.castShadow = true;
			block0105RoofMesh.receiveShadow = true;
		
			block01Group.add( block0105RoofMesh );

			// Block 01 05 Rooftop ------------- //
			var block0105RoofTop = new THREE.Shape();
			block0105RoofTop.moveTo(-70, -30);
			block0105RoofTop.lineTo(0, -0);
			block0105RoofTop.lineTo(70, -30);
			block0105RoofTop.lineTo(70, -31);
			block0105RoofTop.lineTo(0, -1);
			block0105RoofTop.lineTo(-70, -31);
			block0105RoofTop.lineTo(-70, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var block0105RoofTopGeo = new THREE.ExtrudeGeometry( block0105RoofTop, {amount: 70, bevelEnabled: false} );

			// Block 01 05 Rooftop Mesh
			var block0105RoofTopMesh = new THREE.Mesh( block0105RoofTopGeo, flatGreyMat );

			block0105RoofTopMesh.position.set( 670, 179 , -635 );
			block0105RoofTopMesh.rotation.set( 0, 0, 0 );
			block0105RoofTopMesh.castShadow = true;
			block0105RoofTopMesh.receiveShadow = true;
		
			block01Group.add( block0105RoofTopMesh );
		
			// Block 01 05 Roof UV //
			function assignblock0105RoofUV() {
				
			block0105RoofGeo.computeBoundingBox();

			var max = block0105RoofGeo.boundingBox.max,
				min = block0105RoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = block0105RoofGeo.faces;

			block0105RoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = block0105RoofGeo.vertices[faces[i].a], 
					v2 = block0105RoofGeo.vertices[faces[i].b], 
					v3 = block0105RoofGeo.vertices[faces[i].c];

				block0105RoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			block0105Geo.uvsNeedUpdate = true;
			
			}
		
			assignblock0105RoofUV();
			//
		
		
		// Block 01 06 Sail Loft Roof ------------- //
		
			var MTLLoader = new THREE.MTLLoader();
			
			MTLLoader.setTexturePath( '../../models/obj/' );
			MTLLoader.setPath( '../../models/obj/' );
			MTLLoader.load( 'tents-sign.mtl', function ( tentSignMaterials ) {

				tentSignMaterials.preload();
				tentSignMaterials.shading = THREE.FlatShading;
				
				var OBJLoader = new THREE.OBJLoader();

				OBJLoader.setMaterials( tentSignMaterials );
				OBJLoader.setPath( '../../models/obj/' );
				OBJLoader.load( 'tents-sign.obj', function ( tentSignOBJ ) {

					block01Group.add( tentSignOBJ );
					tentSignOBJ.scale.set( 0.25, 0.25, 0.25 );
					tentSignOBJ.rotation.set( 0, 270* Math.PI / 180, 0);
					tentSignOBJ.position.set( 1235, 154, -2388 );
				});
				
			});
			
				//
		
			var sailLoftRoofShape = new THREE.Shape();
			sailLoftRoofShape.moveTo(-35, -30);
			sailLoftRoofShape.lineTo(-33, -30);
			sailLoftRoofShape.lineTo(0, -17);
			sailLoftRoofShape.lineTo(33, -30);
			sailLoftRoofShape.lineTo(35, -30);
			sailLoftRoofShape.lineTo(35, -31);
			sailLoftRoofShape.lineTo(-35, -31);
			sailLoftRoofShape.lineTo(-35, -30);

			// Extrude Triangle Shape ------------ //
			var sailLoftRoofGeo = new THREE.ExtrudeGeometry( sailLoftRoofShape, {amount: 160, bevelEnabled: false} );

			// Block 01 06 Sail Loft Roof Mesh
			var sailLoftRoofMesh = new THREE.Mesh( sailLoftRoofGeo, sailLoftMat01r );

			sailLoftRoofMesh.position.set( 600, 171 , -530 );
			sailLoftRoofMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
			sailLoftRoofMesh.castShadow = true;
			sailLoftRoofMesh.receiveShadow = true;
		
			block01Group.add( sailLoftRoofMesh );

			// Block 01 06 Sail Loft Rooftop ------------- //
			var sailLoftRoofTop = new THREE.Shape();
			sailLoftRoofTop.moveTo(-35, -30);
			sailLoftRoofTop.lineTo(0, -15);
			sailLoftRoofTop.lineTo(35, -30);
			sailLoftRoofTop.lineTo(35, -31);
			sailLoftRoofTop.lineTo(0, -16);
			sailLoftRoofTop.lineTo(-35, -31);
			sailLoftRoofTop.lineTo(-35, -30);

			// Extrude Rooftop Triangle Shape ------------ //
			var sailLoftRoofTopGeo = new THREE.ExtrudeGeometry( sailLoftRoofTop, {amount: 160, bevelEnabled: false} );

			// Block 01 06 Sail Loft Rooftop Mesh
			var sailLoftRoofTopMesh = new THREE.Mesh( sailLoftRoofTopGeo, concreteBeigeMat01 );

			sailLoftRoofTopMesh.position.set( 600, 172 , -530 );
			sailLoftRoofTopMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
			block01Group.add( sailLoftRoofTopMesh );
		
			// Block 01 06 Sail Loft Rooftop Trim ------------- //
			var sailLoftRoofTopTrim = new THREE.Shape();
			sailLoftRoofTopTrim.moveTo(-35, -31);
			sailLoftRoofTopTrim.lineTo(0, -16);
			sailLoftRoofTopTrim.lineTo(35, -31);
			sailLoftRoofTopTrim.lineTo(33, -31);
			sailLoftRoofTopTrim.lineTo(0, -18);
			sailLoftRoofTopTrim.lineTo(-33, -31);
			sailLoftRoofTopTrim.lineTo(-35, -31);

			// Extrude Rooftop Triangle Shape ------------ //
			var sailLoftRoofTopTrimGeo = new THREE.ExtrudeGeometry( sailLoftRoofTopTrim, {amount: 160, bevelEnabled: false} );
		
			var redTrimMat = new THREE.MeshPhongMaterial( { map: textureLoader.load( "../../tex/Windows/Window-3x4-Red-Sides.jpg" ), side: THREE.DoubleSide } ) // Right side

			// Block 01 06 Sail Loft Rooftop Mesh
			var sailLoftRoofTopTrimMesh = new THREE.Mesh( sailLoftRoofTopTrimGeo, redTrimMat );

			sailLoftRoofTopTrimMesh.position.set( 600, 172 , -530 );
			sailLoftRoofTopTrimMesh.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
			block01Group.add( sailLoftRoofTopTrimMesh );
		
			// ------------ Map Custom Roof Shape UVs------------- //
		
			// City Market Roof 01 //
			function assignsailLoftRoofUV() {
				
			sailLoftRoofGeo.computeBoundingBox();

			var max = sailLoftRoofGeo.boundingBox.max,
				min = sailLoftRoofGeo.boundingBox.min;
			var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
			var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
			var faces = sailLoftRoofGeo.faces;

			sailLoftRoofGeo.faceVertexUvs[0] = [];

			for (var i = 0; i < faces.length ; i++) {

				var v1 = sailLoftRoofGeo.vertices[faces[i].a], 
					v2 = sailLoftRoofGeo.vertices[faces[i].b], 
					v3 = sailLoftRoofGeo.vertices[faces[i].c];

				sailLoftRoofGeo.faceVertexUvs[0].push([
					new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
					new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
					new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
				]);
			}
		
			sailLoftRoofGeo.uvsNeedUpdate = true;
			
			}
		
			assignsailLoftRoofUV();
			//
	scene.add( block01Group );
	block01Group.position.set( -128, 0, 0 );
	block01Group.rotation.set( 0, 90 * Math.PI / 180, 0 );
		
}