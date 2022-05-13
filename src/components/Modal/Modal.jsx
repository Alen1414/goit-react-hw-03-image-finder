import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  //---закрыть модалку по клику esc на клавиатуре
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  //---метод очистки за собой кейтдаун
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  //----- закрітие по бакдропу
  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  //----- вешаем есукйп закрытие
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  ///---чтобы переиспользовать можалку используем chidren
  ///--- рендерим отдельно модалку чтобы перекрывала весь контент отдельно в ДОМ -портал

  render() {
    const {
      title,
      onClose,
      currentImageUrl,
      currentImageDescription,
    } = this.props;

    return createPortal(
      <div className={css.backdrop} onClick={this.handleClickBackdrop}>
        <div className={css.modal}>
          <div className={css.wrapper}>
            {title && <h1 className={css.title}>{title}</h1>}
            <button className={css.button} type="button" onClick={onClose}>
              <BsXLg className={css.icon} />
            </button>
          </div>
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
