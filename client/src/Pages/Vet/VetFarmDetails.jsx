import React from 'react'

const VetFarmDetails = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-secondary-50 text-secondary-900 font-['Public Sans','Noto Sans',sans-serif]">
            {/* Layout Container */}
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}


                {/* Main */}
                <main className="flex flex-1 justify-center px-6 py-8 bg-[#121212]">
                    <div className="flex w-full max-w-7xl">
                        {/* Main Content */}
                        <div className="flex flex-col flex-1">
                            {/* Farm Header */}
                            <div className="flex flex-wrap justify-between gap-4 p-4">
                                <div className="flex min-w-72 flex-col gap-1">
                                    <p className=" text-white text-4xl font-bold leading-tight tracking-tighter text-secondary-900">
                                        Oak Ridge Farm
                                    </p>
                                    <p className="text-[#9eb7a8] text-base font-normal leading-normal text-secondary-500">
                                        Owned by Ethan Carter
                                    </p>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-700 px-4">
                                <div className="flex gap-8">
                                    <a className="flex flex-col items-center justify-center border-b-2 border-primary-500 py-3">
                                        <p className="text-white text-sm font-bold leading-normal tracking-wide text-primary-500">
                                            Overview
                                        </p>
                                    </a>
                                    <a className="flex flex-col items-center justify-center border-b-2 border-transparent py-3 text-secondary-500 hover:border-secondary-400 hover:text-secondary-700">
                                        <p className="text-white text-sm font-semibold leading-normal tracking-wide">
                                            Animals
                                        </p>
                                    </a>
                                    <a className="flex flex-col items-center justify-center border-b-2 border-transparent py-3 text-secondary-500 hover:border-secondary-400 hover:text-secondary-700">
                                        <p className="text-white text-sm font-semibold leading-normal tracking-wide">
                                            Incidents
                                        </p>
                                    </a>
                                </div>
                            </div>

                            {/* Example Risk Section */}
                            <div className="p-4">
                                <h2 className="text-white text-2xl font-bold leading-tight tracking-tight text-secondary-900 py-4">
                                    Risk History
                                </h2>

                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    {/* Card 1 - Overall Risk Score */}
                                    <div className="bg-[#1f1f1f] flex flex-col gap-4 rounded-lg border border-gray-700 p-6 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <p className="text-white text-base font-medium leading-normal text-secondary-700">
                                                Overall Risk Score
                                            </p>
                                            <div className="flex items-center gap-1 text-sm text-green-600">
                                                <span className="material-symbols-outlined text-base">
                                                    trending_up
                                                </span>
                                                <span>+5%</span>
                                            </div>
                                        </div>

                                        <p className="text-green-600 text-4xl font-bold leading-tight tracking-tighter text-secondary-900">
                                            72
                                        </p>
                                        <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">
                                            Last 12 Months
                                        </p>

                                        {/* Chart */}
                                        <div className="flex min-h-[200px] flex-1 flex-col gap-4 pt-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="100%"
                                                height="100%"
                                                viewBox="-3 0 478 150"
                                                preserveAspectRatio="none"
                                                fill="none"
                                            >
                                                <path
                                                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                                                    fill="url(#paint0_linear)"
                                                />
                                                <path
                                                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                                                    stroke="green"
                                                    stroke-width="3"
                                                    stroke-linecap="round"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear"
                                                        x1="236"
                                                        y1="1"
                                                        x2="236"
                                                        y2="149"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="green" />
                                                        <stop offset="1" stop-color="green" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>

                                    {/* Card 2 - Risk Factors */}
                                    <div className="bg-[#1f1f1f] flex flex-col gap-4 rounded-lg border border-gray-700 p-6 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <p className="text-white text-base font-medium leading-normal text-secondary-700">
                                                Risk Factors
                                            </p>
                                            <div className="flex items-center gap-1 text-sm text-green-600">
                                                <span className="material-symbols-outlined text-base">
                                                    trending_up
                                                </span>
                                                <span>+10%</span>
                                            </div>
                                        </div>

                                        <p className="text-green-600 text-4xl font-bold leading-tight tracking-tighter text-secondary-900">
                                            High
                                        </p>
                                        <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">
                                            Last 12 Months
                                        </p>

                                        {/* Bar Chart */}
                                        <div className="grid h-[200px] grid-flow-col gap-4 items-end justify-items-center pt-4">
                                            <div className="w-6 self-end rounded-t bg-green-400" style={{ height: "30%" }} />
                                            <div className="w-6 self-end rounded-t bg-green-400" style={{ height: "60%" }} />
                                            <div className="w-6 self-end rounded-t bg-green-400" style={{ height: "70%" }} />
                                            <div className="w-6 self-end rounded-t bg-green-400" style={{ height: "20%" }} />
                                            <div className="w-6 self-end rounded-t bg-green-400" style={{ height: "70%" }} />
                                            <div className="w-6 self-end rounded-t bg-green-400" style={{ height: "60%" }} />
                                            <div className="w-6 self-end rounded-t bg-green-600" style={{ height: "100%" }} />
                                        </div>


                                    </div>
                                </div>
                            </div>



                            <div className="p-4">
                                <h2 className="text-white text-2xl font-bold leading-tight tracking-tight text-secondary-900 py-4">
                                    Recent Incidents
                                </h2>

                                <div className="space-y-4">
                                    {/* Incident 1 */}
                                    <div className="bg-[#1f1f1f] flex items-start justify-between gap-6 rounded-lg border border-gray-700 p-4 shadow-sm">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-[#9eb7a8] text-sm font-medium leading-normal text-secondary-500">
                                                Incident Report
                                            </p>
                                            <p className="text-white text-lg font-bold leading-tight text-secondary-800">
                                                Calf Injury
                                            </p>
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-600">
                                                A calf sustained a minor leg injury in the pasture. Treated with
                                                antibiotics and rest.
                                            </p>
                                        </div>
                                        <div
                                            className="h-24 w-32 flex-shrink-0 rounded-md bg-cover bg-center bg-no-repeat"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0aOySoemOL2ImlRQEzHrChmY3bDA3A30p8RYTfS-OImoLr39c5crKuRMQdYgt6sfG-6YpLFT-mM5_5FQEGqVfzUqVkIagwSmay5qC0_4WcBHspOGu1_sMAS93qmU4GIYj-r_jz2s1V31C68ntMpyyyFajt2ukWmKnwHiSdskPpszXTYpEIZD11GqR8AudLCDVJxdgvxHsAUvWTJc_Z0io7_cA8a0F_ku1GbBvRjQEPk8gtdsnoARFtnamI7_xI6K3nfTNttzmOqMQ")',
                                            }}
                                        />
                                    </div>

                                    {/* Incident 2 */}
                                    <div className="bg-[#1f1f1f] flex items-start justify-between gap-6 rounded-lg border border-gray-700 p-4 shadow-sm">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-[#9eb7a8] text-sm font-medium leading-normal text-secondary-500">
                                                Incident Report
                                            </p>
                                            <p className="text-white text-lg font-bold leading-tight text-secondary-800">
                                                Fence Damage
                                            </p>
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-600">
                                                A section of the fence was damaged by a fallen tree. Repaired and
                                                reinforced.
                                            </p>
                                        </div>
                                        <div
                                            className="h-24 w-32 flex-shrink-0 rounded-md bg-cover bg-center bg-no-repeat"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2YXhv-u-bkRCmk45f8Vgp3yPBFLD-rkxLq_KQGIKlg2zdYwhIIvdu9b9RTscIWb3Y0R157Zqp2PUeE15bVUBkgW3GaCfJkavoqew2oBgMfNGn-8Qa6-1fYjJT5RDcz_cKWm08XsWrT6PoDgE_EO7IujXwu4L2N6okm4aMuJLjgpTVIGXz9N9tLlB0-8PAsDwL6eqvAKrOcVjk45RFoP1dYGF1jcmALwBvCMWm5EEUOe6wPz2iRJeC3V2I3KB68jYDXX1t3-fWay6y")',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="p-4 ">
                                <h2 className="text-white text-2xl font-bold leading-tight tracking-tight text-secondary-900 py-4">
                                    Vaccination &amp; Compliance
                                </h2>

                                <div className="bg-[#1f1f1f] overflow-hidden rounded-lg border border-gray-700 shadow-sm">
                                    <table className="w-full">
                                        <thead className="bg-secondary-50">
                                            <tr>
                                                <th className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-secondary-500">
                                                    Vaccine
                                                </th>
                                                <th className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-secondary-500">
                                                    Date
                                                </th>
                                                <th className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-secondary-500">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-secondary-200 ">
                                            <tr>
                                                <td className="text-[#9eb7a8] whitespace-nowrap px-6 py-4 text-sm font-medium text-secondary-900">
                                                    Bovine Respiratory Disease
                                                </td>
                                                <td className="text-[#9eb7a8] whitespace-nowrap px-6 py-4 text-sm text-secondary-500">
                                                    2023-08-15
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-[#9eb7a8] whitespace-nowrap px-6 py-4 text-sm font-medium text-secondary-900">
                                                    Foot and Mouth Disease
                                                </td>
                                                <td className="text-[#9eb7a8] whitespace-nowrap px-6 py-4 text-sm text-secondary-500">
                                                    2023-09-20
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-[#9eb7a8] whitespace-nowrap px-6 py-4 text-sm font-medium text-secondary-900">
                                                    Anthrax
                                                </td>
                                                <td className="text-[#9eb7a8] whitespace-nowrap px-6 py-4 text-sm text-secondary-500">
                                                    2023-10-05
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                                                        Pending
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>





                        </div>

                        {/* Sidebar */}
                        <aside className="w-[360px] flex-shrink-0 p-4 ">
                            <div className="bg-[#1f1f1f] flex flex-col gap-6 rounded-lg border border-gray-700 p-6 shadow-sm">
                                <div className="flex flex-col items-center gap-4">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxi_e2qqxmzWs8dHy9jjfFWcRp7aaWRJhVzSMQI-DRUIiBgmGpqOXMhnim_6S4R-2dgKEE6eslzLIBFjIElgrZ4dpUIZRm7hJI-E_t3wE87G_aLlXhPeQKvP1pRpRkRgx9ECLhdjkf_dPtSw1JJ9mJHrqxHHO6SjNj36U_ycXzXssmHUwf72fyWLGNnTcAUgKUh3IGNu8WDHEjixDTsVl97BvnHxiieEsiFVzLU6jKr_EC0bXszwd_BOGySDZ-cviw5SAQKg_Y2V32")',
                                        }}
                                    />
                                    <div className="flex flex-col items-center">
                                        <p className="text-white text-xl font-bold leading-tight tracking-tight text-secondary-900">
                                            Oak Ridge Farm
                                        </p>
                                        <p className="text-[#9eb7a8] text-base font-normal leading-normal text-secondary-500">
                                            Dairy Farm
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-white text-lg font-bold leading-tight tracking-tight text-secondary-900">Farm
                                        Details</h3>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex justify-between border-t border-gray-700 pt-4">
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Location</p>
                                            <p className="text-white text-sm font-medium leading-normal text-secondary-800">Rural County,
                                                State</p>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-700 pt-4">
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Size</p>
                                            <p className="text-white text-sm font-medium leading-normal text-secondary-800">500 acres</p>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-700 pt-4">
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Livestock</p>
                                            <p className="text-white text-sm font-medium leading-normal text-secondary-800">Dairy Cows</p>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-700 pt-4">
                                            <p className="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Last Visit</p>
                                            <p className="text-white text-sm font-medium leading-normal text-secondary-800">2023-11-15</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 class="text-white text-lg font-bold leading-tight tracking-tight text-secondary-900">Contact
                                    </h3>
                                    <div class="mt-4 space-y-4">
                                        <div class="flex justify-between border-t border-gray-700 pt-4">
                                            <p class="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Owner</p>
                                            <p class="text-white text-sm font-medium leading-normal text-secondary-800">Ethan Carter
                                            </p>
                                        </div>
                                        <div class="flex justify-between border-t border-gray-700 pt-4">
                                            <p class="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Phone</p>
                                            <p class="text-white text-sm font-medium leading-normal text-secondary-800">(555) 123-4567
                                            </p>
                                        </div>
                                        <div class="flex justify-between border-t border-gray-700 pt-4">
                                            <p class="text-[#9eb7a8] text-sm font-normal leading-normal text-secondary-500">Email</p>
                                            <p class="text-white text-sm font-medium leading-normal text-secondary-800">
                                                ethan.carter@email.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default VetFarmDetails
