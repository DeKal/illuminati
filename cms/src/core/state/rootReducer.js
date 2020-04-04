import { combineReducers } from 'redux'

import app from 'core/state/app/reducers'
import drawer from 'core/state/drawer/reducers'
import posts from 'posts/state/reducers'
import post from 'post/state/reducers'

export default combineReducers({
  app,
  drawer,
  posts,
  post
})
