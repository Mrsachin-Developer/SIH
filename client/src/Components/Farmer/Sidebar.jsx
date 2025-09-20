import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";

export default function Sidebar({ sidebarOpen }) {
  const navigate = useNavigate();
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#050505] text-white transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-[#333] px-3">
        <img
          onClick={() => navigate("/farmer/dashboard")}
          className="w-35"
          src="\src\assets\pnhg.png"
          alt=""
        />
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

        {/* Survey Button */}
        <Link
          to="/farmer/survey" // ✅ This will navigate to Survey component
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
