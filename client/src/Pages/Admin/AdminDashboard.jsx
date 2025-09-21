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

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

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
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#556B2F]/40 text-[#A9BA9D] font-bold cursor-pointer"
          >
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </a>

          {/* Updated link */}
          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white cursor-pointer"
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
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white">
            <Bell size={20} />
            {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white">
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
          <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-full hover:bg-[#2C3B2C]">
              <Bell className="text-[#A9BA9D]" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            {/* User Avatar */}
            <div className="flex items-center gap-2">
              <img
                alt="User avatar"
                className="w-10 h-10 rounded-full border"
                src="https://i.pravatar.cc/40"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <User className="w-8 h-8 text-[#A9BA9D]" />
              <div className="hidden md:block">
                <p className="font-semibold text-white">Admin User</p>
                <p className="text-sm text-[#A9BA9D]">admin@agritrack.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-[#556B2F]/40 rounded-full">
                <Tractor className="text-[#A9BA9D] text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">Total Farms Registered</p>
                <p className="text-3xl font-bold text-white">1,250</p>
              </div>
            </div>
            <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-red-500/20 rounded-full">
                <AlertTriangle className="text-red-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">Active Outbreaks</p>
                <p className="text-3xl font-bold text-white">32</p>
              </div>
            </div>
            <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Activity className="text-yellow-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">Average Risk Score</p>
                <p className="text-3xl font-bold text-white">6.8</p>
              </div>
            </div>
            <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Syringe className="text-blue-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">
                  Farms skipping vaccination
                </p>
                <p className="text-3xl font-bold text-white">12%</p>
              </div>
            </div>
          </div>

          {/* Risk Distribution */}
          <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm mb-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Risk Distribution
            </h3>
            <div className="flex items-end gap-8 h-64">
              <div className="flex flex-col items-center flex-1 h-full justify-end">
                <div
                  className="w-full bg-[#556B2F]/40 rounded-t-lg"
                  style={{ height: "45%" }}
                ></div>
                <p className="mt-2 text-sm font-semibold text-[#A9BA9D]">
                  Low (45%)
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end">
                <div
                  className="w-full bg-yellow-500/20 rounded-t-lg"
                  style={{ height: "35%" }}
                ></div>
                <p className="mt-2 text-sm font-semibold text-[#A9BA9D]">
                  Medium (35%)
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end">
                <div
                  className="w-full bg-red-500/20 rounded-t-lg"
                  style={{ height: "20%" }}
                ></div>
                <p className="mt-2 text-sm font-semibold text-[#A9BA9D]">
                  High (20%)
                </p>
              </div>
            </div>
          </div>

          {/* Recent Alerts Table */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Recent Alerts</h3>
            <div className="overflow-x-auto bg-[#2C3B2C] rounded-xl shadow-sm">
              <table className="w-full text-sm text-left text-[#A9BA9D]">
                <thead className="text-xs uppercase bg-[#1A241A] text-[#A9BA9D]">
                  <tr>
                    <th className="px-6 py-3">Alert ID</th>
                    <th className="px-6 py-3">Farm Name</th>
                    <th className="px-6 py-3">Location</th>
                    <th className="px-6 py-3">Issue</th>
                    <th className="px-6 py-3">Severity</th>
                    <th className="px-6 py-3">Timestamp</th>
                  </tr>
                </thead>
                <tbody>{/* ...rows remain unchanged... */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
