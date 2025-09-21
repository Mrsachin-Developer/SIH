import React from "react";
import Sidebar from "../../Components/Vet/Sidebar";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Nav from "../../Components/Vet/Nav";

const VetAlerts = () => {
    const navigate = useNavigate();

    return (
        <div className="flex bg-[#121212]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <Nav title="Alerts" />

                <div className="flex-1 px-4 py-8 sm:px-6 md:px-8 bg-[#121212] min-h-screen">
                    <div className="mx-auto max-w-2xl">
                        <div className="space-y-6 rounded-lg bg-[#1f1f1f] p-6 shadow-sm">
                            {/* Header */}
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold text-white">
                                    Send Communication
                                </h1>
                                <p className="text-gray-500">
                                    Send SOPs, messages, or alerts directly to farmers.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="space-y-6">
                                {/* Recipient */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="recipient"
                                        className="text-sm font-medium text-white"
                                    >
                                        Recipient Farmer
                                    </label>
                                    <select
                                        id="recipient"
                                        name="recipient"
                                        className="form-select w-full rounded-md bg-[#292e2b] border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                                    >
                                        <option disabled selected>
                                            Select a farmer
                                        </option>
                                        <option>John Doe - Sunnydale Farm</option>
                                        <option>Jane Smith - Green Acres</option>
                                        <option>Peter Jones - Hilltop Ranch</option>
                                        <option>ALL FARMERS</option>
                                    </select>
                                </div>

                                {/* Subject */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium text-white"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        id="Text"
                                        name="subject"
                                        placeholder="e.g., New Biosecurity SOP"
                                        className="form-select w-full rounded-md bg-[#292e2b] border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Enter your message or SOP details here..."
                                        className="form-select w-full rounded-md bg-[#292e2b] border-gray-700 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
                                    ></textarea>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center justify-between">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-green-600"
                                    >
                                        <span className="material-symbols-outlined">attach_file</span>
                                        Attach SOP (PDF)
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    >
                                        <span className="material-symbols-outlined text-black">Send Message</span>
                                        
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VetAlerts;
