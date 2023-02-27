import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';
import { getFilter } from '../../../redux/filter/filter-selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const initialValues = {
    filter: filter,
  };
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const handleSubmit = ({ filter }, { resetForm }) => {
    dispatch(setFilter(filter));
    resetForm();
  };

  return (
    <>
      <p className={css.title}>Find contacts by name</p>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          ></Field>
        </Form>
      </Formik>
    </>
  );
};

export default Filter;
