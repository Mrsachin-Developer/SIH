import React from "react";

export default function ImmediateActions() {
  const actions = ["Isolated animal", "Stopped movement", "Called vet"];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Immediate Actions Taken</h2>
      <div className="space-y-3">
        {actions.map((action) => (
          <label
            key={action}
            className="flex items-center gap-3 p-4 rounded-lg bg-black/30 cursor-pointer hover:bg-black/40 transition"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded-md border-primary/50 bg-background-dark text-primary focus:ring-primary"
            />
            <span className="text-gray-200 text-base">{action}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
