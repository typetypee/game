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
