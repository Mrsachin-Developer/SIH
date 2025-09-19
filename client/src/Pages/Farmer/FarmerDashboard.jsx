import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Farmer/dashboard/Sidebar";
import RiskOverviewCard from "../../Components/Farmer/dashboard/RiskOverviewCard";
import TasksList from "../../Components/Farmer/dashboard/TaskList";
import AlertsList from "../../Components/Farmer/dashboard/AlertsList";
import NewsTicker from "../../Components/Farmer/dashboard/NewsTicker";
import Header from "../../Components/Farmer/dashboard/Header";

export default function FarmerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setSidebarOpen(true);
      else setSidebarOpen(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="flex min-h-screen">
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="flex-1 flex flex-col md:ml-64">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>

              {/* Risk overview */}
              <RiskOverviewCard
                riskScore="Low"
                imageUrl="https://source.unsplash.com/600x400/?farm"
              />

              {/* 2-column grid for tasks + alerts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TasksList />
                <AlertsList />
              </div>

              {/* News at bottom full width */}
              <NewsTicker />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
