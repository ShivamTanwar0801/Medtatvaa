import React from 'react';
import Button from '../Button';
import HeroImage from '../../assets/product/hero/Hero.png';
import { motion } from 'framer-motion';
import { Typewriter } from '../../UI/Typewriter';

const Hero = () => {
  return (
    <section className="container relative flex flex-col items-center justify-center gap-6 pb-6 pt-[120px] text-center md:gap-8 md:pb-9 lg:gap-[50px] lg:pb-12 lg:pt-[140px] xl:pb-15">
      <div className="blue__gradient pointer-events-none absolute left-1/2 top-[-400px] aspect-square w-full max-w-[822px] -translate-x-1/2 rounded-full opacity-[80%] [filter:blur(clamp(0px,67vw,550px))] md:top-[-600px] xl:top-[-800px] -z-1"></div>

      <div>
        <div className="flex flex-col items-center justify-center gap-5 pb-6 md:pb-8 lg:pb-12">
          <motion.h1
            className="text-gradient h1 pb-1 font-pp font-bold lg:max-w-[800px]"
            initial={{ filter: 'blur(40px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Typewriter text={'The Operating System for Modern Radiology'} />
          </motion.h1>
          <motion.p
            className="w-[90%] font-pp font-medium md:max-w-[518px] md:text-[20px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.7 }}
          >
            Experience the speed of cloud and precision of AI—built into every
            step of your radiology workflow.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.8 }}
        >
          <Button
            className="button__gradient mr-2.5 text-nowrap text-n-1"
            href=""
          >
            Start a free trial
          </Button>
          <Button
            className="ml-2.5 text-nowrap border-[1px] border-[#15E29F] transition-colors hover:text-n-1 hover:button-gradient"
            href="/contact"
          >
            Book a demo
          </Button>
        </motion.div>
      </div>

      <motion.img
        src={HeroImage}
        width={1080}
        className="z-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      />
    </section>
  );
};

export default Hero;
