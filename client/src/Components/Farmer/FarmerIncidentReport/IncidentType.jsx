import React, { useState } from "react";
import SickIcon from "@mui/icons-material/Sick";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";
import ReportStatus from "./ReportStatus";
import ConsentSection from "./ConsentSection";
import ImmediateActions from "./ImmediateActions";
import DetailsSection from "./DetailsSection";
import { useNavigate } from "react-router-dom";

export default function IncidentType() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSendReport = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const incidentTypes = [
    { icon: <SickIcon fontSize="large" />, label: "Sick Animal" },
    { icon: <CrisisAlertIcon fontSize="large" />, label: "Sudden Death" },
    { icon: <AddBoxIcon fontSize="large" />, label: "New Animal Arrival" },
    { icon: <SecurityIcon fontSize="large" />, label: "Biosecurity Breach" },
    { icon: <HelpIcon fontSize="large" />, label: "Other" },
  ];

  return (
    <div className="relative">
      <div
        className={`${
          showModal ? "blur-sm pointer-events-none transition-all" : ""
        }`}
      >
        <div className="space-y-12">
          {/* Incident Type Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Incident Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {incidentTypes.map((item) => (
                <button
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-black/30 border border-primary/40 hover:bg-primary/20 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200 aspect-square"
                >
                  {item.icon}
                  <span className="text-center text-sm font-medium text-gray-200">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Sections */}
          <DetailsSection />
          <ImmediateActions />
          <ConsentSection />

          {/* Send Report Button */}
          <button
            onClick={handleSendReport}
            className="w-full py-4 px-5 rounded-lg bg-primary text-black font-bold text-lg tracking-wide hover:bg-primary/90 transition-colors"
          >
            Send Report
          </button>

          <ReportStatus />
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl w-80 p-6 flex flex-col items-center text-center">
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2 text-black">
              Sent Successfully
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Your Incident Report has been successfully sent to the Vet
            </p>
            <button
              onClick={() => navigate("/farmer/dashboard")}
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
