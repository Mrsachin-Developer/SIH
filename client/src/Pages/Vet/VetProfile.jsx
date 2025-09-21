import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Vet/Sidebar";
import {
    Mail,
    Phone,
    MapPin,
    Stethoscope,
    Award,
    Activity,
} from "lucide-react";

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
                <div className="min-h-screen bg-[#121212] text-white flex flex-col px-6 py-8">

                    {/* Profile Header */}
                    <div className="flex items-center justify-between border-b pb-6">
                        {/* Left */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img
                                    src={profileImage || "src/assets/doctorprofile.png"}
                                    className="w-28 h-28 rounded-full object-cover border-4 border-[#20df6c] shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-wide">{formData.name}</h2>
                                <p className="text-[#20df6c] font-medium">{formData.specialization} Specialist</p>
                                <p className="text-sm text-gray-400 flex items-center gap-2">
                                    <Mail size={16} /> {formData.email}
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => navigate("/vet-profileEdit")}
                                className="bg-[#20df6c] hover:bg-[#18b858] text-[#111714] px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition"
                            >
                                Edit Profile
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/vet/login")}
                                className="bg-[#da3a3a] hover:bg-[#bb0000] text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
                            <Award className="text-[#20df6c]" />
                            <div>
                                <p className="text-sm text-gray-400">Experience</p>
                                <p className="text-xl font-semibold">7+ Years</p>
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
                            <Activity className="text-[#20df6c]" />
                            <div>
                                <p className="text-sm text-gray-400">Cases Handled</p>
                                <p className="text-xl font-semibold">250+</p>
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] p-5 rounded-xl shadow hover:scale-105 transition flex items-center gap-3">
                            <Stethoscope className="text-[#20df6c]" />
                            <div>
                                <p className="text-sm text-gray-400">Specialization</p>
                                <p className="text-xl font-semibold">{formData.specialization}</p>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="mt-8 grid grid-cols-2 gap-6">
                        <div className="bg-[#1a1a1a] p-5 rounded-xl shadow space-y-4">
                            <p className="flex items-center gap-2 text-gray-400 text-sm">
                                <Phone size={16} /> Phone
                            </p>
                            <p className="text-lg font-medium">{formData.phone}</p>

                            <p className="flex items-center gap-2 text-gray-400 text-sm">
                                <MapPin size={16} /> Address
                            </p>
                            <p className="text-lg font-medium">{formData.address}</p>
                        </div>

                        <div className="bg-[#1a1a1a] p-5 rounded-xl shadow space-y-4">
                            <p className="flex items-center gap-2 text-gray-400 text-sm">
                                🌐 Language
                            </p>
                            <p className="text-lg font-medium">{formData.language}</p>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="mt-8">
                        <p className="text-sm text-gray-400 mb-2">BIO:</p>
                        <div className="  p-6 rounded-xl border border-[#3d5245] bg-gradient-to-br from-[#111714] to-[#1a1a1a] w-full shadow-inner overflow-y-auto max-h-60">
                            <p className=" leading-relaxed text-gray-300">
                                Dr. John Doe, Veterinary Officer – Poultry & Swine Health Specialist.
                                With over 7 years of expertise in livestock health and farm biosecurity,
                                Dr. John has worked closely with rural farmers to prevent and manage
                                outbreaks such as Avian Influenza and Swine Fever. Passionate about
                                animal welfare and farmer awareness, he provides practical, low-cost
                                solutions to help farmers boost productivity while keeping animals safe.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VetProfile;
