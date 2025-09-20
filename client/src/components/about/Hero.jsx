import React from 'react';
import BackgroundImage from '../../assets/about/hero/background.png';
import { motion } from 'framer-motion';
import { Typewriter } from '../../UI/Typewriter';

const Hero = () => {
  return (
    <section className="relative flex aspect-[1440/659] min-h-[400px] w-full items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="X-ray background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.h2
          className="h1-gradient h1 font-pp font-bold"
          initial={{ filter: 'blur(40px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Typewriter text={"About Medtatvaa"}/>
          
        </motion.h2>
        <motion.p
          className="max-w-[510px] text-[14px] font-medium leading-[120%] text-n-1 md:text-[16px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          Medtatvaa is here to build alongside the people who make healthcare
          possible — designing technology that listens to your needs, adapts to
          your workflows, and makes diagnostics simpler, smarter, and more
          human.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
