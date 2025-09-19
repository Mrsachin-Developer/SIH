import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle resize to show/hide sidebar at md breakpoint
  useEffect(() => {
    const setSidebarState = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    setSidebarState();
    window.addEventListener("resize", setSidebarState);
    return () => window.removeEventListener("resize", setSidebarState);
  }, []);

  return (
    <div className="bg-background-dark font-display text-text-light flex min-h-screen">
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-card-dark text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-center h-20 border-b border-border-dark px-3">
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

        <nav className="flex flex-col p-3 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-primary/20 text-primary"
          >
            <GridViewIcon />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <TaskAltIcon />
            <span>Survey</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <EventNoteIcon />
            <span>Record</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <ErrorOutlineIcon />
            <span>Incident Report</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <SchoolIcon />
            <span>Training & Guide</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <NotificationsActiveIcon />
            <span>Alerts & Notifications</span>
          </a>
        </nav>
      </aside>
    </div>
  );
}
