// Aleksandra Koroza
// SoftDev pd8
//K #10: Ask Circles [Change || Die]
// 2019-03-14

// **issue remains with first circle clicked and producing a new circle

var pic = document.getElementById('vimage'); //getting image
var cl_button = document.getElementById('but_cl'); //tracking clear

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
  if(children.length != 0){
    //console.log(children.length);
    //console.log(children);
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
    circ.setAttribute("fill", "purple");
    circ.setAttribute("r", 20);
    //circ.addEventListener('click',changeColor(circ));
    pic.appendChild(circ);
    circ.addEventListener('click', function(e){
      changeColor(e,circ);})
    }
  }


//func clears the circles by manipulating innerHTML and resetting x/y vals.
//can also loop through children and remove
var clear = (e) => {
  pic.innerHTML='';
};

pic.addEventListener('click', drawCircle); //image responsive to clicks
cl_button.addEventListener('click', clear); //clear button responsive to clicks
