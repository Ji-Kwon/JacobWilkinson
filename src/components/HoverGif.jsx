import React, { useState } from "react";

export default function HoverGif({ stillSrc, gifSrc, alt, className }) {
  const [hover, setHover] = useState(false);

  return (
    <a><img
      src={hover ? gifSrc : stillSrc}
      alt={alt}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    /></a>
    
  );
}