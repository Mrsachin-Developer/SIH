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
  Settings,
  UserCircle,
} from "lucide-react";

export default function AdminUsers() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      name: "Ethan Carter",
      role: "Farmer",
      status: "Active",
      lastActive: "2 days ago",
    },
    {
      name: "Olivia Bennett",
      role: "Vet",
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      name: "Noah Thompson",
      role: "Farmer",
      status: "Inactive",
      lastActive: "1 month ago",
    },
    {
      name: "Ava Harper",
      role: "Vet",
      status: "Active",
      lastActive: "3 days ago",
    },
    {
      name: "Liam Foster",
      role: "Farmer",
      status: "Active",
      lastActive: "5 days ago",
    },
    {
      name: "Isabella Hayes",
      role: "Vet",
      status: "Inactive",
      lastActive: "2 months ago",
    },
    {
      name: "Jackson Reed",
      role: "Farmer",
      status: "Active",
      lastActive: "1 week ago",
    },
    {
      name: "Sophia Morgan",
      role: "Vet",
      status: "Active",
      lastActive: "4 days ago",
    },
    {
      name: "Mason Lee",
      role: "Farmer",
      status: "Active",
      lastActive: "6 days ago",
    },
    {
      name: "Charlotte King",
      role: "Vet",
      status: "Active",
      lastActive: "2 days ago",
    },
    {
      name: "Benjamin Scott",
      role: "Farmer",
      status: "Inactive",
      lastActive: "3 weeks ago",
    },
    {
      name: "Amelia Young",
      role: "Vet",
      status: "Active",
      lastActive: "Yesterday",
    },
    {
      name: "Elijah Hill",
      role: "Farmer",
      status: "Active",
      lastActive: "4 days ago",
    },
    {
      name: "Harper Allen",
      role: "Vet",
      status: "Active",
      lastActive: "1 week ago",
    },
  ];

  const filteredUsers =
    activeTab === "All"
      ? users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : users
          .filter((user) => user.role === activeTab.slice(0, -1))
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

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
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/40 text-[#A9BA9D] cursor-pointer"
          >
            <LayoutDashboard size={20} />{" "}
            {sidebarOpen && <span>Dashboard</span>}
          </a>
          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/40 text-[#A9BA9D] cursor-pointer"
          >
            <BarChart3 size={20} />{" "}
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>
          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/40 text-[#A9BA9D] cursor-pointer"
          >
            <FileText size={20} />{" "}
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>
          <a
            onClick={() => navigate("/admin/alerts")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/40 text-[#A9BA9D] cursor-pointer"
          >
            <Bell size={20} /> {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>
          <a
            onClick={() => navigate("/admin/users")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#556B2F]/40 text-[#A9BA9D] font-bold cursor-pointer"
          >
            <Users size={20} /> {sidebarOpen && <span>Users</span>}
          </a>
          <a
            onClick={() => navigate("/admin/admin-profile")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <UserCircle size={20} />
            {sidebarOpen && <span>Profile</span>}
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col gap-4 px-8 py-4 bg-[#1A241A] border-b border-[#2C3B2C] sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Users</h2>
            <p className="text-[#A9BA9D]">
              Manage your users, assign roles and monitor activity.
            </p>
          </div>
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-[#2C3B2C] bg-[#0A100A] text-white placeholder-[#A9BA9D] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition">
            + Add User
          </button>
        </header>

        {/* Tabs */}
        <div className="flex gap-4 px-8 py-4 bg-[#1A241A] border-b border-[#2C3B2C] sticky top-20 z-10">
          {["All", "Farmers", "Vets"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab
                  ? "bg-[#556B2F]/40 text-white"
                  : "text-[#A9BA9D] hover:bg-[#2C3B2C]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Users Table */}
        <div className="p-8">
          <div className="overflow-x-auto bg-[#1A241A] rounded-xl shadow-sm">
            <table className="w-full text-sm text-left text-[#A9BA9D]">
              <thead className="text-xs uppercase bg-[#0A100A] text-[#A9BA9D]">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Last Active</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index} className="border-b border-[#2C3B2C]">
                    <td className="px-6 py-4 font-medium text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-[#556B2F]/40 text-white"
                            : "bg-[#2C3B2C]/40 text-[#A9BA9D]"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{user.lastActive}</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        className="font-medium text-[#556B2F] hover:underline"
                        href="#"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2 text-[#A9BA9D]">
            <button className="px-3 py-1 rounded-lg bg-[#2C3B2C] hover:bg-[#556B2F]/40">
              {"<"}
            </button>
            <button className="px-3 py-1 rounded-lg bg-green-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-lg bg-[#2C3B2C] hover:bg-[#556B2F]/40">
              2
            </button>
            <button className="px-3 py-1 rounded-lg bg-[#2C3B2C] hover:bg-[#556B2F]/40">
              3
            </button>
            <span className="px-3 py-1">...</span>
            <button className="px-3 py-1 rounded-lg bg-[#2C3B2C] hover:bg-[#556B2F]/40">
              10
            </button>
            <button className="px-3 py-1 rounded-lg bg-[#2C3B2C] hover:bg-[#556B2F]/40">
              {">"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
