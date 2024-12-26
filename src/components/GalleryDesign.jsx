import React from 'react';
import { designs } from '../constants';

const GalleryDesign = () => {
    return (
        <div className="py-10 px-5">
            <div className="pb-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-10">Gallery Design</h2>
            </div>
            <div className="p-5 md:p-10">
                <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                    {designs.map((design) => (
                        <img
                            key={design.id}
                            src={design.src}
                            alt={design.alt}
                            className="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryDesign;
