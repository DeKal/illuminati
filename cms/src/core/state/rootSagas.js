import { spawn } from 'redux-saga/effects'
import postsSagas from 'posts/state/sagas'

export default function* rootSaga() {
  yield spawn(postsSagas)
}
