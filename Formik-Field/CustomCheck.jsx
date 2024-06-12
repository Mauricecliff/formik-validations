import React from "react";
import { useField } from "formik";

export default function CustomCheck({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center mb-4">
      <input
        {...props}
        {...field}
        id="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      {meta.touched && meta.error && (
        <p className="text-red-400">{meta.error}</p>
      )}
    </div>
  );
}
