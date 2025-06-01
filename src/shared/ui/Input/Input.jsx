import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import clsx from "clsx";
import s from "./Input.module.css";

export function Input({ type = "text", className, ...props }) {
  const [isEye, setIsEye] = useState(false);

  const isPassword = type === "password";
  const actualType = isPassword ? (isEye ? "text" : "password") : type;

  const toggleEye = () => setIsEye((prev) => !prev);

  return (
    <div className={s.container}>
      <input
        {...props}
        type={actualType}
        className={clsx(s.input, className)}
      />
      {isPassword && (
        <span className={s.eye} onClick={toggleEye}>
          {isEye ? <IoEyeSharp size={30} /> : <IoEyeOffSharp size={30} />}
        </span>
      )}
    </div>
  );
}
