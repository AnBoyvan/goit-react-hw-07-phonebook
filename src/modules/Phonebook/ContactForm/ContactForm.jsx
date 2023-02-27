import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-slice';
import { getAllContacts } from '../../../redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getAllContacts);
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (contact, { resetForm }) => {
    const checkName = allContacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (checkName) {
      alert(`${contact.name} has already added in contacts`);
      return;
    }

    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div></div>
        <label className={css.formElement} htmlFor="name">
          <span>Name</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formElement} htmlFor="number">
          <span>Number</span>
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
