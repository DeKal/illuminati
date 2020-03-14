import { combineReducers } from 'redux'

import drawer from 'core/state/drawer/reducers'
import posts from 'posts/state/reducers'

export default combineReducers({
  drawer,
  posts
})
