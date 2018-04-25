import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <input
        value={this.state.term} //Turns into a controlled component, value only changes when state changes
        onChange={event => this.setState({ term: event.target.value })}
      />
    );
  }
}

export default SearchBar;
