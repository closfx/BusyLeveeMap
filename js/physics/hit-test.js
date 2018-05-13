var element = document.body;

var WIDTH  = window.innerWidth,
    HEIGHT = window.innerHeight;

var ASPECT = WIDTH / HEIGHT;

var UNITSIZE = 10;     //...# of units along each side of the square grid
var scale = 1;         //... cube edge length/width/height  
//var cubeR = 1.414/2;   //... radius of bounding sphere.
//var moverR = 0.25;     //... mover radius for collision detection.http://jsfiddle.net/29kLct0y/13/#
var WALLSIZE = 16;     //unused???

var t = THREE, stats, loader;
var scene, camera, renderer, clock, controls, key;
var eddie;
var rotate_left = false;
var rotate_right = false;
var cRotate_up = false;
var cRotate_down = false;
var cRotate_centre = false;

//... 0 = floor, 1 = wall, 2 = spawn point
//... NB map[u][v] implies
//...  u = rows: up to down (--> increasing z)  
//...  v = columns: left across to right (--> increasing x)
//... where --> are our chosen mappings
//... so that the pattern below mimics the pattern in the simulation

var map = 
[
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var objects = [];

var mouse = new t.Vector2();

var player;
var spawnSet;

var Message = " <message>";
var reset_player = false ;

var pointerlockchange = function(event) 
{
    if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
        controls.enabled = true;
    } else
    {
        controls.enabled = false;
    }
};

//============================================================================================
function init() 
{
    //stats = new Stats();
   // stats.setMode(0);
    //document.body.appendChild(stats.domElement);

    renderer = new t.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(renderer.domElement);

    key = new Keyboard();
    player = new fPlayer();
    clock = new t.Clock();
    scene = new t.Scene();

    camera = new t.PerspectiveCamera(75, ASPECT, 0.01, 1000);
    camera.zoom = 0.5;//1;//2;//3;//...prevents seeing through walls to each side
    
    controls = new t.PointerLockControls(camera);

    scene.add( controls.getObject() );//...?
    scene.add( player.cube ); //...?
    
    spawnSet = false;
    
    //-------------------- Lights --------------
    
    var ambo = new THREE.AmbientLight( 0xcccccc );
		scene.add (ambo);
    
    var directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight1.position.set( -20, 20, -20 );
    scene.add( directionalLight1 );
    
    var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight2.position.set( 20, 20, -20 );
    scene.add( directionalLight2 );
    
    var Egeom = new t.CubeGeometry(.02,.02,.02);
    var Emat = new t.MeshLambertMaterial({
                        color:  0xffffff,
                        side: t.DoubleSide
                    });
    eddie = new t.Mesh ( Egeom, Emat);
    scene.add(eddie);
    eddie.position.set (5,3,5);
    
		//----------------------------------------------
    
    for (var u = 0; u < map.length; u++) //...rows
    {
        for (var v = 0; v < map[u].length; v++) //... columns
        {
            if (map[u][v] == 2 && !spawnSet) 
            {
                controls.getObject().position.x = v * scale; //UNITSIZE * (x / 10);
                controls.getObject().position.y = 3 * scale; //UNITSIZE * (3 / 10);
                controls.getObject().position.z = u * scale; //UNITSIZE * (z / 10);
                spawnSet = true;
            }
        }
    }

    var CubeGeom = new t.CubeGeometry(scale, scale, scale);

    for (var u = 0; u < map[0].length; u++) {
        for (var v = 0; v < map.length; v++) {
        		var x = v, z = u;
            switch (map[u][v]) {
                case 0:
               //huh???? case 2:
                    // Floor
                    var floor = new t.Mesh(CubeGeom, new t.MeshLambertMaterial({
                        color:  0xaaffaa,
                        side: t.DoubleSide
                    }));
                    floor.position.set(x * scale, 2 * scale, z * scale);
                    scene.add(floor);

                    // Ceiling
                    var ceiling = new t.Mesh(CubeGeom, new t.MeshLambertMaterial({
                        color:   0xaaaaff,
                        side: t.DoubleSide
                    }));
                    ceiling.position.set(x * scale, 4 * scale , z * scale);
                    scene.add(ceiling);
                    break;

                case 1:
                    // Walls
                    var wall = new t.Mesh(CubeGeom, new t.MeshLambertMaterial({
                        color: Math.random() * 0xffffff,
                        side: t.DoubleSide//FrontSide
                    }));
                    wall.position.set(x * scale, 3 * scale , z * scale);
                    scene.add(wall);
                    objects.push(wall);
                    break;
                    
               //case 2://... mover
            }
        }
    }
}//... EOF Init().
//============================================================================================

