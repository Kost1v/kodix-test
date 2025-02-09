import { useNavigate } from 'react-router-dom';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        className={css.logout}
        onClick={() => {
          window.location.reload();
          localStorage.setItem("userAuth", false);
          navigate("/blog");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
