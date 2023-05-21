import css from './ImageGalleryItem.module.css';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ card, openModal }) => {
  return (
    <li key={card.id} className={css.ImageGalleryItem}>
      <img
        onClick={openModal}
        src={card.webformatURL}
        alt={card.largeImageURL}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  card: PropTypes.object,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
