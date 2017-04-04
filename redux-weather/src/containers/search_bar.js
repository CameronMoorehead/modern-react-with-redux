import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    event.preventDefault()
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()

    // We need to go fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit} >
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

// This has exposed fetchWeather as a key to this.props.fetchWeather,
// and provided the returned value (the action) to 'dispatch'.
// This results in the action being distributed to all of our reducers.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
