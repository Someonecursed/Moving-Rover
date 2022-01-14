var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverX = 10;
var roverY = 10;
var roverWidth = 100;
var roverHeight = 100;
var bgImg = "mars.jpg";
var roverImg = "rover.png";

function add() {
    bg_tag = new Image();
    bg_tag.onload = uploadbg;
    bg_tag.src = bgImg;

    rover_tag = new Image();
    rover_tag.onload = uploadrover;
    rover_tag.src = roverImg;
}
function uploadbg() {
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_tag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("Up");

    }
    if (keyPressed == "39") {
        right();
        console.log("Right");

    }
    if (keyPressed == "40") {
        Down();
        console.log("Down");

    }
    if (keyPressed == "37") {
        Left();
        console.log("Left");

    }
}

function up() {
    if (roverY>=0){
        roverY = roverY - 10;
        console.log("When up arrow is pressed x =  " + roverX + "  , Y =  " + roverY);
        uploadbg();
        uploadrover();
    }
}
function Down() {
    if (roverY<=500){
        roverY = roverY + 10;
        console.log("When down arrow is pressed x =  " + roverX + "  , Y =  " + roverY);
        uploadbg();
        uploadrover();
    }
}
function Left() {
    if (roverX>=0){
        roverX = roverX - 10;
        console.log("When left arrow is pressed x =  " + roverX + "  , Y =  " + roverY);
        uploadbg();
        uploadrover();
    }
}

function right() {
    if (roverX<=700){
        roverX = roverX + 10;
        console.log("When right arrow is pressed x =  " + roverX + "  , Y =  " + roverY);
        uploadbg();
        uploadrover();
    }
}


