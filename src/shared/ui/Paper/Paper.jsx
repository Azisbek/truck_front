import React from "react"
import clsx from "clsx";

import s from "./Paper.module.css";

export const Paper = ({ children, className, ...divProps }) => (
  <div {...divProps} className={clsx(s.container, className)}>
    {children}
  </div>
);
