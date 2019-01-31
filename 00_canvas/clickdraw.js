//Aleksandra K
//SoftDev2 pd8
//K #00: I See a Red Door...
//2019-1-30

// Clear function
var cl = document.getElementById("clr");
cl. addEventListener('click', function(x){
  console.log(x);
  //fetch current state of canvas
  var canvas = document.getElementById("slate");
  var context = canvas.getContext("2d");
  // clear it!
  context.clearRect(0,0, canvas.width, canvas.height);
});

// Toggle function that changes mode and updates button text
var tog = document.getElementById("toggle");
tog.addEventListener('click', function(x){
  console.log(x);
  if (tog.innerHTML.valueOf() == "Rectangle"){ //don't forget whitespace is a thing!
    tog.innerHTML= "Circle";}
  else {
    tog.innerHTML= "Rectangle";
  }
});
var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");

//function finds mouseX and mouseY coors
var draw = function(){
    var xPos;
    var yPos;
    canvas.addEventListener('click', function(e){
      if (tog.innerHTML.valueOf() == "Rectangle"){
        context.fillStyle= "#ff0000";
        context.fillRect(e.clientX-50,e.clientY-200,50,60); // jank
    }
    else{// draws ellipse instead
      context.beginPath();
      context.ellipse(e.clientX-50,e.clientY-200,50,60, Math.PI/4, 0, 2 * Math.PI); // remaining issue, not centered
      context.stroke();
      context.fillStyle= "#ff0000";
      context.fill();
    }
  });
};


// Drawing code called
canvas.addEventListener('mouseover', draw());
