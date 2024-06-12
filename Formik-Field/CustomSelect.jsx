import React from "react";
import { useField } from "formik";

export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  console.log("field>>", field);
  console.log("meta>>", meta);
  return (
    <div>
      <div className="relative z-0 w-full mb-5 group">
        <select
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error ? "border-red-400" : ""
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        ></select>
        <span className="text-red-400">{meta.error && meta.error}</span>
      </div>
    </div>
  );
}
