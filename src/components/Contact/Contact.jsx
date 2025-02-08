import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css"

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactForm}>
      <ul>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id))
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
