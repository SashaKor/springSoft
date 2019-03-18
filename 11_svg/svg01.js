// Aleksandra Koroza
// SoftDev pd8
//K #11: Ask Circles [Change || Die] …While On The Go
// 2019-03-18

// **issue remains with new circles produced **

var pic = document.getElementById('vimage'); //getting image
var cl_button = document.getElementById('but_cl'); //tracking clear
var mv_button = document.getElementById('but_move'); //tracking movement
var moving = false; //setting up move button
var requestID;

//func changes circle color/ facilitates random moving
var changeColor= (e,c) =>{
  if (c.getAttribute('fill')== 'purple'){
    c.setAttribute('fill','blue');
  }else{
    c.setAttribute("fill", "purple");
    c.setAttribute("cx", Math.floor(Math.random() * 400) + 20);
    c.setAttribute("cy", Math.floor(Math.random() * 400) + 20);
    e.stopPropagation();
  }
}
//func checks whether there are circles present in clicking location
//for some reason works after the first one
var circlePresent= (x,y) =>{
  var children= pic.children;
  var i;
  if(children.length == 0){
    return;}else{
    for (i=0; i< children.length; i++){
      var child = children.item(i);
      let cx = child.getAttribute("cx");
      let cy = child.getAttribute("cy");
      //console.log(elem);
      if (Math.pow(cx - x, 2) + Math.pow(cy - y, 2) <= 400){
        return true;
      }
    }
    return false;
}}

//func sets circle attributes amd draws if no circles already present at location
var drawCircle = (i) => {
  i.stopPropagation();
  i.preventDefault();
  var x= i.offsetX;
  var y= i.offsetY;

  if (! circlePresent(x,y)){
    console.log(circlePresent(x,y));
    var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); //creating circles
    circ.setAttribute("cx", i.offsetX); //offset between coor and padding edge
    circ.setAttribute("cy", i.offsetY);
    circ.setAttribute("xVel",1);
    circ.setAttribute("yVel",1);
    circ.setAttribute("fill", "purple");
    circ.setAttribute("r", 20);
    //circ.addEventListener('click',changeColor(circ));
    pic.appendChild(circ);
    circ.addEventListener('click', function(e){
      changeColor(e,circ);})
    }
  }

  var move = () => {
    var children = pic.children;
    if (children.length == 0){
      return;
    }
    window.cancelAnimationFrame( requestID );
    var height = parseInt(pic.getAttribute('height')) - 10; //taking into acct. padding
    var width = parseInt(pic.getAttribute('width')) - 10;
    moving = true;

    var i;
    for (i=0; i< children.length; i++){
        var child = children.item(i);
        var x = parseInt(child.getAttribute('cx'));
        var y = parseInt(child.getAttribute('cy'));
        var xVel = parseInt(child.getAttribute('xVel'));
        var yVel = parseInt(child.getAttribute('yVel'));
        var x_switch = false; //bool used later to switch
        var y_switch = false;
        if (x >= width || x <= 10){
            xVel *= -1;
            x_switch = true;
          };
        if (y >= height || y <= 10){
            yVel *= -1;
            y_switch = true;
        };
        child.setAttribute('cx', x + xVel);
        child.setAttribute('cy', y + yVel);

        // actually setting attribute if need be
        if (x_switch){
          child.setAttribute('xVel', xVel);
        };
        if (y_switch){
          child.setAttribute('yVel', yVel);
        };
    };
    requestID = window.requestAnimationFrame( move );
  };
//func clears the circles by manipulating innerHTML and resetting x/y vals.
//can also loop through children and remove
var clear = (e) => {
  pic.innerHTML='';
  window.cancelAnimationFrame(requestID);
  moving= false;
};



pic.addEventListener('click', drawCircle); //image responsive to clicks
cl_button.addEventListener('click', clear); //clear button responsive to clicks
mv_button.addEventListener('click', move); //clear button responsive to clicks
