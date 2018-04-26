import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDjIq8qmATSqfbg_N2KnS6k5ELZ8K4w_6Q';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    //YTS accepts an object containig key and search term as first target
    //Second arg is a callback function that manages returned data
    YTSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({ videos, selectedVideo: videos[0] });
      }
    );
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
