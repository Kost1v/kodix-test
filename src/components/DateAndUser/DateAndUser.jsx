import css from "./DateAndUser.module.css";
const DateAndUser = () => {
  const firstName = JSON.parse(localStorage.getItem("user")).firstName;
  const lastName = JSON.parse(localStorage.getItem("user")).lastName;
  
  return (
    <div className={css.dateCont}>
      <p className={css.postDate}>wednesday 12, march 2024</p>
      <div className={css.userCont}>
        <div className={css.userImg}></div>
        <p className={css.userName}>
          {JSON.parse(localStorage.getItem("userAuth"))
            ? firstName + " " + lastName
            : "Anonymous"}
        </p>
      </div>
    </div>
  );
}

export default DateAndUser