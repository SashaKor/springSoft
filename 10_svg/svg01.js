var pic = document.getElementById('vimage'); //getting image
var cl_button = document.getElementById('but_cl'); //tracking clear

//func changes circle color/ facilitates random moving
var changeColor= (e,c) =>{
  if (c.getAttribute('fill')== 'purple'){
    c.setAttribute('fill','blue');
  }
}
//func checks whether there are circles present in clicking location
var circlePresent= (c) =>{
  var children= pic.childNodes;
  var i;
  if(children.length != 0){
    console.log(children.length);
    console.log(children);
    for (i=0; i< children.length; i++){
      var elem= children[i];
      console.log(elem);
      if((elem.getAttribute('cx') == c.getAttribute('cx')) && (elem.getAttribute('cy')== c.getAttribute('cy'))){
        return true;
      }
    }
    return false;
  }
  return false;
}
//func sets circle attributes amd draws if childNodes available
var drawCircle = (i) => {
  var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); //creating circles
  circ.setAttribute("cx", i.offsetX); //offset between coor and padding edge
  circ.setAttribute("cy", i.offsetY);

  if (! circlePresent(circ)){
    circ.setAttribute("fill", "purple");
    circ.setAttribute("r", 20);
    //circ.addEventListener('click',changeColor(circ));
    pic.appendChild(circ);
    circ.addEventListener('click', function(e){
      changeColor(e,circ);})
    }
  }


//func clears the circles by manipulating innerHTML and resetting x/y vals.
//clearRect will not work since not canvas
var clear = (e) => {
  pic.innerHTML='';
  prev_x = NaN; //back to initial position
  prev_y = NaN;
};
//you can kill off children!!

pic.addEventListener('click', drawCircle); //image responsive to clicks
cl_button.addEventListener('click', clear); //clear button responsive to clicks


/*
var pic= document.createElementNS(
  "http://w3.org/200/svg","circle");
  c.setAttribute("cx",0);
  c.setAttribute("cy",0);
  c.setAttribute("r",100);
  c.setAttribute("fill","red");
  c.setAttribute("stroke","black");

  pic.appendChild(c);
)
*/
