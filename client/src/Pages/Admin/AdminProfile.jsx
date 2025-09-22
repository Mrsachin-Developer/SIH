import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { Mail, Shield, Briefcase, Phone, MapPin } from "lucide-react";
const AdminProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    email: "admin@example.com",
    phone: "9876543210",
    address: "456 Admin Street, New York",
    role: "Super Admin",
    department: "Operations",
  });

  const isActive = (path) =>
    location.pathname === path
      ? "bg-[#556B2F]/40 text-[#A9BA9D] font-bold"
      : "hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] text-white";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen "> 
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-16"}  
    bg-[#050505] border-r border-[#2C3B2C] flex flex-col transition-all duration-300`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-6 border-b border-[#2C3B2C]">
          {/* Logo only when expanded */}
          {sidebarOpen && (
            <img
              onClick={() => navigate("/farmer/dashboard")}
              className="w-32 cursor-pointer"
              src="\src\assets\pnhg.png"
              alt="Logo"
            />
          )}

          {/* Toggle Button */}
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
        <nav className="flex-1 px-2 py-6 space-y-2">
          <a
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 font-bold cursor-pointer"
          >
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </a>

          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <BarChart3 size={20} />
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>

          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <FileText size={20} />
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>

          <a
            onClick={() => navigate("/admin/alerts")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Bell size={20} />
            {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>

          <a
            onClick={() => navigate("/admin/users")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Users size={20} />
            {sidebarOpen && <span>Users</span>}
          </a>

          <a
            onClick={() => navigate("/admin/admin-profile")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/20 text-primary shadow-inner transition-colors"
          >
            <UserCircle size={20} />
            {sidebarOpen && <span>Profile</span>}
          </a>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-[#2C3B2C]">
          {sidebarOpen && (
            <p className="text-sm text-[#A9BA9D]">© 2024 AgriTrack</p>
          )}
        </div>
      </aside>



      {/* Main */}
      <main className="flex-1">
        <div className="min-h-screen bg-[#121212] text-white flex flex-col px-6 py-8">

          {/* Profile Header */}
          <div className="flex items-center justify-between border-b pb-6">
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={profileImage || "src/assets/adminprofile.png"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#20df6c] shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-wide">
                  {formData.name}
                </h2>
                <p className="text-[#20df6c] font-medium">
                  {formData.role}
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Mail size={16} /> {formData.email}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => navigate("/admin-profileEdit")}
                className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition"
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/login")}
                className="bg-[#da3a3a] hover:bg-[#bb0000] text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition"
              >
                Log Out
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
              <Shield className="text-[#20df6c]" />
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-xl font-semibold">{formData.role}</p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
              <Users className="text-[#20df6c]" />
              <div>
                <p className="text-sm text-gray-400">Department</p>
                <p className="text-xl font-semibold">{formData.department}</p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
              <Briefcase className="text-[#20df6c]" />
              <div>
                <p className="text-sm text-gray-400">Status</p>
                <p className="text-xl font-semibold">Active</p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow space-y-4">
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} /> Phone
              </p>
              <p className="text-lg font-medium">{formData.phone}</p>

              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} /> Address
              </p>
              <p className="text-lg font-medium">{formData.address}</p>
            </div>

            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow space-y-4">
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                🏢 Department
              </p>
              <p className="text-lg font-medium">{formData.department}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminProfilePage;
