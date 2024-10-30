import * as Yup from "yup";


export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username is Too Short.")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character"),
  surname: Yup.string()
    .required("Surname is required")
    .min(3, "Surname is Too Short.")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    // .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character")
    .required("Password is required"),
  date: Yup.date().required("Date is required"),
  balance: Yup.number()
    .min(0, "Balance must be a positive number")
    .required("Balance is required"),
  agreement: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});
