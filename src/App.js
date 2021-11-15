import React, { useState } from "react";
import "./styles.css";
import Scene1 from "./components/Scene1";
import LineChart from "./components/charts/LineChart";

export default function App() {
  return (
    <>
      <Scene1 />
      <aside style={{ position: "absolute", top: 0, right: 0 }}>
        <LineChart />
      </aside>
    </>
  );
}
