import React from 'react';
import { motion } from 'framer-motion';

const Heading = ({ subHeading, heading, subText }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pb-8 text-center md:pb-12">
      <motion.p
        className="font-pp text-[18px] font-bold text-[#141E5A]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {subHeading}
      </motion.p>
      <motion.h2
        className="text-gradient h2 pb-2 font-pp font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {heading}
      </motion.h2>
      <motion.p
        className="font-pp text-[20px] font-medium text-[#141E5A]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {subText}
      </motion.p>
    </div>
  );
};

export default Heading;
