import React, { useState } from "react";
import Sidebar from "../../Components/Vet/Sidebar";


const VetProfile = () => {
    const [profile, setProfile] = useState({
        name: "Dr. John Doe",
        email: "vet@example.com",
        phone: "+91 9876543210",
        address: "123 Green Valley, Pune, India",
        specialization: "Cattle & Dairy",
        bio: "Passionate about livestock health and sustainable farming.",
        profilePic: "https://via.placeholder.com/150", // default
    });

    // Handle text inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    // Handle profile picture upload
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile((prev) => ({ ...prev, profilePic: imageUrl }));
        }
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile:", profile);
        alert("Profile Updated Successfully ✅");
    };



    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <div className="min-h-screen bg-[#111714] text-white flex flex-col items-center px-4 py-8">
                    {/* Page Title */}
                    <h1 className="text-3xl font-bold mb-6">Vet Profile</h1>

                    {/* Profile Container */}
                    <div className="w-full max-w-2xl bg-[#1a201d] rounded-2xl shadow-lg p-6 space-y-6">
                        {/* Profile Picture */}
                        <div className="flex flex-col items-center space-y-3">
                            <img
                                src={profile.profilePic}
                                alt=""
                                className="w-28 h-28 rounded-full object-cover border-4 border-[#20df6c]"
                            />
                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoChange}
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById("fileInput").click()}
                                className="text-sm text-[#20df6c] hover:underline"
                            >
                                Change Photo
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-[#111714] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-[#111714] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm mb-1">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-[#111714] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm mb-1">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-[#111714] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                                />
                            </div>

                            {/* Specialization */}
                            <div>
                                <label className="block text-sm mb-1">Specialization</label>
                                <select
                                    name="specialization"
                                    value={profile.specialization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-[#111714] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                                >
                                    <option>Cattle & Dairy</option>
                                    <option>Poultry</option>
                                    <option>Sheep & Goats</option>
                                    <option>Equine</option>
                                    <option>Companion Animals</option>
                                </select>
                            </div>

                            {/* Bio */}
                            <div>
                                <label className="block text-sm mb-1">Bio</label>
                                <textarea
                                    name="bio"
                                    value={profile.bio}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-lg bg-[#111714] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#20df6c]"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-[#20df6c] text-[#111714] px-6 py-2 rounded-xl font-medium hover:bg-[#18b858] transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VetProfile;
