import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {

  return (
    <div>
      <NavLink to="/" className={buildCssClasses}>
        Home
      </NavLink>
      <NavLink to="/feature" className={buildCssClasses}>
        Feature
      </NavLink>
      <NavLink to="/blog" className={buildCssClasses}>
        Blog
      </NavLink>
      <NavLink to="/testimonials" className={buildCssClasses}>
        Testimonials
      </NavLink>
    </div>
  );
};

export default Navigation;
