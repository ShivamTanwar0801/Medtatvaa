import { useState } from 'react';
import Button from './Button';
import TickerCarousel from './TickerCarousel';
import axios from 'axios';
import mainImg from '../assets/hero/main.png';
import { delay, motion } from 'framer-motion';
import { Typewriter } from '../UI/Typewriter';
import Input from './Input';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const emailHandler = async (event) => {
    event.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    // Reject common free email providers
    const personalDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
    ];
    const domain = email.split('@')[1]?.toLowerCase();

    if (!domain || personalDomains.includes(domain)) {
      setError('Please enter your business email address');
      return;
    }

    try {
      await axios.post('/send-email-trial', { email });
      setEmail('');
      alert('Registered for free trial');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <section
      id="hero"
      className="container pb-6 pt-[120px] md:pb-9 lg:pb-12 lg:pt-[140px] xl:pb-15"
    >
      <div className="relative">
        <div className="blue__gradient pointer-events-none absolute left-1/2 top-[-400px] aspect-square w-full max-w-[822px] -translate-x-1/2 rounded-full opacity-[80%] [filter:blur(clamp(0px,67vw,550px))] md:top-[-600px] xl:top-[-800px]"></div>
      </div>
      <div className="gap-auto flex flex-col justify-between lg:flex-row">
        <motion.div
          className="min-w-[343px] lg:min-w-[450px] lg:max-w-[538px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <motion.h1
            className="text-gradient h1 font-pp font-bold lg:max-w-[518px]"
            initial={{ filter: 'blur(40px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <Typewriter text="The Only" />
            <Typewriter
              text="Platform Your Radiology Center Will Ever Need"
              delay={0.4}
            />
          </motion.h1>
          <motion.p
            className="pt-4 font-medium sm:pt-6 lg:max-w-[518px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1.1 }}
          >
            Medtatvaa is rebuilding the invisible systems that power radiology.
            Cloud‑native, AI‑driven, and engineered for the next decade of
            diagnostic imaging.
          </motion.p>
          <motion.div
            className="pb-2 pt-8 sm:pt-12 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1.3 }}
          >
            {error && (
              <p className="absolute z-10 mb-2 text-[12px] font-normal leading-[100%] text-red-500 top-4 sm:top-8 left-4">
                {error}
              </p>
            )}
            <div className="border-gradient w-full max-w-[502px] rounded-[100px] p-[1px]">
              <Input
                emailHandler={emailHandler}
                email={email}
                setEmail={setEmail}
                setError={setError}
              />
            </div>
          </motion.div>

          <motion.span
            className="block text-[14px] font-normal text-[#6B6B6B]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1.3 }}
          >
            *Please complete the required field.
          </motion.span>
        </motion.div>

        <motion.div
          className="z-10 h-full w-full lg:max-w-[630px] lg:pl-8 xl:pl-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <img src={mainImg} alt="Main-img" className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
