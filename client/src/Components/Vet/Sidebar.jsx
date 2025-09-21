import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/vet-dashboard", icon: assets.dashboard },
    { name: "Cases", path: "/vet-Cases", icon: assets.cases },
    { name: "Send Alerts", path: "/vet-alerts", icon: assets.alerts },
    { name: "Reports", path: "/vet-reports", icon: assets.reports },
    { name: "HeatMap", path: "/vet-heatmap", icon: assets.heatmap },
    { name: "Profile", path: "/vet-profile", icon: assets.profile },
  ];

  const goToHome = () => {
    navigate("/vet-dashboard");
  };

  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen 
      bg-[#050505]/95 backdrop-blur-xl border-r border-gray-800 
      text-white shadow-2xl flex flex-col justify-between"
    >
      {/* Logo/Header */}
      <div className="flex items-center justify-center h-20 border-b border-gray-800">
        <img
          src="src/assets/pnhg.png"
          alt="Logo"
          className="w-40 p-2 rounded-lg cursor-pointer hover:scale-105 transition-transform"
          onClick={goToHome}
        />
        
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4 flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
    ${isActive
                ? "bg-primary/20 text-primary shadow-inner"
                : "text-gray-300 hover:text-white hover:bg-white/10"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span>{item.name}</span>

                {/* Highlight bar on hover */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 bg-primary rounded-r-lg 
          transition-transform origin-bottom 
          ${isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Help & Support */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => alert("Redirect to Help & Support")}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6h4m-2-8a9 9 0 11-9 9 9 9 0 019-9z"
            />
          </svg>
          Help & Support
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
