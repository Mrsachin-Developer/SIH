import React from "react";

export default function ConsentSection() {
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
        <label className="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-primary/40 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>
    </div>
  );
}
