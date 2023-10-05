import React from "react";

export const PageTitle = ({title}) => {
  return (
    <div className="mb-2">
      <h5 className="text-2xl uppercase font-bold">{title}</h5>
      <div className="h-[1px] bg-black w-full"></div>
    </div>
  );
};
