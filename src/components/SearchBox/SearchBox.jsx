import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <p style={{fontSize: 20}}>Find contacts</p>
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        placeholder="Enter keyword to search"
        onChange={(event) => {
          const action = changeFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;
