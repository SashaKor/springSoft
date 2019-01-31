//Aleksandra K
//SoftDev2 pd8
//K #00: I See a Red Door...
//2019-1-30

// testing clear
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(600,600);
ctx.stroke();

// Clear function
var cl = document.getElementById("clr");
cl. addEventListener('click', function(x){
  console.log(x);
  //fetch current state of canvas
  var slate= document.getElementById("slate");
  var slatetx= slate.getContext("2d");
  // clear it!
  slatetx.clearRect(0,0, slate.width, slate.height);
});
