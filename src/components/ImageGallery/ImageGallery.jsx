import css from './ImageGallery.module.css';

import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    modal: false,
    url: '',
  };

  clickOnPhoto = event =>
    this.setState({
      modal: true,
      url: event.currentTarget.alt,
    });

  closeModal = () =>
    this.setState({
      modal: false,
      url: '',
    });

  render() {
    const { cards } = this.props;
    const { modal, url } = this.state;
    return (
      <div>
        <ul className={css.imageGallery}>
          {cards.map(card => (
            <ImageGalleryItem
              openModal={this.clickOnPhoto}
              key={card.id}
              card={card}
            />
          ))}
        </ul>
        {modal && <Modal closeModal={this.closeModal} url={url} />}
      </div>
    );
  }
}

export default ImageGallery;
