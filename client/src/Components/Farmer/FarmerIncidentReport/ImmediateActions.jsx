import React from "react";

export default function ImmediateActions() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Immediate Actions Taken
        </h2>
        <div className="space-y-3">
          {["Isolated animal", "Stopped movement", "Called vet"].map((txt) => (
            <label
              key={txt}
              className="flex items-center gap-x-3 p-4 rounded-lg bg-black/30 cursor-pointer"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border-primary/50 bg-background-dark text-primary focus:ring-primary"
              />
              <span className="text-base text-gray-200">{txt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
