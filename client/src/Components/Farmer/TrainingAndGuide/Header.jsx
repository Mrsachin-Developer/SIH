import React from "react";
import DarkSearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-black/10 bg-background-dark/80 backdrop-blur-sm dark:border-white/10 dark:bg-background-dark/80">
      <div className="flex items-center justify-end px-4 py-2 sm:px-6 lg:px-8">
        <div className="relative w-full sm:w-64">
          {/* Search Icon */}
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
            search
          </span>

          {/* Search Input */}
          <DarkSearchBar className="pl-10 pr-3 py-2 w-full rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;
