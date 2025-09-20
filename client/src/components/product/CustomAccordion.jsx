import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { faqAccordion } from '../../constants';
import { motion } from 'framer-motion';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// Variants for container + children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each FAQ item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export default function CustomAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <motion.div
      className="flex flex-col gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.2 }}
    >
      {faqAccordion.map((item, idx) => (
        <motion.div key={item.id} variants={itemVariants}>
          <Accordion
            open={open === idx + 1}
            icon={<Icon id={idx + 1} open={open} />}
            className="max-w-[844px] rounded-[10px] bg-white/50 px-[15px] shadow-[0_4px_13px_0_rgba(0,0,0,0.05)]"
          >
            <AccordionHeader
              onClick={() => handleOpen(idx + 1)}
              className={`border-b-0 font-pp text-[16px] font-medium text-[#141E5A] md:text-[20px] ${
                open === idx + 1 ? '!text-[#141E5A]' : '!text-[#72789c]'
              } focus:outline-none pb-2 md:pb-4`}
            >
              {item.question}
            </AccordionHeader>
            <AccordionBody className="font-work font-medium leading-[120%] text-[#686868] pt-2 md:pt-4">
              {item.answer}
            </AccordionBody>
          </Accordion>
        </motion.div>
      ))}
    </motion.div>
  );
}
