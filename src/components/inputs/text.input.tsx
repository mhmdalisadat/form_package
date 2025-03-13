// src/components/inputs/TextInput.tsx

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TextInputProps } from "../../types/input.types";

const TextInput: React.FC<TextInputProps> = ({
  // ویژگی‌های اصلی
  name,
  label,
  value = "",
  onChange,
  type = "text",

  // وضعیت‌ها
  disabled = false,
  readOnly = false,
  required = false,
  error,

  // ویژگی‌های متنی
  placeholder = " ",
  maxLength,
  minLength,
  pattern,
  autoComplete,

  // رویدادها
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,

  // ویژگی‌های ظاهری
  variant = "outlined",
  size = "medium",
  startIcon,
  endIcon,

  // استایل‌ها
  className = "",
  containerClassName = "",
  labelClassName = "",
  errorClassName = "",

  // متن راهنما
  helperText,

  // دسترسی‌پذیری
  ariaLabel,
  ariaDescribedBy,

  // ویژگی‌های اضافی
  autoFocus = false,
  dir = "rtl",
  format,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>(value);

  // به‌روزرسانی مقدار ورودی هنگام تغییر prop
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // فوکوس خودکار
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // مدیریت تغییر مقدار
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // اعمال قالب‌بندی اگر تعریف شده باشد
    if (format) {
      newValue = format(newValue);
    }

    setInputValue(newValue);

    if (onChange) {
      // ایجاد یک رویداد جدید با مقدار قالب‌بندی شده
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: newValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(newEvent);
    }
  };

  // مدیریت فوکوس
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  // مدیریت از دست دادن فوکوس
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  // کلاس‌های کانتینر
  const getContainerClasses = () => {
    const baseClasses = "relative mb-3";
    const variantClasses = {
      outlined: "",
      filled: "bg-gray-50",
      standard: "",
    };

    return `${baseClasses} ${variantClasses[variant]} ${containerClassName}`;
  };

  // کلاس‌های ورودی
  const getInputClasses = () => {
    const baseClasses =
      "peer w-full transition duration-300 ease focus:outline-none";

    const sizeClasses = {
      small: "px-3 py-2 text-sm",
      medium: "px-4 py-3 text-base",
      large: "px-5 py-4 text-lg",
    };

    const variantClasses = {
      outlined:
        "bg-transparent border border-gray-300 rounded-lg focus:border-primary-500",
      filled:
        "bg-gray-100 border-b border-gray-300 rounded-t-lg shadow-inner focus:bg-white",
      standard:
        "bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary-500",
    };

    const stateClasses = `
      ${disabled ? "opacity-60 cursor-not-allowed bg-gray-100" : ""}
      ${readOnly ? "cursor-default bg-gray-50" : ""}
      ${error ? "border-red-500 focus:border-red-500" : ""}
    `;

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${stateClasses} ${className}`;
  };

  // کلاس‌های برچسب
  const getLabelClasses = () => {
    const baseClasses =
      "absolute transition-all duration-300 pointer-events-none";

    const sizeClasses = {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    };

    const positionClasses =
      isFocused || inputValue
        ? "-top-6 right-0 text-xs"
        : variant === "standard"
          ? "right-0 top-1/2 transform -translate-y-1/2"
          : "right-3 top-1/2 transform -translate-y-1/2";

    const stateClasses = `
      ${error ? "text-red-500" : isFocused ? "text-primary-500" : "text-gray-600"}
      ${disabled ? "text-gray-400" : ""}
    `;

    return `${baseClasses} ${sizeClasses[size]} ${positionClasses} ${stateClasses} ${labelClassName}`;
  };

  return (
    <motion.div
      className={getContainerClasses()}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {startIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {startIcon}
        </div>
      )}

      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        className={getInputClasses()}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        aria-label={ariaLabel || label}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy || `${name}-helper-text`}
        dir={dir}
        style={{
          paddingRight: startIcon ? "2.5rem" : undefined,
          paddingLeft: endIcon ? "2.5rem" : undefined,
        }}
      />

      {endIcon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {endIcon}
        </div>
      )}

      {label && (
        <label
          htmlFor={name}
          className={getLabelClasses()}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}

      {(error || helperText) && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          id={`${name}-helper-text`}
          className={`mt-1 text-sm ${error ? "text-red-500" : "text-gray-500"} ${errorClassName}`}
        >
          {error || helperText}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TextInput;
