import css from './Searchbar.module.css';

import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="input"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
