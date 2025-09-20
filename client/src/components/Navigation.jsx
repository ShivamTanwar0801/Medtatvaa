import React from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { createPortal } from 'react-dom';

const Navigation = ({ setOpenDropdown, openDropdown, handleClick }) => {
  return (
    <>
      <nav
        className={`z-50 hidden transition-transform duration-300 ease-in-out xl:flex xl:bg-transparent`}
      >
        <div className="z-50 flex flex-col gap-[25px] pt-4 xl:flex-row xl:pt-0">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown((prev) => !prev)}
              className="flex items-center gap-1 text-[16px] font-medium leading-5 hover:text-blue-500"
            >
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openDropdown ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            {openDropdown && (
              <div className="absolute left-0 top-[25px] z-50 mt-2 hidden w-48 rounded-md border bg-white p-2 shadow-lg xl:mt-4 xl:block">
                <Link
                  to='/products'
                  onClick={() => {
                    setOpenDropdown(false);
                    handleClick();
                  }}
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  DICOMDrive
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              onClick={() => {
                setOpenDropdown(false);
                handleClick();
              }}
              className={`text-[16px] font-medium leading-5 transition-colors hover:text-blue-500 ${item.onlyMobile ? 'lg:hidden' : ''}`}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
