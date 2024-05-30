import { Field, Form, Formik } from 'formik';
import { CiSearch } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}
export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, action) => {
          if (values.query.length === 0) {
            toast.error('Please enter text to search for images');
          }
          onSearch(values.query);
          action.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.searchField}
            placeholder="Search images and photos"
            type="text"
            name="query"
          />
          <button type="submit" className={css.icon}>
            <CiSearch size={20} />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
