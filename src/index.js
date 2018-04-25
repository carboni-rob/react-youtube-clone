import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyDjIq8qmATSqfbg_N2KnS6k5ELZ8K4w_6Q';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
