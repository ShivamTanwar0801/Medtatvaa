import Phone from '../assets/contact/phone.svg';
import Mail from '../assets/contact/mail.svg';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact-us"
      className="container relative flex flex-col justify-between gap-12 pb-12 pt-[120px] md:pb-[72px] lg:flex-row lg:pb-[120px] lg:pt-[140px]"
    >
      <div className="blue__gradient absolute left-[-25%] top-[-77%] aspect-square w-full max-w-[822px] rounded-full [filter:blur(clamp(0px,67vw,550px))]"></div>

      <div className="flex flex-col justify-between gap-10 lg:max-w-[588px] lg:gap-16 xl:gap-[112px]">
        <div className="flex flex-col gap-6">
          <motion.h2
            className="text-gradient h2 font-pp font-bold pb-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            Exploring radiology solutions?
          </motion.h2>
          <motion.p
            className="font-pp text-[20px] font-medium leading-[100%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            We’d love to hear from you. Whether you’re just getting started or
            ready to scale, our team is here to support you every step of the
            way.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-2">
              <p className="h2 font-pp font-bold text-[#141E5A]">
                Reach out directly
              </p>
              <p className="font-pp text-[20px] font-medium leading-[100%]">
                Sales & Product Inquiries
              </p>
              <p className="font-medium leading-[120%] text-[#505050]">
                Have questions about how Medtatvaa can help your radiology
                center? Speak directly with our product specialists.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-2">
              <span className="flex items-center gap-[18px]">
                <img src={Phone} alt="Phone" />
                <p className="font-medium leading-[120%]">+91 9444391106</p>
              </span>
              <span className="flex items-center gap-[18px]">
                <img src={Mail} alt="Phone" />
                <p className="font-medium leading-[120%]">
                  hello@medtatvaa.com
                </p>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-2">
              <p className="font-pp text-[20px] font-medium leading-[100%]">
                Investor Relations
              </p>
              <p className="font-medium leading-[120%] text-[#505050]">
                Interested in partnering with us or exploring investment
                opportunities? We’re building for the long run and always open
                to conversations.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-[18px]">
                <img src={Phone} alt="Phone" />
                <p className="font-medium leading-[120%]">+91 9444391101</p>
              </span>
              <span className="flex items-center gap-[18px]">
                <img src={Mail} alt="Phone" />
                <p className="font-medium leading-[120%]">
                  sneha@medtatvaa.com
                </p>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
