import React from 'react'

const PostsSingle = (props) => {
  return (
    <div className="single-post">
      <span className="single-post-title">{props.post.title}</span>
      <span className="single-post-category">{props.post.categories}</span>
    </div>
  )
}

export default PostsSingle
