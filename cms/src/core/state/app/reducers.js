import { ADD_TODO } from 'core/const/actionType'

const defaultAction = {
  type: ADD_TODO,
  text: 'default'
}

const application = (state = {}, action = defaultAction) => {
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
