import { createAction } from 'redux-actions'
import {
  FETCH_POST,
  EDIT_POST_TITLE,
  EDIT_POST_SLUG,
  EDIT_POST_BRIEF,
  EDIT_POST_AUTHOR,
  EDIT_POST_TIME,
  EDIT_POST_TAGS,
  EDIT_POST_CONTENT,
  SAVE_EDITED_CONTENT
} from 'core/state/actionType'
import { toRequest } from 'core/state/utils'

export const fetchPost = createAction(toRequest(FETCH_POST))
export const editPostTitle = createAction(EDIT_POST_TITLE)
export const editPostSlug = createAction(EDIT_POST_SLUG)
export const editPostBrief = createAction(EDIT_POST_BRIEF)
export const editPostAuthor = createAction(EDIT_POST_AUTHOR)
export const editPostTime = createAction(EDIT_POST_TIME)
export const editPostTags = createAction(EDIT_POST_TAGS)
export const editPostContent = createAction(EDIT_POST_CONTENT)
export const saveEditedContent = createAction(toRequest(SAVE_EDITED_CONTENT))
