import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.contact}>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
