// Shafakor: Shafali Gupta, Aleksandra Koroza
// SoftDev2 pd8
// K #03: They lock us in the tower whenever we get caught
// 2019-02-05

// get canvas element
var c = document.getElementById("playground");
// get buttons
var stopButton = document.getElementById("stop");
var dotButton = document.getElementById("circle");
var ctx = c.getContext("2d");

// radius initially 0, growing is true by default, requestID assigned in drawDot
var requestID; var radius=0; var growing = true;

// Given a canvas object, clears it
var clear= function(e){
	e.clearRect(0, 0, c.width, c.height);
};

// Draw an ellipse given radius
var drawEllipse = function(r){
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, r, 0, 2* Math.PI);
	ctx.stroke();
	ctx.fill();
};

// Function animates dot using state variable growing
var drawDot=function(){
	if (growing){
		//clear not too necessary here since every subsequent dot just draws over previous.
		clear(ctx);
		//draw the dot given augmented radius
		radius+= 5;
		drawEllipse(radius);
		// manipulate growing state variable as necessary
		if (radius == c.width){
			growing= false;
		}
	}
	if (! growing){
		// clearing necessary here since previous larger circles should not be present.
		clear(ctx);
		//draw the dot given smaller radius
		radius-= 5;
		drawEllipse(radius);
		// manipulate growing state variable as necessary
		if (radius <= 0){
			growing= true;
		}
	}
	// executes on next available screen repaint and facilitates animation
	requestID= window.requestAnimationFrame(drawDot);
};
// Stops the animation from happening
var stopIt= function() {
	//console.log(requestID);
	window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener("click",drawDot);
stopButton.addEventListener("click",stopIt);
