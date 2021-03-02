
//canvas for the actual game
canvas = document.getElementById("game");
ctx = canvas.getContext("2d");
canvas.width = "300";
canvas.height = "300";

var tileSize = 50;
var health = 100;
var entityCollide;
var entityHit;
var talkable;
var range = tileSize/2;
var entities = [];

//map tiles arrays

var wholeLayerOne = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 2, 2]

    ];

var wholeLayerTwo = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0]
    ];

//the layer drawn currently

var layerOne = wholeLayerOne;
var layerTwo = wholeLayerTwo;
var worldX = tileSize * layerOne[0].length;
var worldY = tileSize * layerOne.length;
//draw the layers
        
function drawLayerOne() {
    
var xPos = 0;
var yPos = 0;

for (var i = 0; i < layerOne.length; i++) {
    for (var j = 0; j < layerOne[i].length; j++) {
      if (layerOne[i][j] === 0) {
        ctx.fillStyle = "green";
        ctx.fillRect(xPos, yPos, tileSize, tileSize);
      }
      if (layerOne[i][j] === 1) {
        ctx.fillStyle = "tan";
        ctx.fillRect(xPos, yPos, tileSize, tileSize);
      }
      if (layerOne[i][j] === 2) {
          ctx.fillStyle = "blue";
          ctx.fillRect(xPos, yPos, tileSize, tileSize);
      }
      xPos += tileSize
    }
    xPos = 0
    yPos += tileSize;
   }
}
        
function drawLayerTwo() {
    
  var xPos = 0;
  var yPos = 0;
  
  for (var i = 0; i < layerTwo.length; i++) {
    for(var j = 0; j < layerTwo[i].length; j++) {
      if(layerTwo[i][j] === 1) {
          ctx.fillStyle = "gray";
          ctx.fillRect(xPos, yPos, tileSize, tileSize);
      }
      if(layerTwo[i][j] === 2) {
          ctx.fillStyle = "cyan";
          ctx.fillRect(xPos, yPos, tileSize, tileSize);
      }
      if(layerTwo[i][j] === 3) {
         ctx.fillStyle = "brown";
         ctx.fillRect(xPos, yPos, tileSize, tileSize);
      }
      xPos += tileSize;
    }
    xPos = 0;
    yPos += tileSize;
  }
}

//movement

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
});

function input(player) {
  //left
  if (37 in keys) {
    player.x -= player.speed;
    player.left = true;
    console.log("x: " + mapLeftX + " y: " +mapTopY);
  }
  //right
  if (39 in keys) {
    player.x += player.speed;
    player.right = true
  }
  //up
  if (38 in keys) {
    player.y -= player.speed;
    player.up = true;
  }
  //down
  if (40 in keys) {
    player.y += player.speed;
    player.down = true;
  }
}

//object constructor for the entities

function Shape(options) {
  this.x = options.x || 100;
  this.y = options.y || 100;
  this.speed = options.speed || 2.5;
  this.color = options.color || "gray";
  this.width = options.width || (tileSize/30) * 20;
  this.height = options.height || (tileSize/30) * 20;
  this.direction = options.direction || "right";
  this.left = options.left || false;
  this.up = options.up || false;
  this.right = options.right || false;
  this.down = options.down || false;
}

//player
var player = new Shape({
  x: posX(3),
  y: posY(2),
  color: "ff0000",
  speed: 2.5,
  left: false,
  up: false,
  right: false,
  down: false
});
//dark blue
entities.push(new Shape({
  x: posX(15),
  y: posY(25),
  color: "006699",
}))
//yellow
entities.push(new Shape({
	x: posX(17),
  y: posY(28),
  color: "fcc203",
}))
//elsie
entities.push(new Shape({
  x: posX(6),
  y: posY(27.5),
  color: "9abcfc",
}))
//winston
entities.push(new Shape({
  x: posX(22.5),
  y: posY(22.5),
  color: "ed21e6",
  speed: 2.5
}))
//abel
entities.push(new Shape({
  x: posX(16),
  y: posY(22),
  color: "000000",
  speed: 2.5
}))
//dead purple
entities.push(new Shape({
  x: posX(8.1),
  y: posY(29.1),
  color: "9e59c9",
  speed: 2.5
}))

//many variables
var mapLeftX;
var mapTopY;
var mapRightX;
var mapBottomY;
function variables() {
mapLeftX = Math.floor(player.x / tileSize);
mapTopY = Math.floor(player.y / tileSize);
mapRightX = Math.floor((player.x + player.width) / tileSize);
mapBottomY = Math.floor((player.y + player.height) / tileSize);
}

