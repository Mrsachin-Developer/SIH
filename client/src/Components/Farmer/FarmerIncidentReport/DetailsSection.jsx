import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "../../../index.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function DetailsSection() {
  const [date, setDate] = useState("2024-07-28");
  const [time, setTime] = useState("14:35");
  const [location, setLocation] = useState("40.7128° N, 74.0060° W");

  // popover toggles
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lon = pos.coords.longitude.toFixed(4);
          setLocation(`${lat}° N, ${lon}° E`);
        },
        (err) => alert("Unable to retrieve location: " + err.message)
      );
    } else {
      alert("Geolocation not supported.");
    }
  };

  return (
    <div className="space-y-4 relative">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DATE */}
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 p-2 focus:ring-primary focus:border-primary"
            />
            <div className="flex justify-center items-center mt-3 p-1">
              <button
                type="button"
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  setShowTimePicker(false);
                }}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-white hover:text-primary"
              >
                <CalendarMonthIcon />
              </button>
            </div>

            {showDatePicker && (
              <div className="absolute top-full right-0 mt-1 w-72 bg-black text-white p-3 rounded-xl shadow-lg z-10">
                <DatePicker
                  onChange={(value) => {
                    const formatted = value.toISOString().split("T")[0];
                    setDate(formatted);
                    setShowDatePicker(false);
                  }}
                  value={new Date(date)}
                  className="w-full rounded-lg bg-amber-300 text-black p-2 border-none"
                  calendarClassName="bg-black text-white rounded-xl border border-gray-600 [&_button]:text-white [&_button.Mui-selected]:bg-primary [&_button.Mui-selected]:text-white [&_button:hover]:bg-gray-700"
                  clearIcon={null}
                />
              </div>
            )}
          </div>

          {/* TIME */}
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
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="form-input w-full rounded-lg bg-black/30 border-primary/30 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
            />
            <div className="flex justify-center items-center mt-3 p-1">
              <button
                type="button"
                onClick={() => {
                  setShowTimePicker(!showTimePicker);
                  setShowDatePicker(false);
                }}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-primary"
              >
                <AccessTimeIcon />
              </button>
            </div>
            {showTimePicker && (
              <div className="absolute top-full right-0 mt-1 bg-black text-white p-4 rounded-xl shadow-lg z-10">
                <div className="flex gap-4 items-center">
                  {/* hour selector */}
                  <select
                    className="bg-black text-white border border-gray-600 rounded-lg p-3 text-lg w-20"
                    value={time.split(":")[0]}
                    onChange={(e) => {
                      const newHour = e.target.value;
                      const newTime = `${newHour}:${time.split(":")[1]}`;
                      setTime(newTime);
                    }}
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={String(i).padStart(2, "0")}>
                        {String(i).padStart(2, "0")}
                      </option>
                    ))}
                  </select>

                  <span className="flex items-center text-xl font-bold">:</span>

                  {/* minute selector */}
                  <select
                    className="bg-black text-white border border-gray-600 rounded-lg p-3 text-lg w-24"
                    value={time.split(":")[1]}
                    onChange={(e) => {
                      const newMin = e.target.value;
                      const newTime = `${time.split(":")[0]}:${newMin}`;
                      setTime(newTime);
                      setShowTimePicker(false);
                    }}
                  >
                    {Array.from({ length: 60 / 5 }, (_, i) => {
                      const val = String(i * 5).padStart(2, "0");
                      return (
                        <option key={val} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* LOCATION */}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input w-full rounded-lg bg-black/30 border-primary/30 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
            />
            <div className="flex justify-center items-center mt-3 p-1">
              <button
                type="button"
                onClick={handleGetLocation}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-primary"
              >
                <MyLocationIcon />
              </button>
            </div>
          </div>

          {/* ANIMALS */}
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

          {/* PHOTO BUTTON */}
          <div className="md:col-span-2">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-bold hover:bg-primary/30 transition-colors">
              <CameraAltIcon />
              <span>Attach Photo/Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
