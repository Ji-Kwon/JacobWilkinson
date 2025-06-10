import React from "react";

export default function Sidebar (){
    return(
        <nav className="fixed left-[1vw] top-0 h-full flex flex-col">
            <div className="h-full flex flex-col justify-center space-y-[2vh]">
                <a href="#projects" className="text-[#4a4a4a] text-xs my-1">
                    Projects
                </a>
                <hr className="h-[0.5px] w-[8vw] bg-[#4a4a4a] border-0 mb-8"></hr>
                <a href="#contact" className="text-[#4a4a4a] text-xs my-1">
                    Contact Me
                </a>
                <hr className="h-[0.5px] w-[8vw] bg-[#4a4a4a] border-0"></hr>
            </div>
        </nav>
    );
}