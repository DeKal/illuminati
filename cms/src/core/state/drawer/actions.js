import { createAction } from 'redux-actions'
import { OPEN_DRAWER, CLOSE_DRAWER } from 'core/state/actionType'

export const openDrawer = createAction(OPEN_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
