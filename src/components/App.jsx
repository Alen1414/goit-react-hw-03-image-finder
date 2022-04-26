import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    picturesName: '',
  };
  // при сабмите формы записываем поиск в стейт Арр

  handleSeachPictures = picturesName => {
    this.setState({ picturesName });
    console.log(picturesName);
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSeachPictures} />

        <ToastContainer position="top-center" autoClose={2000} />
        <ImageGallery picturesName={this.state.picturesName} />
      </div>
    );
  }
}
