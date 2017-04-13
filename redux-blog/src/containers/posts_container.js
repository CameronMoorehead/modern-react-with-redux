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
    this.props.fetchIndexPosts()
  }

  render() {
    return (
      <div>
        <PostsIndex indexPosts={this.props.indexPosts}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    indexPosts: state.indexPosts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIndexPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
