import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggetIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink to="/" className={buildCssClasses}>
        Home
      </NavLink>

      {isLoggetIn && (
        <NavLink to="/contacts" className={buildCssClasses}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
