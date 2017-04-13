import axios from 'axios'

const API_KEY = "123dgfsnklnfk"

export const FETCH_INDEX_POSTS = "FETCH_INDEX_POSTS"

export function fetchIndexPosts() {
  const INDEX_POSTS = "http://reduxblog.herokuapp.com/api/posts"
  const postData = axios.get(`${INDEX_POSTS}/?key=${API_KEY}`)
  return {
    type: FETCH_INDEX_POSTS,
    payload: postData
  }
}
