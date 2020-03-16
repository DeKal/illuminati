import {
  CHANGE_PAGE,
  CHANGE_ROW_PER_PAGE,
  SET_ORDER,
  SET_ORDER_COLUMN,
  SET_SELECTED_POST,
  SELECT_ALL_POSTS,
  CLEAR_SELECTED,
  FETCH_POSTS
} from 'core/state/actionType'
import { toSuccess, toError } from 'core/state/utils'

const posts = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case CHANGE_ROW_PER_PAGE:
      return {
        ...state,
        page: 0,
        rowsPerPage: action.payload
      }
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      }
    case SET_ORDER_COLUMN:
      return {
        ...state,
        orderColumn: action.payload
      }
    case SET_SELECTED_POST: {
      const slug = action.payload
      const { selectedPosts } = state
      const selectedIndex = state.selectedPosts.indexOf(slug)
      let newSelected = []

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selectedPosts, slug)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selectedPosts.slice(1))
      } else if (selectedIndex === selectedPosts.length - 1) {
        newSelected = newSelected.concat(selectedPosts.slice(0, -1))
      } else {
        newSelected = newSelected.concat(
          selectedPosts.slice(0, selectedIndex),
          selectedPosts.slice(selectedIndex + 1)
        )
      }
      return {
        ...state,
        selectedPosts: newSelected
      }
    }
    case SELECT_ALL_POSTS: {
      const { posts } = state
      const newSelecteds = posts.map(n => n.slug)
      return {
        ...state,
        selectedPosts: newSelecteds
      }
    }
    case CLEAR_SELECTED: {
      return {
        ...state,
        selectedPosts: []
      }
    }
    case toSuccess(FETCH_POSTS): {
      return {
        ...state,
        posts: action.payload
      }
    }
    case toError(FETCH_POSTS): {
      return {
        ...state,
        posts: []
      }
    }
    default:
      return state
  }
}

export default posts
