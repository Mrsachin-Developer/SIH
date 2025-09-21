// client/src/Pages/Admin/ComplianceReports.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  Menu,
  X,
} from "lucide-react";

export default function ComplianceReports() {
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
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 text-white cursor-pointer"
          >
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </a>

          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 text-white cursor-pointer"
          >
            <BarChart3 size={20} />
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>

          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#556B2F]/40 text-[#A9BA9D] font-bold cursor-pointer"
          >
            <FileText size={20} />
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>

          <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 text-white cursor-pointer">
            <Bell size={20} />
            {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>

          <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 text-white cursor-pointer">
            <Users size={20} />
            {sidebarOpen && <span>Users</span>}
          </a>
        </nav>

        <div className="p-6 border-t border-[#2C3B2C]">
          {sidebarOpen && (
            <p className="text-sm text-[#A9BA9D]">© 2024 AgriTrack</p>
          )}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#1A241A] border-b border-[#2C3B2C] sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-white">
            Compliance & Reports
          </h2>
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

        {/* Compliance Page Content */}
        <div className="p-8 space-y-10">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Farm Compliance Overview
            </h2>
            <div className="rounded-lg border border-[#2C3B2C] bg-[#2C3B2C] p-6">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">Overall Compliance</p>
                <p className="text-lg font-bold text-white">85%</p>
              </div>
              <div className="mt-2 h-2.5 w-full rounded-full bg-[#556B2F]/40">
                <div
                  className="h-2.5 rounded-full bg-[#A9BA9D]"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-[#A9BA9D]">
                Based on the latest audit
              </p>
            </div>

            {/* Categories */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-[#2C3B2C] bg-[#2C3B2C] p-4">
                <p className="font-medium text-white">Biosecurity</p>
                <p className="text-3xl font-bold text-white">90%</p>
                <p className="text-sm font-medium text-green-400">+5%</p>
              </div>
              <div className="rounded-lg border border-[#2C3B2C] bg-[#2C3B2C] p-4">
                <p className="font-medium text-white">Environmental</p>
                <p className="text-3xl font-bold text-white">75%</p>
                <p className="text-sm font-medium text-red-400">-10%</p>
              </div>
              <div className="rounded-lg border border-[#2C3B2C] bg-[#2C3B2C] p-4">
                <p className="font-medium text-white">Animal Welfare</p>
                <p className="text-3xl font-bold text-white">90%</p>
                <p className="text-sm font-medium text-green-400">+5%</p>
              </div>
            </div>
          </section>

          {/* Reports */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Reports</h2>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#556B2F]/40 px-4 py-2 text-sm font-bold text-white hover:bg-[#556B2F]/60">
                <span className="material-symbols-outlined text-base">
                  description
                </span>
                <span>Export CSV</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#556B2F]/40 px-4 py-2 text-sm font-bold text-white hover:bg-[#556B2F]/60">
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
            <div className="flex flex-col gap-6 rounded-lg border border-[#2C3B2C] bg-[#2C3B2C] p-6 md:flex-row">
              <div className="flex flex-[2_2_0%] flex-col justify-center">
                <h3 className="text-lg font-bold text-white">
                  Biosecure Farm Certificate
                </h3>
                <p className="mt-1 text-[#A9BA9D]">
                  Generate a certificate to demonstrate your farm&apos;s
                  biosecurity compliance.
                </p>
                <button className="mt-4 flex w-fit items-center justify-center gap-2 rounded-lg bg-[#A9BA9D] px-5 py-2.5 text-sm font-bold text-[#0A100A] hover:opacity-90">
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
            <div className="overflow-x-auto rounded-lg border border-[#2C3B2C]">
              <table className="min-w-full divide-y divide-[#2C3B2C] text-left">
                <thead className="bg-[#1A241A]">
                  <tr>
                    <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                      Date
                    </th>
                    <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                      Type
                    </th>
                    <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                      Status
                    </th>
                    <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2C3B2C] bg-[#2C3B2C]">
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#A9BA9D]">
                      2024-03-15
                    </td>
                    <td className="px-6 py-4 text-sm text-[#A9BA9D]">
                      Biosecurity
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center rounded-full bg-green-800/40 px-2.5 py-0.5 text-xs font-medium text-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        className="font-medium text-[#A9BA9D] hover:underline"
                        href="#"
                      >
                        View Report
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#A9BA9D]">
                      2023-09-20
                    </td>
                    <td className="px-6 py-4 text-sm text-[#A9BA9D]">
                      Environmental
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center rounded-full bg-green-800/40 px-2.5 py-0.5 text-xs font-medium text-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        className="font-medium text-[#A9BA9D] hover:underline"
                        href="#"
                      >
                        View Report
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#A9BA9D]">
                      2023-03-10
                    </td>
                    <td className="px-6 py-4 text-sm text-[#A9BA9D]">
                      Animal Welfare
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center rounded-full bg-green-800/40 px-2.5 py-0.5 text-xs font-medium text-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        className="font-medium text-[#A9BA9D] hover:underline"
                        href="#"
                      >
                        View Report
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
