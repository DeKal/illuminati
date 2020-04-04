import { createAction } from 'redux-actions'
import { ERROR } from 'core/state/actionType'

export const assignError = createAction(ERROR)
