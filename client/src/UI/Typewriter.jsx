import { motion } from 'framer-motion';

export const sentenceVariants = {
  hidden: {},
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.04 } 
  },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const Typewriter = ({ text, delay = 0, ...rest }) => (
  <motion.p
    key={text}
    variants={{
      hidden: {},
      visible: {
        opacity: 1,
        transition: { delay, staggerChildren: 0.02 },
      },
    }}
    initial="hidden"
    whileInView="visible"  // 👈 triggers when in viewport
    viewport={{ once: true, amount: 0.2 }} // play once when 20% in view
    {...rest}
  >
    {text.split('').map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
