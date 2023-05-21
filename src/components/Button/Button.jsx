import css from './Button.module.css';

import PropTypes from 'prop-types';

const Button = ({ loadMoreBtnClick }) => {
  return (
    <button type="button" onClick={loadMoreBtnClick} className={css.button}>
      Load more
    </button>
  );
};

Button.prototype = {
  loadMoreBtnClick: PropTypes.func,
};

export default Button;
