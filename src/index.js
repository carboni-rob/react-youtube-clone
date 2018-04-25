import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyDjIq8qmATSqfbg_N2KnS6k5ELZ8K4w_6Q';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    //YTS accepts an object containig key and search term as first target
    //Second arg is a callback function that manages returned data
    YTSearch(
      {
        key: API_KEY,
        term: 'surfboards'
      },
      videos => {
        this.setState({ videos });
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
