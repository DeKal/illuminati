import { OPEN_DRAWER, CLOSE_DRAWER } from 'core/const/actionType'

const drawer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        open: true
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}

export default drawer
