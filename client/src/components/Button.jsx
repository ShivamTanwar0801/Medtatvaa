import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, className, href, onClick, type }) => {
  const renderButton = () => (
    <button
      className={`rounded-[100px] px-4 py-2 sm:px-5 sm:py-2.5 text-[14px] font-medium leading-[19.2px] sm:text-[16px] ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <Link
      to={href}
      className={`rounded-[100px] px-4 py-2 sm:px-5 sm:py-2.5 text-[14px] sm:text-[16px] font-medium leading-[19.2px] ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
