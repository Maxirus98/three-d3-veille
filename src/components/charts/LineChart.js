import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./LineChart.css";
const LineChart = ({ lineChartData }) => {
  const chartRef = useRef();

  useEffect(() => {
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
    const getChartSetup = () => {
      return d3
        .select(chartRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("background-color", "red")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    };
    const svg = getChartSetup();

    const getXData = () => {
      return d3
        .scaleLinear()
        .domain(
          d3.extent([0, 100], function (d) {
            return d;
          })
        )
        .nice()
        .range([0, width]);
    };
    const x = getXData();
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    const getYData = () => {
      return d3
        .scaleLinear()
        .domain(
          d3.extent([0, 10], function (d) {
            return d;
          })
        )
        .nice()
        .range([height, 0]);
    };
    const y = getYData();

    svg.append("g").call(d3.axisLeft(y));

    // Draw Line
    svg
      .append("path")
      .transition()
      .duration(2000)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.x);
          })
          .y(function (d) {
            return y(d.y);
          })(lineChartData)
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
      <svg id="svg" ref={chartRef}>
        <p></p>
      </svg>
    </div>
  );
};

export default LineChart;
