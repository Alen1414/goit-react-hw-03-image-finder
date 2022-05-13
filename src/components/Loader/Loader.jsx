import css from './Loader.module.css';
import { ImSpinner } from 'react-icons/im';
function Loader() {
  return (
    <div role="alert" className={css.spinner}>
      <ImSpinner size="50" />
    </div>
  );
}

export default Loader;
