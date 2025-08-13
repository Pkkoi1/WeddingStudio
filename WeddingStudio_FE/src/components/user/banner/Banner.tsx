"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  {
    src: "../../../../public/slider_1.webp",
    alt: "Wedding Studio couple in a boat",
  },
  {
    src: "../../../../public/slider_2.webp",
    alt: "Wedding couple in a beautiful outdoor setting",
  },
  {
    src: "../../../../public/slider_3.webp",
    alt: "Wedding ceremony decor with flowers",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  React.useEffect(() => {
    // Clear any existing interval to prevent multiple intervals running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval for auto-sliding
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, nextSlide]); // Re-run effect if currentSlide changes to reset timer

  return (
    <section className="relative w-full h-[600px] overflow-hidden px-[10%] bg-white">
      {bannerImages.map((image, index) => (
        <img
          key={image.src}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          className={`transition-opacity duration-1000 w-full ease-in-out ${
            index === currentSlide ? "opacity-100 " : "opacity-0 absolute px-[10%]"
          }`}
        />
      ))}
      Overlay Content
      {/* Navigation Buttons */}
      <button
        className="absolute left-40 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        className="absolute right-40 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
