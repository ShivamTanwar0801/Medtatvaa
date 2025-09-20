import React from 'react';
import { Typewriter } from '../../UI/Typewriter';
import Button from '../Button';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="z-[100] w-full bg-[#141E5A] py-12 md:py-[72px] lg:py-[120px]">
      <div className="container flex flex-col xl:items-center justify-between lg:flex-row pb-2">
        <motion.h1
          className="h1-gradient h1 pb-5 font-pp font-bold lg:max-w-[651px]"
          initial={{ filter: 'blur(40px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typewriter
            text={'Let’s Shape the Future of Diagnostics, Together'}
          />
        </motion.h1>
        <div className="xl:w-full lg:max-w-[408px]">
          <motion.p
            className="pb-5 md:pb-7 font-medium leading-5 text-white sm:pb-12 lg:max-w-[366px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            Share your ideas, experiences, or vision with us — we’re here to
            listen, learn, and build solutions alongside the radiology
            community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              className="bg-white hover:bg-[linear-gradient(93deg,#027dec,#15e29f)] hover:text-n-1"
              href="/contact"
            >
              Connect with us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