function posX(x) {
  return x * tileSize
}

function posY(y) {
  return y * tileSize
}

//collisions

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
  if(entityCollide == true) {
    if (player.down == true) player.y -= player.speed;

  	if (player.up == true) player.y += player.speed;
    
    if (player.right == true) player.x -= player.speed;
    
    if(player.left == true) player.x += player.speed;
  }
}
//layer two
var collide = false;

function checkCollision(layer, number) {
  if(typeTile(layer, mapTopY, mapLeftX) == number || typeTile(layer, mapTopY, mapRightX) == number || typeTile(layer, mapBottomY, mapLeftX) == number || typeTile(layer, mapBottomY, mapRightX) == number) return true;
  
  else return false;
}

function checkCollisionNo(layer, number) {
  if(typeTile(layer, mapTopY, mapLeftX) !== number || typeTile(layer, mapTopY, mapRightX) !== number || typeTile(layer, mapBottomY, mapLeftX) !== number || typeTile(layer, mapBottomY, mapRightX) !== number) return true;
  
  else return false;
}

//call the collison detection only when going a certain direction
//specifically only for the tilemap, not entities
// 1 = stone, 2 = blue tree
function collisionPosition() {
  if(checkCollisionNo(layerTwo, 0)) {
  	if (player.down == true) player.y -= player.speed;
  	
  	if (player.up == true) player.y += player.speed;
  	
    if (player.right == true) player.x -= player.speed;
        		
  	if (player.left == true) player.x += player.speed;
  
    if(checkCollision(layerTwo, 2)) health -= 1;
  }
  if(talkingMoment == false) {
    if(checkCollision(layerOne, 2)) player.speed = 1;
    else player.speed = 2.5;
  }
}


//speech for entities
var text = document.getElementById("talk");
var talkingMoment = false;
var entity006699 = ["Hola", "Bye."/**"Hello.", "Who are you?", "#FF0000?", "It's fine if you don't want to tell me.", "I'm #00669", "Do you need something?", "You're in the middle of a forest.", "Actually no, the edge of a forest.", "A lot of people seem to get lost here. I recommend you leave here.",  "Many people who have gotten lost here have not come out...", "...not that I want to scare you of course.", "You don't know how to leave here?", "(Despite the fact this is the edge of the forest...)", "Alright.", "Head to the right, you should reach a beach.", "Then you keep going up, you should reach a village."**/];
var entityfcc203 = ["Hey there.", "Circles will likely forget how to do collision detection.", "I will provide information on their knowledge for future reference.", "You should remember it, Circles might ask you about it in the future when they end up forgetting how to do it themself.", "But Circles might choose to ask me instead.", "So nevermind, go away.", "You don't need to know."]
var entity9abcfc = ["(Ooooooooooo, another victim...)", ">:)", "HI!!", "^_^", "WHY DO YOU LOOK SO UNSETTLED?", "DON'T WORRY.", "I AM VERY FRIENDLY.", "IT'S NOT LIKE I'LL EAT YOU OR ANYTHING.", "HAHAHAHAHAHAHAHA.", ":)", "^_^"]
var entityed21e6 = ["(I wonder when she'll be back...)", "*gasp*", "OLIVE!!!", "IS THAT YOU?!!!", "Oh wait, you're not Olive.", ":'(", "Tell me if you see a girl named Olive around here.", "Who's Olive?", "Hmmmm...", "...", "...Olive is this girl I like.", "She's been gone for a few weeks.", "But I'm sure she'll be back soon.", "So tell me if you see her, alright?"]
var entity000000 = ["._.", ".......", "Wats up.", "Huh...", "You're looking for Olive?", "For pink, eh?", "Haven't seen her.", "But I hear there is a guy that is grey and eats people.", "Near the glowing stones.", "Also...", "Can you help me find someone?", "They are a purple."]
var entity9e59c9 = ["*Is this the purple black was looking for?*", "*Near the grey they were talking about...*", "*Maybe you should tell black.*"]
var num = 0;
var entityID;

function talking() {
    
  if (32 in keys && talkingMoment == false && talkable == true) {
   				talkingMoment = true;
    			player.speed = 0;
    			text.style.display = "block"
    			text.innerHTML =  entityID[0]
    		
    			
  }
  if (player.speed !== 0) talkingMoment = false;
}

