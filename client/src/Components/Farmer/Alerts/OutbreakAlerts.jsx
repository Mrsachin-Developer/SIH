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
    <div className="mb-5 px-4 sm:px-6 lg:px-8">
      <h3 className="font-semibold text-gray-700 text-lg sm:text-xl mb-3">
        Outbreak Alerts
      </h3>
      {outbreakAlerts.map((alert, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 mb-3 rounded-md border bg-yellow-50 border-yellow-200"
        >
          <span className="text-yellow-500 text-2xl sm:text-3xl flex-shrink-0">
            ⚠️
          </span>
          <div className="flex-1">
            <h2 className="font-semibold text-yellow-800 text-base sm:text-lg">
              {alert.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Source: {alert.source}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Action: {alert.action}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutbreakAlerts;
