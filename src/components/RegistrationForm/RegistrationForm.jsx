import { ErrorMessage, Field, Form, Formik } from "formik";

import css from "../RegistrationForm/RegistrationForm.module.css";

import { RegisterSchema } from "../../utils/schema";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [sendForm, setSendForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log(values);
    setSendForm(true);
    localStorage.setItem("user", JSON.stringify(values));
    actions.resetForm();
  };
  useEffect(() => {
    if (sendForm) {
      navigate("/login");
    }
    setSendForm(false);
  }, [sendForm, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Sign up</h2>
        <label className={css.label}>
          <span>Email address</span>
          <Field
            type="text"
            name="email"
            className={css.inputForm}
            placeholder="Your email address"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <div className={css.nameWrapper}>
          <label className={css.label}>
            <span>First Name</span>
            <Field
              type="text"
              name="firstName"
              className={css.inputFormName}
              placeholder="Your first name"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="firstName"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Last Name</span>
            <Field
              type="text"
              name="lastName"
              className={css.inputFormName}
              placeholder="Your last name"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="lastName"
              component="span"
            />
          </label>
        </div>
        <label className={css.label}>
          <span>Password</span>
          <div className={css.passCont}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              className={css.inputForm}
              placeholder="Enter password"
            />
            <button
              className={css.showPass}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 10C6.74182 10 4.90909 8.208 4.90909 6C4.90909 3.792 6.74182 2 9 2C11.2582 2 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 10 9 10ZM9 3.6C7.64182 3.6 6.54545 4.672 6.54545 6C6.54545 7.328 7.64182 8.4 9 8.4C10.3582 8.4 11.4545 7.328 11.4545 6C11.4545 4.672 10.3582 3.6 9 3.6Z"
                  fill="#84818A"
                />
              </svg>
            </button>
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <a href="http://google.com" target="_blank" className={css.forgotPass}>
          Forgot password?
        </a>
        <button type="submit" className={css.btnForm}>
          Sing In{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z"
              fill="white"
            />
          </svg>
        </button>
        <p className={css.haveAcc}>
          Already have an account?
          <button
            type="button"
            className={css.link}
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