var choiceOne = document.getElementById("choiceOne");
var choiceTwo = document.getElementById("choiceTwo");
var choiceThree = document.getElementById("choiceThree");

  window.addEventListener("click", function() {
      console.log(text.textContent)
  if(talkingMoment == true) {
    if(entityID == entity006699) {
    if(num === 0) {
      num = 1;
      text.innerHTML = entityID[num]
    } else if(num === 1) {
      choiceOne.innerHTML = "I'm #FFOOOO."
      choiceTwo.innerHTML = "..."
      choiceThree.innerHTML = "Bye."
      choiceOne.addEventListener("click", function() {
        num = 1;
        text.innerHTML = entityID[num]
        num = 4;
      })
      choiceTwo.addEventListener("click",function() {
        num = 3
        text.innerHTML = entityID[num]
      })
    }  else {text.innerHTML = entityID[num]
      num++
       if (num > entityID.length) {
			  player.speed = 2.5;
			  num = 0;
		    text.style.display = "none";
 	 	  }
    }
  } else {
      text.innerHTML = entityID[num]
      num++
      if (num > entityID.length) {
			  player.speed = 2.5;
			  num = 0;
		    text.style.display = "none";
 	 	  }
    }
  }
  })

function death() {
  if(health <= 0) {
      var deaths = document.getElementById("deaths");
      deaths.style.display = "block"
  }
}

function camera() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  var camX = clamp(player.x - canvas.width/2 + player.width/ 2, 0, worldX - canvas.width);
  var camY = clamp(player.y - canvas.height/2 + player.height/2, 0, worldY - canvas.height);
  
  ctx.translate(-camX, -camY)
  drawAndErase();
}

function clamp(coord, min, max) {
  if(coord < min) return min
  else if (coord > max) return max
  else return coord
}
var atk = ({
  x: 0,
  y: 0,
  width: 0,
  height: 0
})
function attack() {
  if(83 in keys) {
    if(player.left || player.up || player.right || player.down) {
      if(player.left == true) {
        atk.x = player.x - (player.width/4) - 5;
        atk.y = player.y;
        atk.width = player.width/4
        atk.height = player.height;
      }
      if(player.up == true) {
        atk.x = player.x;
        atk.y = player.y - (player.height/4)- 5;
        atk.width = player.width;
        atk.height = player.height/4;
      }
      if(player.right == true) {
        atk.x = player.x + player.width + 5;
        atk.y = player.y;
        atk.width = player.width/4;
        atk.height = player.height;
      }
      if(player.down == true) {
        atk.x = player.x;
        atk.y = player.y + player.height + 5;
        atk.width = player.width;
        atk.height = player.height/4;
      }
      ctx.fillStyle = "cyan";
      ctx.fillRect(atk.x, atk.y, atk.width, atk.height);
    }
  }
}
function damage() {
    if(entityHit == true) {
      console.log("OUCH!!")
    }
}
//all these dank (or maybe not so dank) functions.
function drawThem(shape) {
  ctx.fillStyle = "#" + shape.color;
  ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
};

function drawAndErase() {
  drawLayerOne();
  entityDraw();
  drawLayerTwo();
};

function work() {
  input(player);
};

function entityDraw() {
  drawThem(player);
  for(var i = 0; i < entities.length; i++) drawThem(entities[i]);
}

function collisions() {
  collisionPosition();
  for(var i = 0; i < entities.length; i++) {
  aabb(player, entities[i]);
  aabb(entities[i], atk)
  talking();
  }
}

function loop() {
  if(health > 0) work();
  camera();
  variables();
  borderCollide();
  collisions();
  death();
  attack();
  damage();
  healthLevel.innerHTML = "Health: " + health;
  window.requestAnimationFrame(loop);
}

if(canvas.style.display == "block") loop();

loop();
    
function reset() {
health = 100;
player.x = posX(3);
player.y = posY(2);
}

//the other screens
var play = document.getElementById("play");
var pages = document.getElementsByClassName("page");
var game = document.getElementById("gameParts");

function swap(page) {
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
}
    
swap("title");
    
play.addEventListener("click", function(){
    game.style.display = "block";
    title.style.display = "none";
    text.style.display = "none"
});
    
//death screen
var endGame = document.getElementById("endGame");
endGame.addEventListener("click", function(){
    reset();
    deaths.style.display = "none";
    title.style.display = "block";
    game.style.display = "none";
});
var continueB = document.getElementById("continue");
continueB.addEventListener("click", function(){
    reset();
    deaths.style.display = "none";
})

