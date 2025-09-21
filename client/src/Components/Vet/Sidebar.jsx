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
    { name: "Profile", path: "/vet-profile", icon: assets.profile },
  ];

  const goToHome = () => {
    navigate("/"); // replace "/" with your home route if different
  };


  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen bg-card-dark text-white transform transition-transform duration-300 ease-in-out translate-x-0 md:translate-x-0"
    >
      {/* Logo/Header */}
      <div className="flex items-center justify-center h-20 border-b border-border-dark">
        <div className="flex items-center w-full gap-3">
          <div className="text-primary">
            <img
              
              src="src\assets\pnhg.png"
              alt=""
              className="p-2 m-2 size-35 cursor-pointer"
              onClick={goToHome}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <NavLink

            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                ? "bg-primary/20 text-primary"
                : "text-gray-300 hover:bg-white/10"
              }`
            }
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
