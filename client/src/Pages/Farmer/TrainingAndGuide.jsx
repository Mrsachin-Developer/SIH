import React from "react";
import Sidebar from "../../Components/Farmer/SideBar";
import Header from "../../Components/Farmer/TrainingAndGuide/Header";
import TitlleButtons from "../../Components/Farmer/TrainingAndGuide/TitlleButtons";
import Tabs from "../../Components/Farmer/TrainingAndGuide/Tabs";
import BiosecuritySection from "../../Components/Farmer/TrainingAndGuide/BiosecuritySection";

export default function TrainingGuides() {
  return (
    <div className="flex min-h-screen w-full bg-[#020202] dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* Sidebar */}
      <Sidebar sidebarOpen={true} />

      {/* Main Section */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Title + Buttons */}
            <TitlleButtons />

            {/* Tabs */}
            <Tabs />

            {/* Content Sections */}
            <div className="space-y-12">
              <BiosecuritySection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
