import React, { Component } from 'react';
// import axios from 'axios';
import ErrorView from 'components/ErrorView';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import imageAPI from 'components/Services/image-api';

export default class ImageGallery extends Component {
  state = {
    image: {},
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

      imageAPI
        .fetchImage(nextName)
        .then(image => {
          this.setState({ image, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ loading: false }));
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
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ErrorView message={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className="gallery">
            <ImageGalleryItem image={image} />
          </ul>
        </div>
      );
    }
  }
}
