import React from "react";

export default function ConsentSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Consent</h2>
        <div className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-primary/40">
          <div>
            <p className="font-medium text-white">Share Report</p>
            <p className="text-sm text-gray-400">
              Share report with Vet/Government
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-primary/40 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
