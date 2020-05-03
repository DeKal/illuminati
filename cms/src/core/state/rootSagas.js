import { spawn } from 'redux-saga/effects'
import postsSagas from 'posts/state/sagas'
import postSagas from 'post/state/sagas'

export default function* rootSaga() {
  yield spawn(postsSagas)
  yield spawn(postSagas)
}
