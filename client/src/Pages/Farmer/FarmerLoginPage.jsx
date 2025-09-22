import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import logo from "../../assets/pnhg.png";

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
    navigate("/farmer/dashboard");
  };

  return (
    <div className="font-display  bg-[#121212] text-[#f8f8f8]">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">

              <img src={logo} alt="Logo" className="w-35"/>
            </div>
          </div>

          {/* Form */}
          <div className=" bg-[#1f1f1f] p-5 sm:p-6 rounded-xl shadow-2xl border border-[#333]">
            <h2 className="text-lg sm:text-xl font-bold text-center mb-1">
              Create your account
            </h2>
            <p className="text-center text-gray-400 mb-4 text-xs sm:text-sm">
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
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-xs sm:text-sm font-semibold text-green-400"
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
                className="w-full h-11  bg-[#21c45d] text-[#0A100B] font-bold rounded-lg hover:bg-green-300 transition-colors"
                type="submit"
              >
                Sign Up
              </button>

              <div className="flex-grow h-px bg-gray-700"></div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg bg-[#2a2f2c] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#333]"
                >
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg bg-[#3b5998] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#334d84]"
                >
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
                  Continue with Facebook
                </button>
              </div>
            </form>
          </div>

          {/* Footer / language selection */}
          <div className="mt-6 flex flex-col items-center space-y-4">
            <div className="relative w-full flex items-center">
              <div className="flex-grow border-t border-[#333]" />
              <span className="flex-shrink mx-2 text-gray-400 text-xs">Or</span>
              <div className="flex-grow border-t border-[#333]" />
            </div>





            <div className="w-full">
              <label className="sr-only" htmlFor="language">
                Language
              </label>
              <select
                className="w-full h-11 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:ring-green-400 focus:border-green-400 text-center"
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
