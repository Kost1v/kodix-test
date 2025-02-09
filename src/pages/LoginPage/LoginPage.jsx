import LoginAside from "../../components/LoginAside/LoginAside";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from '../RegistrationPage/RegistrationPage.module.css'
const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <LoginForm />
      <LoginAside />
    </div>
  );
};

export default LoginPage;
