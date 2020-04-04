import { ERROR } from 'core/state/actionType'

const app = (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default app
