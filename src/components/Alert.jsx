import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 z-50 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-white leading-none rounded-full flex items-center shadow-lg`}
        role="alert"
      >
        <span
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } rounded-full uppercase px-2 py-1 font-bold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </span>
        <span className="mr-2 text-left text-sm">{text}</span>
      </div>
    </div>
  );
};

export default Alert;
