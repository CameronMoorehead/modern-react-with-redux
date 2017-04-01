import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/index'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
    
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    event.preventDefault()
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
    // We need to go fetch weather data
    console.log(fetchWeather(this.state.term))
  }

  render() {
    return (
      <form className='input-group' onSubmit={(event) => this.onFormSubmit(event)} >
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
