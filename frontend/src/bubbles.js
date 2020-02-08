import * as d3 from 'd3';
debugger
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
    // d3.json(guesses).then(function (el) {
    //     debugger
    //     const height = 650;
    //     const width = 1300;
    //     var svg = d3.select('#root')
    //         .append('svg')
    //         .attr('height', height)
    //         .attr('width', width)
    //     const velocityDecay = 0.15;
    //     const forceStrength = 0.03;
    
    //     let nodes;
    //     let bubbles;
    //     let radiusScale;
    //     let colorScale;
    //     let heightScale;
    
    //     radiusScale = d3.scaleLinear()
    //         .domain([0, 500])
    //         .range([5, 30]);
    
    //     colorScale = d3.scaleSequential()
    //         .domain([0, 100])
    //         .interpolator(d3.interpolateRainbow);
    
    //     heightScale = d3.scaleLinear()
    //         .domain([0, 100])
    //         .range([0, height]);
        
    //     nodes = el.map(d => {
    //         debugger
    //         return {
    //             name: d.name,
    //             artist: d.artist.name,
    //             rank: parseInt(d["@attr"].rank),
    //             radius: radiusScale(d.listeners / 400),
    //             image: Object.values(d.image[0])[0],
    //             x: Math.random() * width,
    //             y: heightScale((d.listeners / 400))/*  Math.random() * height */
    //         }
    //     })
    
    //     // debugger
    //     // nodes = nasa.photos.map(d => {
    //     //     // debugger
    //     //     return {
    //     //         name: d.camera.name,
    //     //         roverName: d.rover.name,
    //     //         rank: d.id,
    //     //         radius: d.id/2000,
    //     //         // rank: Object.values(d).id,
    //     //         image: d.img_src
    //     //     }
    //     // })
    
    
    //     debugger
    //     var defs = svg.append('defs');
    
    //     defs.selectAll('.poster-art')
    //         .data(nodes)
    //         .enter()
    //         .append('pattern')
    //         .attr('class', 'poster-art')
    //         .attr('id', d => d.rank)
    //         .attr('height', '100%')
    //         .attr('width', '100%')
    //         .attr("patternContentUnits", "objectBoundingBox")
    //         .append('image')
    //         .attr('height', 1.5)
    //         .attr('width', 1)
    //         .attr("preserveAspectRatio", "none")
    //         .attr('xlink:href', d => d.image)
    
    //     // debugger
    //     bubbles = d3.select('#root svg')
    //         .selectAll('circle')
    //         .data(nodes)
    //         .enter()
    //         .append('circle')
    //         .attr('r', d => { return d.radius })
    //         .attr('fill', d => `url(#${d.rank})`)
    //         .attr('stroke', d => { return d3.rgb('blue').darker() })
    //         .call(d3.drag()
    //             .on('start', dragStarted)
    //             .on('drag', dragged)
    //             .on('end', dragEnded)
    //         )
    
    //     // debugger
    //     let forceSimulation;
    
    //     forceSimulation = d3.forceSimulation()
    //         .nodes(nodes)
    //         .velocityDecay(velocityDecay)
    //         .on('tick', ticked)
    //         .force('x', d3.forceX().strength(forceStrength).x(width / 2))
    //         .force('y', d3.forceY().strength(forceStrength).y(height / 2))
    //         .force("charge", d3.forceManyBody().strength(charge))
    
    
    //     function dragStarted(d) {
    //         console.log('start');
    //         forceSimulation.alphaTarget(0.3).restart()
    //     }
    //     function dragged(d) {
    //         console.log('drag');
    //         /* bubbles.attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y); */
    //         d.fx = d3.event.x
    //         d.fy = d3.event.y
    //     }
    
    //     function dragEnded(d) {
    //         console.log('end');
    //         delete d.fx;
    //         delete d.fy;
    //         forceSimulation.alphaTarget(0);
    //     }
    //     // debugger
    //     function ticked() {
    //         bubbles
    //             .attr("cx", function (d) {
    //                 return d.x;
    //             })
    //             .attr("cy", function (d) {
    //                 return d.y;
    //             });
    //     }
    
    //     function radius(d) {
    //         return d.radius + 1
    //     }
    
    //     function charge(d) {
    //         return -Math.pow(d.radius, 2) * forceStrength;
    //     }
    
    
    //     function generateRandomData() {
    //         const data = [];
    //         for (let i = 0; i < 200; i++) {
    //             data.push(
    //                 { randomNumber: Math.round(Math.random() * 100) }
    //             )
    //         }
    //         return data;
    //     }
    
    // })