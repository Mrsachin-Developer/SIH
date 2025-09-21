import React, { useState } from "react";
import Sidebar from "../../Components/Vet/Sidebar";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, XCircle, Camera } from "lucide-react";

const VetProfileEdit = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "Dr. John Doe",
    email: "vet@example.com",
    phone: "+91 9876543210",
    address: "123 Green Valley, Pune, India",
    specialization: "Cattle & Dairy",
    bio: "Dr. John Doe Veterinary Officer – Poultry & Swine Health Specialist. Dr. John Doe is a dedicated veterinary professional with over 7 years of experience in livestock health and farm biosecurity. She has worked closely with rural farmers to prevent and manage outbreaks such as Avian Influenza and Swine Fever. Passionate about animal welfare and farmer awareness, she specializes in practical, low-cost solutions that help farmers improve productivity while keeping their animals safe.",
    profilePic: "src/assets/doctorprofile.png", // default
  });

  const [notification, setNotification] = useState(null);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle profile picture upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);

    // Show notification card
    setNotification({
      type: "success",
      message: "Profile Updated Successfully ✅",
    });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setNotification(null);
      navigate("/vet-profile");
    }, 3000);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-64">
        <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center px-4 py-8">
          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-6">Edit Vet Profile</h1>

          {/* Notification Card */}
          {notification && (
            <div
              className={`fixed top-6 right-6 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg transition-all duration-300 ${
                notification.type === "success"
                  ? "bg-[#20df6c] text-[#111714]"
                  : "bg-red-500 text-white"
              }`}
            >
              {notification.type === "success" ? (
                <CheckCircle2 size={22} />
              ) : (
                <XCircle size={22} />
              )}
              <p className="font-medium">{notification.message}</p>
            </div>
          )}

          {/* Profile Container */}
          <div className="w-full max-w-2xl bg-[#1f1f1f] rounded-2xl shadow-lg p-6 space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <img
                  src={profile.profilePic}
                  alt=""
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#20df6c] shadow-md"
                />
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("fileInput").click()
                  }
                  className="absolute bottom-0 right-0 bg-[#20df6c] text-[#111714] p-2 rounded-full shadow hover:scale-110 transition"
                >
                  <Camera size={16} />
                </button>
              </div>
              {/* Hidden file input */}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                />
              </div>

              {/* Specialization */}
              <div>
                <label className="block text-sm mb-1">Specialization</label>
                <select
                  name="specialization"
                  value={profile.specialization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                >
                  <option>Cattle & Dairy</option>
                  <option>Poultry</option>
                  <option>Sheep & Goats</option>
                  <option>Equine</option>
                  <option>Companion Animals</option>
                </select>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                ></textarea>
              </div>

              {/* Submit + Discard Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/vet-profile")}
                  className="bg-gray-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-500 transition"
                >
                  Discard
                </button>

                <button
                  type="submit"
                  className="bg-[#20df6c] text-[#111714] px-6 py-2 rounded-xl font-semibold hover:bg-[#18b858] shadow-md hover:scale-105 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VetProfileEdit;
