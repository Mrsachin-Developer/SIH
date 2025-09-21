import React from "react";

export default function Header({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-sm border-b border-border-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={toggleSidebar}
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          {/* Placeholder for spacing */}
          <div className="flex-1"></div>

          {/* Right-side icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="relative rounded-full p-2 text-gray-300 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                notifications
              </span>
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cover bg-center border-2 border-primary"
              style={{
                backgroundImage: 'url("https://example.com/avatar.jpg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
