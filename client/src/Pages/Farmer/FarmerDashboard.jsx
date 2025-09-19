import React, { useEffect, useState } from "react";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CampaignIcon from "@mui/icons-material/Campaign";
import ReportIcon from "@mui/icons-material/Report";
import GridViewIcon from "@mui/icons-material/GridView";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Sidebar from "../../Components/Farmer/SideBar";

export default function FarmerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle resize to show/hide sidebar at md breakpoint

  return (
    <div className="bg-background-dark font-display text-text-light flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 main-content">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-sm border-b border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>

              <div className="flex-1" />

              <div className="flex items-center gap-3">
                {/* Alert Button (left of notifications) */}
                <button className="flex items-center gap-2 rounded-md bg-red-900 px-3 py-1 text-red-300 hover:bg-red-800 transition text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 17.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1-5.5h-2V7h2v7z" />
                  </svg>
                  <span className="font-medium">Alert</span>
                </button>

                {/* Notification Icon */}
                <button className="relative rounded-full p-2 text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <NotificationsIcon />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* Profile Avatar */}
                <div
                  className="w-9 h-9 rounded-full bg-cover bg-center border-2 border-primary"
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
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Left column */}
              <div className="lg:col-span-2 space-y-4">
                {/* Risk Overview */}
                <div className="bg-card-dark rounded-xl p-4 shadow-lg">
                  <h2 className="text-lg font-bold text-white mb-3">
                    Risk Overview
                  </h2>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">
                        Current Farm Risk Score
                      </p>
                      <p className="text-4xl font-bold text-primary">Low</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Your farm's risk score is looking great. Keep up the
                        good work!
                      </p>
                    </div>
                    <div
                      className="flex-1 w-full sm:w-auto h-44 rounded-lg bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOgSJ5jf5d5Mxd4gluXnqHuWt4M6eXbYdKRfJguYmEYjZcKPbuva9EQUH_2bo4n0iX8LA6o7VKY1BGMsZOJKw3VqgdN9Nj5gvAUTerqtEtZ8rwioaT7z3o7W6ncXQAtgkNeQv2bNBG5l6UL9qxaPP3kFuABukd4re4c6F39v2EouZwCAA57MqnJfh_H1l5L-VP0_byZ_ePpeKakNDNEXaihzhr0ZOJnqQ2AW658C85bU30GXh-jx_wH3EWDOOrGYBCe2yrP3NXAsGM")',
                      }}
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all">
                    <PlaylistAddCheckIcon />
                    <span>Take Survey</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all">
                    <CampaignIcon />
                    <span>View Alerts</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all">
                    <ReportIcon />
                    <span>Report Incident</span>
                  </button>
                </div>

                {/* Upcoming tasks */}
                <div>
                  <h2 className="text-lg font-bold text-white mb-3">
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
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                          {task.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">{task.title}</p>
                          <p className="text-sm text-gray-400">{task.time}</p>
                        </div>
                        <button className="text-sm font-medium text-primary hover:underline">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right column */}{" "}
              <div className="space-y-8">
                {" "}
                <div>
                  {" "}
                  <h2 className="text-xl font-bold text-white mb-4">
                    {" "}
                    Government Alerts{" "}
                  </h2>{" "}
                  <div
                    className="relative bg-cover bg-center rounded-lg h-64 flex flex-col justify-end p-6 text-white"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-sBkdz-hLr0R4-WnJY_YYRnbTrB9WhPf38mCgdKRzgZ6tEfswEksfftJB-9kDloFC9KZZGakbFjmLcAT5MM1G7JcLvhDad7buBVV820leZUIgzsXCTBnbBlPypHMrvCNy366rQwqBhDOkRV7j4d6Mi1hOfnTtGY0dutM_CeZeqeQ97W0HyZMPlWwa6n62_7CMWD_Or5RkibX0_KIo5vIcQFpl7lMNwEtGAYqNimZ3R9TWGIAFZ7y0UoBNDnc1yi6TMx7vLGnXKt11")',
                    }}
                  >
                    {" "}
                    <h3 className="text-lg font-bold">
                      {" "}
                      New Subsidy Program Announced{" "}
                    </h3>{" "}
                    <p className="text-sm text-gray-200">
                      {" "}
                      Learn more about the new subsidy program for small
                      farmers.{" "}
                    </p>{" "}
                    <a
                      href="#"
                      className="text-sm font-bold text-primary mt-2 hover:underline"
                    >
                      {" "}
                      Read More{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h2 className="text-xl font-bold text-white mb-4">
                    {" "}
                    News Ticker{" "}
                  </h2>{" "}
                  <div className="bg-card-dark p-4 rounded-lg overflow-hidden">
                    {" "}
                    <div className="relative h-45">
                      {" "}
                      <p className="absolute animate-marquee text-sm text-gray-300 ">
                        {" "}
                        [State] Issues High Alert for Avian Influenza... | New
                        Regulations for Organic Certification Effective Next
                        Month... | Market Prices for Soybeans Surge...{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </main>{" "}
      </div>{" "}
    </div>
  );
}
