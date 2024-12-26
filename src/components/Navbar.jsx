import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaFacebook, FaInstagram, FaL, FaLinkedin, FaTelegram, FaTiktok } from 'react-icons/fa6'
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <h3 className='font-bold text-2xl text-blue-800'>MJFARDANI</h3>
                </a>
            </div>
            <div className="ml-6 flex items-center justify-center gap-4 text-2xl text-blue-800">
                <a href="https://id.linkedin.com/in/mjauharfardani" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/mjfardani_" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@emjeeegraphic" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaTiktok />
                </a>
                <a href="https://m.facebook.com/muhjauharfardani" target='_blank' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaFacebook />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
