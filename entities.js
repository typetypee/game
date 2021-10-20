//movement {
var tileSize = 20;
var keys = {};

window.addEventListener('keydown', function(e) {
  keys[e.keyCode] = true;
  e.preventDefault();
});

window.addEventListener('keyup', function(e) {
  delete keys[e.keyCode];
  player.left = false;
  player.up = false;
  player.right = false;
  player.down = false;
  player.dx = 0;
  player.dy = 0;
});

function input(player) {
  player.x += player.dx;
  player.y += player.dy;
  player.dx *= player.friction;
  player.dy *= player.friction;
  
  
    if(37 in keys || 39 in keys || 38 in keys|| 40 in keys) {
      
      player.hasMoved = true;
      
    } else {
      player.currentIndex = 0;
      player.hasMoved = false;
    }
      
  //left
  if (37 in keys) {
    player.dx = player.speed * -1;
    player.left = true;
    player.direction = 1;
 
    
  }
  //right
  if (39 in keys) {
    player.dx = player.speed;
    player.right = true;
    player.direction = 2;
  
  }
  //up
  if (38 in keys) {
    player.dy = player.speed * -1;
    player.up = true;
    player.direction = 3;

  }
  //down
  if (40 in keys) {
    player.dy = player.speed;
    player.down = true;
    player.direction = 0;
    
  }
}

//}

//object constructor for the entities {

function Shape(options) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.speed = options.speed || 2.5;
  this.dx = options.dx || 0;
  this.dy = options.dy || 0;
  this.friction = options.friction || 1;
  this.color = options.color || "gray";
  this.width = options.width || (tileSize/30) * 20;
  this.height = options.height || (tileSize/30) * 20;
  this.direction = options.direction || 0;
  this.left = options.left || false;
  this.up = options.up || false;
  this.right = options.right || false;
  this.down = options.down || false;
  this.abc = options.abc || "YEAH";
  this.src = options.src;
  this.currentIndex = options.currentIndex || 0;
  this.hasMoved = options.hasMoved || false;
  this.frameCount = options.frameCount  || 0;
  this.drawFrame = options.drawFrame || function(frameX, frameY, canvasX, canvasY, sprite) {
    ctx.drawImage(sprite,
                    frameX * width, frameY * height, width, height,
                    canvasX, canvasY, width, height);
  };
  this.step = options.step || function(){
    var sprite = new Image();
    sprite.src = this.src;
    if(this.hasMoved) {
      this.frameCount++;
      if (this.frameCount >= 5) {
        this.frameCount = 0;
        this.currentIndex++;
        if(this.currentIndex >= cycleLoop.length) {
          this.currentIndex = 0;
        }
      }
    }
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawFrame(cycleLoop[this.currentIndex], this.direction, this.x, this.y, sprite);
    var _this = this;
    window.requestAnimationFrame(function(){_this.step(this);});
  };
  
}

//player
var player = new Shape({
  x: 0,
  y: 0,
  width: 32,
  height: 48,
  direction: 0,
  color: "ff0000",
  speed: 2,
  friction: 1,
  dy: 0,
  dx: 0,
  src: "images/russia.png",
  currentIndex: 0,
  hasMoved: false,
  frameCount: 0,
});
var mahboi = new Shape({
  x: 20,
  y: 20,
  width: 32,
  height: 48,
  direction: 0,
  src: "images/japan.png",
  currentIndex: 0,
  frameCount: 0,
});
  var entities = []
  entities.push(player);
  entities.push(mahboi);
//dark blue
/**
entities.push(new Shape({
  x: posX(15),
  y: posY(25),
  color: "006699",
}));

//}
**/
function posX(x) {
  return x * tileSize;
}

function posY(y) {
  return y * tileSize;
}

//draw entities {
  
   
   var width = 32;
   var height = 48;
   var cycleLoop = [0, 1, 2, 3];
   
  function step(entity)  {
    var sprite = new Image();
    sprite.src = entity.src;
    
    if(entity.hasMoved) {
      entity.frameCount++;
      if (entity.frameCount >= 5) {
        entity.frameCount = 0;
        entity.currentIndex++;
        if(entity.currentIndex >= cycleLoop.length) {
          entity.currentIndex = 0;
        }
      }
    }
    
  
    drawFrame(cycleLoop[entity.currentIndex], entity.direction, entity.x, entity.y, sprite);

  }
  
  function drawFrame(frameX, frameY, canvasX, canvasY, sprite) {
     ctx.drawImage(sprite,
                    frameX * width, frameY * height, width, height,
                    canvasX, canvasY, width, height);
  }
  
  function init(entity) {
    input(player);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(init);
   for(var i = 0; i < entities.length; i++) {
    step(entities[i]);
    
  }
     
  }
  init();

  console.log(player.step);
  
  
  

//}