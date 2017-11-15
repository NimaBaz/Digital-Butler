import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  width:number;
  id:number;
  minimId:number;
  constructor() {
    console.log('constructor ran..');
  }

    ngOnInit() {
        //this.name = 'Hello, World!';
        //$("h1").html("hi");
        $("#E").draggable();
        
        this.width = $("#A1").width();
        console.log(this.width);
        $("span").width = this.width;

        var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");  
        
        document.getElementById("defaultOpen").click();


        var nodes_data =  [
            {"name": "Router", "type": "router", "usage":20},
            {"name": "Extender1", "type": "router", "usage":20},
            {"name": "Extender2", "type": "router", "usage":20},
            {"name": "Extender3", "type": "router", "usage":20},
            {"name": "Extender4", "type": "router", "usage":20},
            {"name": "Iphone1", "type": "weak", "usage":40},
            {"name": "Camera1", "type": "strong", "usage":40},
            {"name": "TV", "type": "weak", "usage":45},
            {"name": "Lock", "type": "weak", "usage":45},
            {"name": "TV2", "type": "strong", "usage":50},
            {"name": "Lock2", "type":"average", "usage":30},
            {"name": "TV3", "type": "average", "usage":32},
            {"name": "Lock3", "type":"strong", "usage":52}
        ]

        //Sample links data 
        //type: A for Ally, E for Enemy
        var links_data = [
            {"source": "Router", "target": "Extender1", "type":"A", "dist":20 },
            {"source": "Router", "target": "Extender2", "type":"A", "dist":20},
            {"source": "Router", "target": "Extender3", "type":"A", "dist":20},
            {"source": "Router", "target": "Extender4", "type":"A", "dist":20},
            {"source": "Extender1", "target": "Iphone1", "type":"A", "dist":20},
            {"source": "Extender1", "target": "Camera1", "type":"A", "dist":20},
            {"source": "Extender2", "target": "TV", "type":"A", "dist":20},
            {"source": "Extender2", "target": "Lock", "type":"A", "dist":20},
            {"source": "Extender3", "target": "TV2", "type":"A", "dist":20},
            {"source": "Extender3", "target": "Lock2", "type":"A", "dist":20},
            {"source": "Extender4", "target": "TV3", "type":"A", "dist":20},
            {"source": "Extender4", "target": "Lock3", "type":"A", "dist":20}
        ]

        console.log(links_data[1].dist);
        //set up the simulation 
        var simulation = d3.forceSimulation()
            //add nodes
            .nodes(nodes_data);
        
        function dist(d){
            return d.dist;
        }
        
    
        var radius= 40;
                                
        var link_force =  d3.forceLink(links_data).distance(75)
            .id(function(d) { return d.name;}); 
                
        var charge_force = d3.forceManyBody().distanceMax(300).distanceMin(1300)
            .strength(-1500);
    
        var attractForce = d3.forceManyBody().strength(-500); 
        var repelForce = d3.forceManyBody().strength(1000).distanceMin(320);
        
        var center_force = d3.forceCenter(width / 2, height / 2);  
    
    

                            
        simulation
            .force("charge_force", charge_force)
            .force("center_force", center_force)
            .force("links",link_force)
            .force("attractForce",attractForce)
            .force('collision', d3.forceCollide().radius(function(d) {
            return d.dist
            }))
        

            
        //add tick instructions: 
        simulation.on("tick", tickActions );

        //draw lines for the links 
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links_data)
            .enter().append("line")
            .attr("stroke-width", 4)
            .style("stroke", linkColour);        

        //draw circles for the nodes 
        var node = svg.append("g")
            .attr("class", "nodes") 
            .selectAll("circle")
            .data(nodes_data)
            .enter()
            .append("circle")
            .attr("r", circleRadius)
            .attr("fill", circleColour)
            .attr("background-image", "find_code.png");                
            
        var drag_handler = d3.drag()
            .on("start", drag_start)
            .on("drag", drag_drag)
            .on("end", drag_end);   
        
        //drag_handler(node)

        /** Functions **/
        //Function to choose what color circle we have
        //Let's return blue for males and red for females
        function circleColour(d){
            if(d.type =="strong"){
                return "green";
            } 
            if(d.type =="average"){
                return "orange";
            }
            if(d.type =="weak"){
                return "red";
            }
            else {
                return "white";
            }
        }
            
        function circleRadius(d){
            return d.usage;   
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

    openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    minimize(id_) { 
            $("#" + id_).slideToggle();
    }

    remove(event) { 
            this.id = event.target.parentElement.parentElement.getAttribute("id");
            $("#"+ this.id).hide();
    }

    minimize3(id_) {
            var div_to_toggle = '#' + id_ ;
            $(div_to_toggle).slideToggle();
    }

    changeDivContent(){
        document.getElementById("B2").innerHTML = "stuff";
    }

    /*stuff for pop ups*/
    myFunction(some_eventID) {
        var popup = document.getElementById(some_eventID);
        popup.classList.toggle("show");
    
    }
    
    // Get the modal
    myFunction2(some_eventID) {
    var modal = document.getElementById(some_eventID);
            modal.style.display = "block";
    }
    closeFunct(some_eventID){
      var modal = document.getElementById(some_eventID);
      modal.style.display = "none";
    }

}
