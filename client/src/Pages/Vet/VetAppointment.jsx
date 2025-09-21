import React from "react";
import Nav from "../../Components/Vet/Nav";
import { useNavigate } from "react-router-dom";


const VetAppointment = () => {

     const navigate = useNavigate();

  return (
    <div
      className="bg-[#121212] relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden "
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
    
      
    <Nav title="Appointments" />
      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        
        <div className="max-w-4xl mx-auto  bg-[#1f1f1f] rounded-lg shadow-sm">
          {/* Header Section */}
          <div className="p-8 border-b border-neutral-300">
            <h1 className="text-white text-2xl font-bold leading-tight">
              Incident Report Verification
            </h1>
            <p className="text-[#9eb7a8] mt-1">
              Review the details of the incident and take appropriate action.
            </p>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <Detail label="Report ID" value="#INC-2024-03-15-001" />
              <Detail label="Farmer Name" value="John Appleseed" />
              <Detail label="Farm Location" value="Green Valley Farms, Plot 42" />
              <Detail label="Incident Type" value="Animal Sickness" />
              <Detail label="Date of Incident" value="March 15, 2024" />

              <div className="md:col-span-2 space-y-2">
                <p className="text-white text-sm font-medium leading-normal">
                  Description
                </p>
                <p className="text-[#9eb7a8]">
                  One of the cows is showing signs of lethargy, loss of
                  appetite, and has a slight fever. It has been isolated from
                  the rest of the herd.
                </p>
              </div>

              {/* Expert Notes */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-medium leading-normal pb-2">
                  Expert Notes
                </label>
                <textarea
                  className="form-input min-h-32 w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                  placeholder="Add your notes here..."
                />
              </div>

              {/* Recommended Actions */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-medium leading-normal pb-2">
                  Recommended Actions
                </label>
                <textarea
                  className="form-input min-h-32 w-full px-4 py-2 rounded-lg bg-[#292e2b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                  placeholder="Suggest actions for the farmer..."
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row-reverse items-center gap-3">
              <button className="flex w-full sm:w-auto items-center justify-center rounded-md h-10 px-6 bg-[#1fde6b] text-black text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-green-600 transition-colors">
                Accept &amp; Submit
              </button>
              <button className="flex w-full sm:w-auto items-center justify-center rounded-md h-10 px-6 bg-red-600 text-black text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-red-700 transition-colors">
                Reject
              </button>
              <div className="sm:mr-auto">
                <button className="bg-white flex w-full sm:w-auto items-center justify-center rounded-md h-10 px-4 text-black hover:bg-green-600 text-sm font-medium leading-normal tracking-wide transition-colors">
                  <span className="material-symbols-outlined mr-2">
                    
                  </span>
                  Forward to Admin (Severe)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Small helper component for details
const Detail = ({ label, value }) => (
  <div className="space-y-2">
    <p className="text-[#9eb7a8] text-sm font-medium leading-normal">
      {label}
    </p>
    <p className="text-white">{value}</p>
  </div>
);

export default VetAppointment;


