import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '../../UI/Typewriter';

const History = () => {
  return (
    <section className="container relative flex flex-col justify-between gap-5 py-6 md:py-9 lg:flex-row-reverse lg:gap-10 lg:py-12 xl:py-15">
      <motion.h1
        className="text-gradient font-pp text-[32px] font-bold leading-[100%] sm:text-[40px] md:text-[48px] lg:min-w-[393px] lg:max-w-[393px] lg:text-[64px]"
        initial={{ filter: 'blur(40px)', opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Typewriter text={'Why Medtatvaa was created'} />
      </motion.h1>

      <div className="flex flex-col gap-4 lg:max-w-[628px]">
        <motion.p
          className="text-[14px] font-medium leading-[120%] text-black md:text-[16px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          Radiology has advanced in science, but the systems that power it have
          not kept pace. Providers still face disjointed RIS and PACS setups,
          care teams struggle with manual handoffs, and diagnostic center owners
          are left with limited visibility into their operations. These
          inefficiencies slow down reporting, increase costs, and ultimately
          affect patient care.
        </motion.p>
        <motion.p
          className="text-[14px] font-medium leading-[120%] text-black md:text-[16px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Medtatvaa was created to change this reality by building a modern,
          AI-native diagnostic infrastructure that unifies scheduling, imaging,
          reporting, and analytics on a single intelligent platform. Our purpose
          is to remove the bottlenecks that hold radiology back and empower
          every stakeholder in the diagnostic journey — from administrators to
          radiologists — to deliver faster, smarter, and more connected care.
        </motion.p>
      </div>
    </section>
  );
};

export default History;
