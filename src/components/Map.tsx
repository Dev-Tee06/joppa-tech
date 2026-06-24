"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";
import { renderToString } from "react-dom/server";

export default function Map() {
  const [mounted, setMounted] = useState(false);
  const position: [number, number] = [6.4583, 3.6022];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-slate-100 animate-pulse">
        <div className="flex flex-col items-center text-slate-400">
          <MapPin className="w-8 h-8 mb-2 animate-bounce" />
          <span>Loading interactive map...</span>
        </div>
      </div>
    );
  }

  // Create a custom Tailwind styled divIcon to avoid default Leaflet image path issues in Next.js
  const customIcon = L.divIcon({
    className: "custom-leaflet-icon",
    html: renderToString(
      <div className="text-primary-600 drop-shadow-md -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" fill="white" />
        </svg>
      </div>,
    ),
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

  return (
    <div className="w-full h-full min-h-[400px] z-0">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ height: "100%", width: "100%", minHeight: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup className="rounded-xl overflow-hidden font-sans">
            <div className="p-1">
              <h3 className="font-bold text-slate-800 text-sm mb-1">
                Joppa Technology Services Limited
              </h3>
              <p className="text-slate-600 text-xs">
                3 Nurudeen Dali Street
                <br />
                Off Sangotedo Road, Ogombo
                <br />
                Lagos, Nigeria
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
