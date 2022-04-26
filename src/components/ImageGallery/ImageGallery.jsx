import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
  };
  //проаерить если предыд пропс !=== текущему имени тогда фетчим
  //чтобы не был безконечный цикл всегда делаем проверку в componentDidUpdate

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.picturesName;
    const nextName = this.props.picturesName;
    if (prevName !== nextName) {
      console.log('изменилось имя');
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=nextNamet&page=1&key=25348834-538d9f4405bc5a9c16273efde&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }))
        .finally(() => this.setState({ loading: false }));

      //   console.log('prevProps.picturesName)', prevProps.picturesName);
      //   console.log('this.props.picturesName', this.props.picturesName);
    }
  }
  render() {
    return (
      <div>
        {this.state.loading && <div>Загружаем...</div>}
        {!this.props.picturesName && <div>Введите название картинки</div>}
        {this.state.image && <div>{this.state.image.q}</div>}
        <ul className="gallery">
          <li className="gallery-item"></li>
        </ul>
      </div>
    );
  }
}
//  <li className="gallery-item">
//    {this.state.picturesName}
//    <img src="" alt="" />
//  </li>;

//  <li className="gallery-item">{this.props.picturesName}</li>;
