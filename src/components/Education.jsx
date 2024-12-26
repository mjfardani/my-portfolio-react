import React from 'react'
import { EDUCATION } from '../constants'

const Education = () => {
    return (
        <section className="dark:bg-gradient-to-r from-cyan-50 to-blue-100 dark:text-gray-800 rounded-xl">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-600">
                            <h3 className="text-3xl font-semibold">Education</h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Focused on Information Systems and Web Development</span>

                        </div>
                    </div>

                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                            {EDUCATION.map((education, index) => (
                                <div key={index} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-600">
                                    <h3 className="text-xl font-semibold tracking-wide">{education.instansi}</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-600">{education.tahun}</time>
                                    <time className="text-sm font-bold tracking-wide dark:text-gray-600">{education.prodi}</time>
                                    <p className="mt-3">{education.alamat}</p>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
