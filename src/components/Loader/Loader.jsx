import './Loader.css';
import { ImSpinner } from 'react-icons/im';

function Loader() {
  return (
    <div role="alert">
      <ImSpinner size="32" className="spinner" />
    </div>
  );
}

export default Loader;
