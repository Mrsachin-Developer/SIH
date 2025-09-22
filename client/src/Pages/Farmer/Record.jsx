import React, { useState } from "react";
import Sidebar from "../../Components/Farmer/Sidebar"; // make sure the path is correct

export default function MyRecords() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-background-dark font-display text-text-light flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64 bg-background-dark dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white dark:text-white mb-6">
            My Records
          </h1>

          {/* Tabs */}
          <div className="border-b border-black/10 dark:border-white/10 mb-6">
            <nav className="flex space-x-8 -mb-px">
              <a
                className="py-4 px-1 border-b-2 border-primary text-primary font-semibold text-sm"
                href="#"
              >
                Vaccination & Health Logs
              </a>
              <a
                className="py-4 px-1 border-b-2 border-transparent text-white dark:text-white/60 hover:text-primary hover:border-primary/50 font-medium text-sm"
                href="#"
              >
                Compliance Checklist
              </a>
            </nav>
          </div>

          {/* Vaccination Records */}
          <h2 className="text-2xl font-bold text-white dark:text-white mb-4">
            Vaccination Records
          </h2>
          <div className="bg-background-dark dark:bg-background-dark border border-white/20 dark:border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left text-white dark:text-white/80">
              <thead className="text-xs text-white dark:text-white uppercase bg-white/5 dark:bg-white/5">
                <tr>
                  <th className="px-6 py-3 font-medium">Animal ID</th>
                  <th className="px-6 py-3 font-medium">Vaccine</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Administered By</th>
                  <th className="px-6 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Cow 123
                  </th>
                  <td className="px-6 py-4">Foot and Mouth Disease Vaccine</td>
                  <td className="px-6 py-4">2024-01-15</td>
                  <td className="px-6 py-4">Dr. Emily Carter</td>
                  <td className="px-6 py-4">Routine vaccination</td>
                </tr>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Cow 456
                  </th>
                  <td className="px-6 py-4">Brucellosis Vaccine</td>
                  <td className="px-6 py-4">2024-02-20</td>
                  <td className="px-6 py-4">Dr. Emily Carter</td>
                  <td className="px-6 py-4">Annual vaccination</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Cow 789
                  </th>
                  <td className="px-6 py-4">Blackleg Vaccine</td>
                  <td className="px-6 py-4">2024-03-25</td>
                  <td className="px-6 py-4">Dr. Emily Carter</td>
                  <td className="px-6 py-4">Preventative vaccination</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Health Logs */}
          <h2 className="text-2xl font-bold text-white dark:text-white mt-8 mb-4">
            Health Logs
          </h2>
          <div className="bg-background-dark dark:bg-background-dark border border-white/30 dark:border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left text-black/80 dark:text-white/80">
              <thead className="text-xs text-white dark:text-white uppercase bg-white/5 dark:bg-white/5">
                <tr>
                  <th className="px-6 py-3 font-medium">Animal ID</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Issue</th>
                  <th className="px-6 py-3 font-medium">Treatment</th>
                  <th className="px-6 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10 dark:border-white/10 text-white">
                  <th className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Cow 123
                  </th>
                  <td className="px-6 py-4">2024-04-10</td>
                  <td className="px-6 py-4">Mastitis</td>
                  <td className="px-6 py-4">Antibiotics</td>
                  <td className="px-6 py-4">Resolved</td>
                </tr>
                <tr className="border-b border-black/10 dark:border-white/10 text-white">
                  <th className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Cow 456
                  </th>
                  <td className="px-6 py-4">2024-05-15</td>
                  <td className="px-6 py-4">Lameness</td>
                  <td className="px-6 py-4">Rest and pain relief</td>
                  <td className="px-6 py-4">Improving</td>
                </tr>
                <tr className="text-white">
                  <th className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Cow 789
                  </th>
                  <td className="px-6 py-4">2024-06-20</td>
                  <td className="px-6 py-4">Respiratory infection</td>
                  <td className="px-6 py-4">Antibiotics</td>
                  <td className="px-6 py-4">Recovered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
