import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { diagnosticCards } from '../constants';
import tick from '../assets/product/functionality/tick.svg';

// --- Slide Component ---
const slides = diagnosticCards.map((card) => (
  <div
    className="border-gradient h-full w-full rounded-[15px] p-[1px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] overflow-clip"
    key={card.id}
  >
    <div className="flex h-full flex-col justify-between gap-6 rounded-[15px] bg-n-1 pl-[20px] pt-[36px]">
      <h2 className="font-pp text-[24px] font-bold leading-[100%] text-[#141E5A] lg:text-[32px]">
        {card.title}
      </h2>
      <p className="max-w-[60%] font-pp font-medium leading-[100%] md:min-h-[40px] lg:text-[20px]">
        {card.subText}
      </p>
      <div className="flex h-full flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <ul className="z-10 flex flex-1 flex-col gap-6 pr-5">
          {card.points.map((item) => (
            <span className="flex gap-2.5" key={item.id}>
              <img src={tick} />
              <p className="text-[14px] font-normal leading-[120%] text-black">
                {item.point}
              </p>
            </span>
          ))}
          <h3 className="text-gradient h3 pb-9 pr-5 font-pp font-bold">
            {card.footerText}
          </h3>
        </ul>

        <img src={card.image} className="z-5 rounded-[15px] lg:max-w-[50%]" />
        <div className="blue__gradient pointer-events-none absolute bottom-7 lg:right-14 aspect-square w-full max-w-[252px] rounded-full blur-[200px]"></div>
      </div>
    </div>
  </div>
));

// --- Carousel ---
const TickerCarousel = () => {
  const [cardWidth, setCardWidth] = useState(
    window.innerWidth >= 1280 ? 90 : 100,
  );

  const totalSlides = slides.length;

  // Wrap with [last, ...slides, first] for peeking
  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1); // start at 1 so last card peeks left
  const [isAnimating, setIsAnimating] = useState(true);
  const firstRender = useRef(true);
  const containerRef = useRef(null);

  // After first mount, enable animations
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Loop handling
  useEffect(() => {
    if (index === extendedSlides.length - 1) {
      // reached duplicate of first → jump back to 1
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(1);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (index === 0) {
      // reached duplicate of last → jump to last real slide
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(totalSlides);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    setIsAnimating(true);
  }, [index, extendedSlides.length, totalSlides]);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth >= 1280 ? 90 : 100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For dot highlighting
  const realIndex =
    index === 0
      ? totalSlides - 1
      : index === extendedSlides.length - 1
        ? 0
        : index - 1;

  const goToSlide = (i) => {
    setIsAnimating(true);
    setIndex(i + 1); // shift because of the extendedSlides wrapper
  };

  return (
    <div className="mx-auto w-full xl:w-[90%]">
      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl object-cover xl:overflow-visible "
      >
        <motion.div
          className="flex xl:gap-8"
          animate={{ x: `-${index * cardWidth}%` }}
          transition={
            isAnimating ? { duration: 1, ease: 'easeInOut' } : { duration: 0 }
          }
        >
          {extendedSlides.map((card, idx) => {
            // Find real index of this card
            const cardRealIndex =
              idx === 0
                ? totalSlides - 1
                : idx === extendedSlides.length - 1
                  ? 0
                  : idx - 1;

            const isActive = cardRealIndex === realIndex;

            return (
              <motion.div
                key={idx}
                className="w-full flex-shrink-0 xl:w-[90%]"
                animate={{
                  scale: window.innerWidth >= 1280 && isActive ? 1.05 : 1, // scale only on xl+
                }}
                transition={{ duration: 0.5 }}
              >
                {card}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-4 pt-5 md:pt-10">
        {slides.map((_, i) => (
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
