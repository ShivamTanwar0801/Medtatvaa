import Logo1 from '../assets/CTA/Logo1.svg';
import Logo2 from '../assets/CTA/Logo2.png';
import Scan from '../assets/CTA/Scan.png';
import { Typewriter } from '../UI/Typewriter';
import Button from './Button';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="w-full bg-[#141E5A] py-12 md:py-[72px] lg:py-[120px]">
      <div className="container flex flex-col gap-10 sm:gap-[80px] lg:flex-row">
        <div className="lg:max-w-[563px]">
          <motion.div
            className="flex items-center gap-[25px]"
            initial={{ opacity: 0, filter: 'blur(40px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <img src={Logo2} alt="Medtatva" className="" width={100} />
            <div className="h-[17.25px] w-[0.5px] bg-white/70"></div>
            <img src={Logo1} alt="DICOMDrive" width={100} />
          </motion.div>
          <motion.h1
            className="h1-gradient h1 pb-6 pt-2 font-pp font-bold"
            initial={{ filter: 'blur(40px)', opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Typewriter text={'Run Your Radiology Center Like It’s 2025'} />
          </motion.h1>
          <motion.p
            className="max-w-[90%] pb-8 font-medium leading-5 text-white sm:pb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
            viewport={{ once: true }}
          >
            Still waiting hours to generate reports? Still handing patients CDs?
            Let’s change that. DICOMDrive helps you report faster, access
            everything from anywhere, and finally leave outdated workflows
            behind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button
              className="bg-white hover:bg-[linear-gradient(93deg,#027dec,#15e29f)] hover:text-n-1"
              href="/contact"
            >
              Talk to us
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative overflow-clip rounded-[15px] bg-[#FEFEFE] px-2.5 py-5 md:px-[17.5px] md:py-[35px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image wrapper */}
          <div className="relative flex justify-center">
            {/* Gradient Glow (behind image only) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[377px] rounded-full bg-[linear-gradient(180deg,rgba(2,125,236,0.5)_0%,rgba(21,226,159,0.5)_100%)] blur-[100px]"></div>
            </div>

            {/* Foreground Image */}
            <img src={Scan} alt="Scan" className="relative z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
