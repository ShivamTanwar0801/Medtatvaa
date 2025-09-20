import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Input from '../Input';

const Journey = () => {
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
    <section className="container relative flex flex-col justify-between gap-5 py-6 md:py-9 lg:flex-row lg:py-12 xl:py-15">
      <div className="blue__gradient pointer-events-none absolute left-0 top-[20%] aspect-square w-full max-w-[644px] rounded-full blur-[330px] sm:blur-[450px] sm:left-[-100px] -z-1"></div>

      <h1 className="text-gradient font-pp text-[32px] font-bold leading-[100%] sm:text-[40px] md:text-[48px] lg:min-w-[253px] lg:max-w-[253px] lg:text-[64px]">
        Join Our Journey
      </h1>

      <div className="flex flex-col gap-5 lg:max-w-[628px]">
        <p className="text-[14px] font-medium leading-[120%] text-black md:text-[16px]">
          At Medtatvaa, we’re reimagining how diagnostic centers operate, and we
          know this transformation is only possible with the insights and
          passion of the people who live it every day. We’re looking for
          radiologists, administrators, and technicians who want to shape the
          future of diagnostics, not just work within it. If you’re a healthcare
          professional eager to make a difference, or a mentor who can guide us
          with your experience, we’d love to connect
        </p>
        <div className="relative w-full max-w-[502px]">
          {error && (
            <p className="absolute left-4 top-[-16px] z-10 mb-2 text-[12px] font-normal leading-[100%] text-red-500">
              {error}
            </p>
          )}
          <motion.div
            className="border-gradient w-full max-w-[502px] rounded-[100px] p-[1px] z-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
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
      </div>
    </section>
  );
};

export default Journey;
