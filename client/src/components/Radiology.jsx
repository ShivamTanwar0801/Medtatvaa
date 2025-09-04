import React from 'react';
import Heading from './Heading';
import { radiologyCards } from '../constants';
import Button from './Button';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Radiology = () => {
  return (
    <section className="container flex flex-col items-center justify-center py-6 md:py-9 lg:py-12 xl:py-15">
      <Heading
        subHeading={'All‑in‑one radiology solution'}
        heading={'Smarter infrastructure for your radiology team'}
        subText={'Designed for patients, admins, and radiologists'}
      />

      <motion.div className="flex flex-wrap gap-5">
        {radiologyCards.map((item, index) => (
          <motion.div
            className="border-gradient min-w-[350px] flex-1 rounded-[15px] p-[1px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_33px_0_rgba(159,174,168,0.37)] xxs:min-w-[386px] transition-shadow"
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[15px] bg-n-1 p-6 text-center">
              <div className="blue__gradient absolute left-[357px] aspect-square w-[386px] rounded-full opacity-50 blur-[200px]"></div>

              <div className="z-10 flex justify-center">
                <img
                  src={item.image}
                  className="aspect-[507/400] xl:max-h-[260px]"
                />
              </div>
              <h4 className="font-pp text-[24px] font-bold leading-6 text-[#141E5A]">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Button className="button__gradient mt-5 text-n-1 sm:mt-12">
          See the complete platform
        </Button>
      </motion.div>
    </section>
  );
};

export default Radiology;
