import React, { useState } from "react";
import { NAV_ITEMS } from "../constants";

export default function Sidebar() {
  const [active, setActive] = useState("about");

  return (
    <nav className="flex flex-col h-full justify-center space-y-6">
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = id === active;
        return (
          <div
            key={id}
            onClick={() => setActive(id)}
            className="group flex items-center w-fit space-x-4 cursor-pointer"
          >
            {/* the bar */}
            <div
              className={`
                h-[1.2px]
                opacity-40
                bg-white
                transition-all
                duration-200
                ${isActive 
                  ? "w-16 opacity-100"      // active: wide & white
                  : "w-8 group-hover:w-16 group-hover:opacity-100 " // default narrow, on hover widens
                }
              `}
            />
            {/* the link label */}
            <a
              href={"#" + id}
              className={`
                text-[0.75rem]
                font-bold
                transition-colors
                duration-200
                ${isActive 
                  ? "text-white opacity-100"          // active: fully opaque
                  : "opacity-40 group-hover:text-white group-hover:opacity-100"
                }
              `}
            >
              {label.toUpperCase()}
            </a>
          </div>
        );
      })}
    </nav>
  );
}