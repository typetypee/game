var tilesets = [];
var layerID = {};
var data;

importData("json/samplemap.json", loadTilesets);

function loadTilesets(text) {
 data = JSON.parse(text);
  for(var i = 0; i < data.tilesets.length; i++) {
    var tile = data.tilesets[i];
    if(tile.image === undefined) {
      if(tile.source === undefined) console.log("No source or image could be found.");
      else {
        console.log(tile.source);
        importXML("images/Pipoya RPG Tileset 32x32/Pipoya RPG Tileset 32x32/SampleMap/" + tile.source,function(text){
          var x = text.getElementsByTagName("image")[0].getAttribute("source");
          tilesets.push(x);
        });
      }
    } else {
      tilesets.push(tile.image);
      
    }
  }
  //callback functions
  
  //get layer ids
  for(var j = 0; j < data.layers.length; j++) {
    console.log(data.layers[j].name)
    console.log(j)
    layerID[data.layers[j].name] = j;
  }
}


//import images

function loadImages() {
  
}

importData("images/", loadImages);

window.addEventListener("click", function(){
   console.log(tilesets);
})