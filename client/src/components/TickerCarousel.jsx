import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import mainImg from '../assets/hero/main.png';
import filterImg from '../assets/hero/filter.png';
import graphImg from '../assets/hero/graph.png';

const images = [mainImg, filterImg, graphImg];

const TickerCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const totalSlides = images.length;
  const containerRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless reset when reaching end
  useEffect(() => {
    if (index === totalSlides) {
      // Wait until animation finishes, then reset instantly
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(0);
      }, 1000); // match transition duration
      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(true);
    }
  }, [index, totalSlides]);

  // "real" index for dot highlighting
  const realIndex = index % totalSlides;

  const goToSlide = (i) => {
    setIsAnimating(true);
    setIndex(i);
  };

  return (
    <div className="w-full">
      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative object-cover w-full overflow-hidden rounded-xl"
      >
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={
            isAnimating ? { duration: 1, ease: 'easeInOut' } : { duration: 0 }
          }
        >
          {/* Original slides + 1 duplicate of first for smooth looping */}
          {[...images, images[0]].map((img, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-[8px] w-[8px] rounded-full border-2 transition-all ${
              realIndex === i
                ? 'border-black bg-black'
                : 'border-black bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TickerCarousel;
