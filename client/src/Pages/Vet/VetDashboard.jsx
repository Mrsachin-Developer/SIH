import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Vet/Sidebar";
import { assets } from "../../assets/assets";
import Nav from "../../Components/Vet/Nav";

const VetDashboard = () => {

  const navigate = useNavigate();



  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />



      {/* Main content */}
      <main className="flex-1 ml-64">

        <Nav title="Dashboard" />



        <div
          className="relative flex h-auto min-h-screen w-full flex-col bg-[#111714] overflow-x-hidden"
          style={{ fontFamily: `Manrope, "Noto Sans", sans-serif` }}>

          <div className="layout-container flex h-full grow flex-col">
            {/* Dashboard Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">


                <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                  Welcome back, <span className="text-[#20df6c]">Dr. John</span>.
                </p>

                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                  Here's your overview for today.
                </p>
              </div>
            </div>


            {/* Assigned Farms */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Assigned Farms
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                {
                  name: "Green Pastures Dairy",
                  info: "120 cows, 2 cases",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJSs_kuoN_13gCWvAuk6xAsCePYA_qnRn8ciGzxKCXc7wqUjClkEmB1LrBs_Ii78QeIwqeTZU3m8hGNxvNabGefN3wU8RZR69gmejb7D4lRc0WKv8b7UYd3jjm8aJbYTx8RP6lGxTlDsrBK9i-xm6FlSYns6DqKV9iKMVG509r18Pppl5C5CdHsUNDeTNAyjzPgaRQul6jhePOjk3qGAXJi_pzUqKr2dvPkmqlRNz-HIpHjJx93vrpb9Yi3dJFs3EoDSxtX0Kh58I",
                },
                {
                  name: "Oak Ridge Farm",
                  info: "85 cows, 1 case",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtwlFp_bb6SMgUeqB-dJm7mHqhsuh38EeZeIDXQKyRvecw0mu56CsWgPTee8tcarUCSbEUvONyQOcXq0Jy2RCpvBMaTwFmHIsUpdMDBzwhoeu-BYogH3_3KNFHzdapOjZcDtO31FUpcN3ndXgHcyzFa5FTuINNFIJCkrDk4-fyz3jgoqdlGVxk1cFHjvA3iS2GhSxyj4591nv0Aw9zGmXkwVe3DhE3iRbJxkTD2V2M4SDkscoZSHr_3nauUAcpZvpJdbgvhUisUfw",
                },
                {
                  name: "Sunny Meadows Ranch",
                  info: "200 cows, 3 cases",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCnHFAlbM3LnqJGvTRqUIK91RL76UhgHI-8oQZbQBYJkD30PFfxf7rjlCz6D_rxUC4-XrVR6jDeHas172j-nj1hoMUxtHUOIOBbuddiqK96T_8pHIuHD1yfsA2VByHurBQHsD-GIdq-7CXDLFATdZPcIFz2qzvMMIpW_Yo1iXoRCur682XBNJvBBRPShEnU1-ns1E4nmD3fmKoq4YDOKEBswS2jxa88YcwisgqyJipAXcQL721QdUXsPHIwgKHDupFaZV3OADniXGo",
                },
              ].map((farm, i) => (
                <div
                  key={i}
                  onClick={() => navigate("/vet/vet-farmDetails")}
                  className="flex flex-col gap-3 pb-3 group cursor-pointer"
                >
                  {/* Image container with hover effect */}
                  <div
                    className="relative w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transform transition duration-300 group-hover:scale-10 group-hover:shadow-lg"
                    style={{ backgroundImage: `url(${farm.image})` }}
                  >
                    {/* Black overlay on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      {farm.name}
                    </p>
                    <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                      {farm.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            {/* Upcomming Cases */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Upcoming Appointments
            </h2>


            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-lg border border-[#3d5245] bg-[#111714]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#1c2620]">
                      <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[400px]">
                        Farm
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[400px]">
                        Animal ID
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[400px]">
                        Issue
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[400px]">
                        Reported
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-60">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        farm: "Green Pastures Dairy",
                        animal: "Cow #456",
                        issue: "Lameness",
                        reported: "2 hours ago",
                      },
                      {
                        farm: "Oak Ridge Farm",
                        animal: "Pig #123",
                        issue: "Respiratory",
                        reported: "4 hours ago",
                      },
                      {
                        farm: "Sunny Meadows Ranch",
                        animal: "Sheep #789",
                        issue: "Fever",
                        reported: "1 hour ago",
                      },
                    ].map((caseItem, i) => (
                      <tr key={i} className="border-t border-t-[#3d5245]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {caseItem.farm}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">
                          {caseItem.animal}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">
                          {caseItem.issue}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">
                          {caseItem.reported}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button className="flex cursor-pointer items-center justify-center rounded-lg h-8 px-4 bg-[#29382f] text-white text-sm font-medium w-full">
                            <span className="truncate">Urgent</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risk Analysis */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Risk Analysis
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3d5245] p-6">
                <p className="text-white text-base font-medium leading-normal">
                  Disease Outbreak Risk
                </p>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>



      </main>
    </div>
  );
};

export default VetDashboard;
