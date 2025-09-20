import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { missionSteps } from '../../constants';

const Mission = () => {
  const [activeStep, setActiveStep] = useState('mission-step-1');
  const [indicator, setIndicator] = useState({ y: 0, height: 0 });
  const stepRefs = useRef({});

  const currentStep = missionSteps.find((s) => s.id === activeStep);

  // update indicator position & size whenever activeStep changes
  useEffect(() => {
    const el = stepRefs.current[activeStep];
    if (!el) return;

    // initial measure
    setIndicator({
      y: el.offsetTop,
      height: el.offsetHeight,
    });

    // watch for size changes
    const observer = new ResizeObserver(() => {
      setIndicator({
        y: el.offsetTop,
        height: el.offsetHeight,
      });
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [activeStep]);

  return (
    <section className="container relative flex justify-between gap-5 py-6 md:py-9 lg:gap-10 lg:py-12 xl:py-15">
      <div className="blue__gradient pointer-events-none absolute left-[25%] top-[-110%] aspect-square w-full max-w-[674px] rounded-full blur-[600px]"></div>
      <div className="flex w-full items-center justify-between gap-10 lg:gap-12">
        {/* Left side: Steps with vertical bar */}
        <div className="relative flex gap-12">
          {/* Vertical bar */}
          <div className="absolute left-0 top-0 h-full w-[4px] bg-[#E5E5E5]">
            {/* Active step indicator */}
            <motion.div
              layout
              className="w-[4px] bg-[#006EF8]"
              animate={{ y: indicator.y, height: indicator.height + 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Steps */}
          <div className="ml-6 flex flex-col gap-6 md:gap-8 lg:gap-[100px]">
            {missionSteps.map((step) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[step.id] = el)}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer transition-all duration-300`}
              >
                <h2
                  className={`pb-2 font-pp text-[24px] font-bold leading-[100%] md:text-[32px] lg:text-[48px] ${
                    activeStep === step.id ? 'text-gradient' : 'text-[#ABABAB]'
                  }`}
                >
                  {step.title}
                </h2>
                {activeStep === step.id && (
                  <div className="mt-2 w-full lg:hidden lg:max-w-[610px]">
                    <div className="relative flex justify-center">
                      <AnimatePresence mode="wait">
                        {currentStep && (
                          <motion.h2
                            key={currentStep.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="z-20 font-pp text-[18px] font-bold leading-[100%] text-black md:text-[24px] lg:text-[32px]"
                          >
                            {currentStep.desc}
                          </motion.h2>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Image */}
        <div className="hidden w-full max-w-[605px] lg:block">
          <div className="relative flex justify-center">
            <AnimatePresence mode="wait">
              {currentStep && (
                <motion.h2
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="z-10 font-pp text-[32px] font-bold leading-[100%] text-black"
                >
                  {currentStep.desc}
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
