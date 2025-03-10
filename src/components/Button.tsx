import React from "react";
import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`form-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
