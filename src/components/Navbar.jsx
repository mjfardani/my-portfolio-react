import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaInstagram, FaL, FaLinkedin, FaTelegram, FaTiktok } from 'react-icons/fa6'
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className='mx-2' width={50} height={33} alt='Logo' />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-blue-800">
                <a href="https://www.linkedin.com/in" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://www.linkedin.com/in" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaTiktok />
                </a>
                <a href="https://www.linkedin.com/in" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaTelegram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
