import React, { useCallback, useState } from "react";
import LineChart from "./components/charts/LineChart";
import Scene1 from "./components/Scene1";
import "./styles.css";

export default function App() {
  const [lineChartData, setLineChartData] = useState([
    {
      x: 0,
      y: 0,
    },
  ]);

  const handleDataChange = useCallback((xData, yData) => {
    setLineChartData([...lineChartData, { x: xData, y: yData }]);
  }, [lineChartData]);

  return (
    <>
      <Scene1 handleDataChange={handleDataChange} />
      <aside style={{ height: "100%" }}>
        <LineChart lineChartData={lineChartData} />
      </aside>
    </>
  );
}
