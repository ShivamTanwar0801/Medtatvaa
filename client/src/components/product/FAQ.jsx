import React from 'react';
import CustomAccordion from './CustomAccordion';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <section className="container relative flex flex-col items-center justify-center gap-4 pb-12 pt-6 md:gap-6 md:pb-[72px] md:pt-9 lg:gap-10 lg:pb-[120px] lg:pt-12 xl:pt-15">
      <div className="blue__gradient pointer-events-none absolute right-[-71px] top-20 aspect-square w-full max-w-[376px] rounded-full blur-[200px]"></div>
      <motion.h2
        className="text-gradient h2 pb-2 font-pp font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        Frequently Asked Questions
      </motion.h2>
      <CustomAccordion />
    </section>
  );
};

export default FAQ;
