import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Vet/Sidebar";

const VetDashboard = () => {

   const navigate = useNavigate();



  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-64">
        <div
          className="relative flex h-auto min-h-screen w-full flex-col bg-[#111714] dark group/design-root overflow-x-hidden"
          style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <div className="gap-1 px-5 py-2 flex flex-1 justify-center p-6">
              {/* MAIN CONTENT */}
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                {/* Header */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                      Dashboard
                    </p>
                    <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                      Welcome back, Dr. Carter. Here's your overview for today.
                    </p>
                  </div>
                </div>

                {/* Upcoming Appointments */}
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Upcoming Appointments
                </h2>



                <div className="m-4 p-4 border-2 border-[#3d5245] bg-transparent rounded-4xl flex flex-col gap-2">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                      <p className="text-white text-base font-bold leading-tight">
                        Farm Visit: Willow Creek Farm
                      </p>
                      <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                        Scheduled for tomorrow, 10:00 AM
                      </p>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNsGwjTYuKm_jljAHTTY76aT4_pmyi2lM1pO9017Jlmw6sEViY6lYEF_uGe3VcEcraff8zUNUs9RKGoJ2i7cBwrtaOcz_pTSS6ovkm4yQNt7pLaqmxITv00JXBePxkhgCOGIfnycpLtF3uqgkhQhYTM3OicBDxOftIEd65O0813S7IVUsNWgKlHg-W9sOQvmxScHW0dPDDM9ImcA4Cw8ObRdyoKYTCrOXzjNdCGcXpbVQwOumPJsxzalFExinKfUrW0H_Ghec9hVo")',
                      }}
                    ></div>
                  </div>
                </div>

                <div className="m-4 p-4 border-2 border-[#3d5245] bg-transparent rounded-4xl flex flex-col gap-2">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                      <p className="text-white text-base font-bold leading-tight">
                        Farm Visit: Deepak Mahato Pig Farm
                      </p>
                      <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                        Scheduled for tomorrow, 05:00 PM
                      </p>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNsGwjTYuKm_jljAHTTY76aT4_pmyi2lM1pO9017Jlmw6sEViY6lYEF_uGe3VcEcraff8zUNUs9RKGoJ2i7cBwrtaOcz_pTSS6ovkm4yQNt7pLaqmxITv00JXBePxkhgCOGIfnycpLtF3uqgkhQhYTM3OicBDxOftIEd65O0813S7IVUsNWgKlHg-W9sOQvmxScHW0dPDDM9ImcA4Cw8ObRdyoKYTCrOXzjNdCGcXpbVQwOumPJsxzalFExinKfUrW0H_Ghec9hVo")',
                      }}
                    ></div>
                  </div>
                </div>

                <div className="m-4 p-4 border-2 border-[#3d5245] bg-transparent rounded-4xl flex flex-col gap-2">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                      <p className="text-white text-base font-bold leading-tight">
                        Farm Visit: sunnydeol cattel Farm
                      </p>
                      <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                        Scheduled for 23 DEC, 12:00 AM
                      </p>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNsGwjTYuKm_jljAHTTY76aT4_pmyi2lM1pO9017Jlmw6sEViY6lYEF_uGe3VcEcraff8zUNUs9RKGoJ2i7cBwrtaOcz_pTSS6ovkm4yQNt7pLaqmxITv00JXBePxkhgCOGIfnycpLtF3uqgkhQhYTM3OicBDxOftIEd65O0813S7IVUsNWgKlHg-W9sOQvmxScHW0dPDDM9ImcA4Cw8ObRdyoKYTCrOXzjNdCGcXpbVQwOumPJsxzalFExinKfUrW0H_Ghec9hVo")',
                      }}
                    ></div>
                  </div>
                </div>






                {/* Assigned Farms */}
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Assigned Farms
                </h2>
                <div className="px-4 py-3">
                  <div className="flex overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
                    <table className="flex-1">
                      <thead>
                        <tr className="bg-[#1c2620]">
                          <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                            Farm Name
                          </th>
                          <th className="px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                            Last Update
                          </th>
                          <th className="px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "Green Pastures",
                            status: "Healthy",
                            update: "2 days ago",
                          },
                          {
                            name: "Rolling Hills",
                            status: "Monitoring",
                            update: "1 day ago",
                          },
                          {
                            name: "Sunny Meadows",
                            status: "At Risk",
                            update: "Today",
                          },
                        ].map((farm, idx) => (
                          <tr key={idx} className="border-t border-t-[#3d5245]">
                            <td className="h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                              {farm.name}
                            </td>
                            <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                              <button className="flex min-w-[84px] items-center justify-center rounded-xl h-8 px-4 bg-[#29382f] text-white text-sm font-medium leading-normal">
                                <span className="truncate">{farm.status}</span>
                              </button>
                            </td>
                            <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">
                              {farm.update}
                            </td>
                            <td onClick={() => navigate("#")}
                             className="h-[72px] px-4 py-2 w-60 text-[#9eb7a8] text-sm font-bold leading-normal tracking-[0.015em] cursor-pointer hover:underline">
                              View Details
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Recent Farm Updates */}
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Recent Farm Updates
                </h2>
                {[
                  {
                    name: "Green Pastures",
                    update: "Increased activity detected in sector 3",
                  },
                  {
                    name: "Rolling Hills",
                    update: "Routine checkup completed, all clear",
                  },
                  {
                    name: "Sunny Meadows",
                    update: "Possible outbreak, immediate action required",
                  },
                ].map((farm, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-[#111714] px-4 min-h-[72px] py-2"
                  >
                    <div className="text-white flex items-center justify-center rounded-lg bg-[#29382f] shrink-0 size-12">
                      🌲
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">
                        {farm.name}
                      </p>
                      <p className="text-[#9eb7a8] text-sm font-normal leading-normal line-clamp-2">
                        {farm.update}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VetDashboard;
