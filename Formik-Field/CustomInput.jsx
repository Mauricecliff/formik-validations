import { useField } from "formik";
import React from "react";

export default function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  console.log("field>>", field);
  console.log("meta>>", meta);

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "border-red-400" : ""
        } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer `}
      />
      <span className="text-red-400">{meta.error && meta.error}</span>
      <label
        for="email"
        className={`${
          meta.touched && meta.error ? "border-red-400" : ""
        } peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
      >
        {label}
      </label>
    </div>
  );
}
