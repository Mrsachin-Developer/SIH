import React from "react";

export default function TasksList() {
  return (
    <div className="bg-card-dark rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Tasks</h2>
      <ul className="space-y-3">
        <li className="flex items-center justify-between text-gray-300">
          <span>Check soil moisture</span>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
            Pending
          </span>
        </li>
        <li className="flex items-center justify-between text-gray-300">
          <span>Inspect livestock health</span>
          <span className="text-xs px-2 py-1 bg-green-600/20 text-green-500 rounded">
            Done
          </span>
        </li>
      </ul>
    </div>
  );
}
