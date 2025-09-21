import React from "react";

const AlertButton = () => {
  return (
    <button className="flex items-center gap-2 sm:gap-3 rounded-xl bg-red-900 px-3 sm:px-4 py-2 sm:py-2.5 text-red-300 hover:bg-red-800 transition w-full sm:w-auto justify-center">
      {/* Alert Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
      >
        <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 17.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1-5.5h-2V7h2v7z" />
      </svg>
      {/* Text */}
      <span className="text-sm sm:text-lg font-medium">Alert</span>
    </button>
  );
};

export default AlertButton;
