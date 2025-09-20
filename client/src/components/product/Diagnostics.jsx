import React from 'react';
import Heading from '../Heading';
import TickerCarousel from '../TickerCarousel';

const Diagnostics = () => {
  return (
    <section className="container flex flex-col py-6 md:py-9 lg:py-12 xl:py-15 items-center justify-center">
      <div className="blue__gradient pointer-events-none absolute aspect-square w-full max-w-[674px] rounded-full blur-[600px]"></div>
      <Heading
        subHeading={'The Medtatvaa way'}
        heading={'A complete system for modern diagnostics'}
        subText={
          'Purpose-built to handle every step of radiology in one seamless interface'
        }
      />
      <TickerCarousel/>
    </section>
  );
};

export default Diagnostics;
