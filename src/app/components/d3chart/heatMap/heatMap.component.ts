import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-heatMap',
  templateUrl: './heatMap.component.html',
  styleUrls: ['./heatMap.component.css']
})

export class HeatMapComponent implements OnInit {
	name:string;
	constructor() {
    	console.log('constructor heatMap..');
  	}

  	ngOnInit() {

        /*D3 heatmap implementation */
        // console.log(d3.selectAll("#chart"));
        
        var margin = { top: 50, right: 0, bottom: 100, left: 30 },
            width = 960 - margin.left - margin.right,
            height = 430 - margin.top - margin.bottom,
            gridSize = Math.floor(width / 24),
            legendElementWidth = gridSize*2,
            buckets = 9,
            colors = ["#ffffd9","red"], // alternatively colorbrewer.YlGnBu[9]
            days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"],
            datasets = ["http://localhost:8000/binary1.tsv", "http://localhost:8000/binary2.tsv"];
        var svg = d3.selectAll("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var dayLabels = svg.selectAll(".dayLabel")
            .data(days)
            .enter().append("text")
            .text(function (d) { return d; })
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize; })
            .style("text-anchor", "end")
            .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
            .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });
        var timeLabels = svg.selectAll(".timeLabel")
            .data(times)
            .enter().append("text")
            .text(function(d) { return d; })
            .attr("x", function(d, i) { return i * gridSize; })
            .attr("y", 0)
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + gridSize / 2 + ", -6)")
            .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });
        var heatmapChart = function(tsvFile) {
            d3.tsv(tsvFile, function(d) {
                return {
                    day: +d.day,
                    hour: +d.hour,
                    value: +d.value
                };
            },
                function(error, data) {
                    var colorScale = d3.scaleQuantile()
                        .domain([0, buckets - 1, d3.max(data, function (d) { return d.value; })])
                        .range(colors);
                    var cards = svg.selectAll(".hour")
                        .data(data, function(d) {return d.day+':'+d.hour;});
                    cards.append("title");
                    cards.enter().append("rect")
                        .attr("x", function(d) { return (d.hour - 1) * gridSize; })
                        .attr("y", function(d) { return (d.day - 1) * gridSize; })
                        .attr("rx", 4)
                        .attr("ry", 4)
                        .attr("class", "hour bordered")
                        .attr("width", gridSize)
                        .attr("height", gridSize)
                        .style("fill", colors[0]);
                    cards.transition().duration(1000)
                        .style("fill", function(d) { return colorScale(d.value); });
                    cards.select("title").text(function(d) { return d.value; });
            
                    cards.exit().remove();
                    
                });  
        };
        // don't delete this, this is not a typo
        heatmapChart(datasets[0]);
        heatmapChart(datasets[0]); 
    }
}