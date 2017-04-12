import { combineReducers } from 'redux'
import IndexPostsReducer from './reducer_index-posts'

const rootReducer = combineReducers({
  indexPosts: IndexPostsReducer
});

export default rootReducer;
