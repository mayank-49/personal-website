import ExportIcon from '../assets/Read More.png'
import React from 'react'
const ProjectCard = ({projectData}) => {
  return(
    <div className={`flex flex-col items-center lg:flex-row gap-4 md:gap-12 text-white ${ projectData.id % 2 === 0 && 'lg:flex-row-reverse' }`}>
      <img src={projectData.image} className="rounded-2xl md:h-[400px] md:w-[550px] " />
      <div className='flex flex-col gap-2 md:gap-4'>
        <p className='font-display font-extrabold text-xl md:text-2xl lg:text-5xl'>{projectData.id}</p>
        <p className='font-display font-extrabold text-lg md:text-5xl'>{projectData.title}</p>
        <div className="flex flex-wrap gap-2">
                  {projectData.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
        <p className="text-zinc-500 font-display text-sm md:text-md lg:text-[15px]">{projectData.description}</p>
        <a href={projectData.link} target="_blank" rel="noopener noreferrer">
          <img src={ExportIcon} className='w-5 h-5' />
        </a>
      </div>
    </div>
  )
}
export default ProjectCard