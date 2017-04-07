import React, { Component } from 'react'
import { fetchWeather, FETCH_WEATHER } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.state = {
      term: ''
    }
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
    console.log(fetchWeather(this.state.term))
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// Anything returned from this function will end up as props
// on the SearchBar container
function mapDispatchToProps(dispatch) {
  // Whenever fetchWeather is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
