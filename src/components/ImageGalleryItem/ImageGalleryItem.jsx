import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ card }) => {
  return (
    <li key={card.id} className={css.ImageGalleryItem}>
      <img
        src={card.webformatURL}
        alt=""
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
