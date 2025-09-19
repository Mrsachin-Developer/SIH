import React from "react";
import Sidebar from "../../Components/Vet/Sidebar";

const VetAlerts = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <div
                    className="relative flex h-auto min-h-screen w-full flex-col bg-[#111714] overflow-x-hidden"
                    style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
                >
                    <div className="layout-container flex h-full grow flex-col">
                        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                                {/* Header */}
                                <div className="flex flex-wrap justify-between gap-3 p-4">
                                    <div className="flex min-w-72 flex-col gap-3">
                                        <p className="text-white text-[32px] font-bold leading-tight">
                                            Alerts &amp; Notifications
                                        </p>
                                        <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                                            Stay informed with critical updates for your livestock.
                                        </p>
                                    </div>
                                </div>

                                {/* Disease Outbreaks */}
                                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                    Disease Outbreaks
                                </h2>
                                <div className="p-4 m-4 border-2 border-[#3d5245] bg-transparent rounded-4xl flex flex-col gap-2">
                                    <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                        <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                            <p className="text-white text-base font-bold leading-tight">
                                                Foot and Mouth Disease Outbreak
                                            </p>
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                                                High risk of outbreak in your region. Take immediate action to protect your livestock.
                                            </p>
                                        </div>
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkhrt7562GfV7MsieDrbU02GafgJpoB62rXJtanJe0xsPqR5C5BR362QRKkqUkBl24aiXsh4rUA8f4x0Mu1Ok0euvKhim_x001TZfJuqIvKdKQW-FoqTLtQav3NiFhH-xGS3vLxQo9t59B5l5cJclrJ7jjLFaW4GPEKbRP7i2V6B42ZbdJK_TdAYcqF3KCuvTPNLgIQRjayfRLmM7FqVELmmsjR1o0XWy_rcWNN3aQxVu9KLHT3SMY5Hh8ELYtyk_mWLrweJXLP0M")',
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Vaccination Due Dates */}
                                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                    Vaccination Due Dates
                                </h2>
                                <div className="p-4 m-4 border-2 border-[#3d5245] bg-transparent rounded-4xl flex flex-col gap-2">
                                    <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                        <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                            <p className="text-white text-base font-bold leading-tight">
                                                Vaccination Due for Cattle
                                            </p>
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                                                Schedule vaccinations for your cattle within the next 7 days to prevent common diseases.
                                            </p>
                                        </div>
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeRTuDJIJaADrdsNX6ppeorohS1Q5YXCDRXHxhNZaxhL8ZQfaN9ibOs5NXun8Qhhs6tbC8-xDxzE3CpL54EBMPjMozBO5nsL3uRtmwZrzTTDRVf2aNctSFeb0kzKKZij-vsHd5EToRmyH4LoWksUP5TzaM07qvj7fIhMKjnIHRjm2A66lqCF8lwwqRzHWhH9lfgPs7MEYRlJerT5bRdiz4xxRpciILQstyE06LQosT3CfSMeZKcVKMRJQ5mEGLNSRUx20U1t1cACM")',
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Government Updates */}
                                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                                    Government Updates
                                </h2>
                                <div className="p-4 m-4 border-2 border-[#3d5245] bg-transparent rounded-4xl flex flex-col gap-2">
                                    <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                        <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                            <p className="text-white text-base font-bold leading-tight">
                                                New Regulations for Livestock Movement
                                            </p>
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                                                Stay updated on the latest regulations affecting livestock movement in your area.
                                            </p>
                                        </div>
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6HAnVRsSYbeMjz926BA1q28CuLkjDWqjh-jCblcKtt7r2t371u38bZYL4pK_A-UMTJlhY8R9tw5N_1OnwVQXvhETSEPk_RErFkhf-S2YtDMrDqk6M2iIK9LyrVy5Iqww3Jo6CizMm7fEhrGcTnIIfhIpa13Zfygezo4YuVgyyJ9rQja_0vtbhVhoS_9fSw54_svoj27-bnEg7wjDnl7tRTLs0yAAp2G7ojPHkjIxVhHfn-mhonBGArsnp3vxXT_LZW80S0qcQEfU")',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VetAlerts;
