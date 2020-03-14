import { createAction } from 'redux-actions'
import {
  CHANGE_PAGE,
  CHANGE_ROW_PER_PAGE,
  SET_ORDER,
  SET_ORDER_COLUMN,
  SET_SELECTED_POST,
  SELECT_ALL_POSTS,
  CLEAR_SELECTED
} from 'core/const/actionType'

export const changePage = createAction(CHANGE_PAGE)

export const changeRowsPerPage = createAction(CHANGE_ROW_PER_PAGE)

export const setOrder = createAction(SET_ORDER)

export const setOrderColumn = createAction(SET_ORDER_COLUMN)

export const setSelectedPost = createAction(SET_SELECTED_POST)

export const selectAllPosts = createAction(SELECT_ALL_POSTS)

export const clearSelected = createAction(CLEAR_SELECTED)
