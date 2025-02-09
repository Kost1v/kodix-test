import Navigation from "../navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Logo from '../Logo.jsx'
import css from "./AppBar.module.css"

const AppBar = () => {
 const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  
  return (
    <header className={css.header}>
      <div className={css.nav}>
        <Navigation />
        <Logo />
      </div>
      {userAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
