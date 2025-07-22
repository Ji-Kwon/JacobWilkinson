import React from 'react'
import { SOCIALS } from '../constants'
const Socials = () => {
  return (
    <div className="flex space-x-4">
      {SOCIALS.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            size-8
            flex items-center justify-center
            rounded-md
            transition
            opacity-60
            hover:opacity-100
          "
        >
        <Icon className="size-8 text-gray-300 transition group-hover:text-white" />
        </a>
      ))}
    </div>
  )
}

export default Socials
