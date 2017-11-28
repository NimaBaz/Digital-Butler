import { Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log('constructor login ran...');
  }

  ngOnInit() {

    /* D3 bubble chart implementation for login page*/
    /* This is just for fun and may be implemented depending on how successful it is*/

    var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");  
    window.addEventListener('resize', svg.render);
    
    /*
    document.getElementById("defaultOpen").click();
    */

    var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
    
    var radius = 30; 
    var clicked= false; 
    
    var nodes_data =  [
        
        {"name": "Phone", "type": "weak", "usage":70, "image": "../../../assets/greyIcons/device-android-phone.png"},
        {"name": "TV", "type": "weak", "usage":70, "image": "../../../assets/greyIcons/device-windows-computer.png"},
        {"name": "Alexa", "type": "strong", "usage":70, "image": "../../../assets/greyIcons/device-alexa.png"},
        {"name": "Tivo", "type":"strong", "usage":70, "image": "../../../assets/greyIcons/device-tivo.png"},
        {"name": "Speaker", "type": "weak", "usage":70, "image": "../../../assets/greyIcons/device-speaker.png"},
        {"name": "Camera", "type": "offline", "usage":70, "image": "../../../assets/greyIcons/device-camera-security.png"},
    
        ]
    
    //Sample links data 
    //type: A for Ally, E for Enemy

    var links_data = [
        {"source": "Phone", "target": "Phone", "type":"A", "dist":50 },
        {"source": "TV", "target": "TV", "type":"A", "dist":50},
        {"source": "Alexa", "target": "Alexa", "type":"A", "dist":50},
        {"source": "Tivo", "target": "Tivo", "type":"A", "dist":50},
        {"source": "Speaker", "target": "Speaker", "type":"A", "dist":50},
        {"source": "Camera", "target": "Camera", "type":"A", "dist":50}
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
