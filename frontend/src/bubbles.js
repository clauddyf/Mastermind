import * as d3 from 'd3';

const Bubbles = () => {
    var width = 400;
         
         var height = 400;
         
         var data = [10, 20, 30];
         
         var colors = ['green', 'purple', 'yellow'];
         
         var svg = d3
            .select("root")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
         
         var g = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(0,0)";
            })
         
         g.append("circle").attr("cx", function(d, i) {
            return i*75 + 50;
         })
         
         .attr("cy", function(d, i) {
            return 75;
         })
  
         .attr("r", function(d) {
            return d*1.5;
         })
         
         .attr("fill", function(d, i){
            return colors[i];
         })
         
         g.append("text").attr("x", function(d, i) {
            return i * 75 + 25;
         })
         
         .attr("y", 80)
         .attr("stroke", "teal")
         .attr("font-size", "10px")
         .attr("font-family", "sans-serif").text(function(d) {
            return d;
         });
         return svg
}

export default Bubbles
 