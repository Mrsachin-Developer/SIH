// client/src/Pages/Admin/AnalyticsHeatmap.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  Users,
  AlertTriangle,
  Tractor,
  Syringe,
  Activity,
  User,
} from "lucide-react";

export default function AnalyticsHeatmap() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const diseases = ["Foot & Mouth", "Avian Flu", "Swine Fever"];
  const districts = ["Nabarangpur", "Koraput", "Rayagada"];
  const farmTypes = ["Dairy", "Poultry", "Crop Farm"];

  return (
    <div className="flex h-screen bg-[#0A100A]">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-[#1A241A] border-r border-[#2C3B2C] flex flex-col transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#2C3B2C]">
          <h1
            className={`text-xl font-bold text-white transition-all duration-300 ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            AgriTrack
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-[#2C3B2C]"
          >
            {sidebarOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white cursor-pointer"
          >
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </a>

          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#556B2F]/40 text-[#A9BA9D] font-bold cursor-pointer"
          >
            <BarChart3 size={20} />
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>

          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <FileText size={20} />
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>

          <a
            onClick={() => navigate("/admin/alerts")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <Bell size={20} />
            {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>

          <a
            onClick={() => navigate("/admin/users")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <Users size={20} />
            {sidebarOpen && <span>Users</span>}
          </a>
        </nav>

        <div className="p-6 border-t border-[#2C3B2C]">
          <p
            className={`text-sm text-[#A9BA9D] ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            © 2024 AgriTrack
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#1A241A] border-b border-[#2C3B2C] sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-white">Analytics & Heatmap</h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-[#2C3B2C]">
              <Bell className="text-[#A9BA9D]" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center gap-2">
              <img
                alt="User avatar"
                className="w-10 h-10 rounded-full border"
                src="https://i.pravatar.cc/40"
              />
              <User className="w-8 h-8 text-[#A9BA9D]" />
              <div className="hidden md:block">
                <p className="font-semibold text-white">Admin User</p>
                <p className="text-sm text-[#A9BA9D]">admin@agritrack.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <select className="h-10 px-4 rounded-lg bg-[#4CDF20]/10 text-[#A9BA9D] hover:bg-[#4CDF20]/20 transition-colors">
              <option>Disease Type</option>
              {diseases.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select className="h-10 px-4 rounded-lg bg-[#4CDF20]/10 text-[#A9BA9D] hover:bg-[#4CDF20]/20 transition-colors">
              <option>District</option>
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select className="h-10 px-4 rounded-lg bg-[#4CDF20]/10 text-[#A9BA9D] hover:bg-[#4CDF20]/20 transition-colors">
              <option>Farm Type</option>
              {farmTypes.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Heatmap */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">
              Outbreak Heatmap
            </h3>
            <div className="flex flex-col min-h-[400px] sm:min-h-[500px] rounded-xl p-4 bg-[#152111] relative">
              <div className="w-full max-w-sm mb-4">
                <label className="flex items-center w-full h-12 rounded-lg bg-[#0A100A]/80 backdrop-blur-sm shadow-md">
                  <div className="flex items-center justify-center pl-4 pr-2 text-[#A9BA9D]/60">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    placeholder="Search for a location"
                    className="form-input w-full flex-1 bg-transparent border-none focus:ring-0 text-[#A9BA9D] placeholder:text-[#A9BA9D]/60"
                  />
                </label>
              </div>

              {/* Zoom / Navigation Buttons */}
              <div className="flex flex-col items-end gap-3 absolute right-4 bottom-4">
                <div className="flex flex-col rounded-lg shadow-md bg-[#0A100A]/80 backdrop-blur-sm">
                  <button className="flex w-11 h-11 items-center justify-center rounded-t-lg hover:bg-[#4CDF20]/10 transition-colors">
                    <span className="material-symbols-outlined text-[#A9BA9D]">
                      add
                    </span>
                  </button>
                  <div className="w-full h-px bg-[#4CDF20]/20"></div>
                  <button className="flex w-11 h-11 items-center justify-center rounded-b-lg hover:bg-[#4CDF20]/10 transition-colors">
                    <span className="material-symbols-outlined text-[#A9BA9D]">
                      remove
                    </span>
                  </button>
                </div>
                <button className="flex w-11 h-11 items-center justify-center rounded-lg bg-[#0A100A]/80 backdrop-blur-sm shadow-md hover:bg-[#4CDF20]/10 transition-colors">
                  <span className="material-symbols-outlined text-[#A9BA9D]">
                    near_me
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Predictive Layer */}
          <div className="border-t border-[#4CDF20]/20 pt-4 mt-6">
            <label className="flex items-center gap-x-3 py-2 cursor-pointer group">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded border-[#4CDF20]/40 bg-transparent text-[#4CDF20] checked:bg-[#4CDF20] checked:border-transparent focus:ring-1 focus:ring-[#4CDF20]"
              />
              <span className="text-base text-white group-hover:text-[#4CDF20] transition-colors">
                Potential outbreak zones
              </span>
            </label>
          </div>
        </div>
      </main>
    </div>
  );
}
