import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);
  useEffect(() => {
    console.log("historicalData:", historicalData);
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    } //This converts the date to xx/xx/xxxx
  }, [historicalData]);
  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default LineChart;
