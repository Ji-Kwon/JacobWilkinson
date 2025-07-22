
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




function App() {

  return (
    <div className='flex flex-col h-screen'>
    {/*left panel*/}
      <div className='fixed p-12 pt-24 w-[40vw] flex flex-col gap-12'>
          <Hero>
            <h1 className='text-5xl font-bold pb-2'>Jacob Wilkinson</h1>
            <h4 className='text-xl text-[#FFF] mb-2'>Full Stack Developer</h4>
            <h4 className='text-xl font-bold opacity-20 mb-2'>Toronto, Canada</h4>
            <p className='text-md text-white opacity-60 w-[25vw]'>I am a 21 year old full stack developer who builds fun, useful products.</p>
          </Hero>
          <Sidebar></Sidebar>
          <Socials></Socials>
        </div>
        {/*right panel*/}
        <div className='ml-[48vw] w-[46vw] py-24 flex flex-col'>
          <div className='pb-28'>
              {ABOUT_TEXT.map((text, i) =>(
              <React.Fragment key={i}>
                <p className='text-md leading-6.5 opacity-60'>{text}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div className="space-y-4 pb-24">
            {PROJECTS.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <Contact />
        </div>
        
    </div>
  )
}

export default App
