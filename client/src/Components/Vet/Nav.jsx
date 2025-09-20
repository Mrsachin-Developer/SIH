import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Nav = ({ title }) => {   // accept `title` as a prop
  const navigate = useNavigate();

  return (
    
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#111714] px-6 py-6 border-b border-[#3d5245]">
        {/* Left: Page Title */}
        <div>
          <p className="text-white text-2xl font-bold">{title}</p>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Bell Icon */}
          <button
            onClick={() => navigate("/vet-cases")}
            className="relative text-white hover:text-green-400"
          >
            <img src={assets.alerts} alt="" className="size-7" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile Icon */}
          <button
            onClick={() => navigate("/vet-profile")}
            className="text-white hover:text-green-400"
          >
            <img src="src/assets/doctorprofile.png" alt="" className="size-8" />
          </button>
        </div>
      </nav>
    
  );
};

export default Nav;
