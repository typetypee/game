function death() {
  if(health <= 0) {
 
  }
}

var atk = ({
  x: 0,
  y: 0,
  width: 0,
  height: 0
})

function attack() {
  if(83 in keys) {
    if(player.left === true) {
      atk.x = player.x - (player.width/4) - 5;
      atk.y = player.y;
      atk.width = player.width/4
      atk.height = player.height;
    }
    else if(player.up === true) {
      atk.x = player.x;
      atk.y = player.y - (player.height/4)- 5;
      atk.width = player.width;
      atk.height = player.height/4;
    }
    else if(player.right === true) {
      atk.x = player.x + player.width + 5;
      atk.y = player.y;
      atk.width = player.width/4;
      atk.height = player.height;
    }
    else if(player.down === true) {
      atk.x = player.x;
      atk.y = player.y + player.height + 5;
      atk.width = player.width;
      atk.height = player.height/4;
    } else {
      atk.x = player.x;
      atk.y = player.y;
      atk.width = 0;
      atk.height = 0;
    }
    ctx.fillStyle = "cyan";
    ctx.fillRect(atk.x, atk.y, atk.width, atk.height);

  }
}
function damage() {
    if(entityHit === true) {
      console.log("OUCH!!");
    }
}