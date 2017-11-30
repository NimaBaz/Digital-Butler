import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-bubbleChart',
  templateUrl: './bubbleChart.component.html',
  styleUrls: ['./bubbleChart.component.css']
})

export class BubbleChartComponent implements OnInit {
	name:string;
	constructor() {
    	console.log('constructor D3chart..');
  	}

  	ngOnInit() {

        /* D3 bubble chart implementation */
     
        var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");  
        window.addEventListener('resize', svg.render);
        
        document.getElementById("defaultOpen").click();


        var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
        
        var radius = 30; 
        var clicked= false; 
        
        var nodes_data =  [
            //weak:redIcons
            //fair:amberIcons
            //good:greenIcons
            //offline:greyIcons
            {"name": "Router", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-router.png"},
            {"name": "Extender1", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-repeater.png"},
            {"name": "Extender2", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-repeater.png"},
            {"name": "Extender3", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-repeater.png"},
            {"name": "Extender4", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-repeater.png"},
            {"name": "Extender5", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-repeater.png"},
            {"name": "Extender6", "type": "router", "usage":31, "image": "../../../assets/greenIcons/device-repeater.png"},
            {"name": "Iphone1", "type": "weak", "usage":41, "image": "../../../assets/redIcons/device-android-phone.png"},
            {"name": "Camera1", "type": "strong", "usage":41, "image": "../../../assets/greenIcons/device-camera-security.png"},
            {"name": "TV", "type": "weak", "usage":55, "image": "../../../assets/redIcons/device-tv.png"},
            {"name": "Lock", "type": "offline", "usage":55, "image": "../../../assets/greyIcons/device-lock.png"},
            {"name": "TV2", "type": "fair", "usage":51, "image": "../../../assets/amberIcons/device-tv.png"},
            {"name": "Lock2", "type":"fair", "usage":31, "image": "../../../assets/amberIcons/device-lock.png"},
            {"name": "TV3", "type": "strong", "usage":31, "image": "../../../assets/greenIcons/device-tv.png"},
            {"name": "Lock3", "type":"strong", "usage":51, "image": "../../../assets/greenIcons/device-lock.png"},
            {"name": "Lock4", "type":"fair", "usage":31, "image": "../../../assets/amberIcons/device-lock.png"},
            {"name": "TV4", "type": "strong", "usage":31, "image": "../../../assets/greenIcons/device-tv.png"},
            {"name": "Lock5", "type":"offline", "usage":51, "image": "../../../assets/greyIcons/device-lock.png"},
            {"name": "TV5", "type": "strong", "usage":21, "image": "../../../assets/greenIcons/device-tv.png"},
            {"name": "Lock6", "type":"strong", "usage":21, "image": "../../../assets/greenIcons/device-lock.png"},
            {"name": "Iphone2", "type": "weak", "usage":41, "image": "../../../assets/redIcons/device-android-phone.png"},
            {"name": "Camera2", "type": "offline", "usage":41, "image": "../../../assets/greyIcons/device-camera-security.png"},
        
        
            ]
        
        //Sample links data 
        //type: A for Ally, E for Enemy
        var links_data = [
            {"source": "Router", "target": "Extender1", "type":"A", "dist":10 },
            {"source": "Router", "target": "Extender2", "type":"A", "dist":10},
            {"source": "Router", "target": "Extender3", "type":"A", "dist":10},
            {"source": "Router", "target": "Extender4", "type":"A", "dist":10},
            {"source": "Router", "target": "TV5", "type":"A", "dist":10},
            {"source": "Router", "target": "Lock6", "type":"A", "dist":10},
            {"source": "Extender1", "target": "Iphone1", "type":"A", "dis":10},
            {"source": "Extender1", "target": "Camera1", "type":"A", "dist":10},
            {"source": "Extender2", "target": "TV", "type":"A", "dist":10},
            {"source": "Extender2", "target": "Lock", "type":"A", "dist":10},
            {"source": "Extender3", "target": "TV2", "type":"E", "dist":10},
            {"source": "Extender3", "target": "Lock2", "type":"A", "dist":10},
            {"source": "Extender4", "target": "TV3", "type":"A", "dist":10},
            {"source": "Extender4", "target": "Lock3", "type":"E", "dist":10},
            {"source": "Extender1", "target": "Lock4", "type":"A", "dist":10},
            {"source": "Extender2", "target": "TV4", "type":"A", "dist":10},
            {"source": "Extender5", "target": "Lock5", "type":"E", "dist":10},
            {"source": "Extender5", "target": "Extender6", "type":"E", "dist":10},
            {"source": "Extender6", "target": "Extender6", "type":"E", "dist":10},
            {"source": "Extender1", "target": "Iphone2", "type":"A", "dis":10},
            {"source": "Extender1", "target": "Camera2", "type":"A", "dist":10},
            {"source": "Extender3", "target": "Extender5", "type":"E", "dist":10},
            ]
        
        //tooltip
        // Define the div for the tooltip
        var div = d3.select("body").append("div")  
            .attr("class", "tooltip")        
            .style("opacity", 0);
        
        
        
        
        
        
        
        //set up the simulation 
        var simulation = d3.forceSimulation()
                            //add nodes
                            .nodes(nodes_data);
                            
                                        
        var link_force =  d3.forceLink(links_data)
                        .distance(140)
                        .id(function(d) { return d.name; }); 
        
        
        var charge_force = d3.forceManyBody().distanceMax(140).distanceMin(80)
            .strength(-1500);
        
        var attractForce = d3.forceManyBody().strength(-500); 
        var repelForce = d3.forceManyBody().strength(500).distanceMin(520);           
            
        var center_force = d3.forceCenter(width / 2, height / 2.5);  
        
        
        
                                
        simulation
            .force("charge_force", charge_force)
            .force("center_force", center_force)
            .force("attract_force", attractForce)
            .force("repel_force", repelForce)
            .force("links",link_force)
            .force('collision', d3.forceCollide().radius(function(d) {
            return d.dist
        }))
        ;
    
            
        //add tick instructions: 
        simulation.on("tick", tickActions );
        
        
        //draw lines for the links 
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links_data)
            .enter().append("line")
            .attr("stroke-width", 1)
            .style("stroke", linkColour)
            .style ("stroke-dasharray",linkdash);      
        
        //draw circles for the nodes 
        var node = svg.append("g")
                .attr("class", "nodes") 
                .selectAll("circle")
                .data(nodes_data)
                .enter()
                .append("circle")
                .attr("r", nodeRadius)
                .on("click", function(d) {  
                clicked= !clicked;
                if (clicked){
                    div.transition()    
                        .duration(0)    
                        .style("opacity", 1);    
                    div.html(function(d){
                        var data = "<div class="+"table-responsive>";
                    
        
                    data +=   "<strong> Device Name </strong><hr>";
                    data += "<table>";
                    
                    data += "<td>Type: </td>";
                    data += "<td>Type</td>";
        
                    data += "</tr>";
                    
                    data += "<tr>";
                    data += "<td>Manufacturer: </td>";
                    data += "<td>Manufacturer</td>";
                    data += "</tr>";
                    data += "</table>";
                    data += "</div>";
                    
                    return data;
                })  
                        .style("left", (d3.event.pageX) + 30+ "px")    
                        .style("top", (d3.event.pageY - 28) + "px");  
                } 
                else{
                    div.transition()    
                        .duration(0)    
                        .style("opacity", 0)
                }
        
                    })          
                .attr("fill", function (d) {
                return "url(#"+d.name+")";
                })
        
        
        
                
                
        
        var defs= svg.append("defs");
        
        defs.append("pattern")
            .attr("id","image")
            .attr("height","100%")
            .attr("width","100%")
            .attr("x","0")
            .attr("y","0")
            .attr("patternContentUnits","objectBoundingBox")
            .append("image")
            .attr("height","1")
            .attr("width","1")
            .attr("x","0")
            .attr("y","0")
            .attr("xlink:href","./icons/device-router.png")
        
        
        defs.selectAll(".device-pattern")
        .data(nodes_data)
        .enter().append("pattern")
        .attr("id", function(d){
        //router
        //iphone
        return d.name;
        })
        .attr("height","100%")
            .attr("width","100%")
            .attr("x","0")
            .attr("y","0")
            .attr("patternContentUnits","objectBoundingBox")
            .append("image")
            .attr("height","1")
            .attr("width","1")
            .attr("x","0")
            .attr("y","0")
            .attr("xlink:href",function(d){
            if (d.type=="weak")
                return "./redIcons"+d.image;
                if (d.type=="fair")
                return "./amberIcons"+d.image;
                if (d.type=="strong")
                return "./greenIcons"+d.image;
                if (d.type=="offline")
                return "./greyIcons"+d.image;
                if (d.type=="router")
                return "./greenIcons"+d.image;
        })
        
        
        
            var usage = function(d){
        return  d.name;
        }  
        
            var patern = function(d){
        return  d.usage/10;
        }  
        
            var imageURL = function(d){
        return  d.image;
        } 
            
            
        var drag_handler = d3.drag()
            .on("start", drag_start)
            .on("drag", drag_drag)
            .on("end", drag_end);  
            
        drag_handler(node)
        
        /** Functions **/
        //Function to choose what color circle we have
        //Let's return blue for males and red for females
        function circleColour(d){
            if(d.type =="strong"){
                return "green";
            } 
            if(d.type =="weak"){
                return "red";
            }
            else {
                return "white";
            }
        }
        
        //Function to choose the line colour and thickness 
        //If the link type is "A" return green 
        //If the link type is "E" return red 
        function linkColour(d){
            if(d.type == "A"){
                return "grey";
            } 
            
            else {
                return "red";
            }
        }
        
        
        function linkdash(d){
            if(d.type == "A"){
                return "0,0";
            } 
            
            else {
                return "5,5";
            }
        }
        
        
        function nodeRadius(d){
        
        if(d.usage<=20){return 17;}
        if(d.usage>20 &&d.usage<=30 ){return 22;}
        if(d.usage>30 &&d.usage<=40 ){return 28;}
        if(d.usage>40 && d.usage<=50  ){return 33;}
        if(d.usage>50){return 37;}
        if(d.type== "router"){return 25;}
        
        }
        
        
        //drag handler
        //d is the node 
        function drag_start(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        
        function drag_drag(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
        }
        
        
        function drag_end(d) {
        if (!d3.event.active) simulation.alphaTarget(0);  
        d.fx = null;
        d.fy = null;
        }
            
        function tickActions() {
            //bounding box around the outside 
            node
                .attr("cx", function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
                .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });
                
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
            
        
        } 
    }


}