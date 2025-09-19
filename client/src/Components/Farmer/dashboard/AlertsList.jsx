import React from "react";

export default function AlertsList() {
  return (
    <div className="bg-card-dark rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Alerts</h2>
      <ul className="space-y-3">
        <li className="text-gray-300">
          🌧 Heavy rain expected in your area tomorrow
        </li>
        <li className="text-gray-300">🐛 Pest outbreak detected nearby</li>
      </ul>
    </div>
  );
}
