import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./LineChart.css";
const StripChart = ({ lineChartData }) => {
  const chartRef = useRef();
  let y;
  let x;
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
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    };
    const svg = getChartSetup();

    const getXData = () => {
      return d3
        .scaleBand()
        .domain(
          d3.extent([0, 10], function (d) {
            return d;
          })
        )
        .range([0, width]);
    };
    x = getXData();
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("color", "white")
      .call(d3.axisBottom(x));

    const getYData = () => {
      return d3
        .scaleLinear()
        .domain(
          d3.extent([0, 100], function (d) {
            return d;
          })
        )
        .range([height, 0]);
    };
    y = getYData();

    svg.append("g").attr("color", "white").call(d3.axisLeft(y));

    // Draw Rect
    svg
      .append("rect")
      .attr("fill", "white")
      .attr("width", 10)
      .attr("height", 10);
  });

  return (
    <div id="lineChart">
      <svg id="svg" ref={chartRef}></svg>
    </div>
  );
};

export default StripChart;
