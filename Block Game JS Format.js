// @author: Christopher S Coram
// Block Game 
// 8 - 06 - 2019 / 8:59 AM

//////////////////////
// SET UP VARIABLES //
//////////////////////

// Setup canvas...
var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");
//...
// Ball and square speed, x, y, width, and height values...
// x, y variables for main circle
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ball_radius = 10;

// Key actions...
// Default value is false
var rightPressed = false;
var leftPressed = false;
//...

// Game over / rebdering objects variable
var interval = setInterval(draw, 10);

// Paddle Values...
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
//...

// Variables for obstacle 1...
var object1_Height = 10;
var object1_Width = 75;
var ob1_x = 50;
var ob1_y = 50;
var object1_x = (canvas.width-object1_Width) / 2;
//...

// Variables for obstacle 2...
var object2_Height = 10;
var object2_Width = 75;
var ob2_x = 150;
var ob2_y = 200;
var object2_x = (canvas.width-object2_Width) / 2;
//...

// Variables for obstacle 3...
var object3_Height = 10;
var object3_Width = 75;
var ob3_x = 350;
var ob3_y = 250;
var object3_x = (canvas.width-object3_Width) / 2;
//...

// Variables for obstacle 4...
var object4_Height = 10;
var object4_Width = 75;
var ob4_x = 234;
var ob4_y = 126;
var object41_x = (canvas.width-object4_Width) / 2;
//...


///////////////////////////////
///// GAME LOOP FUNCTIONS /////
///////////////////////////////

// Event listeners for keyboard
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// key down and up handlers will change states from true to false...
function keyDownHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key == "left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
}
//...

// Draws blue ball object on canvas.
// Gives main ball object the ability to change x y coordinates by 2
// frames per second.
function draw_ball() {
   ctx.beginPath();
   ctx.arc(x, y, ball_radius, 0, Math.PI*2);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
   x += dx;
   y += dy;
}

// Draws and gives player the ability to operate player object.
function draw_paddle() {
	ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    // Draws obstacle 1 to increase operation difficulty
    ctx.beginPath();
    ctx.rect(ob1_x, ob1_y, object1_Width, object1_Height);
    ctx.fillStyle = "#ffe6e6";
    ctx.fill();
    ctx.closePath();

    // Draws obstacle 2 to increase operation difficulty
    ctx.beginPath();
    ctx.rect(ob2_x, ob2_y, object2_Width, object2_Height);
    ctx.fillStyle = "#ffe6e6";
    ctx.fill();
    ctx.closePath();

    // Draws obstacle 3 to increase operation difficulty
    ctx.beginPath();
    ctx.rect(ob3_x, ob3_y, object3_Width, object3_Height);
    ctx.fillStyle = "#ffe6e6";
    ctx.fill();
    ctx.closePath();

    // Draws obstacle 4 to increase operation difficulty
    ctx.beginPath();
    ctx.rect(ob4_x, ob4_y, object4_Width, object4_Height);
    ctx.fillStyle = "#ffe6e6";
    ctx.fill();
    ctx.closePath();
}


// Creates collision conditions for circle object to prevent it from 
// leaving the canvas borders.
// Also draws main game objects.
function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	draw_ball();
	draw_paddle();

	// Collision conditions for left wall, right wall, and top wall
	if(x + dx > canvas.width-ball_radius || x + dx < ball_radius) {
		dx = -dx;
	}
 
	// Game over statement....
    // Ball obj continues movement unless...
	if(y + dy < ball_radius) {
		dy = -dy;
	}
	// if ball y position is greater than canvas height and ball radius is lower than canvas height.
    else if(y + dy > canvas.height-ball_radius) {
    	// Collision system for ball and paddle
    	if(x > paddleX && x < paddleX + paddleWidth) {
    		dy = -dy;
    	}
    	// if ball continues past canvas height, js will initiate alert message "GAME OVER"
    	else {
    		alert("GAME OVER");
    		document.location.reload();
    		clearInterval(interval);
    	}
    }
    //....

    // Checks to see if left or right cursor keys are pressed
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
    	paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
    	paddleX -=7;
    }
}