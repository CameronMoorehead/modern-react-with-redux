import { FETCH_INDEX_POSTS } from '../actions/index'

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case FETCH_INDEX_POSTS:
      return action.payload
  }
  return state
}
