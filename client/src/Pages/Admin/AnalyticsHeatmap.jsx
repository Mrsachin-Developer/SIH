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
  UserCircle,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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
              <UserCircle className="w-8 h-8 text-[#A9BA9D]" />
              <div className="hidden md:block">
                <p className="font-semibold text-white">Admin User</p>
                <p className="text-sm text-[#A9BA9D]">admin@agritrack.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="p-8 flex flex-wrap gap-3">
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

        {/* Map */}
        <div className="p-8">
          <h3 className="text-lg font-bold text-white mb-2">
            Outbreak Heatmap
          </h3>
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden">
            <MapContainer
              center={[20.2961, 85.8245]} // Example coordinates (Odisha)
              zoom={6}
              scrollWheelZoom={true}
              className="w-full h-full rounded-xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Example Marker */}
              <Marker position={[20.2961, 85.8245]}>
                <Popup>Nabarangpur District</Popup>
              </Marker>
            </MapContainer>

            {/* Zoom / “Near Me” Buttons */}
            <div className="flex flex-col items-end gap-2 absolute right-2 bottom-2 sm:right-4 sm:bottom-4">
              <div className="flex flex-col rounded-lg shadow-md bg-[#0A100A]/80 backdrop-blur-sm">
                <button className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-t-lg hover:bg-[#4CDF20]/10 transition-colors">
                  <span className="material-symbols-outlined text-[#A9BA9D]">
                    add
                  </span>
                </button>
                <div className="w-full h-px bg-[#4CDF20]/20"></div>
                <button className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-b-lg hover:bg-[#4CDF20]/10 transition-colors">
                  <span className="material-symbols-outlined text-[#A9BA9D]">
                    remove
                  </span>
                </button>
              </div>
              <button className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg bg-[#0A100A]/80 backdrop-blur-sm shadow-md hover:bg-[#4CDF20]/10 transition-colors">
                <span className="material-symbols-outlined text-[#A9BA9D]">
                  near_me
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Predictive Layer */}
        <div className="border-t border-[#4CDF20]/20 pt-4 mt-6 px-8">
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
      </main>
    </div>
  );
}
