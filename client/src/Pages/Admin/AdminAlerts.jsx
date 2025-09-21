// client/src/Pages/Admin/AdminAlerts.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  Users,
  AlertTriangle,
  User,
  X,
  Menu,
} from "lucide-react";

export default function AdminAlerts() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [reports, setReports] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [sentNotifications, setSentNotifications] = useState([]);

  const handleSendNotification = (e) => {
    e.preventDefault();
    const newNotification = {
      id: Date.now(),
      reports,
      location,
      message,
      time: new Date().toLocaleString(),
    };
    setSentNotifications([newNotification, ...sentNotifications]);
    setReports("");
    setLocation("");
    setMessage("");
  };

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
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white cursor-pointer"
          >
            <BarChart3 size={20} />
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>

          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white cursor-pointer"
          >
            <FileText size={20} />
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>

          <a
            onClick={() => navigate("/admin/alerts")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-red-900/40 text-red-400 font-bold cursor-pointer"
          >
            <AlertTriangle size={20} className="text-red-400" />
            {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>

          <a
            onClick={() => navigate("/admin/users")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white cursor-pointer"
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
          <h2 className="text-2xl font-bold text-white">Alerts & Outbreaks</h2>
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

        {/* Alerts Content */}
        <div className="p-8 space-y-12">
          {/* Recent Alerts */}
          <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-red-400 mb-4">
              Recent Alerts
            </h3>
            <div className="overflow-x-auto">
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
                <tbody>
                  <tr className="border-t border-[#3A4B3A]">
                    <td className="px-6 py-4">AL-1024</td>
                    <td className="px-6 py-4">Green Valley Farm</td>
                    <td className="px-6 py-4">Odisha</td>
                    <td className="px-6 py-4">Bird Flu</td>
                    <td className="px-6 py-4 text-red-400 font-semibold">
                      High
                    </td>
                    <td className="px-6 py-4">2025-09-21 10:45</td>
                  </tr>
                  <tr className="border-t border-[#3A4B3A]">
                    <td className="px-6 py-4">AL-1025</td>
                    <td className="px-6 py-4">Sunrise Farms</td>
                    <td className="px-6 py-4">Bhubaneswar</td>
                    <td className="px-6 py-4">Foot and Mouth</td>
                    <td className="px-6 py-4 text-yellow-400 font-semibold">
                      Medium
                    </td>
                    <td className="px-6 py-4">2025-09-21 09:30</td>
                  </tr>
                  <tr className="border-t border-[#3A4B3A]">
                    <td className="px-6 py-4">AL-1026</td>
                    <td className="px-6 py-4">Hilltop Dairy</td>
                    <td className="px-6 py-4">Cuttack</td>
                    <td className="px-6 py-4">Lumpy Skin</td>
                    <td className="px-6 py-4 text-green-400 font-semibold">
                      Low
                    </td>
                    <td className="px-6 py-4">2025-09-21 08:10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Send Notifications Form */}
          <div className="bg-[#2C3B2C] p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Send Notifications
            </h3>
            <form
              onSubmit={handleSendNotification}
              className="space-y-4 max-w-md"
            >
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Number of Reports
                </label>
                <input
                  type="number"
                  value={reports}
                  onChange={(e) => setReports(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#1A241A] border border-[#2C3B2C] text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter affected locations"
                  className="w-full p-2 rounded-md bg-[#1A241A] border border-[#2C3B2C] text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Notification Message
                </label>
                <textarea
                  value={message}
                  placeholder="Enter a message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#1A241A] border border-[#2C3B2C] text-white"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-[#556B2F] rounded-md text-white font-semibold hover:bg-[#6B8B3F]"
              >
                Send Notification
              </button>
            </form>

            {/* Sent Notifications List */}
            {sentNotifications.length > 0 && (
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2">
                  Sent Notifications
                </h4>
                <ul className="text-[#A9BA9D] space-y-2">
                  {sentNotifications.map((note) => (
                    <li
                      key={note.id}
                      className="border border-[#3A4B3A] p-2 rounded-md"
                    >
                      <p>
                        <strong>Reports:</strong> {note.reports},{" "}
                        <strong>Location:</strong> {note.location}
                      </p>
                      <p>
                        <strong>Message:</strong> {note.message}
                      </p>
                      <p className="text-xs text-[#A9BA9D]">
                        Sent at: {note.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
