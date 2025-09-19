import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle resize to show/hide sidebar at md breakpoint
  useEffect(() => {
    const setSidebarState = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    setSidebarState();
    window.addEventListener("resize", setSidebarState);
    return () => window.removeEventListener("resize", setSidebarState);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark flex min-h-screen">
      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-card-dark text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-center h-20 border-b border-border-dark">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">FarmWise</h1>
          </div>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-primary/20 text-primary"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">agriculture</span>
            <span>Operations</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">storefront</span>
            <span>Marketplace</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">groups</span>
            <span>Community</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 main-content">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-sm border-b border-border-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>

              <div className="flex-1" />

              <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary"
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
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Risk Overview */}
                <div className="bg-card-dark rounded-xl p-6 shadow-lg">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Risk Overview
                  </h2>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">
                        Current Farm Risk Score
                      </p>
                      <p className="text-5xl font-bold text-primary">Low</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Your farm's risk score is looking great. Keep up the
                        good work!
                      </p>
                    </div>
                    <div
                      className="flex-1 w-full sm:w-auto h-48 rounded-lg bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOgSJ5jf5d5Mxd4gluXnqHuWt4M6eXbYdKRfJguYmEYjZcKPbuva9EQUH_2bo4n0iX8LA6o7VKY1BGMsZOJKw3VqgdN9Nj5gvAUTerqtEtZ8rwioaT7z3o7W6ncXQAtgkNeQv2bNBG5l6UL9qxaPP3kFuABukd4re4c6F39v2EouZwCAA57MqnJfh_H1l5L-VP0_byZ_ePpeKakNDNEXaihzhr0ZOJnqQ2AW658C85bU30GXh-jx_wH3EWDOOrGYBCe2yrP3NXAsGM")',
                      }}
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80 transition-all">
                    <span className="material-symbols-outlined">
                      fact_check
                    </span>
                    <span>Take Survey</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-card-dark text-gray-200 font-bold hover:bg-white/10 transition-all">
                    <span className="material-symbols-outlined">campaign</span>
                    <span>View Alerts</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-card-dark text-gray-200 font-bold hover:bg-white/10 transition-all">
                    <span className="material-symbols-outlined">report</span>
                    <span>Report Incident</span>
                  </button>
                </div>

                {/* Upcoming tasks */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Upcoming Tasks
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "vaccines",
                        title: "Vaccination Reminder",
                        time: "Due in 2 days",
                      },
                      {
                        icon: "cleaning_services",
                        title: "Cleaning Checklist",
                        time: "Due in 5 days",
                      },
                      {
                        icon: "description",
                        title: "Compliance Check",
                        time: "Due in 7 days",
                      },
                    ].map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 bg-card-dark p-4 rounded-lg"
                      >
                        <div className="flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
                          <span className="material-symbols-outlined text-2xl">
                            {task.icon}
                          </span>
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

              {/* Right column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Live Risk Index (NADRES v2)
                  </h2>
                  <div
                    className="aspect-video w-full bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0ttIhswWpVXyUHRUI87Lzb-TjDooi0mD3u1zgs4k4vyMXcXzpf9KndWzXKjvEwsFyg2k3fPESJy6AqH29NbAvNTU6nxF9q40olezq90Y7m32WFWRQExWhErmvXUhhVCRTOfbv5uKCpvVcH6S_-lV6FmJhQ4UXSM4r5D8I0NGm5fcCqfHO2Md8SW29DaNgb7OI2V_3ftn0Lt803H6gMJWij6uBMoV1PiMsnbBBtyzhUGeOsQejhdZq8m4YeX0sFHYQyYrV9oRBdOfM")',
                    }}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Government Alerts
                  </h2>
                  <div
                    className="relative bg-cover bg-center rounded-lg h-64 flex flex-col justify-end p-6 text-white"
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-sBkdz-hLr0R4-WnJY_YYRnbTrB9WhPf38mCgdKRzgZ6tEfswEksfftJB-9kDloFC9KZZGakbFjmLcAT5MM1G7JcLvhDad7buBVV820leZUIgzsXCTBnbBlPypHMrvCNy366rQwqBhDOkRV7j4d6Mi1hOfnTtGY0dutM_CeZeqeQ97W0HyZMPlWwa6n62_7CMWD_Or5RkibX0_KIo5vIcQFpl7lMNwEtGAYqNimZ3R9TWGIAFZ7y0UoBNDnc1yi6TMx7vLGnXKt11")',
                    }}
                  >
                    <h3 className="text-lg font-bold">
                      New Subsidy Program Announced
                    </h3>
                    <p className="text-sm text-gray-200">
                      Learn more about the new subsidy program for small
                      farmers.
                    </p>
                    <a
                      href="#"
                      className="text-sm font-bold text-primary mt-2 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    News Ticker
                  </h2>
                  <div className="bg-card-dark p-4 rounded-lg overflow-hidden">
                    <div className="relative h-6">
                      <p className="absolute animate-marquee whitespace-nowrap text-sm text-gray-300">
                        [State] Issues High Alert for Avian Influenza... | New
                        Regulations for Organic Certification Effective Next
                        Month... | Market Prices for Soybeans Surge...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
