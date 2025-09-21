import React, { useState } from "react";
import BiosecuritySection from "./BiosecuritySection";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("poultry");

  const tabs = [
    { id: "poultry", label: "Poultry Biosecurity" },
    { id: "pigs", label: "Pig Biosecurity" },
    { id: "hygiene", label: "Hygiene & Waste" },
  ];

  return (
    <div>
      {/* Tab Buttons */}
      <div className="mb-8 border-b border-black/10 dark:border-white/10">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200 font-medium"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Biosecurity Content */}
      <BiosecuritySection activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
