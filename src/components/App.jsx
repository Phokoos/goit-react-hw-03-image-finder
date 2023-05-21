import { Component } from 'react';

import { findPhotoApi } from 'api/api';

import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    searchingValue: '',
    page: 1,
    photoData: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchingValue, page } = this.state;

    if (
      prevState.searchingValue !== searchingValue ||
      prevState.page !== page
    ) {
      try {
        findPhotoApi(searchingValue, page).then(data => {
          const newData = [];
          data.hits.forEach(obj => {
            const { id, webformatURL, largeImageURL } = obj;
            newData.push({ id, webformatURL, largeImageURL });
            this.setState({
              photoData: [...prevState.photoData, ...newData],
            });
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  clickSearch = event => {
    event.preventDefault();
    this.setState({
      searchingValue: event.target.input.value,
    });
  };

  clickLoadMore = () => {
    this.setState(prev => ({
      page: (prev.page += 1),
    }));
  };

  render() {
    const { photoData } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.clickSearch} />
        <ImageGallery cards={photoData} />
        {/* <Loader /> */}
        {photoData.length !== 0 && (
          <Button loadMoreBtnClick={this.clickLoadMore} />
        )}

        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
