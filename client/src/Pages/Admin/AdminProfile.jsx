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

const AdminProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "Admin Jane Doe",
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
    <div className="flex flex-col md:flex-row h-screen bg-[#0A100A]">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-[#1A241A] border-r border-[#2C3B2C] flex flex-col transition-all duration-300 md:h-screen`}
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
            className="p-2 rounded-lg hover:bg-[#2C3B2C] md:hidden"
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
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive(
              "/admin/dashboard"
            )}`}
          >
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </a>
          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive(
              "/admin/analytics-heatmap"
            )}`}
          >
            <BarChart3 size={20} />
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>
          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive(
              "/admin/ComplianceReports"
            )}`}
          >
            <FileText size={20} />
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>
          <a
            onClick={() => navigate("/admin/alerts")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive(
              "/admin/alerts"
            )}`}
          >
            <Bell size={20} />
            {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>
          <a
            onClick={() => navigate("/admin/users")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive(
              "/admin/users"
            )}`}
          >
            <Users size={20} />
            {sidebarOpen && <span>Users</span>}
          </a>
          <a
            onClick={() => navigate("/admin/admin-profile")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive(
              "/admin/admin-profile"
            )}`}
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
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 py-4 bg-[#1A241A] border-b border-[#2C3B2C] sticky top-0 z-10 gap-3">
          <h2 className="text-2xl font-bold text-white">Admin Profile</h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-[#2C3B2C]">
              <Bell className="text-[#A9BA9D]" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center gap-2">
              <img
                alt="Admin avatar"
                className="w-10 h-10 rounded-full border"
                src="https://i.pravatar.cc/40"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <UserCircle className="w-8 h-8 text-[#A9BA9D]" />
              <div className="hidden md:block">
                <p className="font-semibold text-white">{formData.name}</p>
                <p className="text-sm text-[#A9BA9D]">{formData.email}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <div className="p-4 sm:p-8 bg-[#111714] min-h-screen">
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b pb-6 gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <img
                  src={profileImage || "src/assets/adminprofile.png"}
                  className="w-28 h-28 rounded-full object-cover border"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {formData.name}
                </h2>
                <p className="text-gray-400">{formData.role}</p>
                <p className="text-sm text-gray-500">{formData.email}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => navigate("/admin-profileEdit")}
                className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-medium transition"
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/login")}
                className="bg-[#da3a3a] hover:bg-[#bb0000] text-white px-6 py-2 rounded-xl font-medium transition"
              >
                Log Out
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-6 space-y-5 text-white">
            <div>
              <p className="text-sm text-gray-400">Full Name</p>
              <p className="text-lg font-medium">{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-lg">{formData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-lg">{formData.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Department</p>
              <p className="text-lg">{formData.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">BIO:</p>
              <div className="p-4 overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714] w-full lg:w-1/2">
                <p>
                  {formData.name} is a dedicated admin professional overseeing
                  operations and ensuring smooth workflow within the
                  organization. With years of experience in administration and
                  management, {formData.name} is committed to maintaining
                  efficiency, coordinating teams, and supporting organizational
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminProfilePage;
