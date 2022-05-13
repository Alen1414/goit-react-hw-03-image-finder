import { BiDotsHorizontalRounded } from 'react-icons/bi';
import css from './Button.module.css';

function Button({ onNextFetch }) {
  return (
    <button className={css.button} type="button" onClick={onNextFetch}>
      Load more <BiDotsHorizontalRounded className={css.icon} />
    </button>
  );
}

export default Button;
