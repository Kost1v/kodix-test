import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import css from "../RegistrationForm/RegistrationForm.module.css";

import { LoginSchema } from "../../utils/schema";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Email:</span>
          <Field
            type="text"
            name="email"
            className={css.inputForm}
            placeholder="Enter email..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Password:</span>
          <Field
            type="password"
            name="password"
            className={css.inputForm}
            placeholder="Enter password..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btnForm}>
          Sing In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
