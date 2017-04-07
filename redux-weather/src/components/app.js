import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import CityNameDisplay from '../containers/city_name_display'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CityNameDisplay />
      </div>
    );
  }
}
