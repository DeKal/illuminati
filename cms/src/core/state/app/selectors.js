export const getAppError = state => state.app.error

export const getIsAppLoading = state => state.app.loading

const getToast = state => state.app.toast

export const getIsShowToast = state => getToast(state).isDisplayToast

export const getIsSuccessToast = state => getToast(state).success

export const getToastMessage = state => getToast(state).toastMsg
