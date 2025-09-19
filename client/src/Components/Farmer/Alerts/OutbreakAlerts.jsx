// src/components/OutbreakAlerts.jsx
import React from "react";

const OutbreakAlerts = () => {
  const outbreakAlerts = [
    {
      title: "Highly Pathogenic Avian Influenza (HPAI) Outbreak",
      source: "NADRES",
      action: "Report sick animals — Isolate immediately.",
    },
    {
      title: "Foot and Mouth Disease (FMD) Outbreak",
      source: "NADRES",
      action: "Report sick animals — Isolate immediately.",
    },
  ];

  return (
    <div className="mb-5">
      <h3 className="font-semibold text-gray-700 mb-3">Outbreak Alerts</h3>
      {outbreakAlerts.map((alert, idx) => (
        <div
          key={idx}
          className="flex items-start gap-3 p-4 mb-3 rounded-md border bg-yellow-50 border-yellow-200"
        >
          <span className="text-yellow-500 text-xl">⚠️</span>
          <div>
            <h2 className="font-semibold text-yellow-800">{alert.title}</h2>
            <p className="text-gray-600 text-sm">Source: {alert.source}</p>
            <p className="text-gray-700 text-sm">Action: {alert.action}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutbreakAlerts;
