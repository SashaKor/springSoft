// Shafakor: Shafali Gupta, Aleksandra Koroza
// SoftDev2 pd8
// K #04: What is it saving the screen from?
// 2019-02-06

// get canvas element
var c = document.getElementById("playground");
// get buttons
var stopButton = document.getElementById("stop");
var dotButton = document.getElementById("circle");
var dvd_but = document.getElementById("dvd");
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
	window.cancelAnimationFrame( requestID );

	clear(ctx);
	 if ( growing ) {
 radius += 1;
	 }
	 else {
 radius -= 1;
	 }

	 if ( radius == (c.width / 2) )
 growing = false;
	 else if ( radius == 0 ) {
 growing = true;
	 }

	 //draw the dot
	 ctx.beginPath();
	 ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
	 ctx.stroke();
	 ctx.fill();

	 requestID = window.requestAnimationFrame( drawDot );
};

// Stops the animation from happening
var stopIt= function() {
	//console.log(requestID);
	window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click",drawDot);
stopButton.addEventListener("click",stopIt);

var dvdLogoSetup = function(){
  window.cancelAnimationFrame(requestID);
  var rectWidth = 100;
  var rectHeight = 50;
  var rectX = Math.floor(Math.random()*(c.width-rectWidth));
  var rectY = Math.floor(Math.random()*(c.height-rectHeight));
  var xVel = 1;
  var yVel = 1;
	//creating new Image object upon setup
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  var dvdLogo = function(){
    clear(ctx);
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
		//console.log(rectX )
    if (rectX>=c.width-rectWidth){ //if it's going to go out of canvas
			xVel=-1*xVel;
     }
		if (rectX<0){
			xVel=Math.abs(xVel); //makes sure that the xVel is positive
			}
     if (rectY>=c.height-rectHeight){ //if it's going to go out of canvas
      yVel= -1* yVel;
     }
		 if (rectY<0){
			 yVel = Math.abs(yVel); //makes sure that the yVel is positive
			 }
		rectX+=xVel
		rectY+=yVel
    requestID = window.requestAnimationFrame(dvdLogo);
  }
  dvdLogo();
}
dvdButton = document.getElementById("dvd");
dvdButton.addEventListener("click",dvdLogoSetup);
