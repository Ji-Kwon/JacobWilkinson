// src/components/VersionsModal.jsx
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function VersionsModal({ show, versions, onClose }) {
  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="
          fixed inset-0
          bg-black opacity-80
          transition-opacity duration-300 ease-out
          z-40
        "
      />

      {/* Centered panel container */}
      <div
        className="
          fixed inset-0
          flex items-center justify-center
          z-50
          pointer-events-none
        "
      >
        {/* Modal panel */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            relative p-6 w-[60vw] opacity-100
            transform transition-transform duration-300 ease-out
            scale-100
            pointer-events-auto
          "
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <h2 className="text-xl font-bold mb-4 text-center">
            Travel back in time
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {versions.map(({ label, url, srcImg }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center p-2 rounded overflow-hidden"
              >
                <img
                  src={srcImg}
                  alt={label}
                  className="w-[30vw] h-auto object-cover"
                />

                {/* hover overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black opacity-0
                    flex items-center justify-center
                    transition-opacity duration-300
                    group-hover:opacity-80
                  "
                >
                  <span className="text-white text-lg font-medium">
                    {label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
