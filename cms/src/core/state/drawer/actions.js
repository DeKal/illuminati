import { createAction } from 'redux-actions'
import { OPEN_DRAWER, CLOSE_DRAWER } from 'core/const/actionType'

export const openDrawer = createAction(OPEN_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
