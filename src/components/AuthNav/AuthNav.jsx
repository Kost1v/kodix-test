import css from './AuthNav.module.css'
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={css.authCont}>
      <NavLink to="/login" className={css.login}>
        Log in
      </NavLink>
      <NavLink to="/register" className={css.register}>
        Sign Up
      </NavLink>
    </div>
  );
};

export default AuthNav;
