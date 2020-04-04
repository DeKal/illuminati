import {
  FETCH_POST,
  EDIT_POST_TITLE,
  EDIT_POST_SLUG,
  EDIT_POST_BRIEF,
  EDIT_POST_AUTHOR,
  EDIT_POST_TIME,
  EDIT_POST_TAGS,
  EDIT_POST_CONTENT,
  SAVE_EDITED_CONTENT,
  CREATE_NEW_POST,
  INIT_POST
} from 'core/state/actionType'
import { toSuccess, toError, toRequest } from 'core/state/utils'
import { arrayToAttributes } from 'core/utils/misc'

import format from 'date-fns/format'

const post = (state = {}, action) => {
  switch (action.type) {
    case toRequest(FETCH_POST): {
      return {
        ...state,
        loading: true
      }
    }
    case toSuccess(FETCH_POST): {
      return {
        ...state,
        loading: false,
        content: {
          ...action.payload,
          tag: arrayToAttributes(action.payload.tag)
        },
        editedContent: {
          ...action.payload,
          tag: arrayToAttributes(action.payload.tag)
        }
      }
    }
    case toError(FETCH_POST): {
      throw action.error
    }
    case EDIT_POST_TITLE: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          title: action.payload
        }
      }
    }
    case EDIT_POST_SLUG: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          slug: action.payload
        }
      }
    }
    case EDIT_POST_BRIEF: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          brief: action.payload
        }
      }
    }
    case EDIT_POST_AUTHOR: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          author: action.payload
        }
      }
    }
    case EDIT_POST_TIME: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          time: format(action.payload, 'dd/MM/yyyy')
        }
      }
    }
    case EDIT_POST_TAGS: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          tag: action.payload
        }
      }
    }
    case EDIT_POST_CONTENT: {
      return {
        ...state,
        editedContent: {
          ...state.editedContent,
          content: action.payload
        }
      }
    }
    case toSuccess(SAVE_EDITED_CONTENT): {
      return {
        ...state,
        content: {
          ...state.editedContent
        }
      }
    }
    case toError(SAVE_EDITED_CONTENT): {
      return state
    }
    case toSuccess(CREATE_NEW_POST): {
      return {
        ...state,
        content: {
          ...state.editedContent
        }
      }
    }
    case toError(CREATE_NEW_POST): {
      return state
    }
    case INIT_POST: {
      return {
        ...state,
        content: {
          id: '',
          slug: '',
          title: '',
          brief: '',
          time: Date.now(),
          tag: {},
          author: '',
          content: '',
          viewNum: 0,
          commentNum: 0,
          likeNum: 0
        },
        editedContent: {
          id: '',
          slug: '',
          title: '',
          brief: '',
          time: Date.now(),
          tag: {},
          author: '',
          content: '',
          viewNum: 0,
          commentNum: 0,
          likeNum: 0
        }
      }
    }
    default:
      return state
  }
}

export default post
