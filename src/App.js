import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";
import Scene1 from "./components/Scene1";
import LineChart from "./components/charts/LineChart";
import StripChart from "./components/charts/StripChart";

export default function App() {
  const [lineChartData, setLineChartData] = useState([
    {
      x: 0,
      y: 0,
    },
  ]);

  const handleDataChange = useCallback((xData, yData) => {
    setLineChartData([...lineChartData, { x: xData, y: yData }]);
  }, []);

  return (
    <>
      <Scene1 handleDataChange={handleDataChange} />
      <aside style={{ position: "absolute", top: 0, right: 0 }}>
        <LineChart lineChartData={lineChartData} />
      </aside>
      <aside style={{ position: "absolute", top: 220, right: 0 }}>
        <StripChart lineChartData={lineChartData} />
      </aside>
    </>
  );
}
