import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(16, "Too long")
    .required("Required"),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  firstName: Yup.string()
    .min(2, "Too short")
    .max(20, "Too long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too short")
    .max(20, "Too long")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be the most 16 characters")
    .required("Required"),
});
