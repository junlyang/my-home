import { all, call } from 'redux-saga/effects'
import settings from './settings'

export default function* rootSaga() {
    yield all([
        call(settings),
    ])
}
