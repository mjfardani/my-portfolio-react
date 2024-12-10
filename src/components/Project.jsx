import React from 'react'
import { PROJECTS } from '../constants'

const Project = () => {
    return (
        <div className="pb-4" >
            <h2 className='my-20 text-center text-4xl'> Projects</h2>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                        <img src={project.image}
                            width={250}
                            height={250}
                            alt={project.title}
                            className='mb-6 rounded' />
                    </div>
                    <div className="w full max-w-xl lg:w-3/4">
                        <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                        <p className='mb-4 text-slate-950'>{project.description}</p>
                        {project.technologies.map((technology, index) => (
                            <span key={index} className='mr-2 rounded bg-gradient-to-r from-cyan-600 to-blue-800 p-2 text-sm font-medium text-slate-50'>{technology}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project
