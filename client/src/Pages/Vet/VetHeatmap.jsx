import React, { useRef, useState } from 'react'
import Sidebar from '../../Components/Vet/Sidebar';
import Nav from '../../Components/Vet/Nav';
import { useNavigate } from "react-router-dom";
import { assets } from '../../assets/assets';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";



const DEFAULT_CENTER = [20.5937, 78.9629];

function ZoomControls() {
    const map = useMap();

    return (
        <div className="absolute top-4 right-4 z-[1000] flex flex-col rounded-lg shadow-md bg-white/90 backdrop-blur-sm">
            <button
                className="flex size-11 text-2xl text-black items-center justify-center rounded-t-lg hover:bg-gray-100 transition-colors"
                onClick={() => map.zoomIn()}
            >
                +
            </button>
            <div className="w-full h-px bg-gray-300"></div>
            <button
                className="flex size-11 text-3xl text-black items-center justify-center rounded-b-lg hover:bg-gray-100 transition-colors"
                onClick={() => map.zoomOut()}
            >
                -
            </button>
        </div>

    );
}

function LocateButton() {
    const map = useMap();

    const handleLocate = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            map.setView([latitude, longitude], 13);
            L.marker([latitude, longitude]).addTo(map).bindPopup("You are here!");
        });
    };

    return (
        <button
            onClick={handleLocate}
            className="z-[1000] absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm shadow-md hover:bg-gray-100 transition-colors"
        >
            <img src={assets.nearme} alt="Locate Me" className="w-5 h-5" />
        </button>
    );
}


const VetHeatmap = () => {

    const navigate = useNavigate();


    const [search, setSearch] = useState("");
    const mapRef = useRef();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search) return;

        // Use OpenStreetMap's Nominatim for geocoding
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
        );
        const data = await res.json();

        if (data && data[0]) {
            const { lat, lon } = data[0];
            mapRef.current.setView([parseFloat(lat), parseFloat(lon)], 10);
        } else {
            alert("Location not found.");
        }
    };




    return (
        <div className="flex bg-[#121212]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 ml-64">
                <Nav title="HeatMap" />


                <div className="min-h-screen w-full bg-[#121212] font-['Inter','Noto Sans',sans-serif] text-white p-6">
                    <main className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
                        <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
                            {/* Page Header */}
                            <div className="flex flex-wrap justify-between items-start gap-4">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-white text-3xl font-bold dark:text-background-light">
                                        Analytics &amp; Heatmap
                                    </h1>
                                    <p className="text-base font-normal text-[#9eb7a8] dark:text-background-light/60">
                                        Visualize outbreak clusters and potential risk zones.
                                    </p>
                                </div>
                            </div>

                            {/* Filters */}
                            <div className="flex flex-col gap-4">
                                <div className="border-b border-primary/20 dark:border-primary/30 pb-4">
                                    <h3 className="text-lg font-bold text-white dark:text-background-light px-1 pb-3">
                                        Filters
                                    </h3>
                                    <div className="flex flex-wrap gap-3 px-1 ">
                                        {["Disease Type", "District", "Farm Type"].map((filter) => (
                                            <button
                                                key={filter}
                                                className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 px-4 transition-colors"
                                            >
                                                <span className="text-sm font-medium text-white dark:text-background-light">
                                                    {filter}
                                                </span>
                                                <span className="material-symbols-outlined text-[#9eb7a8] dark:text-background-light !text-xl">
                                                    <img src={assets.dropdown} alt="" className='w-5' />
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Heatmap */}
                                <div className="flex flex-col gap-4 relative">
                                    <h3 className="text-lg font-bold text-white dark:text-gray-200 px-1">
                                        Outbreak Heatmap
                                    </h3>


                                    <MapContainer
                                        center={DEFAULT_CENTER}
                                        zoom={5}
                                        className="h-[500px] w-full rounded-xl"
                                        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        {/* Example Marker */}
                                        <Marker position={[28.7041, 77.1025]}>
                                            <Popup>Delhi Outbreak</Popup>
                                        </Marker>

                                        <ZoomControls />
                                        <LocateButton />
                                    </MapContainer>
                                </div>

                                {/* Predictive Layer */}
                                <div className="border-t border-primary/20 dark:border-primary/30 pt-4">
                                    <h3 className="text-lg font-bold text-[#9eb7a8] dark:text-background-light px-1 pb-2">
                                        Predictive Layer
                                    </h3>
                                    <div className="px-1">
                                        <label className="flex items-center gap-x-3 py-2 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 rounded border-primary/40 dark:border-primary/50 bg-transparent text-primary checked:bg-primary checked:border-transparent focus:ring-1 focus:ring-offset-0 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary"
                                            />
                                            <span className="text-base text-white dark:text-background-light group-hover:text-primary transition-colors">
                                                Potential outbreak zones
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

            </main>
        </div>
    );
}

export default VetHeatmap
