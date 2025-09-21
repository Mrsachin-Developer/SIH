import React from "react";

export default function TasksList() {
  return (
    <div className="bg-card-dark rounded-xl p-4 sm:p-6 shadow-lg mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Tasks
      </h2>
      <ul className="space-y-2 sm:space-y-3">
        <li className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-300 gap-1 sm:gap-0">
          <span className="text-sm sm:text-base">Check soil moisture</span>
          <span className="text-xs sm:text-sm px-2 py-1 bg-primary/20 text-primary rounded">
            Pending
          </span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-300 gap-1 sm:gap-0">
          <span className="text-sm sm:text-base">Inspect livestock health</span>
          <span className="text-xs sm:text-sm px-2 py-1 bg-green-600/20 text-green-500 rounded">
            Done
          </span>
        </li>
      </ul>
    </div>
  );
}
