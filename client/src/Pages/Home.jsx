import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="relative flex flex-col min-h-screen w-full bg-[#121212]"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <style>{`html {scroll-behavior: smooth;}`}</style>

      {/* Header */}
      <header className="border-b border-b-[#29382f] px-4 md:px-10 py-3">
        <div className="flex items-center justify-between">
          <img
            src="src/assets/pnhg.png"
            alt=""
            className="m-2 w-14 h-14 md:w-24 md:h-24 cursor-pointer"
            onClick={goToHome}
          />

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {["home", "features", "about", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-white text-sm font-medium group transition duration-300"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#20df6c]"></span>
                </a>
              ))}
            </div>
            <button
              onClick={() => navigate("/ids")}
              className="h-10 px-4 rounded-xl bg-[#20df6c] text-[#111714] text-sm font-bold cursor-pointer hover:bg-[#18b558] transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="flex flex-col mt-4 gap-4 md:hidden">
            {["home", "features", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-white text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button
              onClick={() => {
                navigate("/ids");
                setMenuOpen(false);
              }}
              className="w-full py-2 rounded-xl bg-[#20df6c] text-[#111714] font-bold hover:bg-[#18b558] transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <div id="home" className="px-4 md:px-10 lg:px-40 flex flex-1 w-full py-5">
        <div className="flex flex-col w-full flex-1">
          <div
            className="flex min-h-[320px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 md:px-10 pb-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("src/assets/veterinary-farm-walking-cowshed-checking-cows.jpg")`,
            }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-black">
              Smart Livestock Disease Monitoring and Risk Prediction
            </h1>
            <h2 className="text-white text-sm md:text-base">
              Empowering veterinarians and extension workers with advanced tools
              for proactive livestock health management.
            </h2>
            <button
              onClick={() => navigate("/ids")}
              className="w-full sm:w-auto h-12 px-5 rounded-xl bg-[#20df6c] text-[#111714] text-base font-bold mt-4 cursor-pointer hover:bg-[#18b558] transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Features */}
          <section id="features" className="flex flex-col gap-10 px-4 py-10">
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-black">
                Key Features
              </h1>
              <p className="text-white text-sm md:text-base max-w-[720px]">
                Our platform offers a comprehensive suite of tools designed to
                enhance livestock health management.
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              {[
                {
                  img: "src/assets/real-time-monitoring-in-traceability.png",
                  title: "Real-time Monitoring",
                  desc: "Track livestock health metrics in real-time with dashboards and alerts.",
                },
                {
                  img: "src/assets/risk-assessment-concept-with-form-and-magnifier-illustration-vector.jpg",
                  title: "Risk Prediction",
                  desc: "Predict disease outbreaks using algorithms and historical data.",
                },
                {
                  img: "src/assets/colab-platform.png",
                  title: "Collaborative Platform",
                  desc: "Seamless collaboration between veterinarians and extension workers.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-3 p-4 sm:p-6 rounded-lg border border-[#3d5245] bg-[#1e1e1e]"
                >
                  <div className="relative w-full h-40">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-md"></div>
                  </div>
                  <h2 className="text-white font-bold mt-2">{card.title}</h2>
                  <p className="text-[#9eb7a8] text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="flex flex-col gap-10 px-4 py-10">
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-black">
                About Us
              </h1>
              <p className="text-white text-sm md:text-base max-w-[720px]">
                Experience the benefits of a data-driven approach to livestock
                health.
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-lg border border-[#3d5245] bg-[#1e1e1e]">
                <p className="text-[#9eb7a8] text-sm">
                  We are a team of innovators building a Digital Biosecurity
                  Management Portal to protect pig and poultry farms from
                  devastating diseases like Avian Influenza and African Swine
                  Fever… (your text unchanged)
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="flex flex-col gap-10 px-4 py-10">
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-black">
                Contact Us
              </h1>
              <p className="text-white text-sm md:text-base max-w-[720px]">
                Write feedbacks or reviews to improvise your Experience
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-lg border border-[#3d5245] bg-[#1e1e1e]">
                <p className="text-[#9eb7a8] text-sm">
                  “Have questions, feedback, or want to collaborate with us?
                  Reach out…”
                </p>
                <form className="flex flex-col gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white placeholder-[#9eb7a8] border border-[#3d5245] focus:outline-none focus:border-[#20df6c]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white placeholder-[#9eb7a8] border border-[#3d5245] focus:outline-none focus:border-[#20df6c]"
                  />
                  <textarea
                    rows="5"
                    placeholder="Write your complaint or query..."
                    className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white placeholder-[#9eb7a8] border border-[#3d5245] focus:outline-none focus:border-[#20df6c] resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full sm:w-auto py-2 rounded-lg bg-[#20df6c] text-[#111714] font-bold hover:bg-[#18b558] transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col justify-center items-center gap-6 py-20 px-4">
            <h1 className="text-white text-3xl md:text-4xl font-black text-center max-w-[720px]">
              Ready to Transform Livestock Health Management?
            </h1>
            <p className="text-white text-sm md:text-base text-center max-w-[720px]">
              Join our platform today and take the first step…
            </p>
            <button
              onClick={() => navigate("/ids")}
              className="w-full sm:w-auto h-12 px-5 rounded-xl bg-[#20df6c] text-[#111714] text-base font-bold cursor-pointer hover:bg-[#18b558] transition-colors"
            >
              Get Started
            </button>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center border-t border-[#29382f] py-10 px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
            <a href="#" className="text-[#9eb7a8]">
              Privacy Policy
            </a>
            <a href="#" className="text-[#9eb7a8]">
              Terms of Service
            </a>
          </div>
          <p className="text-[#9eb7a8] text-xs md:text-sm text-center">
            © 2024 Livestock Health Insights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
