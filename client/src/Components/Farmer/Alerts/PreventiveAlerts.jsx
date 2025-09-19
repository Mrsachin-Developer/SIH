// src/components/PreventiveAlerts.jsx
import React from "react";
import GppGoodIcon from '@mui/icons-material/GppGood';

const PreventiveAlerts = () => {
  const preventiveAlerts = [
    {
      title: "High risk of PPR in your district",
      source: "NADRES v2 Prediction",
      action: "Isolate goats, follow vaccination protocol.",
    },
    {
      title: "High risk of Lumpy Skin Disease (LSD) in your district",
      source: "NADRES v2 Prediction",
      action: "Isolate cattle, follow vaccination protocol.",
    },
  ];

  return (
    <div className="mb-5">
      <h3 className="font-semibold text-gray-700 mb-3">Preventive Alerts</h3>
      {preventiveAlerts.map((alert, idx) => (
        <div
          key={idx}
          className="flex items-start gap-3 p-4 mb-3 rounded-md border bg-green-50 border-green-200"
        >
          <GppGoodIcon className="text-green-600 text-xl" />

          <div>
            <h2 className="font-semibold text-green-800">{alert.title}</h2>
            <p className="text-gray-600 text-sm">Source: {alert.source}</p>
            <p className="text-gray-700 text-sm">Action: {alert.action}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreventiveAlerts;
