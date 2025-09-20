import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ids = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // replace "/" with your home route if different
  };

  const [role, setRole] = useState("Veterinarian");

  const handleContinue = () => {
    if (role === "Veterinarian") {
      navigate("/vet/login");
    } else if (role === "Farmer") {
      navigate("/farmer/login");
    } else if (role === "Admin") {
      navigate("/admin/login");
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-[#121212] overflow-x-hidden"
      style={{
        fontFamily: "Inter, Noto Sans, sans-serif",
        "--radio-dot-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
      }}
    >
      
      
      <div className="flex flex-1 justify-center px-6 md:px-20 lg:px-40 py-5">
        
        <div className="flex flex-col w-full max-w-[512px] py-5">
          
            <img
              
              src="src\assets\pnhg.png"
              alt=""
              className="m-2 size-30 cursor-pointer self-center"
              onClick={goToHome}
            />

          {/* Title */}
          <h2 className="text-white text-[28px] font-bold leading-tight text-center pb-3 pt-5">
            Select Your Role
          </h2>

          {/* Radio Options */}
          <div className="flex flex-col gap-3 p-4">
            {/* Veterinarian */}
            <label className="flex items-center gap-4 rounded-xl border border-[#3d5245] p-[15px] cursor-pointer">
              <input
                type="radio"
                className="h-5 w-5 border-2 border-[#3d5245] bg-transparent text-transparent
                  checked:border-white checked:bg-[image:var(--radio-dot-svg)]
                  focus:outline-none focus:ring-0 focus:ring-offset-0"
                name="role"
                value="Veterinarian"
                checked={role === "Veterinarian"}
                onChange={(e) => setRole(e.target.value)}
              />
              <div className="flex flex-col">
                <p className="text-white text-sm font-medium">Veterinarian</p>
                <p className="text-[#9eb7a8] text-sm">
                  Manage animal health records, diagnose diseases, and provide
                  treatment plans.
                </p>
              </div>
            </label>

            {/* Admin */}
            <label className="flex items-center gap-4 rounded-xl border border-[#3d5245] p-[15px] cursor-pointer">
              <input
                type="radio"
                className="h-5 w-5 border-2 border-[#3d5245] bg-transparent text-transparent
                  checked:border-white checked:bg-[image:var(--radio-dot-svg)]
                  focus:outline-none focus:ring-0 focus:ring-offset-0"
                name="role"
                value="Admin"
                checked={role === "Admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <div className="flex flex-col">
                <p className="text-white text-sm font-medium">Admin</p>
                <p className="text-[#9eb7a8] text-sm">
                  Oversee platform operations, manage user accounts, and handle
                  system settings.
                </p>
              </div>
            </label>

            {/* Farmer */}
            <label className="flex items-center gap-4 rounded-xl border border-[#3d5245] p-[15px] cursor-pointer">
              <input
                type="radio"
                className="h-5 w-5 border-2 border-[#3d5245] bg-transparent text-transparent
                  checked:border-white checked:bg-[image:var(--radio-dot-svg)]
                  focus:outline-none focus:ring-0 focus:ring-offset-0"
                name="role"
                value="Farmer"
                checked={role === "Farmer"}
                onChange={(e) => setRole(e.target.value)}
              />
              <div className="flex flex-col">
                <p className="text-white text-sm font-medium">Farmer</p>
                <p className="text-[#9eb7a8] text-sm">
                  Monitor livestock health, report disease outbreaks, and access
                  health insights.
                </p>
              </div>
            </label>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-xl 
              h-10 px-4 bg-[#20df6c] text-[#111714] text-sm font-bold"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ids;
