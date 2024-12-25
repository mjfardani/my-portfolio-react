import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
    return (
        <div className='pb-4'>
            <h2 className='my-20 text-center text-4xl'>Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className="w-full lg:w-1/4">
                            <p className='mb-2 text-sm text-stone-600'>
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className='mb-2 font-semibold'>
                                {experience.role} -{""}
                                <span className='text-sm text-black'>
                                    {experience.company}</span>
                            </h3>
                            <p className='mb-4 text-slate-950'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span className='mr-2 mt-4 rounded bg-gradient-to-r from-cyan-600 to-blue-800 px-2 py-1 text-sm font-medium text-slate-50' key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
