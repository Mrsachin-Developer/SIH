import React from "react";
import IncidentType from "./IncidentType";
import DetailsSection from "./DetailsSection";
import ImmediateActions from "./ImmediateActions";
import ConsentSection from "./ConsentSection";
import ReportStatus from "./ReportStatus";
import Alert from "@mui/material/Alert";
import AlertButton from "./AlertButton";

export default function IncidentForm() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Incident Report</h1>
      </div>

      <div className="space-y-12">
        <IncidentType />
        <DetailsSection />
        <ImmediateActions />
        <ConsentSection />
        <button className="w-full py-4 px-5 rounded-lg bg-primary text-black font-bold text-lg tracking-wide hover:bg-primary/90 transition-colors">
          Send Report
        </button>
        <ReportStatus />
      </div>
    </div>
  );
}
