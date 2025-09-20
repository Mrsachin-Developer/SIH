import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Vet/Sidebar";


const VetProfile = () => {

    const navigate = useNavigate();

    const [profileImage, setProfileImage] = useState(null);
    const [formData, setFormData] = useState({
        name: "Dr. John Doe",
        email: "john@example.com",
        phone: "9876543210",
        address: "123 Main Street, New York",
        specialization: "Dogs, Cats",
        language: "English",
    });

    // handle text inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle image upload
    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    };



    return (
        <div className="flex">
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <div className="min-h-screen bg-[#111714] text-white flex flex-col px-4 py-8 ">

                    {/* Profile Header */}
                    <div className="flex items-center justify-between border-b pb-6">
                        {/* Profile Header Left */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img
                                    src={profileImage || "src/assets/doctorprofile.png"}
                                    className="w-28 h-28 rounded-full object-cover border"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{formData.name}</h2>
                                <p className="text-gray-600">{formData.specialization} Specialist</p>
                                <p className="text-sm text-gray-500">{formData.email}</p>
                            </div>
                        </div>

                        {/* Buttons Right */}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => navigate("/vet-profileEdit")}
                                className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-medium transition"
                            >
                                Edit Profile
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/vet/login")}
                                className="bg-[#da3a3a] hover:bg-[#bb0000] text-white px-6 py-2 rounded-xl font-medium transition"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>




                    {/* Form Section */}
                    <div className="mt-6 space-y-5">
                        <div>
                            <p className="text-sm text-gray-400">Full Name</p>
                            <p className="text-lg font-medium text-white">{formData.name}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-lg text-white">{formData.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="text-lg text-white">{formData.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">Address</p>
                            <p className="text-lg text-white">{formData.address}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 ">Specialization</p>
                            <p className="text-lg text-white">{formData.specialization}</p>
                        </div>

                        <div >
                            <p className="text-sm text-gray-400">BIO:</p>
                            <div className="p-4 overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714] w-1/2">
                                <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                                    <p>Dr. John Doe
                                        Veterinary Officer – Poultry & Swine Health Specialist.

                                        Dr. John Doe is a dedicated veterinary professional with over 7 years of experience in livestock health and farm biosecurity. She has worked closely with rural farmers to prevent and manage outbreaks such as Avian Influenza and Swine Fever. Passionate about animal welfare and farmer awareness, she specializes in practical, low-cost solutions that help farmers improve productivity while keeping their animals safe. Through this platform, Dr. Verma aims to guide farmers with easy-to-follow advice, timely health updates, and trusted veterinary support.</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </main>
        </div>
    );
};

export default VetProfile;
