import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS"
export const NEW_POST = "NEW_POST"

const ROOT_URL = "http://reduxblog.herokuapp.com/api/"
const API_KEY = "?key=12dgfsnklnfk"

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function newPost(postData) {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, {
    title: postData.title,
    categories: postData.categories,
    content: postData.content
  })
  console.log(postData)
  console.log(postData.title)
  return {
    type: NEW_POST,
    payload: request
  }
}
