import React, { useState } from "react";
import IncidentType from "../../Components/Farmer/FarmerIncidentReport/IncidentType";
import Sidebar from "../../Components/Farmer/SideBar";

export default function FarmerIncidentReport() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#020202] font-display text-foreground-dark flex min-h-screen">
      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white px-3 py-2 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close Menu" : "Menu"}
      </button>

      {/* Slide-in sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/70 z-40 md:hidden">
          <div className="absolute top-0 left-0 h-full w-64 bg-[#121212] shadow-lg">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow min-h-screen p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Incident Report
            </h1>
          </div>

          {/* Incident Type */}
          <IncidentType />
        </div>
      </main>
    </div>
  );
}
