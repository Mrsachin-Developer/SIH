import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Farmer/Sidebar";
import { Mail, Phone, MapPin, Activity } from "lucide-react";

const FarmerProfile = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "Mr. Ramesh Kumar",
    email: "ramesh@example.com",
    phone: "9876543210",
    address: "456 Village Road, Jharkhand",
    farmType: "Poultry & Pigs",
    language: "Hindi",
  });

  // handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle image upload
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-64">
        <div className="min-h-screen bg-[#121212] text-white flex flex-col px-6 py-8">
          {/* Profile Header */}
          <div className="flex items-center justify-between border-b pb-6">
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={profileImage || "src/assets/farmerprofile.png"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#20df6c] shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-wide">
                  {formData.name}
                </h2>
                <p className="text-[#20df6c] font-medium">
                  {formData.farmType} Farmer
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
                onClick={() => navigate("/farmer-profileEdit")}
                className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition"
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => navigate("/farmer/login")}
                className="bg-[#da3a3a] hover:bg-[#bb0000] text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition"
              >
                Log Out
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
              <Activity className="text-[#20df6c]" />
              <div>
                <p className="text-sm text-gray-400">Farms Managed</p>
                <p className="text-xl font-semibold">3</p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
              <Activity className="text-[#20df6c]" />
              <div>
                <p className="text-sm text-gray-400">Animals Owned</p>
                <p className="text-xl font-semibold">120+</p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
              <Activity className="text-[#20df6c]" />
              <div>
                <p className="text-sm text-gray-400">Farm Type</p>
                <p className="text-xl font-semibold">{formData.farmType}</p>
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
                🌐 Language
              </p>
              <p className="text-lg font-medium">{formData.language}</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-2">BIO:</p>
            <div className="p-6 rounded-xl border border-[#3d5245] bg-gradient-to-br from-[#111714] to-[#1a1a1a] w-full shadow-inner overflow-y-auto max-h-60">
              <p className="leading-relaxed text-gray-300">
                Mr. Ramesh Kumar is a dedicated farmer with extensive experience
                in poultry and pig farming. He manages multiple farms
                efficiently and follows best practices to maintain animal health
                and productivity. Passionate about sustainable farming and
                community welfare, he ensures high-quality livestock production
                while educating fellow farmers about modern farming techniques.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FarmerProfile;
