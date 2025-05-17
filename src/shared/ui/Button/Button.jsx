import React from "react";
import styles from "./Button.module.css";

export function Button({ 
  children, 
  variant = "primary", 
  size = "medium",
  fullWidth = false,
  disabled = false,
  type = "button",
  ...props 
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ""}
        ${disabled ? styles.disabled : ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
} 