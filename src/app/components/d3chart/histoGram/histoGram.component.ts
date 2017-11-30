import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-histoGram',
  templateUrl: './histoGram.component.html',
  styleUrls: ['./histoGram.component.css']
})

export class HistoGramComponent implements OnInit {
	name:string;
	constructor() {
    	console.log('constructor histoGram..');
  	}

  	ngOnInit() {

        var parseDate = d3.timeParse("%m/%d/%Y %H:%M:%S %p"),
            formatCount = d3.format(",.0f");
        var margin = {top: 10, right: 30, bottom: 30, left: 30},
            width = 1400 - margin.left - margin.right,
            height = 570 - margin.top - margin.bottom;
        var x = d3.scaleTime()
            .domain([new Date(2015, 0, 1), new Date(2015, 1, 1)])
            .rangeRound([0, width]);
        var y = d3.scaleLinear()
            .range([height, 0]);
        var histogram = d3.histogram()
            .value(function(d) { return d.date; })
            .domain(x.domain())
            .thresholds(x.ticks(d3.timeWeek));
        var svg = d3.select("#histogram").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        // var svg = d3.select("svg"),
        // width = +svg.attr("width"),
        // height = +svg.attr("height");
            svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        d3.csv("data.csv", type, function(error, data) {
            if (error) throw error;
            var bins = histogram(data);
            y.domain([0, d3.max(bins, function(d) { return d.length; })]);
        var bar = svg.selectAll(".bar")
            .data(bins)
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
        bar.append("rect")
            .attr("x", 1)
            .attr("width", 8)
            .attr("class", 8)
            .attr("height", function(d) { return height - y(d.length); });
        bar.append("text")
            .attr("dy", ".75em")
            .attr("y", 6)
            .attr("x", function(d) { return (x(d.x1) - x(d.x0)) / 2; })
            .attr("text-anchor", "middle")
            .text(function(d) { return formatCount(d.length); });
        });
        function type(d) {
          d.date = parseDate(d.date);
          return d;
        }
    }
}