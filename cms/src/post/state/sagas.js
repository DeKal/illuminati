import { call, put, takeLatest, select } from 'redux-saga/effects'
import { fetchPostFromSlug, savingPost, createPost } from 'post/api/fetch'
import {
  FETCH_POST,
  SAVE_EDITED_CONTENT,
  CREATE_NEW_POST
} from 'core/state/actionType'
import { toSuccess, toError, toRequest } from 'core/state/utils'
import { getSavingContent } from 'post/state/selectors'

function* fetchPost({ payload: slug }) {
  try {
    const post = yield call(fetchPostFromSlug, slug)
    yield put({ type: toSuccess(FETCH_POST), payload: post })
  } catch (e) {
    yield put({ type: toError(FETCH_POST), error: e })
  }
}

function* savePost() {
  const state = yield select()
  try {
    yield call(savingPost, getSavingContent(state))
    yield put({ type: toSuccess(SAVE_EDITED_CONTENT), payload: '' })
  } catch (e) {
    yield put({ type: toError(SAVE_EDITED_CONTENT), error: e })
  }
}

function* createPostAction() {
  const state = yield select()
  try {
    yield call(createPost, getSavingContent(state))
    yield put({ type: toSuccess(CREATE_NEW_POST), payload: '' })
  } catch (e) {
    yield put({ type: toError(CREATE_NEW_POST), error: e })
  }
}

function* postSaga() {
  yield takeLatest(toRequest(FETCH_POST), fetchPost)
  yield takeLatest(toRequest(SAVE_EDITED_CONTENT), savePost)
  yield takeLatest(toRequest(CREATE_NEW_POST), createPostAction)
}

export default postSaga
