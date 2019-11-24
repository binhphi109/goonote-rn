import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import createPromiseActions from '../Lib/Redux/createPromiseActions'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createPromiseActions({
  login: ['username', 'password'],
  logout: null,
  register: ['email', 'username', 'password']
})

export const UserTypes = Types
export default Creators

/* ------------- Selectors ------------- */

export const UserSelectors = {
  selectUser: state => state.auth.user,
  selectToken: state => state.auth.token
}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  username: null,
  token: null,
  user: null
})

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: (state, { username }) => {
    return state.merge({ fetching: true, username })
  },
  [Types.LOGIN_SUCCESS]: (state, action) => {
    const { token, user } = action.payload
    return state.merge({ fetching: false, error: null, token, user })
  },
  [Types.LOGIN_FAILURE]: (state) => {
    return state.merge({ fetching: false, error: true, token: null, user: null })
  },
  [Types.LOGOUT]: (state, action) => {
    return INITIAL_STATE
  },
  [Types.REGISTER_REQUEST]: (state, { username }) => {
    return state.merge({ fetching: true, username, avatar: null })
  },
  [Types.REGISTER_SUCCESS]: (state, action) => {
    const { avatar } = action
    return state.merge({ fetching: false, error: null, avatar })
  },
  [Types.REGISTER_FAILURE]: (state) => {
    return state.merge({ fetching: false, error: true, avatar: null })
  }
})
