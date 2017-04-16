import React, { Component, PropTypes } from 'react'
import { getPost, deletePost } from '../actions/index'
import { connect } from 'react-redux'

class PostsSingle extends Component {
  constructor(props) {
    super(props)
    this.onDelete = this.onDelete.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.getPost(this.props.routeParams.id)
  }

  onDelete() {
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
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.content}</p>
        <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post : state.posts.single }
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsSingle)
