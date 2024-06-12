import * as yup from "yup";

const passwordExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;

const telNumberExp = /^(?=.*\d)(?=.*[+])[\d+]{12,14}$/;
export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please input a valid email!")
    .required("email is Required!"),
  password: yup
    .string()
    .min(6, "password must be at least 6 characters")
    .matches(
      passwordExp,
      "Password must contain At least one uppercase letter one lowercase letter one digit one special character (e.g., !@#$%^&*)"
    )
    .required("password is required!"),
  // age: yup.number().positive().integer().required('Age is Required!')
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null, "password did not match"])
    .required("confirm password is required!"),
  firstName: yup
    .string()
    .min(6, "Must be at least 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("firstname is required!"),
  lastName: yup
    .string()
    .min(6, "Must be at least 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("lastname is required!"),
  phone: yup
    .string()
    // .positive()
    // .integer()
    .min(12, "phone must be atleast 12 characters")
    .max(14, "phone must be max of 14 characters")
    .matches(
      telNumberExp,
      "Phone must contain only numbers and just one special character  (e.g, +)"
    )
    .required("phone is required!"),
  company: yup
    .string()
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("company is required!"),
});

export const anotherYupSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .required("Username is required!"),

  jobType: yup
    .string()
    .oneOf([
      "developer",
      "project manager",
      "UI/UX",
      "graphics designer",
      "Others",
    ])
    .required("Jobtype is required!"),

  terms: yup
    .bool()
    .oneOf([true], "you must accept the terms and condition!")
    .required("terms is required!"),
});
