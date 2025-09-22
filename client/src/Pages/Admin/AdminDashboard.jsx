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
  UserCircle,
} from "lucide-react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen  bg-[#121212]">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-16"
          } bg-[#050505] border-r border-[#2C3B2C] flex flex-col transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2C3B2C]">
          {sidebarOpen && (
            <img
              onClick={() => navigate("/farmer/dashboard")}
              className="w-32 cursor-pointer"
              src="\src\assets\pnhg.png"
              alt="Logo"
            />
          )}
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
        <nav className="flex-1 px-2 py-6 space-y-2">
          {[
            { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard", active: true },
            { label: "Analysis & Heatmap", icon: BarChart3, path: "/admin/analytics-heatmap" },
            { label: "Compliance & Reports", icon: FileText, path: "/admin/ComplianceReports" },
            { label: "Alerts & Outbreaks", icon: Bell, path: "/admin/alerts" },
            { label: "Users", icon: Users, path: "/admin/users" },
            { label: "Profile", icon: UserCircle, path: "/admin/admin-profile" },
          ].map((item) => (
            <a
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center ${sidebarOpen ? "gap-3 justify-start px-4" : "justify-center"
                } py-2 rounded-lg cursor-pointer transition-colors ${item.active
                  ? "bg-primary/20 text-primary shadow-inner font-bold"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <item.icon size={22} className="shrink-0" />
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-[#2C3B2C]">
          {sidebarOpen && <p className="text-sm text-[#A9BA9D]">© 2024 AgriTrack</p>}
        </div>
      </aside>


      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4  bg-[#121212] border-b border-[#2C3B2C] sticky top-0 z-10">
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

              <div className="hidden md:block">

              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className=" bg-[#1f1f1f] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-[#1fde6b]/40 rounded-full">
                <Tractor className="text-[#A9BA9D] text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">Total Farms Registered</p>
                <p className="text-3xl font-bold text-white">1,250</p>
              </div>
            </div>
            <div className=" bg-[#1f1f1f] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-[#db2525]/20 rounded-full">
                <AlertTriangle className="text-red-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">Active Outbreaks</p>
                <p className="text-3xl font-bold text-white">32</p>
              </div>
            </div>
            <div className=" bg-[#1f1f1f] p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Activity className="text-yellow-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm text-[#A9BA9D]">Average Risk Score</p>
                <p className="text-3xl font-bold text-white">6.8</p>
              </div>
            </div>
            <div className=" bg-[#1f1f1f] p-6 rounded-xl shadow-sm flex items-center gap-4">
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
          <div className=" bg-[#1f1f1f] p-6 rounded-xl shadow-sm mb-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Risk Distribution
            </h3>
            <div className="flex items-end gap-8 h-64">
              <div className="flex flex-col items-center flex-1 h-full justify-end">
                <div
                  className="w-full bg-[#1fde6b] rounded-t-lg"
                  style={{ height: "45%" }}
                ></div>
                <p className="mt-2 text-sm font-semibold text-[#A9BA9D]">
                  Low (45%)
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end">
                <div
                  className="w-full bg-[#ebb207] rounded-t-lg"
                  style={{ height: "35%" }}
                ></div>
                <p className="mt-2 text-sm font-semibold text-[#A9BA9D]">
                  Medium (35%)
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end">
                <div
                  className="w-full bg-[#db2525] rounded-t-lg"
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
                <thead className="text-xs uppercase  bg-[#1f1f1f] text-[#A9BA9D]">
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
