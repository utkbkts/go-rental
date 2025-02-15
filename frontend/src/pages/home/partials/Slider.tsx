import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/welcome-hero/welcome-banner.jpg",
  "/welcome-hero/welcome-banner2.jpg",
  "/welcome-hero/welcome-banner3.jpg",
  "/welcome-hero/welcome-banner4.jpg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlider = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlider = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);
  return (
    <div className="relative">
      <div
        className="absolute top-1/2 left-0 w-10 bg-black/80 text-white cursor-pointer hover:w-12 transition-all duration-300 flex items-center justify-center"
        onClick={prevSlider}
      >
        <ChevronLeft size={40} />
      </div>
      <img
        src={images[current]}
        alt="images"
        title="car go rental"
        className="object-cover w-full bg-fixed bg-center h-[80vh]"
      />
      <div
        className="absolute top-1/2 right-0 w-10 bg-black/80 text-white cursor-pointer hover:w-12 transition-all duration-300 flex items-center justify-center"
        onClick={nextSlider}
      >
        <ChevronRight size={40} />
      </div>
    </div>
  );
};

export default Slider;
