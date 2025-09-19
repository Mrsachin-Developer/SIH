import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function DetailsSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Date
            </label>
            <input
              id="date"
              type="text"
              defaultValue="2024-07-28"
              className="form-input w-full rounded-lg bg-black/30 border-primary/30 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
            />
            <div className="flex justify-center items-center mt-3 p-1">
              <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined items-center">
                  <CalendarMonthIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Time
            </label>
            <input
              id="time"
              type="text"
              defaultValue="14:35"
              className="form-input w-full rounded-lg bg-black/30 border-primary/30 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
            />
            <div className="flex justify-center items-center mt-3 p-1">
              <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined items-center">
                  <AccessTimeIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              GPS Location
            </label>
            <input
              id="location"
              type="text"
              defaultValue="40.7128° N, 74.0060° W"
              className="form-input w-full rounded-lg bg-black/30 border-primary/30 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
            />
            <div className="flex justify-center items-center mt-3 p-1">
              <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined items-center">
                  <MyLocationIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="animals-affected"
              className="block text-sm font-medium text-gray-300 mb-3"
            >
              Number of Animals Affected
            </label>
            <div className="flex items-center gap-4">
              <input
                id="animals-affected"
                type="range"
                min="0"
                max="100"
                defaultValue="5"
                className="w-full h-2 bg-primary/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
              />
              <span className="font-bold text-lg text-primary">5</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-bold hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined">
                <CameraAltIcon />
              </span>
              <span>Attach Photo/Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
