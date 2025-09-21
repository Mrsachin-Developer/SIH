// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div className="mb-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
        Alerts & Notifications
      </h1>
      <p className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-2">
        Stay informed about potential risks and take timely action.
      </p>
    </div>
  );
};

export default Header;
