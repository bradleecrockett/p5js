//Global Variables
var centerX=200;
var centerY=200;

//Setup Loop runs once at the beginning of the sketch
function setup() { 
	//create the canvas of a particular size
	var canvas = createCanvas(400, 400);
	//Give the canvas an id to position it in the HTML
	canvas.parent('sketch-holder');
	background(220);

  	ellipseMode(CENTER);
	rectMode(CENTER);


} 

//Draw loop runs over and over
function draw() { 
// Example 2-1: Zoog again

background(mouseX,mouseY,(mouseX+mouseY)/2);

// Body
stroke(0);
fill(mouseX);
rect(mouseX,mouseY, 20, 100);

// Head
fill(mouseY/2);
ellipse(mouseX, mouseY-50, 60, 60); 

// Eyes
fill(random(0,255),random(0,255),random(0,255));
ellipse(mouseX-15, mouseY-55, 16, 32); 
ellipse(mouseX+15, mouseY-55, 16, 32);

// Legs
stroke(0);
line(mouseX-10, mouseY+50, 0, 400);
line(mouseX+10, mouseY+50, 400, 400);

//Arms
stroke(0);
line(mouseX-10, mouseY-5, 0, 0);
line(mouseX+10, mouseY-5, 400, 0);

}


//Other Function definitions