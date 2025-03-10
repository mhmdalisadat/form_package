import React, { createContext, useState, useContext, FormEvent } from "react";
import { FormProps, FormContextType } from "../types";

// Create a context for the form
export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

// Custom hook to use form context
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a Form component");
  }
  return context;
};

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className = "",
  initialValues = {},
}) => {
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const setFieldError = (name: string, error: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if there are any errors before submitting
    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    }
  };

  const contextValue: FormContextType = {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldError,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form className={className} onSubmit={handleSubmit} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
