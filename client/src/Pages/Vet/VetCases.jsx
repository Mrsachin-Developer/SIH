import React from "react";
import Sidebar from "../../Components/Vet/Sidebar";

const VetCases = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <div className="min-h-screen w-full bg-[#111714] font-['Inter','Noto Sans',sans-serif] text-white p-6">
                    {/* Title */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-[32px] font-bold leading-tight">Urgent Cases</p>
                    </div>

                    {/* Subtitle */}
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                        Cases Requiring Immediate Attention
                    </h3>

                    {/* Table */}
                    <div className="overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#1c2620]">
                                    <th className="px-4 py-3 text-left text-sm font-medium w-[400px]">Case ID</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium w-[400px]">Animal</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium w-[400px]">Breed</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium w-[400px]">Age</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium w-[400px]">Symptoms</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium w-60">Status</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium w-60 text-[#9eb7a8]">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        id: "#2024-001",
                                        animal: "Cow",
                                        breed: "Holstein",
                                        age: "5 years",
                                        symptoms: "Fever, lethargy",
                                    },
                                    {
                                        id: "#2024-002",
                                        animal: "Sheep",
                                        breed: "Merino",
                                        age: "2 years",
                                        symptoms: "Coughing, nasal discharge",
                                    },
                                    {
                                        id: "#2024-003",
                                        animal: "Goat",
                                        breed: "Boer",
                                        age: "3 years",
                                        symptoms: "Diarrhea, dehydration",
                                    },
                                    {
                                        id: "#2024-004",
                                        animal: "Pig",
                                        breed: "Yorkshire",
                                        age: "1 year",
                                        symptoms: "Skin lesions, itching",
                                    },
                                    {
                                        id: "#2024-005",
                                        animal: "Chicken",
                                        breed: "Leghorn",
                                        age: "6 months",
                                        symptoms: "Respiratory distress, sneezing",
                                    },
                                ].map((row, i) => (
                                    <tr key={i} className="border-t border-[#3d5245]">
                                        <td className="px-4 py-2 h-[72px] text-sm">{row.id}</td>
                                        <td className="px-4 py-2 h-[72px] text-sm text-[#9eb7a8]">{row.animal}</td>
                                        <td className="px-4 py-2 h-[72px] text-sm text-[#9eb7a8]">{row.breed}</td>
                                        <td className="px-4 py-2 h-[72px] text-sm text-[#9eb7a8]">{row.age}</td>
                                        <td className="px-4 py-2 h-[72px] text-sm text-[#9eb7a8]">{row.symptoms}</td>
                                        <td className="px-4 py-2 h-[72px]">
                                            <button className="flex items-center justify-center rounded-xl h-8 px-4 bg-[#29382f] text-white text-sm font-medium">
                                                Urgent
                                            </button>
                                        </td>
                                        <td className="px-4 py-2 h-[72px] text-sm font-bold text-[#9eb7a8]">
                                            View
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VetCases;
