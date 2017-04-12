import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app';
import PostsContainer from './containers/posts_container'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsContainer} />
  </Route>
)
