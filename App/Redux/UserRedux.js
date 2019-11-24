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
  email: null,
  username: null,
  token: null,
  user: null
})

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: (state, action) => {
    const { username } = action.payload
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
  [Types.REGISTER_REQUEST]: (state, action) => {
    const { email, username } = action.payload
    return state.merge({ fetching: true, email, username })
  },
  [Types.REGISTER_SUCCESS]: (state, action) => {
    const { token, user } = action.payload
    return state.merge({ fetching: false, error: null, token, user })
  },
  [Types.REGISTER_FAILURE]: (state) => {
    return state.merge({ fetching: false, error: true, token: null, user: null })
  }
})
