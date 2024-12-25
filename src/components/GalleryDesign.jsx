import React from 'react';

const GalleryDesign = () => {
    const designs = [
        { id: 1, src: 'https://images.unsplash.com/photo-1593642532400-2682810df593', alt: 'Desain 1' },
        { id: 2, src: 'https://images.unsplash.com/photo-1501594907351-2782f42db03a', alt: 'Desain 2' },
        { id: 3, src: 'https://images.unsplash.com/photo-1506748686215-91b4383f9e35', alt: 'Desain 3' },
        { id: 4, src: 'https://images.unsplash.com/photo-1603771289913-01598b9bb0b3', alt: 'Desain 4' },
        { id: 5, src: 'https://images.unsplash.com/photo-1575936123451-4f687c3c5440', alt: 'Desain 5' },
        { id: 6, src: 'https://images.unsplash.com/photo-1614584479927-e4a97e9a4389', alt: 'Desain 6' },
    ];

    return (
        <div className="py-10 px-5">
            <div className="pb-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-10">Gallery Design</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-6">
                {designs.map((design) => (
                    <div
                        key={design.id}
                        className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={design.src}
                            alt={design.alt}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryDesign;
