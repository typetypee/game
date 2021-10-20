//canvas for the actual game
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = "300";
canvas.height = "300";
document.body.appendChild(canvas);

var tileSize = 50;
var pixelSize = 10;
var health = 100;
var entityCollide;
var entityHit;
var talkable;
var range = tileSize/2;
var entities = [];
var data = "";

function loop() {
  //borderCollide();
  window.requestAnimationFrame(loop);
}

loop();

/**


//the layer drawn currently

var layerOne = "";

var layerTwo = "";


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
  
  //healthLevel.innerHTML = "Health: " + health;
  window.requestAnimationFrame(loop);
}

if(canvas.style.display === "block") loop();

loop();
    
function reset() {
health = 100;
player.x = posX(3);
player.y = posY(2);
}


//});

//speech for entities {

var talkingMoment = false;
var entity006699 = ["Hola", "Bye."/**"Hello.", "Who are you?", "#FF0000?", "It's fine if you don't want to tell me.", "(It's not fine, actually.)", "(I wanna know your name. >:C)". "I'm #00669. ^-^", "Do you need something?", "You're in the middle of a forest.", "Actually no, the edge of a forest.", "A lot of people seem to get lost here. I recommend you leave here.",  "Many people who have gotten lost here have not come out...", "...not that I want to scare you of course.", "You don't know how to leave here?", "(Despite the fact this is the edge of the forest...-_-)", "Alright.", "Head to the right, you should reach a beach.", "Then you keep going up, you should reach a village."];
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



  window.addEventListener("keydown", function(e) {
    if(32 in keys) {
      if (e.repeat) return
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
    }
  })
//}
**/