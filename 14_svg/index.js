var selection = d3.select("body");
console.log(selection[0]);
console.log(selection[0][0]);

var tr= d3.selectAll("tr");
console.log(tr);

var td= tr.selectAll("td");
console.log(td);

var bod= d3.select("body").datum(42);
console.log(bod);

/* !!!
selection.data can take in either constant or func.selection.data defines data per-group rather than per-element:
data is expressed as an array of values for the group, or a function that returns such an array.

Your data function is passed the datum of the group’s parentNode (d) and the group’s index (i),
and returns whatever array of data you want to join to that group. Thus, data is typically expressed
as a function of parent data,facilitating the creation of hierarchical DOM elements from hierarchical data.
*/

var numbers = [4, 5, 18, 23, 42];
d3.selectAll("div").data(numbers);
