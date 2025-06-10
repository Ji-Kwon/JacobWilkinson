export default function Project({ thumbnail, name, description, link }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[29.25vw] h-[60vh] bg-[#1c1c1c] hover:bg-[#262626] transition-colors duration-300 rounded-md overflow-hidden"
      >
        <img src={thumbnail} alt={`${name} logo`} className="w-[28vw] h-[28vw] object-cover" />
        <div>
          <h4 className="text-sm ml-[.5vw] mt-1">{name}</h4>
          <p className="text-[0.5rem] text-[#6e6e6e] ml-[.5vw]">{description}</p>
        </div>
      </a>
    );
  }
  