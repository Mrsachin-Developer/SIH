import React, { useState, useEffect } from "react";

import IncidentType from "../../Components/Farmer/FarmerIncidentReport/IncidentType";
import Sidebar from "../../Components/Farmer/SideBar";

export default function FarmerIncidentReport() {
  return (
    <div className="bg-[#020202] font-display text-foreground-dark flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
 
      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h1 className="text-4xl font-bold text-white">Incident Report</h1>
          </div>

          {/* Incident Type */}
          <IncidentType />
        </div>
      </main>
    </div>
  );
}
