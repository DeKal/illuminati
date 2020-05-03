import {
  ERROR,
  APP_TURN_ON_LOADING,
  APP_TURN_OFF_LOADING,
  OPEN_TOAST,
  CLOSE_TOAST
} from 'core/state/actionType'

const app = (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case APP_TURN_ON_LOADING:
      return {
        ...state,
        loading: true
      }
    case APP_TURN_OFF_LOADING:
      return {
        ...state,
        loading: false
      }
    case OPEN_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          isDisplayToast: true,
          success: action.payload.success,
          toastMsg: action.payload.msg
        }
      }
    case CLOSE_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          isDisplayToast: false
        }
      }
    default:
      return state
  }
}

export default app
