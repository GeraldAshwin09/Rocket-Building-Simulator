var canvas= new fabric.Canvas('mycanvas');

playerX= 10;
playerY= 10;


var player_object;
var block_object;

var block_object_width=30;
var block_object_height=30;

function player_update()
{
    fabric.Image.fromURL("shuttle.jpg", function(Img) {
     player_object=Img;

     player_object.scaleToWidth(700);
     player_object.scaleToHeight(600);
     player_object.set({
         top:0,
         left:0
     });
canvas.add(player_object);
    });
}


function new_image(getimg)
{
    fabric.Image.fromURL(getimg, function(Img) {
     block_object=Img;

     block_object.scaleToWidth(block_object_width);
    block_object.scaleToHeight(block_object_height);
     block_object.set({
         top:playerY,
         left:playerX
     });
canvas.add(block_object);
    });
}
