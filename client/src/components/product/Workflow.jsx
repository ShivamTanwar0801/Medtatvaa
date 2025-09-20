import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../Heading';
import { workflowSteps } from '../../constants';

const Workflow = () => {
  const [activeStep, setActiveStep] = useState('step-1');
  const [indicator, setIndicator] = useState({ y: 0, height: 0 });
  const stepRefs = useRef({});

  const currentStep = workflowSteps.find((s) => s.id === activeStep);

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
    <section className="container flex flex-col items-center justify-center py-6 md:py-9 lg:py-12 xl:py-15">
      <Heading
        subHeading="How it works"
        heading="Own your time, focus on patients not processes"
        subText="DICOMDrive speeds up everything so your team can do the work that truly matters: diagnosing with clarity"
      />

      <div className="flex w-full max-w-[1073px] items-center justify-between gap-10 lg:gap-12 xl:px-20">
        {/* Left side: Steps with vertical bar */}
        <div className="relative flex gap-12">
          {/* Vertical bar */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-[#E5E5E5]">
            {/* Active step indicator */}
            <motion.div
              layout
              className="w-[2px] bg-[#141E5A]"
              animate={{ y: indicator.y, height: indicator.height }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Steps */}
          <div className="ml-6 flex flex-col gap-6 md:gap-8 lg:gap-12">
            {workflowSteps.map((step) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[step.id] = el)}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? 'text-[#141E5A]' : 'text-[#ABABAB]'
                }`}
              >
                <h3 className="pb-[15px] font-pp text-[18px] font-medium leading-[100%] md:text-[20px]">
                  {step.title}
                </h3>
                {activeStep === step.id && (
                  <p className="mt-1 font-work text-[14px] leading-[120%] text-black md:text-[16px]">
                    {step.subTitle}
                  </p>
                )}
                {activeStep === step.id && (
                  <div className="relative mt-5 block w-full overflow-clip rounded-[15px] border-x-[1px] border-t-[1px] border-[#15E29F]/40 p-3 md:p-[22px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] lg:hidden lg:max-w-[610px]">
                    <div className="relative flex justify-center">
                      <AnimatePresence mode="wait">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="aspect-square w-full max-w-[377px] rounded-full bg-[linear-gradient(180deg,rgba(2,125,236,0.5)_0%,rgba(21,226,159,0.5)_100%)] blur-[100px]"></div>
                        </div>

                        {currentStep && (
                          <motion.img
                            key={currentStep.id}
                            src={currentStep.image}
                            alt={currentStep.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="z-10 aspect-[566/377] rounded-xl object-cover shadow-lg"
                          />
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
        <div className="relative hidden w-full max-w-[610px] overflow-clip rounded-[15px] border-x-[1px] border-t-[1px] border-[#15E29F]/40 p-[22px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] lg:block">
          <div className="relative flex justify-center">
            <AnimatePresence mode="wait">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="aspect-square w-full max-w-[377px] rounded-full bg-[linear-gradient(180deg,rgba(2,125,236,0.5)_0%,rgba(21,226,159,0.5)_100%)] blur-[100px]"></div>
              </div>

              {currentStep && (
                <motion.img
                  key={currentStep.id}
                  src={currentStep.image}
                  alt={currentStep.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="z-10 h-[377px] w-[566px] rounded-xl object-cover shadow-lg"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
