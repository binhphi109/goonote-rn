import { all, takeLatest } from 'redux-saga/effects'
import { UserTypes } from '../Redux/UserRedux'
import { callPromiseRequest } from '../Lib/Redux'

function * login (api, action) {
  const user = action.payload
  const request = (user) => api.post('users/signin', user)

  yield callPromiseRequest(action, request, user)
}

function * register (api, action) {
  const user = action.payload
  const request = (user) => api.post('users/signup', user)

  yield callPromiseRequest(action, request, user)
}

export default function * (api) {
  yield all([
    takeLatest(UserTypes.LOGIN, login, api),
    takeLatest(UserTypes.REGISTER, register, api)
  ])
}
