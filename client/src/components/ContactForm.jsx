import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const formSubmitHandler = async (event) => {
    event.preventDefault();

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
      await axios.post('/send-email', { name, email, role, phone, message });
      setName('');
      setEmail('');
      setRole('');
      setPhone('');
      setMessage('');
      alert('Form submitted successfully');
    } catch (error) {
      alert('Submission failed');
    }
  };

  return (
    <motion.form
      className="w-full lg:max-w-[527px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onSubmit={formSubmitHandler}
    >
      <ul className="mb-12 flex flex-col gap-5 p-0">
        <li>
          <label className="block text-[14px] font-normal leading-[120%]">
            Name<span className="text-[#F00]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="mt-[5px] box-border h-[37px] w-full rounded-[5px] border-[0.5px] border-solid border-[#ABABAB] py-2.5 pl-2.5 leading-[16.8px] placeholder:text-[14px] placeholder:text-[#ABABAB]"
          />
        </li>
        <li>
          <label className="block text-[14px] font-normal leading-[120%]">
            Email<span className="text-[#F00]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
              setError(''); // clear error when user types
            }}
            required
            placeholder="your@company.com"
            className="mt-[5px] box-border h-[37px] w-full rounded-[5px] border-[0.5px] border-solid border-[#ABABAB] py-2.5 pl-2.5 leading-[16.8px] placeholder:text-[14px] placeholder:text-[#ABABAB]"
          />
          {error && (
            <p className="z-10 mb-2 text-[12px] leading-[100%] font-normal text-red-500 absolute pt-[2px]">
              {error}
            </p>
          )}
        </li>
        <li>
          <label className="block text-[14px] font-normal leading-[120%]">
            Role<span className="text-[#F00]">*</span>
          </label>
          <input
            type="text"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            placeholder="What’s your role"
            className="mt-[5px] box-border h-[37px] w-full rounded-[5px] border-[0.5px] border-solid border-[#ABABAB] py-2.5 pl-2.5 leading-[16.8px] placeholder:text-[14px] placeholder:text-[#ABABAB]"
          />
        </li>
        <li>
          <label className="block text-[14px] font-normal leading-[120%]">
            Phone number
          </label>
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="00-0000000000"
            className="mt-[5px] box-border h-[37px] w-full rounded-[5px] border-[0.5px] border-solid border-[#ABABAB] py-2.5 pl-2.5 leading-[16.8px] placeholder:text-[14px] placeholder:text-[#ABABAB]"
          />
        </li>
        <li>
          <label className="block text-[14px] font-normal leading-[120%]">
            Message
          </label>
          <textarea
            placeholder="Type your message here"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-[5px] block h-[154px] max-h-[154px] min-h-[37px] w-full rounded-[5px] border-[0.5px] border-solid border-[#ABABAB] px-2.5 py-2.5 leading-[16.8px] placeholder:text-[14px] placeholder:text-[#ABABAB]"
          />
        </li>
        
      </ul>
      <Button className="button__gradient text-n-1" type="submit">
        Submit
      </Button>
    </motion.form>
  );
};

export default ContactForm;
