// src/types/formField.type.ts

import { TextInputProps } from "./text.type";

// گسترش رابط FormField برای پشتیبانی از ویژگی‌های TextInput
export interface FormField {
  name: string;
  label: string;
  disabled?: boolean;
  accept?: string;
  defaultValue?: string;

  value?: any;
  type:
    | "text"
    | "email"
    | "password"
    | "select"
    | "checkbox"
    | "transferList"
    | "date"
    | "file"
    | "viewFile"
    | "dynamic"
    | "detail"
    | "multiSelect";

  // ویژگی‌های مشترک با TextInputProps
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  helperText?: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  format?: (value: any) => any;

  // سایر ویژگی‌های موجود
  options?: { label: string; value: any }[];
  transferListProps?: {
    /* ... */
  };
  // ...
}

// تابع کمکی برای استخراج ویژگی‌های TextInput از FormField
export function extractTextInputProps(field: FormField): TextInputProps {
  return {
    name: field.name,
    label: field.label,
    type: field.type as "text" | "email" | "password",
    value: field.value,
    disabled: field.disabled,
    placeholder: field.placeholder,
    maxLength: field.maxLength,
    minLength: field.minLength,
    pattern: field.pattern,
    autoComplete: field.autoComplete,
    helperText: field.helperText,
    variant: field.variant,
    size: field.size,
    startIcon: field.startIcon,
    endIcon: field.endIcon,
    format: field.format,
  };
}
