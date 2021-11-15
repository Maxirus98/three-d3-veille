import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./LineChart.css";
const LineChart = ({ totalScore }) => {
  const chartRef = useRef();

  //Getting the data
  useEffect(() => {
    // Elements determined by the size of the div
    const margin = { top: 20, right: 30, bottom: 30, left: 30 };
    const width =
      parseInt(d3.select("#lineChart").style("width")) -
      margin.left -
      margin.right;
    const height =
      parseInt(d3.select("#lineChart").style("height")) -
      margin.top -
      margin.bottom;

    // Set up chart
    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("background-color", "red")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // x axis scale
    const x = d3
      .scaleLinear()
      .domain(
        d3.extent([0, 1, 2, , 3, 6], function (d) {
          return d;
        })
      )
      .range([0, width]);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // y axis scale
    const y = d3.scaleLinear().domain([0, 5]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(y));

    // Draw Line
    svg
      .append("path")
      .datum([0, 1, 2, , 3, 6])
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d);
          })
          .y(function (d) {
            return y(d);
          })
      );

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 5 - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("fill", "white")
      .text("Nombre de points par partie");
  });

  return (
    <div id="lineChart">
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default LineChart;
