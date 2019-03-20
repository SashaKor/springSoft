// 2nd TUTORIAL CODE

var width = 420,
barHeight = 20;

var x = d3.scale.linear()
.range([0, width]);

var chart = d3.select(".chart")
.attr("width", width);

d3.tsv("data.tsv", type, function(error, data) {
x.domain([0, d3.max(data, function(d) { return d.value; })]);

chart.attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
  .data(data)
.enter().append("g")
  .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
  .attr("width", function(d) { return x(d.value); })
  .attr("height", barHeight - 1);

bar.append("text")
  .attr("x", function(d) { return x(d.value) - 3; })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(function(d) { return d.value; });
});

function type(d) {
d.value = +d.value; // coerce to number
return d;
}


/* PART 1 TUTORIAL
var data = [4, 8, 15, 16, 23, 42];
var body = d3.select("body");
var div = body.append("div");
div.html("Hello, world!");

d3.select("body")
    .style("color", "black")
    .style("background-color", "yellow");


d3.selectAll("section")
    .attr("class", "special")
  .append("div")
    .html("Hello, world!");

var section = d3.selectAll("section");

section.append("div")
    .html("First!");

section.append("div")
    .html("Second.");
*/
