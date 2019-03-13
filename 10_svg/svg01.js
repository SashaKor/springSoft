var pic = document.getElementById('vimage'); //getting image
var cl_button = document.getElementById('but_cl'); //tracking clear

//var prev_x = NaN; //not applicable yet
//var prev_y = NaN; // note that using null sets the values to 0,0; which is bad (line stretches to upper left)

/*
//func connects previous and current points
var drawLine = (x,y) => {
  if (isNaN(prev_x) && isNaN(prev_y)){
    console.log('empty'); //means that image is reset, no need to draw
    return;
  }
  var children = pic.childNodes;
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); //creates element with specified namespace URI
  line.setAttribute('x1', prev_x); //careful abt capitalization!
  line.setAttribute('x2', x);
  line.setAttribute('y1', prev_y); // new attributes are added if did not exist
  line.setAttribute('y2', y);
  line.setAttribute('stroke', 'black');
  pic.appendChild(line); //pic now has line with specified attributes
}
*/
//func sets circle attributes amd draws if childNodes available
var drawCircle = (i) => {
  var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); //creating circles
  circ.setAttribute("cx", i.offsetX); //offset between coor and padding edge
  circ.setAttribute("cy", i.offsetY);
  circ.setAttribute("fill", "purple");
  //circ.setAttribute("stroke", "black"); //lines still overlap
  circ.setAttribute("r", 20);

  /*
  for i in pic.childNodes:
      if has same cx and cy
      setattribute to gree
  */
  //if (pic.childNodes.length != 0){ //means that not reset, available to draw
    //drawLine(i.offsetX, i.offsetY);
  //}

  pic.appendChild(circ);
  //prev_x = i.offsetX; //your curr now becomes your prev
  //prev_y = i.offsetY;
};

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
