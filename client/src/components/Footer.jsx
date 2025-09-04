import Logo from '../assets/footer/logo.svg';
import Linkedin from '../assets/footer/linkedin.svg';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <section className="w-full bg-[#DFE9F7] py-6 md:py-9 lg:py-12 xl:py-15">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row lg:flex-col lg:items-start">
            <img
              src={Logo}
              alt="Medtatva"
              className="h-auto w-[213px] max-w-[285px] sm:w-auto"
            />
            <div>
              <p className="font-medium leading-[120%]">hello@medtatvaa.com</p>
              <p className="pt-2.5 text-[14px] font-normal leading-[120%]">
                Engineered in{' '}
                <span className="text-[16px] font-medium">Chennai, India</span>
              </p>
              <span className="flex items-center gap-4 pt-[23px]">
                <a
                  href="https://www.linkedin.com/company/medtatvaa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="LinkedIn" />
                </a>
                <p className="text-[14px] font-normal leading-[120%]">
                  We’re on LinkedIn. Join the loop
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-12">
            {footerLinks.map((item) => (
              <div
                className="flex min-w-[120px] max-w-[calc(66.66vw-40px)] flex-1 flex-col gap-[15px] lg:min-w-[105px]"
                key={`${item.title}_footer`}
              >
                <h4 className="font-medium leading-[120%]">{item.title}</h4>
                <ul className="gap-[15px]">
                  {item.links.map((link) => (
                    <li
                      key={`${link.name}_footer`}
                      className="mb-[15px] cursor-pointer text-[14px] font-normal leading-[120%] text-[#505050] hover:text-blue-500"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] flex flex-col items-center justify-between gap-3 border-t-[1px] border-black/90 pt-[30px] lg:flex-row">
          <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row lg:w-[65%]">
            <p className="font-medium leading-[120%] text-[#505050]">
              Don’t worry, we do not sell your data.
            </p>
            <p className="pt-[3px] text-[14px] leading-[120%]">
              Medtatvaa © 2025 | All rights reserved
            </p>
          </div>

          <p className="">
            <span className="mr-6 text-[14px] leading-[120%] lg:mr-[33px]">
              Terms
            </span>
            <span className="mr-6 text-[14px] leading-[120%] lg:mr-[33px]">
              Privacy Policy
            </span>
            <span className="text-[14px] leading-[120%]">Acceptable Use</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
