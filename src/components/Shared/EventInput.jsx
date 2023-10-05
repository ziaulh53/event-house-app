import React from "react";

export const EventInput = ({
  type = "text",
  disabled = false,
  value,
  name,
  onChange,
  className,
  placeholder,
  label,
}) => {
  return (
    <div className="">
      <div className="mb-2">
        <label className="font-bold">{label}</label>
      </div>
      <input
        className={"p-2 rounded-lg border border-gray-400 w-full " + className}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
