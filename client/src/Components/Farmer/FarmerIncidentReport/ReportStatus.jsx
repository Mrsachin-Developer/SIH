import React from "react";

export default function ReportStatus() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Report Status
      </h2>

      <div className="relative flex justify-between items-center w-full px-4">
        {/* Progress Bar Background */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-primary/30">
          <div className="h-1 bg-primary" style={{ width: "50%" }}></div>
        </div>

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-black text-lg font-bold">✔️</span>
          </div>
          <p className="mt-2 text-xs text-center font-medium text-gray-200">
            Report Received
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-black text-lg font-bold">⏳</span>
          </div>
          <p className="mt-2 text-xs text-center font-medium text-gray-200">
            Vet Reviewing
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
            <span className="text-primary text-lg font-bold">⚡</span>
          </div>
          <p className="mt-2 text-xs text-center text-gray-400">Action Taken</p>
        </div>
      </div>
    </div>
  );
}
