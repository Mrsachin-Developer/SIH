import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const VetLogin = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (state === "Login") {
      navigate("/vet-dashboard"); // placeholder route
    } else {
      navigate("/vet/welcome"); // placeholder route
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-[#121212]"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <div className="bg-[#1e1e1e] p-4 rounded-2xl shadow-lg w-full sm:w-[450px] text-sm">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-3">
          {state === "Sign Up" ? "Create Vet Account" : "Vet Login"}
        </h2>

        <p className="text-center text-gray-400 mb-6">
          {state === "Sign Up"
            ? "Create your veterinarian account"
            : "Login to your veterinarian account"}
        </p>

        {/* Form */}
        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full">
              <img src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-4 py-2 rounded-lg bg-[#2a2f2c] text-white outline-none"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full">
            <img src={assets.mail_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2f2c] text-white outline-none"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full">
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2f2c] text-white outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          {state !== "Sign Up" && (
            <p
              onClick={() => navigate("/reset-password")}
              className="mb-4 text-green-400 cursor-pointer text-sm text-right"
            >
              Forgot password?
            </p>
          )}

          <button className="w-full py-2.5 rounded-lg bg-[#20df6c] text-[#111714] font-bold cursor-pointer">
            {state}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-2 text-gray-400 text-xs">or continue with</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Social login buttons */}
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


        {/* Switch between login/signup */}
        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-green-400 cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-green-400 cursor-pointer underline"
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default VetLogin;
