import { useEffect, useState } from "react";

// redux
// actions
import { signIn } from "../../redux/user/actions";
import { setIsLoading } from "../../redux/isLoading/reducer";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
// formik
import { Formik, Form, Field } from "formik";

import "./login.scss";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

export const Login: React.FC = () => {
  // navigate
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  // redux
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: RootState) => ({
    user: state.user,
    isLoading: state.isLoading,
  }));

  const initialValues: IUserForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isRegistering: false,
  };

  useEffect(() => {
    console.log(user);

    if (user.token) {
      dispatch(setIsLoading(false));
      navigate("/");
    }
  }, [user]);

  return (
    <main>
      <section className="formWrapper">
        <h1>{isRegistering ? "register" : "login"}</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            // editting values
            delete values.isRegistering;

            const formValues = isRegistering
              ? values
              : { email: values.email, password: values.password };
            dispatch(signIn(formValues, isRegistering));
            dispatch(setIsLoading(true));
          }}
          validationSchema={schema}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => {
            values.isRegistering = isRegistering;
            return (
              <Form className="loginForm">
                {isRegistering && (
                  <>
                    <label htmlFor="firstNameInput">
                      <p>First Name</p>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstNameInput"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    {touched.firstName && errors.firstName && errors.firstName}
                    <label htmlFor="lastNameInput">
                      <p>Last Name</p>
                      <Field
                        type="text"
                        name="lastName"
                        id="lastNameInput"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    {touched.lastName && errors.lastName && errors.lastName}
                  </>
                )}
                <label htmlFor="emailInput">
                  <p>Email</p>
                  <Field
                    type="text"
                    name="email"
                    id="emailInput"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                {touched.email && errors.email && errors.email}
                <label htmlFor="emailInput">
                  <p>Password</p>
                  <Field
                    type="password"
                    name="password"
                    id="passwordInput"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                {touched.password && errors.password && errors.password}
                <div className="formButtons">
                  <button
                    type="button"
                    onClick={() => setIsRegistering(!isRegistering)}
                  >
                    {isRegistering ? "Login" : "Register"}
                  </button>
                  {(isLoading && <Loading width="100" />) || (
                    <button type="submit">
                      {isRegistering ? "Register" : "Login"}
                    </button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </main>
  );
};
