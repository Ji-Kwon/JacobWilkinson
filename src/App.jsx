
import React from 'react';
import './App.css'
import Contact from './components/Contact';
import Hero from './components/Hero'
import Project from './components/ProjectCard';
import Sidebar from './components/Sidebar'
import Socials from './components/Socials';
import TechnologyCard from './components/TechnologyCard';
import { ABOUT_TEXT, PROJECTS, TECHNOLOGIES } from './constants';
import ProjectCard from './components/ProjectCard';
import { FaExternalLinkAlt } from 'react-icons/fa';




function App() {

  return (
    <div className='flex flex-col h-screen'>
    {/*left panel*/}
      <div className='fixed p-12 pt-24 w-[40vw] flex flex-col gap-12'>
          <Hero>
            <h1 className='text-5xl font-bold pb-2'>Jacob Wilkinson</h1>
            <div className="flex flex-row items-center space-x-4 mb-2">
              <h4 className="text-xl text-white">Full Stack Developer</h4>
              <a
                href="/Jacob-Wilkinson_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white opacity-80 hover:opacity-40 transition-colors flex items-center space-x-2"
              >
              Resume 
              <FaExternalLinkAlt
                           className="ml-2 size-4 opacity-80 text-[#FFF] group-hover:opacity-40"
                         />
              </a>
            </div>
            <h4 className='text-xl font-bold opacity-20 mb-2'>Toronto, Canada</h4>
            <p className='text-md text-white opacity-60 w-[25vw]'>I am a 21 year old full stack developer who builds fun, useful products.</p>
          </Hero>
          <Sidebar></Sidebar>
          <Socials></Socials>
        </div>
        {/*right panel*/}
        <div id="about" className='ml-[48vw] w-[46vw] pt-24 flex flex-col'>
          <div className='pb-28'>
              {ABOUT_TEXT.map((text, i) =>(
              <React.Fragment key={i}>
                <p className='text-md leading-6.5 opacity-60'>{text}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div id="projects" className="space-y-4 pb-24">
            {PROJECTS.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div id='contact'>
            <Contact />
          </div>
          <p className='py-24 text-md opacity-60 w-[34vw]'>Coded in Visual Studio Code by me. Built with React and Tailwind CSS, deployed with GitHub Pages. Inspired by BrittanyChiang.com v4.</p>
        </div>
        
    </div>
  )
}

export default App
