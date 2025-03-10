import { ReactNode, ChangeEvent, FormEvent } from "react";

export interface FormProps {
  children: ReactNode;
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
  initialValues?: Record<string, any>;
}

export interface FormFieldProps {
  name: string;
  label?: string;
  className?: string;
  required?: boolean;
  children: ReactNode;
  error?: string;
}

export interface InputProps {
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date";
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
}

export interface TextAreaProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  error?: string;
  label?: string;
}

export interface SelectProps {
  name: string;
  options: Array<{ label: string; value: string | number }>;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
}

export interface CheckboxProps {
  name: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  label: string;
}

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

export interface FormContextType {
  values: Record<string, any>;
  errors: Record<string, string>;
  handleChange: (name: string, value: any) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setFieldError: (name: string, error: string) => void;
}
