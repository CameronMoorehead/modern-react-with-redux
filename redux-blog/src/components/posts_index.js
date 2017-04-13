import React from 'react'

const PostsIndex = (props) => {
  if (!props.indexPosts) {
    return (
      <div>loading...</div>
    )
  }
  return  (
    <div>
      List of blog posts:
      <hr />
      {props.indexPosts.map(post => {
        return <div key={post.id}>{post.content}<hr /></div>
      })}
    </div>
  )
}

export default PostsIndex
