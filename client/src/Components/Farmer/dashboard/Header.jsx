import React from "react";

export default function Header({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-sm border-b border-border-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={toggleSidebar}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 text-gray-300 hover:bg-white/10">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary"
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
