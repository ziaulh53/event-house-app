import React from "react";

export const EventButton = ({
  loading = false,
  btnText,
  onClick,
  className,
  disabled=false,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {btnText}
    </button>
  );
};


