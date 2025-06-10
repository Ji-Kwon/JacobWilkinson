export default function TechnologyCard ({ icon, name, description, color }){
    return(
        <div className="flex items-center my-[.5vw] w-[14.5vw] h-full bg-[#1c1c1c] hover:bg-[#262626] transition-colors duration-500 border border-[#2a2a2a] rounded-md">
        <div
          className="w-[3vw] h-[3vw] ml-[.5vw] flex items-center justify-center rounded-xs"
          style={{ backgroundColor: color }}
        >
          <img src={icon} alt={`${name} logo`} className="w-[2vw]"/>
        </div>
        <div>
          <h4 className="text-sm ml-[.5vw]">{name}</h4>
          <p className="text-[0.5rem] text-[#6e6e6e] ml-[.5vw]">{description}</p>
        </div>
      </div>
    );
}