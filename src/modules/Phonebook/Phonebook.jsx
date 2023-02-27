import { useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './Phonebook.module.css';

const Phonebook = () => {
  const allContacts = useSelector(getAllContacts);
  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {!Boolean(allContacts.length) && (
        <p className={css.notification}>
          There are no contacts in the phonebook
        </p>
      )}
      <ContactList />
    </div>
  );
};

export default Phonebook;
