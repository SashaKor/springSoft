// Canvasseurs
// Aaron Li, Aleksandra Koroza
// SoftDev2 pd8
// K02 -- Connecting the dots
// 2019-02-02

// get canvas element
var c = document.getElementById("playground");
// get clear button
var stopButton = document.getElementById("stop");
var dotButton = document.getElementById("circle");
var ctx = c.getContext("2d");

// given by topher
var requestID; var radius=0; var growing = true;
var clear= function(e){};
var drawDot=(){
	if (growing){
	radius+= 10;
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2* Math.PI);
	ctx.stroke()
	ctx.fill()}
	requestID= window.requestAnimationFrame(drawDot);
};
var stopIt= function() {
	console.log(requestID);
	// you only need one requestAnimationFrame()
	window.cancelAnimiationFrame(requestID);
};
dotButton.addEventListener("click",drawDot);
stopButton.addEventListener("click",stopIt);


// diagnostic print statements
console.log(c);
console.log(ctx);
