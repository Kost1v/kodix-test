import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import css from "../RegistrationForm/RegistrationForm.module.css";

import { RegisterSchema } from "../../utils/schema";
import { register } from "../../redux/auth/operations";


const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values)).unwrap().catch(error => {
      console.log(error);
      if (error === "Request failed with status code 400") {
        alert("Useer")
      }
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name:</span>
          <Field
            type="text"
            name="name"
            className={css.inputForm}
            placeholder="Enter your name..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
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
          Sing Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
