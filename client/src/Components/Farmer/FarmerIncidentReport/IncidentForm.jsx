import React from "react";
import IncidentType from "./IncidentType";
import DetailsSection from "./DetailsSection";
import ImmediateActions from "./ImmediateActions";
import ConsentSection from "./ConsentSection";
import ReportStatus from "./ReportStatus";

export default function IncidentForm() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Incident Report</h1>
      </div>

      {/* Form Sections */}
      <div className="space-y-12">
        <IncidentType />
        <DetailsSection />
        <ImmediateActions />
        <ConsentSection />

        {/* Submit Button */}
        <button className="w-full py-4 px-5 rounded-lg bg-primary text-black font-bold text-lg tracking-wide hover:bg-primary/90 transition-colors">
          Send Report
        </button>

        {/* Status Section */}
        <ReportStatus />
      </div>
    </div>
  );
}
