import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";

export default function Sidebar({ sidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Dashboard", path: "/farmer/dashboard", icon: <GridViewIcon /> },
    { name: "Survey", path: "/farmer/survey", icon: <TaskAltIcon /> },
    { name: "Record", path: "/farmer/record", icon: <EventNoteIcon /> },
    {
      name: "Incident Report",
      path: "/farmer/incident-report",
      icon: <ErrorOutlineIcon />,
    },
    {
      name: "Training & Guide",
      path: "/farmer/training",
      icon: <SchoolIcon />,
    },
  ];

  // ✅ Load Google Translate only for farmer routes
  useEffect(() => {
    if (!location.pathname.startsWith("/farmer")) return;

    const initTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,te,or,ml,bn,ta,kn,gu,pa,as",
            layout: window.google.translate.TranslateElement?.InlineLayout?.SIMPLE || 0, // ✅ safe fallback
          },
          "google_translate_element"
        );
      }
    };



    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => {
        window.googleTranslateElementInit = initTranslate;
        initTranslate();
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded → re-run init on farmer routes
      initTranslate();
    }
  }, [location.pathname]); // ✅ runs on every route change



  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#050505] text-white transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-[#333] px-3">
        <img
          onClick={() => navigate("/farmer/dashboard")}
          className="w-35 cursor-pointer"
          src="\src\assets\pnhg.png"
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-3 space-y-2">
        {navItems.map((item) => {
          let activeClasses = "bg-green-400/20 text-green-400";
          if (isActive(item.path) && item.name === "Incident Report") {
            activeClasses = "bg-red-500/20 text-red-500";
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
                ? activeClasses
                : "text-gray-300 hover:bg-white/10"
                }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* ✅ Language Selector (Farmer only) */}
      {location.pathname.startsWith("/farmer") && (
        <div className="absolute bottom-6 left-0 w-full px-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-white/10">
            <LanguageIcon className="text-gray-300" />
            <div id="google_translate_element" className="text-gray-300"></div>
          </div>
        </div>
      )}
    </aside>
  );
}
