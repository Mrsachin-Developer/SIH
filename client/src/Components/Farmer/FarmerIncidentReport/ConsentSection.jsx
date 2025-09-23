import React, { useState } from "react";

export default function ConsentSection() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white">Consent</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 rounded-lg bg-black/30 border border-primary/40 gap-3 sm:gap-0">
        <div>
          <p className="font-medium text-white text-sm sm:text-base">
            Share Report
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Share report with Vet/Government
          </p>
        </div>

        {/* New Toggle */}
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative w-12 h-7 flex items-center rounded-full transition-colors duration-300 ${
            enabled ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          <span
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              enabled ? "translate-x-3" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
