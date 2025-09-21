import React, { useState } from "react";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CampaignIcon from "@mui/icons-material/Campaign";
import ReportIcon from "@mui/icons-material/Report";
import Sidebar from "../../Components/Farmer/SideBar";
import { useNavigate } from "react-router-dom";
import TickPlacementBars from "../../Components/Farmer/dashboard/RiskGraph.jsx";

// React Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function FarmerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark font-display text-text-light flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-sm border-b border-border-dark">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>

              <div className="flex-1" />

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Alert Button */}
                <button className="flex items-center gap-2 rounded-md bg-red-900 px-2 py-1 sm:px-3 text-red-300 hover:bg-red-800 transition text-xs sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    aria-hidden
                  >
                    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 17.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1-5.5h-2V7h2v7z" />
                  </svg>
                  <span className="font-medium">Alert</span>
                </button>

                {/* Notification Icon */}
                <button
                  className="relative rounded-full p-1.5 sm:p-2 text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <NotificationsIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* Profile Avatar */}
                <div
                 onClick={() => navigate("/farmer/profile")}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cover bg-center border-2 border-primary"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApitNH8Vxnlc0ZDXYm8zpeRLXuadImTIP_C4nv1LyDXu-3cgVuormhICIcO5yt8aulZqgNb-3HS73TOWWRH7NHWgILrtHvi7_Lvr7oBs06O0LF1vC0BBdcxvd1e3g67DFTFf1AQP4QmSAOL5jtuLKwHjJsKrWohiLTtiqofDa8e8rrQ7NBy5jtLZbZ27cRYZYs2Dfi7CAKkxfl4hQvXHP35330vmeUrWqApgTqMBN2JTggjYmpqOrF_h9qXKpjLkHkFEHUjy2J9WUf")',
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-grow h-screen container mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 bg-[#121212]">
          <div className="max-w-7xl mx-auto h-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Left column */}
              <div className="lg:col-span-2 space-y-4">
                {/* Risk Overview */}
                <div className="bg-card-dark rounded-xl p-3 sm:p-4 shadow-lg">
                  <h2 className="text-base sm:text-lg font-bold text-white mb-3">
                    Risk Overview
                  </h2>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-400">
                        Current Farm Risk Score
                      </p>
                      <p className="text-3xl sm:text-4xl font-bold text-primary">
                        Low
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">
                        Your farm's risk score is looking great. Keep up the
                        good work!
                      </p>
                    </div>
                    <div
                      className="flex-1 w-full sm:w-auto h-32 sm:h-44 rounded-lg bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOgSJ5jf5d5Mxd4gluXnqHuWt4M6eXbYdKRfJguYmEYjZcKPbuva9EQUH_2bo4n0iX8LA6o7VKY1BGMsZOJKw3VqgdN9Nj5gvAUTerqtEtZ8rwioaT7z3o7W6ncXQAtgkNeQv2bNBG5l6UL9qxaPP3kFuABukd4re4c6F39v2EouZwCAA57MqnJfh_H1l5L-VP0_byZ_ePpeKakNDNEXaihzhr0ZOJnqQ2AW658C85bU30GXh-jx_wH3EWDOOrGYBCe2yrP3NXAsGM")',
                      }}
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    className="flex items-center justify-center gap-1 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all text-sm sm:text-base"
                    onClick={() => navigate("/farmer/survey")}
                  >
                    <PlaylistAddCheckIcon />
                    <span>Take Survey</span>
                  </button>

                  <button
                    onClick={() => navigate("/farmer/alert")}
                    className="flex items-center justify-center gap-1 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all text-sm sm:text-base"
                  >
                    <CampaignIcon />
                    <span>View Alerts</span>
                  </button>

                  <button
                    className="flex items-center justify-center gap-1 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all text-sm sm:text-base"
                    onClick={() => navigate("/farmer/incident-report")}
                  >
                    <ReportIcon />
                    <span>Report Incident</span>
                  </button>
                </div>

                {/* Upcoming tasks */}
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-3">
                    Upcoming Tasks
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        icon: <VaccinesIcon />,
                        title: "Vaccination Reminder",
                        time: "Due in 2 days",
                      },
                      {
                        icon: <CleaningServicesIcon />,
                        title: "Cleaning Checklist",
                        time: "Due in 5 days",
                      },
                      {
                        icon: <DescriptionIcon />,
                        title: "Compliance Check",
                        time: "Due in 7 days",
                      },
                    ].map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-card-dark p-3 rounded-lg"
                      >
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 text-primary">
                          {task.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white text-sm sm:text-base">
                            {task.title}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {task.time}
                          </p>
                        </div>
                        <button className="text-xs sm:text-sm font-medium text-primary hover:underline">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                {/* Vets Nearby Map */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Vets Nearby
                  </h2>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <MapContainer
                      center={[20.5937, 78.9629]} // Default India
                      zoom={5}
                      scrollWheelZoom={true}
                      className="w-full h-full"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />

                      <Marker position={[28.6139, 77.209]}>
                        <Popup>
                          Delhi Veterinary Hospital <br /> Open 24/7
                        </Popup>
                      </Marker>

                      <Marker position={[19.076, 72.8777]}>
                        <Popup>
                          Mumbai Vet Clinic <br /> Contact: +91-123456789
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>

                {/* Risk Graph */}
                <div className="bg-[#1E1E1E] rounded-2xl p-2 shadow-lg ">
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-1 p-2">
                    Risk Graph
                  </h2>
                  <TickPlacementBars />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
