import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'components/Style.css';

export default class Searchbar extends Component {
  state = {
    searchPictures: '',
  };
  // сохраняем ввод
  handleSearch = e => {
    this.setState({ searchPictures: e.currentTarget.value.toLowerCase() });
    // console.log(e.currentTarget.value.toLowerCase());
  };

  //очищаем форму
  handSubmit = e => {
    e.preventDefault();
    //при пустом вводе - алерт
    if (this.state.searchPictures.trim() === '') {
      return toast('Введите текст!');
    }
    // имя пропса который передали в App
    this.props.onSubmit(this.state.searchPictures);

    this.setState({ searchPictures: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus=""
            placeholder="Search images and photos"
            valet={this.state.searchPictures}
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}
