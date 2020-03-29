import { call, put, takeLatest, select } from 'redux-saga/effects'
import { fetchPostFromSlug, savingPost } from 'post/api/fetch'
import { FETCH_POST, SAVE_EDITED_CONTENT } from 'core/state/actionType'
import { toSuccess, toError, toRequest } from 'core/state/utils'
import { getSavingContent } from 'post/state/selectors'

function* fetchPost({ payload: slug }) {
  try {
    const post = yield call(fetchPostFromSlug, slug)
    yield put({ type: toSuccess(FETCH_POST), payload: post })
  } catch (e) {
    yield put({ type: toError(FETCH_POST), message: e.message })
  }
}

function* savePost() {
  const state = yield select()
  try {
    yield call(savingPost, getSavingContent(state))
    yield put({ type: toSuccess(SAVE_EDITED_CONTENT), payload: '' })
  } catch (e) {
    yield put({ type: toError(SAVE_EDITED_CONTENT), message: e.message })
  }
}

function* postSaga() {
  yield takeLatest(toRequest(FETCH_POST), fetchPost)
  yield takeLatest(toRequest(SAVE_EDITED_CONTENT), savePost)
}

export default postSaga
