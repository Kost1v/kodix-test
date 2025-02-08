import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from '../RegistrationForm/RegistrationForm.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div style={{display: "flex", alignItems: "center", gap: 8}}>
      <h3>Welcome {user.name}!</h3>
      <button
        type="button"
        className={css.btnForm}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
