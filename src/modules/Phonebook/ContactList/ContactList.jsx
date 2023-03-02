import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactItem key={id} name={name} phone={phone} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
