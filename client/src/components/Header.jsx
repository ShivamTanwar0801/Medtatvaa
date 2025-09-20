import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/svg/Logo.svg';
import MenuSvg from '../assets/svg/MenuSvg';
import { navLinks } from '../constants';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Button from './Button';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup to remove listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="container fixed left-0 right-0 top-0 z-50 mt-[20px] w-full overflow-visible">
      <AnimatePresence>
        <motion.div
          key="desktop-nav"
          className="stroke-gradient relative z-50 shadow-[0_4px_13px_0_rgba(0,0,0,0.05)]"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Inner wrapper */}
          <div
            className={`relative z-10 flex min-h-[60px] justify-between rounded-[15px] px-4 py-2.5 duration-300 xl:px-7.5 ${
              openNavigation
                ? 'bg-[#FBFBFB] xl:bg-transparent' // solid background when menu is open
                : '' // transparent + blur when closed
            } ${isScrolling && !openNavigation ? '!bg-n-2/70 backdrop-blur-sm' : ''} ${isAboutPage && !openNavigation ? 'bg-n-2/60' : ''} `}
          >
            <div
              className={`flex w-full flex-col gap-[30px] text-nowrap pt-2 ${
                openNavigation ? 'items-start pt-2' : ''
              } xl:flex-row xl:items-center`}
            >
              <NavLink
                to="/"
                onClick={() => {
                  setOpenDropdown(false);
                  handleClick();
                }}
              >
                <img src={Logo} width={148} height={25} alt="Medtatvaa" />
              </NavLink>

              <Navigation
                openDropdown={openDropdown}
                handleClick={handleClick}
                setOpenDropdown={setOpenDropdown}
              />

              <AnimatePresence mode="wait">
                <MobileNavigation
                  isOpen={openNavigation}
                  openDropdown={openDropdown}
                  handleClick={handleClick}
                  setOpenDropdown={setOpenDropdown}
                />
              </AnimatePresence>
            </div>

            <div className="relative flex items-start gap-5 text-nowrap xl:items-center">
              <NavLink
                className="hidden items-center text-[16px] font-medium leading-5 transition-colors hover:text-blue-500 xl:flex"
                to="#login"
                onClick={() => setOpenDropdown(false)}
              >
                Login
              </NavLink>
              <Button
                className="hidden text-nowrap border-[1px] border-[#15E29F] transition-colors hover:text-n-1 hover:button-gradient xl:flex"
                href="/contact"
                onClick={() => setOpenDropdown(false)}
              >
                Book a demo
              </Button>
              <Button
                className="button__gradient hidden text-nowrap text-n-1 xl:flex"
                href=""
                onClick={() => setOpenDropdown(false)}
              >
                Start a free trial
              </Button>
              <Button
                className="absolute right-[-8px] pt-3 xl:hidden"
                onClick={toggleNavigation}
              >
                <MenuSvg openNavigation={openNavigation} />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      {openNavigation && (
        <div
          className="fixed inset-0 z-40 bg-black/40 xl:hidden"
          onClick={toggleNavigation}
        ></div>
      )}
    </header>
  );
};

export default Header;