function update() 
{
    //.... Maybe use in future:-
    //var UserInputVal = document.getElementById('myTextField').value;
    
    var dt = clock.getDelta();
    
    player.update(dt); //...reacts to user inputs (L,R,F,B) and ray collisions

		//... store previous position

    var prev_pos_x = controls.getObject().position.x;
    var prev_pos_y = controls.getObject().position.y;
    var prev_pos_z = controls.getObject().position.z;
    
		var max_displacement = 0.2;
    disp_x = Math.min(player.velocity.x * dt, max_displacement);
    disp_y = Math.min(player.velocity.y * dt, max_displacement);
    disp_z = Math.min(player.velocity.z * dt, max_displacement);    
    
    controls.getObject().translateX(disp_x);
    controls.getObject().translateY(disp_y);
    controls.getObject().translateZ(disp_z); 
    
    //...need to ensure that displacement does not exceed wall cube width
    ///*
    var Player_proposed_pos_xz_V2 
    = new THREE.Vector2( controls.getObject().position.x, controls.getObject().position.z );
    //*/
    
    var player_pos_x = controls.getObject().position.x ;
    var player_pos_z = controls.getObject().position.z ;
    Message = "(x:" + player_pos_x + ", z:" + player_pos_z + ")"  ;
      
    //... Check to see if player now falls within any wall cube
    //... and, if so set flag to return player to previous position.  

    var collision_flag = false;
    
    for (var u = 0; u < map.length; u++) 
    {
        for (var v = 0; v < map[u].length; v++) 
        {
            var x = v, z = u;
            switch (map[u][v]) //...look up the cell type value (0,1 or 2).
            
            {
                //case 0://... floor & ceiling cubes               
                case 1: //... Wall cube
                {                                   
                  var tileWidth = scale;//5;                  
         					var tile_pos_x = x * scale //+ tileWidth/2;
                  var tile_pos_z = z * scale //+ tileWidth/2;
                  
                  var fudge = 0.15;
                  //... increases apparent size of collision target
                  //... to help avoid camera penetration of wall cubes.
                  
                  var tile_x_min = tile_pos_x - tileWidth/2 - fudge;
                  var tile_x_max = tile_pos_x + tileWidth/2 + fudge;
                  var tile_z_min = tile_pos_z - tileWidth/2 - fudge;
                  var tile_z_max = tile_pos_z + tileWidth/2 + fudge;

                  //... check if player is within this tile's X&Z bounds
                  
                  if (   tile_x_min <= player_pos_x && player_pos_x <= tile_x_max
                    	&& tile_z_min <= player_pos_z && player_pos_z <= tile_z_max )                              
                  {
                        collision_flag = true;
                        Message = "IN Wall Cell [" + x + "," + z +  "]" +
                        "(x:" + tile_pos_x + ", z:" + tile_pos_z + ")" 
                         ;                       
                        player.velocity.x = 0;
                        player.velocity.z = 0;                        
                        //break;
                   }                                    	              
                }//... End of case 1 wall cubes.                
                //case 2://... mover cube
        		}//... switch            
    		}
    }

    if (collision_flag == true)
      {
				controls.getObject().position.x = prev_pos_x ;
        controls.getObject().position.y = prev_pos_y ;
     		controls.getObject().position.z = prev_pos_z ;
        collision_flag = false;
        //Message = "<C>";
      }
        
    //... Report final position
    var new_pos_x = controls.getObject().position.x;
    var new_pos_y = controls.getObject().position.y;
    var new_pos_z = controls.getObject().position.z;
    
    eddie.position.set( new_pos_x, new_pos_y, new_pos_z );
    camera.position.set(0,0,0);//.2)
    //eddie.add(camera);
    eddie.visible = false;
    
    //eddie.rotation.y += 0.005;//... works OK alone  
    
    /*//Works Good for fixed rotation
    controls.getObject().rotation.y = Math.PI/2;
    eddie.rotation.y = Math.PI/2;//0.5;
    */
    
    var rotation_increment = Math.PI/60;
    
    if (rotate_left == true)
      {
        controls.getObject().rotation.y += rotation_increment;
        eddie.rotation.y += rotation_increment;
        rotate_left = false;
      }
           
     else if (rotate_right == true)
      {
        controls.getObject().rotation.y -= rotation_increment;
        eddie.rotation.y -= rotation_increment;
        rotate_right = false;
      }
      
      if (cRotate_up == true)
      {
        //controls.getObject().rotation.y -= rotation_increment;
        //eddie.rotation.y -= rotation_increment;
        camera.rotation.x += rotation_increment;
        cRotate_up = false;
      }

      else if (cRotate_centre == true)
      {
        //controls.getObject().rotation.y -= rotation_increment;
        //eddie.rotation.y -= rotation_increment;
        camera.rotation.x = 0;
        cRotate_centre = false;
      }
            
      else if (cRotate_down == true)
      {
        //controls.getObject().rotation.y -= rotation_increment;
        //eddie.rotation.y -= rotation_increment;
        camera.rotation.x -= rotation_increment;
        cRotate_down = false;
      }
 
     if (reset_player == true)
    {
        controls.getObject().position.x = 40 ;
        controls.getObject().position.z = 40 ;
        reset_player  = false ;
        collision_flag = false;
        Message = "<R>";
    }
    
    document.getElementById('myTextField').value = 
        "Px " +
        Math.floor(new_pos_x*100)/100 +"," + 
        "Pz " +
        Math.floor(new_pos_z*100)/100 
        + Message;  
 
} //... EOF function update() .

