import React from 'react';
import Heading from '../Heading';
import { functionalityCards } from '../../constants';
import tick from '../../assets/product/functionality/tick.svg';
import { motion } from 'framer-motion';

const Functionality = () => {
  return (
    <section className="container flex flex-col items-center justify-center py-6 md:py-9 lg:py-12 xl:py-15">
      <Heading
        subHeading={'Thoughtfully made'}
        heading={'Finally, radiology software that people love to use'}
        subText={
          'Take the frustration out of daily operations so your team can actually enjoy using their tools'
        }
      />

      <div className="grid w-full gap-x-5 gap-y-4 md:w-auto md:grid-cols-2 md:grid-rows-2 md:gap-y-12">
        {functionalityCards.map((card, index) => (
          <motion.div
            className="border-gradient flex-1 rounded-[15px] p-[1px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] md:max-w-[386px]"
            key={card.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.15 }}
          >
            <div className="flex h-full flex-col gap-6 rounded-[15px] bg-n-1 px-[20px] py-[36px]">
              <h2 className="font-pp text-[24px] font-bold leading-[100%] text-[#141E5A] lg:text-[32px]">
                {card.title}
              </h2>
              <p className="max-w-[80%] font-pp font-medium leading-[100%] md:min-h-[40px] lg:text-[20px]">
                {card.subText}
              </p>
              <ul className="z-10 flex flex-col gap-6">
                {card.points.map((item) => (
                  <span className="flex gap-2.5" key={item.id}>
                    <img src={tick} />
                    <p className="text-[14px] font-normal leading-[120%] text-black">
                      {item.point}
                    </p>
                  </span>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Functionality;
