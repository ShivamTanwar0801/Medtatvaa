import React from 'react';
import { dicomDrivePoints, legacyPoints } from '../constants';
import cross from '../assets/legacy/cross.svg';
import tick from '../assets/legacy/tick.svg';
import Button from './Button';
import Heading from './Heading';
import { motion } from 'framer-motion';

const Legacy = () => {
  return (
    <section className="container relative py-6 md:py-9 lg:py-12 xl:py-15">
      <div className="blue__gradient absolute bottom-[108px] right-[77px] aspect-square w-full max-w-[416px] rounded-full blur-[200px]"></div>
      <Heading
        subHeading={'From legacy to modern'}
        heading={'Radiology has evolved. Has your software?'}
        subText={'Compare the old with what’s next'}
      />
      <div className="flex flex-col items-start justify-center gap-5 md:flex-row">
        <motion.div
          className="border-gradient w-full rounded-[15px] p-[1px] shadow-[0_4px_12.5px_0_rgba(0,0,0,0.21)] md:mt-16 md:max-w-[360px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col gap-4 rounded-[15px] bg-n-1 px-[24px] py-[24px]">
            <h3 className="text-gradient h3 text-nowrap font-pp font-bold">
              Legacy RIS-PACS
            </h3>
            <ul className="flex flex-col gap-3">
              {legacyPoints.map((item) => (
                <span className="flex gap-2.5" key={item}>
                  <img src={cross} />
                  <p className="text-[14px] font-normal leading-[17px]">
                    {item}
                  </p>
                </span>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full overflow-hidden rounded-[15px] bg-[#013B6B]/90 shadow-[0_4px_13px_0_rgba(0,0,0,0.05)] md:max-w-[360px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gradient absolute -left-[55%] -top-[-75%] aspect-square w-[200%] rounded-full"></div>
          <div className="flex flex-col gap-4 px-[24px] py-[24px]">
            <h3 className="h3 text-nowrap font-pp font-bold text-n-2">
              DICOMDRIVE
            </h3>
            <ul className="z-10 flex flex-col gap-3">
              {dicomDrivePoints.map((item) => (
                <span className="flex gap-2.5" key={item}>
                  <img src={tick} />
                  <p className="text-[14px] font-normal leading-[17px] text-n-2">
                    {item}
                  </p>
                </span>
              ))}
            </ul>
            <Button className="z-10 mb-2 mt-5 max-w-[198px] bg-[linear-gradient(276deg,rgba(255,255,255,0.10)_20.06%,rgba(65,165,255,0.10)_214.35%)] text-n-2 hover:text-black hover:bg-white transition-all">
              Explore DICOMDrive
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;
