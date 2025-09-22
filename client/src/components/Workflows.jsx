import React from 'react';
import Heading from './Heading';
import { workflows } from '../constants';
import Button from './Button';
import Tree from '../assets/workflows/tree.png';
import Lines from '../assets/workflows/lines.svg';
import { motion } from 'framer-motion';

const Workflows = () => {
  return (
    <section className="container relative flex flex-col items-center justify-center py-6 md:py-9 lg:py-12 xl:py-15">
      <div className="blue__gradient pointer-events-none absolute aspect-square w-full max-w-[674px] rounded-full blur-[600px]"></div>
      <Heading
        subHeading={'Connected workflows'}
        heading={'Reimagine imaging operations from referral to report'}
        subText={'Turn complex workflows into effortless daily routines'}
      />
      <div className="flex flex-col items-start gap-8 sm:gap-[72px] lg:flex-row lg:gap-16">
        {workflows.map((item) => (
          <motion.div
            className="flex flex-1 flex-col justify-between gap-4 sm:gap-6"
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="z-20 lg:min-h-[330px]">
              <img src={item.image} className="z-20" />
            </div>
            <div>
              <h4 className="font-pp text-[20px] font-medium leading-5">
                {item.title}
              </h4>
              <p className="pb-2 pt-1 text-[16px] font-medium leading-4 sm:pb-3 sm:pt-1.5">
                {item.subtitle}
              </p>
              <p className="text-[14px] font-normal leading-[14px] lg:w-[80%]">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-[12%] top-[31%] z-30 hidden max-w-[300px] overflow-clip lg:block xl:max-w-[355px]">
        <img src={Tree} className="z-30 aspect-[365/270] w-full" />
      </div>

      <img
        src={Lines}
        className="absolute left-[60%] top-[42%] hidden lg:block xl:top-[44.6%]"
      />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Button
          className="button__gradient mt-5 text-n-1 sm:mt-12 block"
          href="/products"
        >
          Explore DICOMDrive
        </Button>
      </motion.div>
    </section>
  );
};

export default Workflows;
