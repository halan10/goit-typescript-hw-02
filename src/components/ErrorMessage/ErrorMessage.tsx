import { MdErrorOutline } from 'react-icons/md';

import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.errorMessage}>
      <MdErrorOutline size={80} />
      <p>Oops! Something went wrong!</p>
      <p>Please refresh the page!</p>
    </div>
  );
}
