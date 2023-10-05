import { Button } from "antd";
import React from "react";

export const EventButton = ({
  loading = false,
  btnText,
  onClick,
  className,
  disabled=false,
  type = "primary",
}) => {
  return (
    <button
      className={`event-btn-${type} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {btnText}
    </button>
  );
};


