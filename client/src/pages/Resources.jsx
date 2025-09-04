import { useState } from 'react';
import Button from '../components/Button';
import axios from 'axios';
import { Typewriter } from '../UI/Typewriter';
import { motion } from 'framer-motion';
import Input from '../components/Input';

const Resources = () => {
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
    <section className="container relative flex flex-col items-center justify-center gap-5 pb-12 pt-[120px] sm:pt-[180px] md:pb-[104px] lg:pb-[120px] lg:pt-[200px]">
      <div className="blue__gradient absolute left-1/2 top-[-200px] aspect-square w-full max-w-[822px] -translate-x-1/2 rounded-full [filter:blur(clamp(0px,67vw,550px))] md:top-[-85vh] lg-tall:top-[-50vh]"></div>

      <motion.h1
        className="text-gradient font-pp text-[48px] font-bold leading-[120%] sm:text-[72px] md:text-[96px] lg:text-[128px]"
        initial={{ filter: 'blur(40px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Typewriter text="Coming Soon!" />
      </motion.h1>

      <div className="relative w-full max-w-[502px]">
        {error && (
          <p className="absolute left-4 top-[-16px] z-10 mb-2 text-[12px] font-normal leading-[100%] text-red-500">
            {error}
          </p>
        )}
        <motion.div
          className="border-gradient w-full max-w-[502px] rounded-[100px] p-[1px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
        >
          <Input
            emailHandler={emailHandler}
            email={email}
            setEmail={setEmail}
            setError={setError}
          />
        </motion.div>

        <motion.span
          className="block text-[14px] font-normal text-[#6B6B6B]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
        >
          *Please complete the required field.
        </motion.span>
      </div>
    </section>
  );
};

export default Resources;
