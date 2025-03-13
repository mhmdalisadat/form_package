// src/types/input.types.ts

import { ReactNode, ChangeEvent, FocusEvent } from "react";

// تایپ‌های پایه برای همه اینپوت‌ها
export interface BaseInputProps {
  // ویژگی‌های اصلی
  name: string;
  label?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  // وضعیت‌ها
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;

  // استایل‌ها
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  // دسترسی‌پذیری
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

// تایپ‌های اختصاصی برای TextInput
export interface TextInputProps extends BaseInputProps {
  // نوع ورودی متنی
  type?: "text" | "email" | "password" | "tel" | "url" | "search";

  // ویژگی‌های متنی
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;

  // رویدادهای اضافی
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  // ویژگی‌های ظاهری
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  // متن راهنما
  helperText?: string;

  // قالب‌بندی
  format?: (value: string) => string;

  // ویژگی‌های اضافی
  autoFocus?: boolean;
  dir?: "rtl" | "ltr" | "auto";
}
