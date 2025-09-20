import React from 'react';
import BackgroundImage from '../../assets/about/hero/background.png';

const Hero = () => {
  return (
    <section className="relative flex aspect-[1440/659] min-h-[400px] w-full items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="X-ray background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6 px-6 text-center">
        <h2 className="h1-gradient h1 font-pp font-bold">About Medtatvaa</h2>
        <p className="max-w-[510px] text-[14px] font-medium leading-[120%] text-n-1 md:text-[16px]">
          Radiology has advanced in science, but the systems that power it have
          not kept pace. Providers still face disjointed RIS and PACS setups,
          care teams struggle with...
        </p>
      </div>
    </section>
  );
};

export default Hero;
