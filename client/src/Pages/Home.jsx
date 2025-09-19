import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col min-h-screen w-full bg-[#111714]"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      {/* Smooth Scroll Style */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Header */}
      <header className="flex items-center justify-between border-b border-b-[#29382f] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            {/* Logo */}
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold">Livestock Health Insights</h2>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-white text-sm font-medium" href="#home">
              Home
            </a>
            <a className="text-white text-sm font-medium" href="#features">
              Features
            </a>
            <a className="text-white text-sm font-medium" href="#about">
              About Us
            </a>
            <a className="text-white text-sm font-medium" href="#contact">
              Contact
            </a>
          </div>
          <button
            onClick={() => navigate("/ids")}
            className="h-10 px-4 rounded-xl bg-[#20df6c] text-[#111714] text-sm font-bold cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div
        id="home"
        className="px-10 md:px-20 lg:px-40 flex flex-1 w-full py-5"
      >
        <div className="flex flex-col w-full flex-1">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-10 pb-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("src/assets/veterinary-farm-walking-cowshed-checking-cows.jpg")`,
            }}
          >
            <h1 className="text-white text-5xl font-black">
              Smart Livestock Disease Monitoring and Risk Prediction
            </h1>
            <h2 className="text-white text-base">
              Empowering veterinarians and extension workers with advanced tools
              for proactive livestock health management.
            </h2>
            <button
              onClick={() => navigate("/ids")}
              className="h-12 px-5 rounded-xl bg-[#20df6c] text-[#111714] text-base font-bold mt-4 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Features */}
          <section id="features" className="flex flex-col gap-10 px-4 py-10">
            <div>
              <h1 className="text-white text-4xl font-black">Key Features</h1>
              <p className="text-white text-base max-w-[720px]">
                Our platform offers a comprehensive suite of tools designed to
                enhance livestock health management.
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              {/* Feature Cards */}
              <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#3d5245] bg-[#1c2620]">
                <h2 className="text-white font-bold">Real-time Monitoring</h2>
                <p className="text-[#9eb7a8] text-sm">
                  Track livestock health metrics in real-time with dashboards
                  and alerts.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#3d5245] bg-[#1c2620]">
                <h2 className="text-white font-bold">Risk Prediction</h2>
                <p className="text-[#9eb7a8] text-sm">
                  Predict disease outbreaks using algorithms and historical
                  data.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#3d5245] bg-[#1c2620]">
                <h2 className="text-white font-bold">Collaborative Platform</h2>
                <p className="text-[#9eb7a8] text-sm">
                  Seamless collaboration between veterinarians and extension
                  workers.
                </p>
              </div>
            </div>
          </section>

          {/* About us */}
          <section id="about" className="flex flex-col gap-10 px-4 py-10">
            <div>
              <h1 className="text-white text-4xl font-black">About Us</h1>
              <p className="text-white text-base max-w-[720px]">
                Experience the benefits of a data-driven approach to livestock
                health.
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#3d5245] bg-[#1c2620]">
                <p className="text-[#9eb7a8] text-sm">
                  We are a team of innovators building a Digital Biosecurity
                  Management Portal to protect pig and poultry farms from
                  devastating diseases like Avian Influenza and African Swine
                  Fever. Our mission is to empower farmers with simple,
                  accessible tools that make biosecurity easy to understand and
                  implement, even in rural and resource-limited areas. Through
                  risk self-checks, real-time outbreak alerts, multilingual
                  training guides, and direct vet support, we bridge the gap
                  between farmers, veterinarians, and government agencies. By
                  combining technology with practical on-ground needs, we aim to
                  reduce losses, safeguard food security, and strengthen
                  national preparedness against animal health crises.
                </p>
              </div>
            </div>
          </section>

          {/* contact us */}
          <section id="contact" className="flex flex-col gap-10 px-4 py-10">
            <div>
              <h1 className="text-white text-4xl font-black">Contact Us</h1>
              <p className="text-white text-base max-w-[720px]">
                Write feedbacks or reviews to imporvise your Experience
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#3d5245] bg-[#1c2620]">
                <p className="text-[#9eb7a8] text-sm">
                  “Have questions, feedback, or want to collaborate with us?
                  Reach out using the form below – whether you’re a farmer, vet,
                  policymaker, or researcher, we’d love to hear from you.”
                </p>

                {/* Complaint / Query Form */}
                <form className="flex flex-col gap-4 mt-4">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded-lg bg-[#111714] text-white placeholder-[#9eb7a8] border border-[#3d5245] focus:outline-none focus:border-[#20df6c]"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded-lg bg-[#111714] text-white placeholder-[#9eb7a8] border border-[#3d5245] focus:outline-none focus:border-[#20df6c]"
                  />

                  {/* Message */}
                  <textarea
                    placeholder="Write your complaint or query..."
                    rows="5"
                    className="px-4 py-2 rounded-lg bg-[#111714] text-white placeholder-[#9eb7a8] border border-[#3d5245] focus:outline-none focus:border-[#20df6c] resize-none"
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="py-2 rounded-lg bg-[#20df6c] text-[#111714] font-bold hover:bg-[#18b558] transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col justify-center items-center gap-6 py-20">
            <h1 className="text-white text-4xl font-black text-center max-w-[720px]">
              Ready to Transform Livestock Health Management?
            </h1>
            <p className="text-white text-base text-center max-w-[720px]">
              Join our platform today and take the first step towards a
              healthier future for your livestock.
            </p>
            <button
              onClick={() => navigate("/ids")}
              className="h-12 px-5 rounded-xl bg-[#20df6c] text-[#111714] text-base font-bold cursor-pointer"
            >
              Get Started
            </button>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center border-t border-[#29382f] py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-[#9eb7a8]">
              Privacy Policy
            </a>
            <a href="#" className="text-[#9eb7a8]">
              Terms of Service
            </a>
          </div>
          <p className="text-[#9eb7a8] text-sm">
            © 2024 Livestock Health Insights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
