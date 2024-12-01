import React from 'react';

const Button = ({ variant = 'primary', children, onClick, disabled, className }) => {
  const baseStyles = "px-4 py-2 rounded text-sm font-medium transition-colors";
  
  const variants = {
    primary: "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 text-gray-900 disabled:text-gray-400",
    secondary: "bg-gray-800 hover:bg-gray-700 active:bg-gray-600 disabled:bg-gray-200 text-white disabled:text-gray-400",
    bonus: "border-2 border-gray-800 bg-transparent hover:bg-gray-100 active:bg-gray-200 disabled:border-gray-200 text-gray-900 disabled:text-gray-400"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className || ''}`;

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

