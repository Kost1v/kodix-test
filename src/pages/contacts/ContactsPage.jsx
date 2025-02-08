import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later
          🤷‍♂️.
        </p>
      )}
      {contacts !== null && contacts.length === 0 ? (
        `There are no contacts yet 😒`
      ) : (
        <ContactList />
      )}

      {loading && <Loader />}
    </div>
  );
};

export default ContactsPage;
