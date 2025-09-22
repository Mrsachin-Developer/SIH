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
  UserCircle,
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
    <div className="flex flex-col md:flex-row h-screen bg-[#121212]">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-full md:w-64" : "w-16"
          } bg-[#050505] border-r border-[#2C3B2C] flex flex-col transition-all duration-300`}
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
            className="p-2 rounded-lg hover:bg-[#2C3B2C] ml-auto"
          >
            {sidebarOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 md:px-4 py-4 md:py-6 space-y-2">
          <a
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 text-white cursor-pointer"
          >
            <LayoutDashboard size={20} className="shrink-0" />
            {sidebarOpen && <span className="ml-3">Dashboard</span>}
          </a>

          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 text-white cursor-pointer"
          >
            <BarChart3 size={20} className="shrink-0" />
            {sidebarOpen && <span className="ml-3">Analysis & Heatmap</span>}
          </a>

          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 text-white cursor-pointer"
          >
            <FileText size={20} className="shrink-0" />
            {sidebarOpen && <span className="ml-3">Compliance & Reports</span>}
          </a>

          <a
            onClick={() => navigate("/admin/alerts")}
            className="flex items-center px-4 py-2 rounded-lg bg-red-900/40 text-red-400 font-bold cursor-pointer"
          >
            <AlertTriangle size={20} className="text-[#db2525] shrink-0" />
            {sidebarOpen && (
              <span className="ml-3 text-[#db2525]">Alerts & Outbreaks</span>
            )}
          </a>

          <a
            onClick={() => navigate("/admin/users")}
            className="flex items-center px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 text-white cursor-pointer"
          >
            <Users size={20} className="shrink-0" />
            {sidebarOpen && <span className="ml-3">Users</span>}
          </a>

          <a
            onClick={() => navigate("/admin/admin-profile")}
            className="flex items-center px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] text-white"
          >
            <UserCircle size={20} className="shrink-0" />
            {sidebarOpen && <span className="ml-3">Profile</span>}
          </a>
        </nav>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-[#2C3B2C]">
          {sidebarOpen && (
            <p className="text-sm text-[#A9BA9D]">© 2024 AgriTrack</p>
          )}
        </div>
      </aside>


      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-4 bg-[#121212] border-b border-[#2C3B2C] sticky top-0 z-10 space-y-2 md:space-y-0">
          <h2 className="text-2xl font-bold text-white">Alerts & Outbreaks</h2>
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

        {/* Alerts Content */}
        <div className="p-4 md:p-8 space-y-12">
          {/* Recent Alerts */}
          <div className="bg-[#1f1f1f] p-4 md:p-6 rounded-xl shadow-sm overflow-x-auto">
            <h3 className="text-lg font-bold text-[#db2525] mb-4">
              Recent Alerts
            </h3>
            <table className="w-full text-sm text-left text-[#A9BA9D] min-w-[600px] md:min-w-full">
              <thead className="text-xs uppercase bg-[#292e2b] text-white">
                <tr>
                  <th className="px-4 md:px-6 py-3">Alert ID</th>
                  <th className="px-4 md:px-6 py-3">Farm Name</th>
                  <th className="px-4 md:px-6 py-3">Location</th>
                  <th className="px-4 md:px-6 py-3">Issue</th>
                  <th className="px-4 md:px-6 py-3">Severity</th>
                  <th className="px-4 md:px-6 py-3">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#3A4B3A]">
                  <td className="px-4 md:px-6 py-4">AL-1024</td>
                  <td className="px-4 md:px-6 py-4">Green Valley Farm</td>
                  <td className="px-4 md:px-6 py-4">Odisha</td>
                  <td className="px-4 md:px-6 py-4">Bird Flu</td>
                  <td className="px-4 md:px-6 py-4 text-[#db2525] font-semibold">
                    High
                  </td>
                  <td className="px-4 md:px-6 py-4">2025-09-21 10:45</td>
                </tr>
                <tr className="border-t border-[#3A4B3A]">
                  <td className="px-4 md:px-6 py-4">AL-1025</td>
                  <td className="px-4 md:px-6 py-4">Sunrise Farms</td>
                  <td className="px-4 md:px-6 py-4">Bhubaneswar</td>
                  <td className="px-4 md:px-6 py-4">Foot and Mouth</td>
                  <td className="px-4 md:px-6 py-4 text-yellow-400 font-semibold">
                    Medium
                  </td>
                  <td className="px-4 md:px-6 py-4">2025-09-21 09:30</td>
                </tr>
                <tr className="border-t border-[#3A4B3A]">
                  <td className="px-4 md:px-6 py-4">AL-1026</td>
                  <td className="px-4 md:px-6 py-4">Hilltop Dairy</td>
                  <td className="px-4 md:px-6 py-4">Cuttack</td>
                  <td className="px-4 md:px-6 py-4">Lumpy Skin</td>
                  <td className="px-4 md:px-6 py-4 text-green-400 font-semibold">
                    Low
                  </td>
                  <td className="px-4 md:px-6 py-4">2025-09-21 08:10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Send Notifications Form */}
          <div className="bg-[#1f1f1f] p-4 md:p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Send Notifications
            </h3>
            <form
              onSubmit={handleSendNotification}
              className="space-y-4 max-w-full md:max-w-md"
            >
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Number of Reports
                </label>
                <input
                  type="number"
                  value={reports}
                  onChange={(e) => setReports(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#292e2b] border border-[#2C3B2C] text-white"
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
                  className="w-full p-2 rounded-md bg-[#292e2b] border border-[#2C3B2C] text-white"
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
                  className="w-full p-2 rounded-md bg-[#292e2b] border border-[#2C3B2C] text-white"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-[#21c45d] rounded-md  font-semibold hover:bg-[#18b858] text-[#111714]"
              >
                Send Notification
              </button>
            </form>

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
