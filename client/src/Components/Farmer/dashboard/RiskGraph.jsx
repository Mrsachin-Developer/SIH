import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "../../../dataset/riskscore";

const chartSetting = {
  yAxis: [
    {
      label: "Risk Score",
      width: 60,
      labelStyle: { fill: "#fff" }, // y-axis label color
      tickLabelStyle: { fill: "#fff" }, // y-axis tick text color
    },
  ],
  series: [
    {
      dataKey: "RiskScore",
      valueFormatter, // series label color
    },
  ],
  height: 300,
  margin: { left: 0 },
};

export default function RiskScoreChart() {
  return (
    <div style={{ width: "100%" }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            dataKey: "Days",
            tickPlacement: "middle",
            tickLabelPlacement: "middle",
            tickLabelStyle: { fill: "#fff" }, // x-axis tick text color
          },
        ]}
        sx={{
          "& .MuiChartsLegend-label": { fill: "#fff" }, // legend text color
          "& .MuiChartsAxis-label": { fill: "#fff" }, // axis label color
          "& .MuiChartsAxis-tickLabel": { fill: "#fff" }, // tick labels
        }}
        {...chartSetting}
      />
    </div>
  );
}
