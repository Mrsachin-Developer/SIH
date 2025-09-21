import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

import "../../../index.css";

export default function DetailsSection() {
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState("14:35");
  const [location, setLocation] = useState("40.7128° N, 74.0060° W");
  const [files, setFiles] = useState([]);

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

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div className="space-y-4 relative">
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
            value={date ? date.format("YYYY-MM-DD") : ""}
            readOnly
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="w-full rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 p-2 pr-10 cursor-pointer focus:ring-primary focus:border-primary"
          />
          <CalendarMonthIcon
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="absolute top-14 right-2 -translate-y-1/2 text-white hover:text-primary cursor-pointer"
          />
          {showDatePicker && (
            <div className="absolute top-full right-0 mt-1 w-full md:w-72 bg-black text-white p-3 rounded-xl shadow-lg z-10">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                    setShowDatePicker(false);
                  }}
                  className="bg-black  text-white rounded-lg [&_button]:text-white [&_button.Mui-selected]:bg-primary [&_button.Mui-selected]:text-white [&_button:hover]:bg-gray-700"
                />
              </LocalizationProvider>
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
            readOnly
            onClick={() => {
              setShowTimePicker(!showTimePicker);
              setShowDatePicker(false);
            }}
            className="w-full rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 p-2 pr-10 cursor-pointer focus:ring-primary focus:border-primary"
          />
          <AccessTimeIcon
            onClick={() => {
              setShowTimePicker(!showTimePicker);
              setShowDatePicker(false);
            }}
            className="absolute top-14 right-2 -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
          />
          {showTimePicker && (
            <div className="absolute top-full right-0 mt-1 bg-black text-white p-4 rounded-xl shadow-lg z-10">
              <div className="flex gap-2 items-center">
                <select
                  className="bg-black text-white border border-gray-600 rounded-lg p-2 text-lg w-20"
                  value={time.split(":")[0]}
                  onChange={(e) =>
                    setTime(`${e.target.value}:${time.split(":")[1]}`)
                  }
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={String(i).padStart(2, "0")}>
                      {String(i).padStart(2, "0")}
                    </option>
                  ))}
                </select>

                <span className="text-xl font-bold">:</span>

                <select
                  className="bg-black text-white border border-gray-600 rounded-lg p-2 text-lg w-20"
                  value={time.split(":")[1]}
                  onChange={(e) =>
                    setTime(`${time.split(":")[0]}:${e.target.value}`)
                  }
                >
                  {Array.from({ length: 12 }, (_, i) => {
                    const val = String(i * 5).padStart(2, "0");
                    return (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>

                <button
                  className="bg-primary text-black px-3 py-1 rounded-lg ml-2 hover:bg-primary/70"
                  onClick={() => setShowTimePicker(false)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* LOCATION */}
        <div className="md:col-span-2 relative ">
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
            readOnly
            className="w-full rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 p-2 pr-10 cursor-pointer focus:ring-primary focus:border-primary"
          />
          <MyLocationIcon
            onClick={handleGetLocation}
            className="absolute top-14 right-2 -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
          />
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

        {/* PHOTO/VIDEO */}
        <div className="md:col-span-2">
          <label
            htmlFor="file-input"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-bold hover:bg-primary/30 transition-colors cursor-pointer"
          >
            <CameraAltIcon />
            <span>Attach Photo/Video</span>
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*,video/*"
            capture="environment"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Preview selected files */}
          {files.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24 border border-gray-500 rounded-lg overflow-hidden"
                >
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(file)}
                      className="w-full h-full object-cover"
                      controls
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
