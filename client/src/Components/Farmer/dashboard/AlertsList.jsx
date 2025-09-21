import React from "react";

export default function AlertsList() {
  return (
    <div className="bg-card-dark rounded-xl p-4 sm:p-6 shadow-lg mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Alerts
      </h2>
      <ul className="space-y-2 sm:space-y-3">
        <li className="text-gray-300 text-sm sm:text-base">
          🌧 Heavy rain expected in your area tomorrow
        </li>
        <li className="text-gray-300 text-sm sm:text-base">
          🐛 Pest Outbreak detected nearby
        </li>
      </ul>
    </div>
  );
}