//============================================================================================

function F_UserClickButton() //... not working
{	
  		  reset_player = true;      
        //alert("User clicked on Button");
}

//============================================================================================

function doRender() 
{
    renderer.render(scene, camera);
    //renderer.render(scene, camera2);
    player.render(scene, camera);
}

//============================================================================================

function animate() 
{
    //stats.begin();
    update();
    doRender();
    //stats.end();
    requestAnimationFrame(animate);
}

//============================================================================================

var fPlayer = function() //... when called constructs a new object with properties and methods
{
    this.cameraPosition = new t.Vector3();
    this.velocity = new t.Vector3();
    this.maxVelocity = 20;
    this.speed = 100;
    this.raycaster = new t.Raycaster();

		//-----------------------------------------------------------------------
    this.update = function(dt) 
    {        
        var fixed_speed = 1;//0.2;
        //... Forward and backward
        new_user_input = "<>";        
        //alert ("HELLO");
        if ((key.down(key.FORWARD) || key.down(key.ARROW_FORWARD)) )
        { 
        	new_user_input = "F";
           
                if (this.velocity.z > -this.maxVelocity) 
                {
                    this.velocity.z = -fixed_speed;//-= this.speed * dt;
                    //this.position.z += 0.5;
                }     
         }
         
         //-----------------------------------------------------------
        
        else if ((key.down(key.BACK) || key.down(key.ARROW_BACK)) )
         { 
          new_user_input = "B";

                if ( this.velocity.z < this.maxVelocity ) 
                {
                    this.velocity.z = fixed_speed;//+= this.speed * dt;
                    //this.position.z -= 0.5;
                }            
         }
         else 
         {
         		this.velocity.z = 0;        
        }//NEW
           //... LEFT RIGHT (nested so that we dont operate on two key commands at once)

           if ((key.down(key.LEFT) || key.down(key.ARROW_LEFT)) )
           {             
             new_user_input = "L";

                   if (this.velocity.x > -this.maxVelocity) 
                   {
                     this.velocity.x = -fixed_speed;//-= this.speed * dt;
                   }
           }

           else if ((key.down(key.RIGHT) || key.down(key.ARROW_RIGHT)) )
           {
             new_user_input = "R";

                     if (this.velocity.x < this.maxVelocity) 
                     {
                       this.velocity.x = fixed_speed;//+= this.speed * dt;
                     }
 
           } //... if Left or Right
           
           else //... neither forward,backward, left or right
           {
                this.velocity.x = 0;
           }//NEW            
               
           //... ROTATE LEFT/RIGHT 
               if ( key.down(key.NUMPAD_FOUR) )
               {
                 new_user_input = "4";
                 //this.rotation.y += Math.PI/10;
                 rotate_left = true;
               }

               else if ( key.down(key.NUMPAD_SIX) )
               {
                 new_user_input = "6";
                 //this.rotation.y -= Math.PI/10;
                 rotate_right = true;
                         
               } 
               else if ( key.down(key.NUMPAD_EIGHT) )
               {
                 new_user_input = "8";
                 //this.rotation.y -= Math.PI/10;
                 cRotate_down = true;                        
               }               
               else if ( key.down(key.NUMPAD_FIVE) )
               {
                 new_user_input = "5";
                 //this.rotation.y -= Math.PI/10;
                 cRotate_centre = true;                        
               } 
               
                else if ( key.down(key.NUMPAD_TWO) )
               {
                 new_user_input = "2";
                 //this.rotation.y -= Math.PI/10;
                 cRotate_up = true;                        
               }               
            //... if ROTATE Left or Right or Down or Up
               
              
           //NEW}
         //NEW}
    
    	if (new_user_input != "<>" ) Message = "_" + new_user_input ;
     
    
    };//... EOF this.update = function(dt) 
    
    //-----------------------------------------------------------------------
		
    this.render = function(scene, camera) {}; 
    
		//-----------------------------------------------------------------------
    this.collides = function(vec, dist) 
    {
        this.raycaster.setFromCamera(vec, camera);
        
        var intersects = this.raycaster.intersectObjects(objects);
        
        return (intersects.length > 0 && intersects[0].distance < dist);
    };
		//-----------------------------------------------------------------------

};//... EOF fPlayer().

