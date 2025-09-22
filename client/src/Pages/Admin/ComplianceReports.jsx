// client/src/Pages/Admin/ComplianceReports.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  Users,
  User,
  UserCircle,
  Menu,
  X,
} from "lucide-react";

export default function ComplianceReports() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#121212]">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-16"
          } bg-[#050505] border-r border-[#2C3B2C] flex flex-col transition-all duration-300 flex-shrink-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#2C3B2C]">
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
        <nav className="flex-1 px-2 md:px-4 py-4 space-y-2">
          {[
            { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
            { name: "Analysis & Heatmap", icon: BarChart3, path: "/admin/analytics-heatmap" },
            { name: "Compliance & Reports", icon: FileText, path: "/admin/ComplianceReports", active: true },
            { name: "Alerts & Outbreaks", icon: Bell, path: "/admin/alerts" },
            { name: "Users", icon: Users, path: "/admin/users" },
            { name: "Profile", icon: UserCircle, path: "/admin/admin-profile" },
          ].map((item) => (
            <a
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center ${sidebarOpen ? "gap-3 justify-start px-3" : "justify-center"
                } py-2 rounded-lg cursor-pointer ${item.active
                  ? "bg-primary/20 text-primary shadow-inner"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                } transition-colors`}
            >
              {/* Icon always visible */}
              <item.icon size={22} className="shrink-0" />

              {/* Only show label when open */}
              {sidebarOpen && <span className="truncate">{item.name}</span>}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-[#2C3B2C]">
          {sidebarOpen && <p className="text-sm text-[#A9BA9D]">© 2024 AgriTrack</p>}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-4 bg-[#121212] border-b border-[#2C3B2C] sticky top-0 z-10 space-y-2 md:space-y-0">
          <h2 className="text-2xl font-bold text-white">Compliance & Reports</h2>
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
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              <div className="hidden md:block">

              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Farm Compliance Overview
            </h2>
            <div className="rounded-lg border border-[#2C3B2C] bg-[#1f1f1f] p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="font-medium text-white">Overall Compliance</p>
                <p className="text-lg font-bold text-white mt-2 sm:mt-0">85%</p>
              </div>
              <div className="mt-2 h-2.5 w-full rounded-full bg-[#556B2F]/40">
                <div
                  className="h-2.5 rounded-full bg-[#20df6c]"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-[#A9BA9D]">
                Based on the latest audit
              </p>
            </div>

            {/* Categories */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {[
                {
                  name: "Biosecurity",
                  value: "90%",
                  change: "+5%",
                  color: "#20df6c",
                },
                {
                  name: "Environmental",
                  value: "75%",
                  change: "-10%",
                  color: "#db2525",
                },
                {
                  name: "Animal Welfare",
                  value: "90%",
                  change: "+5%",
                  color: "#20df6c",
                },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-lg border border-[#2C3B2C] bg-[#1f1f1f] p-4"
                >
                  <p className="font-medium text-white">{cat.name}</p>
                  <p className="text-3xl font-bold text-white">{cat.value}</p>
                  <p className={`text-sm font-medium text-[${cat.color}]`}>
                    {cat.change}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Reports */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Reports</h2>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-semibold shadow-md">
                <span className="material-symbols-outlined text-base">
                  description
                </span>
                <span>Export CSV</span>
              </button>
              <button className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-semibold shadow-md">
                <span className="material-symbols-outlined text-base">
                  table_view
                </span>
                <span>Export Excel</span>
              </button>
            </div>
          </section>

          {/* Certificates */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Certificates</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg border border-[#2C3B2C] bg-[#1f1f1f] p-4 md:p-6">
              <div className="flex flex-col flex-[2_2_0%] justify-center">
                <h3 className="text-lg font-bold text-white">
                  Biosecure Farm Certificate
                </h3>
                <p className="mt-1 text-[#A9BA9D]">
                  Generate a certificate to demonstrate your farm&apos;s
                  biosecurity compliance.
                </p>
                <button className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-3 py-2 w-60 rounded-xl font-semibold shadow-md">
                  <span className="material-symbols-outlined"> badge </span>
                  <span>Generate Certificate</span>
                </button>
              </div>
              <div
                className="h-48 flex-1 rounded-lg bg-cover bg-center md:h-auto"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXtXMUaakk-mHNqMVtd3C5KA3JuGYnR3xmybzO8a6qpCGV_UbrWFGG-0g1TKH0GE_eivToN6cFcGg4qreZGHVH4X3l_ABN8Y1RnQApC2wFxOO4JyM5xTN_ue7oRBIUiJ9_QqzCl0QVqe7aN46iAevBmOvSVX34RClbEDMpYttMDgTmnbgpG3x4Fd5fstsnZDGMMyvadogMMYz-zv4ELckUJJxNUErOA6T4z-nXYETolTyNRnxdAnBxg7WsHHs7nvfvbaEndkT5GSb0")',
                }}
              ></div>
            </div>
          </section>

          {/* Audit History */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Audit History</h2>
            <div className="rounded-lg border border-[#2C3B2C] bg-[#1f1f1f]">
              <div className="grid grid-cols-1 md:grid-cols-4 text-white">
                <div className="px-4 py-2 font-bold">Date</div>
                <div className="px-4 py-2 font-bold">Type</div>
                <div className="px-4 py-2 font-bold">Status</div>
                <div className="px-4 py-2 font-bold">Details</div>

                {[
                  {
                    date: "2024-03-15",
                    type: "Biosecurity",
                    status: "Completed",
                  },
                  {
                    date: "2023-09-20",
                    type: "Environmental",
                    status: "Completed",
                  },
                  {
                    date: "2023-03-10",
                    type: "Animal Welfare",
                    status: "Completed",
                  },
                ].map((row, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-4 py-2 text-[#A9BA9D]">{row.date}</div>
                    <div className="px-4 py-2 text-[#A9BA9D]">{row.type}</div>
                    <div className="px-4 py-2">
                      <span className="inline-flex items-center rounded-full bg-green-800/40 px-2.5 py-0.5 text-xs font-medium text-green-300">
                        {row.status}
                      </span>
                    </div>
                    <div className="px-4 py-2">
                      <a
                        className="font-medium text-[#A9BA9D] hover:underline"
                        href="#"
                      >
                        View Report
                      </a>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
