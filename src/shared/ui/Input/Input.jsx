import React from "react";
import s from "./Input.module.css";

export function Input({ ...props }) {
  return <input {...props} className={s.input} />;
}
