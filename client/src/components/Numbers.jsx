import React from 'react';
import Heading from './Heading';
import { numberCards } from '../constants';
import { motion } from 'framer-motion';

const Numbers = () => {
  return (
    <section className="container relative flex flex-col items-center justify-center py-6 md:py-9 lg:py-12 xl:py-15">
      <div className="blue__gradient pointer-events-none absolute right-[-41px] aspect-square w-full max-w-[376px] rounded-full blur-[200px]"></div>
      <Heading
        subHeading={'By the numbers'}
        heading={'Performance that speaks for itself'}
        subText={'Modern tools that actually move the needle'}
      />
      <div className="flex flex-wrap justify-center gap-5">
        {numberCards.map((item, index) => (
          <motion.div
            className="border-gradient relative min-w-[330px] flex-1 rounded-[15px] p-[1px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_33px_0_rgba(159,174,168,0.37)] md:max-w-[calc(50%-20px)] xl:max-w-[386px]"
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative z-10 flex justify-center">
              <img src={item.icon} className="absolute right-5 top-5" />
            </div>

            <div className="flex h-full flex-col justify-between gap-15 overflow-hidden rounded-[15px] bg-n-1 p-4">
              <h2 className="pt-6 font-pp text-[32px] font-bold leading-[32px] text-[#141E5A] md:text-[40px] md:leading-[40px] xl:text-[48px] xl:leading-[48px]">
                {item.title}
              </h2>

              <div>
                <h4 className="font-pp text-[18px] font-bold leading-[18px] text-[#141E5A] md:text-[20px] md:leading-[20px] xl:text-[24px] xl:leading-[24px]">
                  {item.heading}
                </h4>
                <p className="pb-3 pt-2 font-semibold leading-[120%]">
                  {item.subHeading}
                </p>
                <p className="font-medium leading-[120%]">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
