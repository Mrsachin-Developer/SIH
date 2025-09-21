import React from "react";
import Sidebar from "../../Components/Vet/Sidebar";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Nav from "../../Components/Vet/Nav";

const VetCases = () => {
  const navigate = useNavigate();

  const reports = [
    {
      farm: "Green Pastures Dairy",
      animal: "Cow #456",
      issue: "Lameness",
      reported: "2 hours ago",
      status: "Urgent",
    },
    {
      farm: "Oak Ridge Farm",
      animal: "Pig #123",
      issue: "Respiratory",
      reported: "4 hours ago",
      status: "Pending",
    },
    {
      farm: "Sunny Meadows Ranch",
      animal: "Sheep #789",
      issue: "Fever",
      reported: "1 hour ago",
      status: "Resolved",
    },
  ];

  // Separate data
  const activeCases = reports.filter(
    (caseItem) => caseItem.status === "Urgent" || caseItem.status === "Pending"
  );
  const resolvedCases = reports.filter(
    (caseItem) => caseItem.status === "Resolved"
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Urgent":
        return "bg-red-600 text-white";
      case "Pending":
        return "bg-yellow-500 text-black";
      case "Resolved":
        return "bg-green-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const CaseTable = ({ data }) => (
    <div className="overflow-hidden rounded-lg border border-[#3d5245] bg-[#121212] shadow-md mb-8">
      <table className="table-fixed w-full border-collapse">
        <thead>
          <tr className="bg-[#1c2620]">
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[250px]">
              Farm
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[200px]">
              Animal ID
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[200px]">
              Issue
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[200px]">
              Reported
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[150px]">
              Status
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[120px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((caseItem, i) => (
              <tr key={i} className="border-t border-t-[#3d5245]">
                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                  {caseItem.farm}
                </td>
                <td className="h-[72px] px-4 py-2 text-[#9eb7a8] text-sm font-normal leading-normal">
                  {caseItem.animal}
                </td>
                <td className="h-[72px] px-4 py-2 text-[#9eb7a8] text-sm font-normal leading-normal">
                  {caseItem.issue}
                </td>
                <td className="h-[72px] px-4 py-2 text-[#9eb7a8] text-sm font-normal leading-normal">
                  {caseItem.reported}
                </td>
                <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                  <button
                    className={`flex cursor-pointer items-center justify-center rounded-lg h-8 px-4 text-sm font-medium w-full ${getStatusColor(
                      caseItem.status
                    )}`}
                  >
                    <span className="truncate">{caseItem.status}</span>
                  </button>
                </td>
                <td
                  className="px-4 py-2 h-[72px] text-sm font-bold text-[#9eb7a8] cursor-pointer hover:underline"
                  onClick={() => navigate("/vet/vet-appointmentdetails")}
                >
                  View
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-6 text-[#9eb7a8] text-sm"
              >
                No cases found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );






  
  return (
    <div className="flex bg-[#121212]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-64">
        <Nav title="HeatMap" />

        <div className="min-h-screen w-full bg-[#121212] font-['Inter','Noto Sans',sans-serif] text-white p-6">
          {/* Urgent + Pending Cases */}
          <div className="mb-8">
            <p className="text-[32px] font-bold leading-tight">Urgent Cases</p>
            <h3 className="text-lg text-[#9eb7a8] font-bold leading-tight tracking-[-0.015em] mb-4">
              Cases Requiring Immediate Attention
            </h3>
            <CaseTable data={activeCases} />
          </div>

          {/* Resolved Cases */}
          <div>
            <p className="text-[32px] font-bold leading-tight">Resolved Cases</p>
            <h3 className="text-[#9eb7a8] text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
              Cases Successfully Treated and Closed
            </h3>
            <CaseTable data={resolvedCases} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VetCases;
