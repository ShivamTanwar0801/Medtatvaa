import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, products } from '../constants';
import Button from './Button';
import { AnimatePresence, motion } from 'framer-motion';

const MobileNavigation = ({
  setOpenDropdown,
  openDropdown,
  handleClick,
  isOpen,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="mobile-nav"
          className="w-full overflow-hidden border-t-[1px] border-n-8/30 bg-[#FBFBFB]/10 xl:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          <nav className="z-50 ml-[2px] flex translate-x-0 overflow-hidden pt-4 transition-transform duration-300 ease-in-out xl:flex xl:bg-transparent">
            <div className="z-50 flex flex-col gap-[25px] pt-4 xl:flex-row xl:pt-0">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown((prev) => !prev)}
                  className="flex items-center gap-1 text-[16px] font-medium leading-5"
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence mode="wait">
                  {openDropdown && (
                    <motion.div
                      key="products-dropdown"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.1, ease: 'easeInOut' }}
                      className="mt-2 w-48 p-2 pb-0 xl:mt-4"
                    >
                      {products.map((item) => (
                        <Link
                          key={item.id}
                          onClick={() => {
                            setOpenDropdown(false);
                            handleClick();
                          }}
                          className="block px-4 text-[16px] font-medium hover:bg-gray-200"
                          to="/products"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((item) => (
                <NavLink
                  to={item.url}
                  key={item.id}
                  onClick={handleClick}
                  className={`text-[16px] font-medium leading-5 transition-colors hover:text-blue-500 ${
                    item.onlyMobile ? 'xl:hidden' : ''
                  }`}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="flex gap-4 py-6">
            <Button
              className="flex flex-1 justify-center text-nowrap border-[1px] border-[#15E29F]"
              onClick={handleClick}
              href="/contact"
            >
              Book a demo
            </Button>
            <Button
              className="button__gradient flex flex-1 justify-center text-n-1"
              onClick={handleClick}
              href=""
            >
              Start a free trial
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
