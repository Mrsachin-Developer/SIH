import React from "react";
import { Search } from "lucide-react";
import DarkSearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-black/10 bg-background-dark/80 backdrop-blur-sm dark:border-white/10 dark:bg-background-dark/80">
      <div className="flex items-center justify-end px-4 py-2 sm:px-6 lg:px-8">
        <div className="relative sm:block">
          <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            search
          </span>
          <DarkSearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
