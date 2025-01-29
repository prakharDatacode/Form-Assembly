import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button type="button" className="custoume-btn">
        {children}
      </button>
    </>
  );
};

export default Button;
