import React from "react";
import { FormFieldProps } from "../types";

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  children,
  className = "",
  required = false,
  error,
}) => {
  return (
    <div className={`form-field ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      {children}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
};

export default FormField;
