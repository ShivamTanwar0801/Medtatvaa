import React from 'react';
import iconTree from '../../assets/product/features/iconTree.svg';
import FeatureTree from '../../assets/product/features/features.svg';
import Background from '../../assets/product/features/background.jpg';
import Button from '../Button';
import { motion } from 'framer-motion';

export const Features = () => {
  return (
    <section className="container relative z-2 flex flex-col items-center py-6 md:py-9 lg:py-12 xl:py-15">
      <div className="blue__gradient absolute bottom-[108px] left-[77px] aspect-square w-full max-w-[416px] rounded-full blur-[280px]"></div>

      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <motion.div
          className="border-gradient z-5 flex-1 rounded-[15px] p-[1px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col gap-4 rounded-[15px] bg-n-1 px-[24px] pt-[24px]">
            <h2 className="font-pp text-[24px] font-bold leading-[100%] text-[#141E5A] lg:text-[32px]">
              Radiology operations are stuck in silos
            </h2>
            <p className="font-pp font-medium lg:text-[20px]">
              Multiple disjointed tools. Slow, manual reporting, Scattered image
              storage. Endless switching.
            </p>
            <img src={iconTree} className="md:max-h-[318px]" />
          </div>
        </motion.div>

        <motion.div
          className="border-gradient z-5 flex-1 rounded-[15px] p-[1px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col gap-4 overflow-clip rounded-[15px] bg-black pt-[24px]">
            <h2 className="h1-gradient px-6 font-pp text-[24px] font-bold leading-[100%] lg:text-[32px]">
              DICOMDrive brings them all together
            </h2>
            <p className="px-6 font-pp font-medium text-white lg:text-[20px]">
              This is the upgrade your diagnostic center has been waiting for.
            </p>
            <img src={FeatureTree} className="max-h-[291px] px-6" />
            <img src={Background} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Button className="button__gradient ml-2 mt-5 text-nowrap text-n-1 md:mt-12">
          Start a free trial
        </Button>
      </motion.div>
    </section>
  );
};
