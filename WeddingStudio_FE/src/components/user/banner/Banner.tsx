"use client";

import * as React from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";

const bannerImages = [
  {
    src: "/slider_1.webp",
    alt: "Wedding Studio couple in a boat",
  },
  {
    src: "/slider_2.webp",
    alt: "Wedding couple in a beautiful outdoor setting",
  },
  {
    src: "/slider_3.webp",
    alt: "Wedding ceremony decor with flowers",
  },
];

export default function Banner() {
  const carouselRef = React.useRef<CarouselRef>(null);

  return (
    <div className="relative lg:w-screen overflow-hidden bg-white px-4 lg:px-[10%]">
      <Carousel
        ref={carouselRef}
        draggable
        autoplay
        autoplaySpeed={5000}
        infinite
      >
        {bannerImages.map((image) => (
          <div key={image.src}>
            <div className="lg:h-full h-fit">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
