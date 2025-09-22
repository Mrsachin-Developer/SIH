// src/pages/AlertsPage.jsx
import React from "react";
import Header from "../../Components/Farmer/Alerts/Header";
import OutbreakAlerts from "../../Components/Farmer/Alerts/OutbreakAlerts";
import PreventiveAlerts from "../../Components/Farmer/Alerts/PreventiveAlerts";
import { useNavigate } from "react-router-dom";

const AlertsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-background-dark px-4 sm:px-6 py-3 sticky top-0 z-10">
        <div
          onClick={() => navigate("/farmer/dashboard")}
          className="flex items-center gap-3"
        >
          <img
            className="w-24 sm:w-32 cursor-pointer"
            src="\src\assets\pnhg.png"
            alt=""
          />
        </div>

        {/* Help & Profile */}
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-green-400 hover:text-gray-900">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvPxTVpuJpHwmMBJabAiuy9njx7aTTskomEUjtHpWZ34leetZ0NgqQAcRDQmDk1LlgUBcOFCfvP4afjGGUY_1xcF8CKndA9bvTT_qpfHLWZhhbeG3I11z2pe8OBXJ9x5fa8-VuobU_Lff2y0k8fZdy4OPttRHt0N104J_0QgNL0ncLjN8BZAnlKRz2uYssDDjyaoF9wcsJvdG-QjdtqoftEuPplkWXgyxvn7sxplzLzxubhyNV8U8wg0sg0xBnIvMEWFvANiKuDwEO')",
            }}
          ></div>
        </div>
      </header>
      <div className="h-screen bg-gray-50 flex justify-center flex-col items-center py-5 px-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm p-6">
          <Header />
          <OutbreakAlerts />
          <PreventiveAlerts />
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
