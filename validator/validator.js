import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(7, "too short")
    .max(29, "too long")
    .required("this field is required"),
  username: Yup.string()
    .min(7, "too short")
    .max(29, "too long")
    .required("this field is required"),
  email: Yup.string().email("invalid email").required("this field is required"),
  phone: Yup.number("this phone number is invalid").required(
    "this field is required"
  ),
  password: Yup.string().required("this field is required"),
});

export default signUpSchema;
