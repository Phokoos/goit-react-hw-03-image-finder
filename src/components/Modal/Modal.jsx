import css from './Modal.module.css';

import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <div className={css.overlay} onClick={this.clickBackdrop}>
        <div className={css.modal}>
          <img src={url} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
