"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  title?: string; // optional overlay title
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        )}

        <div className="w-full mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={1600}
            height={900}
            className="object-cover w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]"
          />

          {title && (
            <div className="absolute inset-0 bg-green-500 bg-opacity-25 flex items-center justify-center">
              <h3 className="text-blue-500 text-2xl md:text-3xl font-semibold">
                {title}
              </h3>
            </div>
          )}

          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 px-3 py-1 rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            &#8592;
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 px-3 py-1 rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
