import React from "react";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-card-dark text-white transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Logo area */}
      <div className="flex items-center justify-center h-20 border-b border-border-dark">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <svg className="w-8 h-8" viewBox="0 0 48 48">
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">FarmWise</h1>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col p-4 space-y-2">
        <a
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-primary/20 text-primary"
          href="#"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">agriculture</span>
          <span>Operations</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span>Analytics</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">storefront</span>
          <span>Marketplace</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">groups</span>
          <span>Community</span>
        </a>
      </nav>
    </aside>
  );
}
