import React, { useState } from "react";
import { NAV_ITEMS } from "../constants";

export default function Sidebar() {
  const [active, setActive] = useState("about");

  return (
    <nav className="flex flex-col h-full justify-center space-y-6">
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = id === active;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className={`
              group flex items-center w-fit space-x-4
              transition-all duration-200
              ${isActive ? "opacity-100" : "opacity-60"}
            `}
          >
            {/* the bar */}
            <div
              className={`
                h-[1.2px] bg-white transition-all duration-200
                ${isActive
                  ? "w-16 opacity-100"
                  : "w-8 opacity-40 group-hover:w-16 group-hover:opacity-100"
                }
              `}
            />

            {/* the label */}
            <span
              className={`
                text-[0.75rem] font-bold transition-colors duration-200
                ${isActive
                  ? "text-white opacity-100"
                  : "text-gray-400 group-hover:text-white group-hover:opacity-100"
                }
              `}
            >
              {label.toUpperCase()}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
