
import './App.css'
import Contact from './components/Contact';
import Hero from './components/Hero'
import Project from './components/Project';
import Sidebar from './components/Sidebar'
import TechnologyCard from './components/TechnologyCard';

//technologies
const technologies = [
  {
    icon: '/icons/javascript-logo.svg',
    name: 'JavaScript',
    description: 'Programming Language',
    color: 'rgba(255, 255, 0, 0.2)'
  },
  {
    icon: '/icons/react-logo.svg',
    name: 'React',
    description: 'JavaScript Library',
    color: 'rgba(0, 255, 255, 0.2)'
  },
  {
    icon: '/icons/figma-logo.svg',
    name: 'Figma',
    description: 'Design Tool',
    color: 'rgba(160, 50, 255, 0.2)'
  },
  {
    icon: '/icons/git-logo.svg',
    name: 'Git',
    description: 'Version Control',
    color: 'rgba(255, 30, 0, 0.2)'
  },
  {
    icon: '/icons/mysql-logo.svg',
    name: 'MySQL',
    description: 'Relational Database',
    color: 'rgba(0, 128, 255, 0.2)'
  },
  {
    icon: '/icons/node-logo.svg',
    name: 'Node.js',
    description: 'Backend Runtime',
    color: 'rgba(68, 255, 0, 0.2)'
  },
  {
    icon: '/icons/tailwind-logo.svg',
    name: 'Tailwind CSS',
    description: 'CSS Framework',
    color: 'rgba(0, 200, 255, 0.2)'
  },
  {
    icon: '/icons/aws-logo.svg',
    name: 'AWS',
    description: 'Cloud Platform',
    color: 'rgba(255, 150, 0, 0.6)'
  }
];

const projects = [
  {

  }
]

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <div className='mb-[10vh]'>
        <Hero class="hero">
          <h2 className='text-2xl font-bold mb-.5'>Jacob Wilkinson</h2>
          <h4 className='text-lg font-bold text-[#333] mb-2'>Toronto, Canada</h4>
          <p className='text-sm'>I am a 21 year old full stack developer with over 5 years of experience.</p>
        </Hero>
      </div>
      <div class="technology" className=' flex-col items-center w-[60vw] mx-auto mb-[10vh]'>
        <div className='mb-[2vh]'>
          <h2 className='text-2xl font-bold mb-2'>What I work with</h2>
        </div>
        <div className='flex justify-center'>
          <div className='grid grid-rows-2 grid-cols-4 w-fit gap-[.75vw]'>
              {technologies.map((tech,index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
          </div>
        </div>
      </div>
      <div class='portfolio' className='flex-col items-center w-[60vw] mx-auto'>
        <h2 className='text-2xl font-bold'>Portfolio</h2>
        <div className='grid grid-cols-2 w-fit gap-[.75vw]'>
              {projects.map((project,index) => (
                <Project key={index} {...project} />
              ))}
        </div>
      </div>
      <Contact />
    </>
  )
}

export default App
