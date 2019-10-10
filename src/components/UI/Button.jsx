import React from "react";

const Button = ({ inputClasses, onClick, disabled, children }) => {
  let defaultClass = 'btn';
  return (
    <button
      className={[defaultClass, inputClasses].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
