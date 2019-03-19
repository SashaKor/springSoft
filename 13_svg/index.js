var data = [4, 8, 15, 16, 23, 42];
var body = d3.select("body");
var div = body.append("div");
div.html("Hello, world!");

d3.select("body")
    .style("color", "black")
    .style("background-color", "yellow");

/*
d3.selectAll("section")
    .attr("class", "special")
  .append("div")
    .html("Hello, world!");
*/
var section = d3.selectAll("section");

section.append("div")
    .html("First!");

section.append("div")
    .html("Second.");
