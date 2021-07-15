import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import { GET_COLOR, GET_COLOR_FAILURE, GET_COLOR_SUCCESS } from '../reducers/settings'
import axios from 'axios'

function getAPI(imageIndex) {
    return axios.get(process.env.API_URL + '/settings/detail/' + imageIndex)
}
function postAPI (data) {
    console.log('typeof : ', typeof data.settings)
    console.log(data.settings)
    const formData = new FormData();
    formData.append('sourceFile',data.settings)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return axios.post(process.env.API_URL + '/api/file/upload/'+data.type, formData, config)
}

function* getColor(color) {
    try {
        //call 동기. 로긴요청 결과 기다림.
        yield call(getAPI, color)
        yield put({
            type: GET_COLOR_SUCCESS,
        })
    } catch (e) {
        console.error(e)
        yield put({
            type: GET_COLOR_FAILURE,
        })
    }
}

function* watchGetColor() {
    yield takeLatest(GET_COLOR, getColor)
}

export default function* settingsSaga() {
    //fork 비동기,
    yield all([
        fork(watchGetColor),
    ])
}
