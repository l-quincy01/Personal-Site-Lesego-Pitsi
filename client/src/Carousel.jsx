import React, { useEffect, useState } from "react";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ images, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
    
        return () => clearInterval(interval);
      }, [images.length]);
   

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
                {/* Close button */}
                <button
                    className="fixed top-2 right-2 p-4 text-white text-2xl"
                    onClick={onClose}
                >
                    <IoMdClose />
                </button>

                {/* Carousel items */}
                <div className="relative w-full overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-full w-full h-full transition-transform duration-500 ease-in-out ${index === activeIndex ? "block w-full" : "block w-full"
                                }`}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Previous and Next buttons */}
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-4 text-white text-3xl"
                    onClick={handlePrev}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-4 text-white text-3xl"
                    onClick={handleNext}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
