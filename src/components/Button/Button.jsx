import css from './Button.module.css';

const Button = ({ loadMoreBtnClick }) => {
  return (
    <button type="button" onClick={loadMoreBtnClick} className={css.button}>
      Load more
    </button>
  );
};

export default Button;
