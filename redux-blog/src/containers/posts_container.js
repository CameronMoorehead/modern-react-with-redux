import React, { Component } from 'react'
import PostsIndex from '../components/posts_index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchIndexPosts } from '../actions/index'

class PostsContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    return fetchIndexPosts()
  }

  render() {
    return (
      <div>
        <PostsIndex />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    indexPosts: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIndexPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
