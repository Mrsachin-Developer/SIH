import React from "react";

export default function RiskOverviewCard({ riskScore, imageUrl }) {
  return (
    <div className="bg-card-dark rounded-xl p-4 sm:p-6 shadow-lg mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
        Risk Overview
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* Risk Info */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-400">
            Current Farm Risk Score
          </p>
          <p className="text-4xl sm:text-5xl font-bold text-primary">
            {riskScore}
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
            Your farm's risk score is looking great. Keep up the good work!
          </p>
        </div>

        {/* Image */}
        <div
          className="flex-1 w-full sm:w-auto h-40 sm:h-48 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      </div>
    </div>
  );
}
