import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Socials from './components/Socials';
import { ABOUT_TEXT, PROJECTS, TECHNOLOGIES, HOVERGIF, VERSIONS } from './constants';
import ProjectCard from './components/ProjectCard';
import { FaExternalLinkAlt } from 'react-icons/fa';
import HoverGif from './components/HoverGif';
import VersionsModal from './components/VersionsModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Section refs
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      entries => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const topMost = visibleSections[0];
          setActiveSection(topMost.target.id);
        }
      },
      {
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.5,
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Function to handle navbar item clicks (smooth scroll)
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <div className='flex flex-col h-screen w-[100vw] lg:w-full'>
      {/*Hero Section*/}
      <div className='w-fit flex flex-col pt-12 pl-6  lg:fixed lg:p-12 lg:pt-24 lg:w-[40vw] lg:gap-12'>
        <Hero>
          <h1 className='text-5xl font-bold pb-2'>Jacob Wilkinson</h1>
          <div className="flex flex-row items-center mb-2 space-x-2 lg:space-x-4">
            <h4 className="text-xl text-white">Full Stack Developer</h4>
            <a
              href="/Jacob-Wilkinson_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md lg:text-xl text-white opacity-80 hover:opacity-40 transition-colors flex items-center space-x-2"
            >
              Resume
              <FaExternalLinkAlt className="ml-2 size-3 lg:size-4 opacity-80 text-[#FFF] group-hover:opacity-40" />
            </a>
          </div>
          <h4 className='text-xl font-bold opacity-20 mb-2'>Toronto, Canada</h4>
          <p className='text-sm lg:text-md text-white opacity-60 w-[66vw] lg:w-[25vw]'>
            I am a 21 year old full stack developer who builds fun, useful products.
          </p>
        </Hero>
        <div className='hidden lg:block' >
          <Sidebar  activeSection={activeSection} setActiveSection={handleNavClick} />
        </div>
        <Socials />
      </div>

      <div className='ml-[48vw] w-[46vw] pt-24 flex flex-col'>
        <div id="about" ref={aboutRef} className='pb-28'>
          {ABOUT_TEXT.map((text, i) => (
            <React.Fragment key={i}>
              <p className='text-md leading-6.5 opacity-60'>{text}</p>
              <br />
            </React.Fragment>
          ))}
        </div>

        <div id="projects" ref={projectsRef} className="space-y-4 pb-24 pt-12">
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div id='contact' ref={contactRef}>
          <Contact />
        </div>

        <p className='pt-24 pb-12 text-md opacity-60 w-[34vw]'>
          Coded in Visual Studio Code by me. Built with React and Tailwind CSS, deployed with CLOUDFLARE. Inspired by BrittanyChiang.com v4.
        </p>
      </div>

      <div className='flex justify-end pb-16 pr-16'>
        <HoverGif
          stillSrc={HOVERGIF.still}
          gifSrc={HOVERGIF.gif}
          alt={HOVERGIF.alt}
          className="size-20 w-fit object-cover rounded-lg shadow-lg hover:cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <VersionsModal
          show={showModal}
          versions={VERSIONS}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
}

export default App;
