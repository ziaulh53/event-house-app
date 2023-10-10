import React from "react";

export const EventButton = ({
  loading,
  btnText,
  onClick,
  className,
  disabled = false,
  loadingText = "Loading...",
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span>
          <i className="fa-solid fa-spinner fa-spin mr-2"></i> {loadingText}
        </span>
      ) : (
        btnText
      )}
    </button>
  );
};
