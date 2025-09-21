import React, { useState } from "react";
import Sidebar from "../../Components/Farmer/SideBar";
import Header from "../../Components/Farmer/TrainingAndGuide/Header";
import TitlleButtons from "../../Components/Farmer/TrainingAndGuide/TitlleButtons";
import Tabs from "../../Components/Farmer/TrainingAndGuide/Tabs";
import BiosecuritySection from "../../Components/Farmer/TrainingAndGuide/BiosecuritySection";

export default function TrainingGuides() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-[#020202] dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Section */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl space-y-8">
            {/* Title + Buttons */}
            <TitlleButtons />

            {/* Tabs */}
            <Tabs />

            {/* Content Sections */}
            <div className="space-y-12">
              <BiosecuritySection />
              {/* Add other sections here as needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
