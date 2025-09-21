import React from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Stethoscope,
  SprayCan,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RiskCard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-5 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Risk Result</h1>

      {/* Risk Card */}
      <div className="bg-[#111111] border border-red-600 rounded-md p-6 text-center w-full max-w-md mx-auto mb-10">
        <div className="flex flex-col items-center">
          <AlertTriangle className="text-red-500 w-10 h-10 mb-2" />
          <h2 className="text-red-500 font-bold text-xl">High Risk</h2>
        </div>
        <p className="text-gray-300 text-sm mt-3">
          The risk level is high because no quarantine was implemented for the
          new livestock. This increases the likelihood of disease transmission
          to the existing herd.
        </p>
      </div>

      {/* Recommendations Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Recommendations</h2>

        <div className="space-y-5">
          {/* Recommendation 1 */}
          <div className="flex items-start space-x-3">
            <div className="bg-green-800 p-2 rounded-md">
              <ShieldCheck className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Quarantine New Livestock</h3>
              <p className="text-gray-400 text-sm">
                Implement a quarantine period of at least 30 days for all new
                livestock before introducing them to the main herd.
              </p>
            </div>
          </div>

          {/* Recommendation 2 */}
          <div className="flex items-start space-x-3">
            <div className="bg-green-800 p-2 rounded-md">
              <Stethoscope className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Monitor Livestock Health</h3>
              <p className="text-gray-400 text-sm">
                Regularly monitor the health of both quarantined and main herd
                livestock for any signs of disease.
              </p>
            </div>
          </div>

          {/* Recommendation 3 */}
          <div className="flex items-start space-x-3">
            <div className="bg-green-800 p-2 rounded-md">
              <SprayCan className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Disinfect Equipment</h3>
              <p className="text-gray-400 text-sm">
                Ensure all livestock handling equipment is thoroughly cleaned
                and disinfected before and after use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button
          onClick={() => navigate("/farmer/incident-report")}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-md"
        >
          Report to Vet
        </button>
        <button className="bg-[#111827] hover:bg-[#1f2937] text-white font-semibold px-6 py-2 rounded-md">
          Download SOP
        </button>
      </div>
    </div>
  );
};

export default RiskCard;
