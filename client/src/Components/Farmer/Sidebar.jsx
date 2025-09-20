import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Sidebar({ sidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#050505] text-white transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-[#333] px-3">
        <div className="flex items-center gap-3">
          <div className="text-green-400">
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
      <nav className="flex flex-col p-3 space-y-2">
        <Link
          to="/farmer/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-green-400/20 text-green-400"
        >
          <GridViewIcon />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/farmer/survey"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
        >
          <TaskAltIcon />
          <span>Survey</span>
        </Link>

        <Link
          to="/farmer/record"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
        >
          <EventNoteIcon />
          <span>Record</span>
        </Link>

        <Link
          to="/farmer/incident-report"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
        >
          <ErrorOutlineIcon />
          <span>Incident Report</span>
        </Link>

        <Link
          to="/farmer/training"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
        >
          <SchoolIcon />
          <span>Training & Guide</span>
        </Link>
      </nav>
    </aside>
  );
}
