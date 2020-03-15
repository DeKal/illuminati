import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPostSummary } from 'posts/api/fetch'
import { FETCH_POSTS } from 'core/state/actionType'
import { toSuccess, toError, toRequest } from 'core/state/utils'

function* fetchPosts() {
  try {
    const posts = yield call(fetchPostSummary)
    yield put({ type: toSuccess(FETCH_POSTS), payload: posts })
  } catch (e) {
    yield put({ type: toError(FETCH_POSTS), message: e.message })
  }
}

function* postsSaga() {
  yield takeLatest(toRequest(FETCH_POSTS), fetchPosts)
}

export default postsSaga
