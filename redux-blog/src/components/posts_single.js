import React, { Component, PropTypes } from 'react'
import { getPost, deletePost } from '../actions/index'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class PostsSingle extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.getPost(this.props.routeParams.id)
  }

  onDeleteClick() {
     return this.props.deletePost(this.props.routeParams.id)
      .then(() => {
        this.context.router.push("/")
      })
  }

  render() {
    if (!this.props.post) {
      return <div>loading...</div>
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">
          Delete Post
        </button>
        <h3>{this.props.post.title}</h3>
        <h6><strong>Categories: {this.props.post.categories}</strong></h6>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post : state.posts.post }
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsSingle)
