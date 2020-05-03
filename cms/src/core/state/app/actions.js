import { createAction } from 'redux-actions'
import { ERROR, OPEN_TOAST, CLOSE_TOAST } from 'core/state/actionType'

export const assignError = createAction(ERROR)

export const closeToast = createAction(CLOSE_TOAST)
export const openToast = createAction(OPEN_TOAST)
