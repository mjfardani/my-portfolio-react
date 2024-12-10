import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiMysql, DiPhotoshop, DiRedis } from 'react-icons/di'
import { FaHtml5, FaLaravel, FaNodeJs } from 'react-icons/fa6'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <RiReactjsLine className="text-7xl text-sky-500" />
                </div>
                <div className="p-4">
                    <DiPhotoshop className="text-7xl text-[#31A8FF]" />
                </div>
                <div className="p-4">
                    <DiMysql className="text-7xl text-[#00758F]" />
                </div>
                <div className="p-4">
                    <FaLaravel className="text-7xl text-red-600" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-[#68A063]" />
                </div>
                <div className="p-4">
                    <FaHtml5 className="text-7xl text-[#E34F26]" />
                </div>
                <div className="p-4">
                    <RiTailwindCssFill className="text-7xl text-[#38BDF8]" />
                </div>
            </div>
        </div>
    )
}

export default Technologies
