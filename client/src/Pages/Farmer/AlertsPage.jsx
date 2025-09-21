// src/pages/AlertsPage.jsx
import React from "react";
import Header from "../../Components/Farmer/Alerts/Header";
import OutbreakAlerts from "../../Components/Farmer/Alerts/OutbreakAlerts";
import PreventiveAlerts from "../../Components/Farmer/Alerts/PreventiveAlerts";

const AlertsPage = () => {
  return (
    <div className="h-screen bg-gray-50 flex justify-center flex-col items-center py-5 px-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm p-6">
        <Header />
        <OutbreakAlerts />
        <PreventiveAlerts />
      </div>
    </div>
  );
};

export default AlertsPage;
