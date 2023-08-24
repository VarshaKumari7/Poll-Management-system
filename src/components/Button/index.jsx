import React from "react";

const Button = ({ title, className = "button-class", ...prop }) => {
  return (
    <button className={className} {...prop}>
      {title}
    </button>
  );
};

export default Button;
