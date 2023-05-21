import css from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
