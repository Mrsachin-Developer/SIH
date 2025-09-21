import React from "react";

export default function NewsTicker() {
  return (
    <div className="bg-card-dark rounded-xl p-4 sm:p-6 shadow-lg mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Agriculture News
      </h2>
      <div className="space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
        <p>• New subsidy announced for organic farmers</p>
        <p>• Wheat prices expected to rise next month</p>
      </div>
    </div>
  );
}
