import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import WifiOffIcon from "@mui/icons-material/WifiOff";

export default function FarmerLoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [farmType, setFarmType] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("English");

  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.trim() === "") {
      alert("Enter phone number first");
      return;
    }
    alert(`OTP sent to ${phone}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { phone, otp, name, farmType, location, language };
    console.log("Signup Data:", payload);

    // here you’d do your real signup API call
    // on success navigate to dashboard:
    navigate("/farmer/dashboard");
  };

  return (
    <div className="font-display bg-[#0A100B] text-[#f8f8f8]">
      <div className="flex flex-col items-center justify-center h-screen p-4 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <svg
                className="w-10 h-10 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M2 7L12 12L22 7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M12 22V12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <h1 className="text-3xl font-bold tracking-tight">AgriTrack</h1>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111912] p-6 rounded-xl shadow-2xl border border-[#333]">
            <h2 className="text-xl font-bold text-center mb-1">
              Create your account
            </h2>
            <p className="text-center text-gray-400 mb-4 text-sm">
              Let's get started with your farm
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-400"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    className="w-full h-11 px-4 bg-[#0A100B] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 placeholder-gray-500"
                    id="phone"
                    placeholder="Enter your phone number"
                    type="tel"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-sm font-semibold text-green-400"
                    type="button"
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-400"
                  htmlFor="otp"
                >
                  OTP
                </label>
                <input
                  className="w-full h-11 px-4 bg-[#0A100B] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 placeholder-gray-500"
                  id="otp"
                  placeholder="Enter OTP"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-400"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full h-11 px-4 bg-[#0A100B] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 placeholder-gray-500"
                  id="name"
                  placeholder="Enter your full name"
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-400"
                  htmlFor="farm-type"
                >
                  Farm Type
                </label>
                <select
                  className="w-full h-11 px-4 bg-[#0A100B] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 text-[#f8f8f8]"
                  id="farm-type"
                  value={farmType}
                  onChange={(e) => setFarmType(e.target.value)}
                >
                  <option className="text-gray-400">Select farm type</option>
                  <option>Crop Farming</option>
                  <option>Livestock</option>
                  <option>Mixed Farming</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1 text-gray-400"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="w-full h-11 px-4 bg-[#0A100B] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 placeholder-gray-500"
                  id="location"
                  placeholder="Enter your farm's location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <button
                className="w-full h-11 bg-green-400 text-[#0A100B] font-bold rounded-lg hover:bg-green-300 transition-colors"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Footer / language selection */}
          <div className="mt-6 flex flex-col items-center space-y-4">
            <div className="relative w-full flex items-center">
              <div className="flex-grow border-t border-[#333]"></div>
              <span className="flex-shrink mx-2 text-gray-400 text-xs">Or</span>
              <div className="flex-grow border-t border-[#333] "></div>
            </div>

            <div className="w-full">
              <label className="sr-only" htmlFor="language">
                Language
              </label>
              <select
                className="w-full h-11 px-4 bg-[#111912] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 text-center"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>हिंदी</option>
                <option>Local Language</option>
              </select>
            </div>

            <div className="flex items-center space-x-3 text-gray-400 text-xs text-center p-3 bg-green-400/10 rounded-lg border border-green-400/20 w-full">
              <WifiOffIcon className="text-green-400" fontSize="small" />
              <p>
                If there's no internet, signup data will be stored locally and
                synced later.
              </p>
            </div>

            <p className="text-xs text-gray-400">
              Already have an account?{" "}
              <Link
                className="font-semibold text-green-400 hover:underline"
                to="/farmer/login"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
