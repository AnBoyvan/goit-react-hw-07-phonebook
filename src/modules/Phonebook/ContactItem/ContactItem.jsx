import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { getIsLoading } from '../../../redux/contacts/contacts-selectors';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.item}>
      <p className={css.contact}>
        {name}: {phone}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
      >
        delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
