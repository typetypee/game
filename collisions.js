//collisions {
var worldX = 300;
var worldY = 300;
//check if position is a path
function isPath(layerTwo, y, x) {
  return (layerTwo[y][x] === 0);
}

//check what type of tile
function typeTile(layerTwo, y, x) {
  return (layerTwo[y][x]);
}

//border collisions
function borderCollide() {
  
  if (player.x <= 1) player.x += player.speed;

  if (player.y <= 1) player.y += player.speed;

  if (player.x >= (worldX - 1) - player.width) player.x = worldX - 1 - player.width;
  
  if (player.y >= (worldY - 1) - player.height) player.y = worldY - 1 - player.height;
  
}
//entity collisions
function aabb(r1, r2) {
  //first check if collisions is happening
  if (r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.y + r1.height > r2.y) {
    entityCollide = true
    if(r2 == atk) entityHit = true
  }
    
    else {
    entityCollide = false
    entityHit =  false
    
  }
  
  //if in talking range of entity
  if(r1 == player) {
  if (r1.x < r2.x + r2.width + range && r1.x + r1.width > r2.x - range && r1.y < r2.y + r2.height + range && r1.y + r1.height > r2.y - range){
    talkable = true;
    entityID = eval("entity" + r2.color);
  } else talkable = false;
  }
  //then resolve those collisions
  if(entityCollide === true) {
    if (player.down === true) player.y -= player.speed;

  	if (player.up === true) player.y += player.speed;
    
    if (player.right === true) player.x -= player.speed;
    
    if(player.left === true) player.x += player.speed;
  }
}

//layer two
var collide = false;

function checkCollision(object, layer, number) {
  if(object.left === true) corners(object.x - object.speed, object.y, object, layer)
  else if(object.up === true) corners(object.x, object.y - object.speed, object, layer)
  else if(object.right === true) corners(object.x + object.speed, object.y, object, layer)
  else if(object.down === true) corners(object.x, object.y + object.speed, object, layer)
  else return false
  if(object.upLeft === number || object.upRight === number || object.downLeft === number || object.downRight === number) return true;
  
  else return false;
}

function checkCollisionNo(layer, number) {
  if(typeTile(layer, player.topPos, player.leftPos) !== number || typeTile(layer, player.topPos, player.rightPos) !== number || typeTile(layer, player.bottomPos, player.leftPos) !== number || typeTile(layer, player.bottomPos, player.rightPos) !== number) return true;
  
  else return false;
}

//call the collison detection only when going a certain direction
//specifically only for the tilemap, not entities
// 1 = stone, 2 = blue tree
function collisionPosition() {
  checkMove(player, layerTwo, 0);
  if(talkingMoment == false) {
    if(checkCollision(player, layerOne, 2)) player.speed = 1;
    else player.speed = 2.5;
  }
    if(checkCollision(player, layerTwo, 2)) health -= 1;
}

/**TILE MAP COLLISIONS**/
//get the future coordinates of the player in array map form
    function corners(x, y , object, array) {
        object.tileLeft = ~~((x)/tileSize)
        object.tileUp =  ~~((y)/tileSize)
        object.tileRight = ~~((x + object.width)/tileSize)
        object.tileDown = ~~((y + object.height)/tileSize)
        object.tileMid = ~~((y + (object.height/2))/tileSize)
        object.upLeft = array[object.tileUp][object.tileLeft];
        object.upRight = array[object.tileUp][object.tileRight];
        object.downLeft = array[object.tileDown][object.tileLeft];
        object.downRight = array[object.tileDown][object.tileRight];
        object.midLeft = array[object.tileMid][object.tileLeft];
        object.midRight = array[object.tileMid][object.tileRight];
    }

//move the player if there is a collision
    function checkMove(object, array, num) {
        //left
        if(object.left === true) {
            corners(object.x - object.speed, object.y, object, array);
            if(object.upLeft === num && object.downLeft === num) object.leftMove = true;
            else object.leftMove = false
    }
    
    //up
    if(object.up === true) {
        corners(object.x, object.y - object.speed, object, array);
        if(object.upLeft === num && object.upRight === num) object.upMove = true;
        else {
            object.upMove = false
            object.y = object.tileDown * tileSize
            console.log("collide");
        }
    }
    
    //right
    if(object.right === true) {
        corners(object.x + object.speed, object.y, object, array);
        if(object.upRight === num && object.downRight === num) object.rightMove = true
        else object.rightMove = false
    }
    
   //down
   if(object.down === true) {
      corners(object.x, object.y + object.speed, object, array);
      if(object.downLeft === num && object.downRight === num) object.downMove = true;
      else object.downMove = false
   }
}

//}