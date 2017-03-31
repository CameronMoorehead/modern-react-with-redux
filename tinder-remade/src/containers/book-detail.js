import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    return (
      <div>
        {this.props.activeBook ? this.props.activeBook.title : 'Select A Book!'} 
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
