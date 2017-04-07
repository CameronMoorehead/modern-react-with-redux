import React, { Component } from 'react'
import { connect } from 'react-redux'

class CityNameDisplay extends Component {
  render() {
    return (
        <div>test</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cityName: state
  }
}

export default connect(mapStateToProps, null)(CityNameDisplay)
