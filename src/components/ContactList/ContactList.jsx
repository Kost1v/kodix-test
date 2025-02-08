import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "../Contact/Contact.module.css";


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactForm}>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
