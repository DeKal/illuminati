import { ADD_TODO } from 'core/const/actionType'

const application = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

export default application
