import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import TechnologyCard from "./TechnologyCard";

export default function ProjectCard({
  imageSrc,
  title,
  href,
  description,
  tags = [],
}) 
{
return (
   <a
     href={href}
     target="_blank"
     rel="noopener noreferrer"
     className="group flex flex-col p-6 pb-10 bg-[#121212] rounded-lg hover:bg-[#1c1c1c] transition-colors"
   >
     {/* Row 1: image  title/description */}
     <div className="flex">
       {/* thumbnail */}
       <div className="flex-shrink-0 w-32 h-20 overflow-hidden rounded-md">
         <img
           src={imageSrc}
           alt={`${title} screenshot`}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform"
         />
       </div>

       {/* title  description */}
       <div className="ml-4 flex-1 flex flex-col justify-center">
         <h3 className="text-lg font-semibold text-white flex items-center">
           {title}
           <FaExternalLinkAlt
             className="ml-2 w-3 h-3 text-gray-400 group-hover:text-gray-200"
           />
         </h3>
         <p className="text-sm text-gray-400 mt-1">{description}</p>
       </div>
     </div>

     {/* Row 2: tech stack, aligned under the left padding (same as image) */}
     <div className="mt-3 flex flex-wrap gap-4">
       {tags.map((tech) => (
         <div key={tech.name} className="w-[8vw]">
           <TechnologyCard
             icon={tech.icon}
             name={tech.name}
             description={tech.description}
             color={tech.color}
           />
         </div>
       ))}
     </div>
   </a>
 )
  
}

  