import { all, takeLatest } from 'redux-saga/effects'
import { path } from 'ramda'
import { UserTypes } from '../Redux/UserRedux'
import { callPromiseRequest } from '../Lib/Redux'

function * login (api, action) {
  const user = action.payload
  const request = (user) => api.post('users/signin', user)

  const response = yield callPromiseRequest(action, request, user)

  if (response.ok) {

  } else {

  }
}

function * register (api, action) {
  const user = action.payload
  const request = (user) => api.post('users/signup', user)

  const response = yield callPromiseRequest(action, request, user)

  if (response.ok) {

  } else {

  }
}

export default function * (api) {
  yield all([
    takeLatest(UserTypes.LOGIN, login, api),
    takeLatest(UserTypes.REGISTER, register, api)
  ])
}
