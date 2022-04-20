import * as Yup from "yup";

export const schema = Yup.object().shape({
  isRegistering: Yup.boolean(),
  firstName: Yup.string()
    .min(2, "First name too short")
    .max(15, "First name too long")
    .when("isRegistering", {
      is: true,
      then: Yup.string().required("last name is required"),
    }),
  lastName: Yup.string()
    .min(2, "Last name too short")
    .max(15, "Last name too long")
    .when("isRegistering", {
      is: true,
      then: Yup.string().required("last name is required"),
    }),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .required("password is required"),
});
