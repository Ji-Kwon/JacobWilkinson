import React, { useState } from "react";

export default function HoverGif({ stillSrc, gifSrc, alt, className, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <img
      src={hover ? gifSrc : stillSrc}
      alt={alt}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    />
    
  );
}