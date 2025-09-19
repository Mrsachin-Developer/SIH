import React from "react";
import SickIcon from "@mui/icons-material/Sick";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";
import ReportStatus from "./ReportStatus";
import ConsentSection from "./ConsentSection";
import ImmediateActions from "./ImmediateActions";
import DetailsSection from "./DetailsSection";

export default function IncidentType() {
  const types = [
    { icon: "sick", text: "Sick Animal" },
    { icon: "skull", text: "Sudden Death" },
    { icon: "add_box", text: "New Animal Arrival" },
    { icon: "security", text: "Biosecurity Breach" },
    { icon: "help_outline", text: "Other" },
  ];
  return (
    <div className="space-y-4">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Incident Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Buttons */}
            {[
              {
                icon: <SickIcon fontSize="large" />,
                label: "Sick Animal",
              },
              {
                icon: <CrisisAlertIcon fontSize="large" />,
                label: "Sudden Death",
              },
              {
                icon: <AddBoxIcon fontSize="large" />,
                label: "New Animal Arrival",
              },
              {
                icon: <SecurityIcon fontSize="large" />,
                label: "Biosecurity Breach",
              },
              { icon: <HelpIcon fontSize="large" />, label: "Other" },
            ].map((item) => (
              <button
                key={item.label}
                className=" flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-black/30 border border-primary/40 hover:bg-primary/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200 aspect-square"
              >
                <span className="material-symbols-outlined text-4xl text-primary">
                  {item.icon}
                </span>
                <span className="text-center text-sm font-medium text-gray-200">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <DetailsSection />

        {/* Immediate Actions */}
        <ImmediateActions />

        {/* Consent */}
        <ConsentSection />

        <button className="w-full py-4 px-5 rounded-lg bg-primary text-black font-bold text-lg tracking-wide hover:bg-primary/90 transition-colors">
          Send Report
        </button>

        {/* Report Status */}
        <ReportStatus />
      </div>
    </div>
  );
}
