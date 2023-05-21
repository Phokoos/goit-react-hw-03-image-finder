import { Component } from 'react';

import { findPhotoApi } from 'api/api';

import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    searchingValue: '',
    page: 1,
    photoData: [],
    loader: false,
  };

  scrollSmooth = () => {
    const windowHeight = window.innerHeight;

    window.scrollBy({
      top: windowHeight,
      behavior: 'smooth',
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchingValue, page } = this.state;

    if (
      prevState.searchingValue !== searchingValue ||
      prevState.page !== page
    ) {
      try {
        this.setState({
          loader: true,
        });
        findPhotoApi(searchingValue, page)
          .then(data => {
            const newData = [];
            data.hits.forEach(obj => {
              const { id, webformatURL, largeImageURL } = obj;
              newData.push({ id, webformatURL, largeImageURL });
              if (prevState.searchingValue === searchingValue) {
                return this.setState({
                  photoData: [...prevState.photoData, ...newData],
                });
              }
              this.setState({
                photoData: [...newData],
              });
            });
          })
          .catch(error => console.log(error))
          .finally(() => {
            this.setState({
              loader: false,
            });
          });
      } catch (error) {
        console.log(error);
      }
    }
    this.scrollSmooth();
  }

  clickSearch = event => {
    event.preventDefault();

    const { value } = event.target.input;

    if (value === this.state.searchingValue) {
      return alert('Please write another name');
    }
    this.setState({
      searchingValue: value,
      photoData: [],
    });
  };

  clickLoadMore = () => {
    this.setState(prev => ({
      page: (prev.page += 1),
    }));
  };

  render() {
    const { photoData, loader } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.clickSearch} />
        <ImageGallery cards={photoData} />

        {photoData.length !== 0 && loader !== true && (
          <Button loadMoreBtnClick={this.clickLoadMore} />
        )}

        {loader && <Loader />}
      </div>
    );
  }
}

export default App;
