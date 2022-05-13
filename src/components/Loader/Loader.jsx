import css from './Loader.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
function Loader() {
  return (
    <div role="alert" className={css.spinner}>
      <BiSearchAlt2 size="50" />
    </div>
  );
}

export default Loader;
