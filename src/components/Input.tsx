import React, { ChangeEvent } from "react";
import { InputProps } from "../types";
import { useForm } from "./Form";
import FormField from "./FormField";

export const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  required = false,
  disabled = false,
  error,
  label,
}) => {
  const { values, handleChange, errors } = useForm();

  // Use either the provided value or get it from the form context
  const inputValue = value !== undefined ? value : values[name] || "";
  const errorMessage = error || errors[name];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      handleChange(name, e.target.value);
    }
  };

  const inputElement = (
    <input
      id={name}
      name={name}
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={`form-input ${className}`}
      required={required}
      disabled={disabled}
      aria-invalid={!!errorMessage}
    />
  );

  return label ? (
    <FormField
      name={name}
      label={label}
      required={required}
      error={errorMessage}
    >
      {inputElement}
    </FormField>
  ) : (
    <>
      {inputElement}
      {errorMessage && <div className="form-error">{errorMessage}</div>}
    </>
  );
};

export default Input;
