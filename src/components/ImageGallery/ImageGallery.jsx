import React, { Component } from 'react';
// import axios from 'axios';

export default class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };
  //проаерить если предыд пропс !=== текущему имени тогда фетчим
  //   //чтобы не был безконечный цикл всегда делаем проверку в componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.picturesName;
    const nextName = this.props.picturesName;

    if (prevName !== nextName) {
      console.log('изменилось имя');

      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=25348834-538d9f4405bc5a9c16273efde&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Нет картинки с названием ${nextName}`)
          );
        })
        .then(image => {
          this.setState({ image, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    // console.log('prevProps.picturesName)', prevProps.picturesName);
    // console.log('this.props.picturesName', this.props.picturesName);
  }
  render() {
    const { image, error, status } = this.state;

    if (status === 'idle') {
      return <p>Введите название картинки</p>;
    }
    if (status === 'pending') {
      return <p>Загружаем...</p>;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p>{image.name}</p>
          <ul className="gallery">
            <li className="gallery-item">
              <img src="" alt=""></img>
            </li>
          </ul>
        </div>
      );
    }
  }
}
