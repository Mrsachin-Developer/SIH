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
    name: "Jane Doe",
    email: "admin@example.com",
    phone: "9876543210",
    address: "456 Admin Street, New York",
    role: "Super Admin",
    department: "Operations",

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

    setTimeout(() => {
      setShowNotification(false);
      navigate("/admin/admin-profile"); // call directly
    }, 2000);
  };


  return (
    <div className="flex h-screen bg-[#121212]">
      {/* Sidebar */}


      {/* Main */}
      <main className="flex-1 overflow-y-auto relative">
        {showNotification && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            Profile changed successfully!
          </div>
        )}

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#121212] border-b border-[#2C3B2C] sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
          <div className="flex items-center gap-4">

          </div>
        </header>

        {/* Profile Edit Form */}
        <div className="p-8 bg-[#121212] min-h-screen">
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
                  className="text-2xl font-semibold bg-[#292e2b] text-white px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
                <p className="text-gray-400 mt-1">
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-[#292e2b] text-white px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
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
                  className="w-full bg-[#292e2b] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
              </div>
            ))}

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
