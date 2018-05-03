var canvas = document.getElementById('drawingsurface');
var context = canvas.getContext('2d');


//draw rectangle
// context.beginpath();
// contex.rect(118, 50, 200, 100);
// context.fillstyle = 'yellow';
// Context.fill();
// context.linewidth = 7;
// context.strokestyle = 'black'
// contex.stroke();

//draw circle
// context.linewidth = 7;
// var radius = 70;
// context.beginPath();
// context.arc(100,50,radius,0,2*Math.PI,false);
// context.fillStyle = 'green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = '#003300';
// contex.stroke();

//draw circle
//context.linewidth = 7;
// var radius = 70;
// context.beginPath();
// context.arc(250,250,radius,0,2*Math.PI,false);
// context.fillStyle = 'green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = '#003300';
//contex.stroke();

// context.font = "30px Arial";
// context.fillStyle = "red";
// context.strokeText("hello world", 10,50);

// context.rect(0,0, canvas.width, canvas.height);
// var grd = context.CreateRadialGradient(238,50,10,238,50,300);
// grd.addColorStop(0,'#8ED6FF');
// grd.addColorStop(0,'#004CB');
// context.fillStyle = grd;
// context.fill();
// var img=document.getElementById("img");
// context.drawImage(img,10,10);
// var imageObj = new imageObj();
// imageObj.onload = function();
// context.drawimage(imageObj,10,50);
// imageObj.scr= 
window.addEventListener("mousemove",animate,false);
function animate(element);
context.clearRect(0.0,500.500)
var xposision = element.clientX
var yposision = element.clientY
context.fillRect(xposition-50,yposition-50,100,100)