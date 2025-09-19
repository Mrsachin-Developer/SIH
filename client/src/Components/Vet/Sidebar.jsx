import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/vet-dashboard" },
    { name: "Cases", path: "/vet-Cases" },
    { name: "Alerts", path: "/vet-alerts" },
    { name: "Reports", path: "/vet-reports" },
    { name: "Profile", path: "/vet-profile" },
  ];

  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen bg-card-dark text-white transform transition-transform duration-300 ease-in-out translate-x-0 md:translate-x-0"
    >
      {/* Logo/Header */}
      <div className="flex items-center justify-center h-20 border-b border-border-dark">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">FarmWise</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-gray-300 hover:bg-white/10"
              }`
            }
          >
            <span className="material-symbols-outlined"></span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
