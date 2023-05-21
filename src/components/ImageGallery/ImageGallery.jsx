import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ cards }) => {
  return (
    <ul className={css.imageGallery}>
      {cards.map(card => (
        <ImageGalleryItem key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default ImageGallery;
