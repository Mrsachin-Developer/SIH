import React from "react";
import Sidebar from "../../Components/Vet/Sidebar";

const VetReports = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <div
                    className="relative flex h-auto min-h-screen w-full flex-col bg-[#111714] overflow-x-hidden"
                    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
                >
                    <div className="layout-container flex h-full grow flex-col">
                        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                                {/* Header */}
                                <div className="flex flex-wrap justify-between gap-3 p-4">
                                    <div className="flex min-w-72 flex-col gap-3">
                                        <p className="text-white text-[32px] font-bold leading-tight">
                                            Farmer Reports
                                        </p>
                                        <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                                            View reports submitted by farmers regarding completed tasks,
                                            such as vaccinations and medication adherence.
                                        </p>
                                    </div>
                                </div>





                                {/* Report Preview */}
                                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                    Report Preview
                                </h2>

                                <div className="p-4 m-4 overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
                                    <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZPpsKk8Wbm1zCq-SVmBGy_tYZvVOfTs5bssTsFejaEhRw6XIMhbR8yRuw5ShSwQ_03gGnkc9bT7fPtATn2JTNR2i5sW4J-CqteLpzPSLGtt8gF1EwRy9pRQUl_VA7ey04xxFk25XzJD6OIpqnZNhTT3gngA3KukDw6EhQ4JXbdTh4lM6_csxNAeR6hKKWNAhbWbHmQEdq4mPyHpPXwRv2iYsD3RoQtOu6BDjHSG28vgluTmETd8lGxBhS0IqoPObgNDn1U23lhJA")',
                                            }}
                                        ></div>

                                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                                            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                                Weekly Task Report - Willow Creek Farm
                                            </p>
                                            <div className="flex items-end gap-3 justify-between">
                                                <p className="text-[#9eb7a8] text-base font-normal leading-normal">
                                                    Submitted on July 15, 2024
                                                </p>
                                            </div>
                                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-[#20df6c] text-[#111714] text-sm font-medium leading-normal mt-4">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Report Preview */}


                                {/* Report Preview */}
                                
                                <div className="p-4 m-4 overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
                                    <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZPpsKk8Wbm1zCq-SVmBGy_tYZvVOfTs5bssTsFejaEhRw6XIMhbR8yRuw5ShSwQ_03gGnkc9bT7fPtATn2JTNR2i5sW4J-CqteLpzPSLGtt8gF1EwRy9pRQUl_VA7ey04xxFk25XzJD6OIpqnZNhTT3gngA3KukDw6EhQ4JXbdTh4lM6_csxNAeR6hKKWNAhbWbHmQEdq4mPyHpPXwRv2iYsD3RoQtOu6BDjHSG28vgluTmETd8lGxBhS0IqoPObgNDn1U23lhJA")',
                                            }}
                                        ></div>

                                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                                            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                                Weekly Task Report - Willow Creek Farm
                                            </p>
                                            <div className="flex items-end gap-3 justify-between">
                                                <p className="text-[#9eb7a8] text-base font-normal leading-normal">
                                                    Submitted on July 15, 2024
                                                </p>
                                            </div>
                                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-[#20df6c] text-[#111714] text-sm font-medium leading-normal mt-4">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Report Preview */}


                                {/* Report Preview */}
                                

                                <div className="p-4 m-4 overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
                                    <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZPpsKk8Wbm1zCq-SVmBGy_tYZvVOfTs5bssTsFejaEhRw6XIMhbR8yRuw5ShSwQ_03gGnkc9bT7fPtATn2JTNR2i5sW4J-CqteLpzPSLGtt8gF1EwRy9pRQUl_VA7ey04xxFk25XzJD6OIpqnZNhTT3gngA3KukDw6EhQ4JXbdTh4lM6_csxNAeR6hKKWNAhbWbHmQEdq4mPyHpPXwRv2iYsD3RoQtOu6BDjHSG28vgluTmETd8lGxBhS0IqoPObgNDn1U23lhJA")',
                                            }}
                                        ></div>

                                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                                            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                                Weekly Task Report - Willow Creek Farm
                                            </p>
                                            <div className="flex items-end gap-3 justify-between">
                                                <p className="text-[#9eb7a8] text-base font-normal leading-normal">
                                                    Submitted on July 15, 2024
                                                </p>
                                            </div>
                                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-[#20df6c] text-[#111714] text-sm font-medium leading-normal mt-4">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Report Preview */}

                                    
                                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                    Unsubmitted Reports by Farmers
                                </h2>

                                            {/* Report Preview */}
                                

                                <div className="p-4 m-4 overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
                                    <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZPpsKk8Wbm1zCq-SVmBGy_tYZvVOfTs5bssTsFejaEhRw6XIMhbR8yRuw5ShSwQ_03gGnkc9bT7fPtATn2JTNR2i5sW4J-CqteLpzPSLGtt8gF1EwRy9pRQUl_VA7ey04xxFk25XzJD6OIpqnZNhTT3gngA3KukDw6EhQ4JXbdTh4lM6_csxNAeR6hKKWNAhbWbHmQEdq4mPyHpPXwRv2iYsD3RoQtOu6BDjHSG28vgluTmETd8lGxBhS0IqoPObgNDn1U23lhJA")',
                                            }}
                                        ></div>

                                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                                            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                                Weekly Task Report - Willow Creek Farm
                                            </p>
                                            <div className="flex items-end gap-3 justify-between">
                                                <p className="text-[#9eb7a8] text-base font-normal leading-normal">
                                                    Submitted on July 15, 2024
                                                </p>
                                            </div>
                                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-[#20df6c] text-[#111714] text-sm font-medium leading-normal mt-4">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Report Preview */}


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VetReports;
