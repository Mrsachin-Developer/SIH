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

const AdminProfileEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "Admin Jane Doe",
    email: "admin@example.com",
    phone: "9876543210",
    address: "456 Admin Street, New York",
    role: "Super Admin",
    department: "Operations",
    bio: "Admin Jane Doe is a dedicated admin professional overseeing operations and ensuring smooth workflow within the organization.",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    console.log("Profile Saved:", formData);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="flex h-screen bg-[#0A100A]">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-20 top-0 left-0 h-full transition-all duration-300
          ${
            sidebarOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full md:translate-x-0 w-64"
          }
          bg-[#1A241A] border-r border-[#2C3B2C] flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#2C3B2C]">
          <h1
            className={`text-xl font-bold text-white ${
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

        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#556B2F]/40 text-[#A9BA9D] font-bold cursor-pointer"
          >
            <LayoutDashboard size={20} />{" "}
            {sidebarOpen && <span>Dashboard</span>}
          </a>
          <a
            onClick={() => navigate("/admin/analytics-heatmap")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white cursor-pointer"
          >
            <BarChart3 size={20} />{" "}
            {sidebarOpen && <span>Analysis & Heatmap</span>}
          </a>
          <a
            onClick={() => navigate("/admin/ComplianceReports")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <FileText size={20} />{" "}
            {sidebarOpen && <span>Compliance & Reports</span>}
          </a>
          <a
            onClick={() => navigate("/admin/alerts")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <Bell size={20} /> {sidebarOpen && <span>Alerts & Outbreaks</span>}
          </a>
          <a
            onClick={() => navigate("/admin/users")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <Users size={20} /> {sidebarOpen && <span>Users</span>}
          </a>
          <a
            onClick={() => navigate("/admin/admin-profile")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#556B2F]/30 hover:text-[#A9BA9D] transition-colors text-white"
          >
            <UserCircle size={20} /> {sidebarOpen && <span>Profile</span>}
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
      <main className="flex-1 overflow-y-auto relative">
        {showNotification && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            Profile changed successfully!
          </div>
        )}

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#1A241A] border-b border-[#2C3B2C] sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-[#2C3B2C]">
              <Bell className="text-[#A9BA9D]" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center gap-2">
              <img
                alt="Admin avatar"
                className="w-10 h-10 rounded-full border"
                src={profileImage || "https://i.pravatar.cc/40"}
              />
              <UserCircle className="w-8 h-8 text-[#A9BA9D]" />
              <div className="hidden md:block">
                <p className="font-semibold text-white">{formData.name}</p>
                <p className="text-sm text-[#A9BA9D]">{formData.email}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Edit Form */}
        <div className="p-8 bg-[#111714] min-h-screen">
          <div className="flex items-center justify-between border-b pb-6">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <img
                  src={profileImage || "src/assets/adminprofile.png"}
                  className="w-28 h-28 rounded-full object-cover border"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <UserCircle className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-2xl font-semibold bg-[#2C3B2C] text-white px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
                <p className="text-gray-400 mt-1">
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-[#2C3B2C] text-white px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-white">
            {["email", "phone", "address", "department"].map((field) => (
              <div key={field}>
                <p className="text-sm text-gray-400">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </p>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-[#2C3B2C] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
              </div>
            ))}
            <div>
              <p className="text-sm text-gray-400">BIO</p>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-[#2C3B2C] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleSave}
              className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-medium transition"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate("/admin/admin-profile")}
              className="bg-[#da3a3a] hover:bg-[#bb0000] text-white px-6 py-2 rounded-xl font-medium transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminProfileEdit;
