import profilePic from '../assets/mjfardaniProfile.jpg';
import { HERO_CONTENT } from '../constants/index.js';
import Medsos from './Medsos.jsx';
import ResumeDownloadButton from './ResumeDownloadButton/ResumeDownloadButton.jsx';

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center items-center lg:p-8">
                        <img src={profilePic} alt="" className="border-spacing-72 shadow-xl border-blue-800 rounded-3xl" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">M Jauhar Fardani</h2>
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-3xl tracking-tight text-transparent">
                            Web Dev & Graphic Design
                        </span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                        <Medsos />
                        {/* <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-blue-800 hover:to-cyan-600 rounded-full p-4 text-sm text-white mb-10 transition-all duration-300"
                        >
                            Download resume
                        </a> */}
                        <ResumeDownloadButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