//============================================================================================

var Keyboard = function() 
{

    this.pressed = {};

    this.FORWARD = 38;
    this.BACK = 83;
    this.LEFT = 37;
    this.RIGHT = 39;

    this.ARROW_FORWARD = 87;
    this.ARROW_BACK = 40;
    this.ARROW_LEFT = 65;
    this.ARROW_RIGHT = 68;
    
    this.NUMPAD_TWO   =  98;
    this.NUMPAD_FOUR  = 100;
    this.NUMPAD_FIVE  = 101;
    this.NUMPAD_SIX   = 102;
    this.NUMPAD_EIGHT = 104;
    
    this.down = function(keyCode) {
        return this.pressed[keyCode];  };

    this.reset = function(keyCode) {
        delete this.pressed[keyCode];  };

    this.onKeyDown = function(event) {
        this.pressed[event.keyCode] = true;  };

    this.onKeyUp = function(event) {
        delete this.pressed[event.keyCode];  };

   document.addEventListener('contextmenu', function(event) 
    	{  event.preventDefault(); }
   		, false);
      
    document.addEventListener('keydown', bind(this, this.onKeyDown), false);
    
    document.addEventListener('keyup',   bind(this, this.onKeyUp),   false);

    function bind(scope, fn) 
    {        return function() { fn.apply(scope, arguments); };
    };
    
}; //... EOF Keyboard().

//============================================================================

document.addEventListener('pointerlockchange', pointerlockchange, false);

document.addEventListener('mozpointerlockchange', pointerlockchange, false);

document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

document.addEventListener('click', function(event) 
{
    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    element.requestPointerLock()
    showGUI = true;   
}, false);

init();
animate();
