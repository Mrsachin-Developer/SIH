import React from "react";

export default function NewsTicker() {
  return (
    <div className="bg-card-dark rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Agri News</h2>
      <div className="space-y-2 text-gray-300">
        <p>• New subsidy announced for organic farmers</p>
        <p>• Wheat prices expected to rise next month</p>
      </div>
    </div>
  );
}
