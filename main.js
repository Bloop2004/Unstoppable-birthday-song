var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        Img_object = Img;
        Img_object.scaleToWidth(600);
        Img_object.scaleToHeight(300);
        Img_object.set({
            top:50,
            left:250
        });
        canvas.add(Img_object);
    });
	
}

function playSound(){
	x.play();
}
function STOP_IT(){
    x.pause();
}