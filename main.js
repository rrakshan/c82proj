canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x;
var last_position_of_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    Width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
   mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
     current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
     current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if( mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
console.log("last_position_of_x_and_y =");
console.log("x="+ last_position_of_x+"y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("current_position_of_x_and_y =");
console.log("x="+ current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

function clearCanvas() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 800, 600);
}