import React, { Component } from 'react'
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div>
        List of Blog posts
        <Link to="/posts/new">
          <button className="btn btn-secondary">
            New Post
          </button>
        </Link>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStatetoProps, { fetchPosts })(PostsIndex)
