

export default function TechnologyCard ({ icon, name, description, color }){
    return(
        <div className="flex items-center my-[.5vw] w-[18vw] lg:w-[8vw] h-full bg-[#121212] hover:bg-[#262626] transition-colors duration-500 border border-[#2a2a2a] rounded-md">
        <div
          className="size-5 lg:size-7 ml-[.5vw] flex items-center justify-center rounded-xs"
          style={{ backgroundColor: color }}
        >
          <img src={icon} alt={`${name} logo`} className="size-4 lg:size-6"/>
        </div>
        <div>
          <h4 className="text-[0.55rem] lg:text-xs ml-[.5vw]">{name}</h4>
          <p className="text-[0.25rem] text-[#6e6e6e] ml-[.5vw]">{description}</p>
        </div>
      </div>
    );
}