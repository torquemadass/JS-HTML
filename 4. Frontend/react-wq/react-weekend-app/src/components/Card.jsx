import React from 'react';

const Card = ({ children, disabled, isActive, className, ...props }) => {
  const baseStyles = "p-4 rounded border border-gray-200 transition-all";
  const hoverStyles = "hover:border-blue-500 hover:ring-1 hover:ring-blue-500";
  const activeStyles = isActive
  ? "border-blue-600 active:ring-2 active:ring-blue-600"
  : "";
  const disabledStyles = "opacity-50 pointer-events-none border-gray-100";

  const cardStyles = `
    ${baseStyles}
    ${!disabled && hoverStyles}
    ${activeStyles}
    ${disabled ? disabledStyles : ""}
    ${className || ""}
  `;

  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;

