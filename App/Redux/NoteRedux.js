import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import createPromiseActions from '../Lib/Redux/createPromiseActions'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createPromiseActions({
  getAllNotes: ['notename', 'password'],
  getOneNote: ['notename', 'password'],
  createNote: ['email', 'notename', 'password']
})

export const NoteTypes = Types
export default Creators

/* ------------- Selectors ------------- */

export const NoteSelectors = {
  selectAvatar: state => state.note.avatar
}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  avatar: null,
  fetching: null,
  error: null,
  notename: null
})

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_NOTES_REQUEST]: (state, { notename }) => {
    state.merge({ fetching: true, notename, avatar: null })
  },
  [Types.GET_ALL_NOTES_SUCCESS]: (state, action) => {
    const { avatar } = action
    return state.merge({ fetching: false, error: null, avatar })
  },
  [Types.GET_ALL_NOTES_FAILURE]: (state) => {
    state.merge({ fetching: false, error: true, avatar: null })
  },
  [Types.GET_ONE_NOTE_REQUEST]: (state, { notename }) => {
    state.merge({ fetching: true, notename, avatar: null })
  },
  [Types.GET_ONE_NOTE_SUCCESS]: (state, action) => {
    const { avatar } = action
    return state.merge({ fetching: false, error: null, avatar })
  },
  [Types.GET_ONE_NOTE_FAILURE]: (state) => {
    state.merge({ fetching: false, error: true, avatar: null })
  },
  [Types.CREATE_NOTE_REQUEST]: (state, { notename }) => {
    state.merge({ fetching: true, notename, avatar: null })
  },
  [Types.CREATE_NOTE_SUCCESS]: (state, action) => {
    const { avatar } = action
    return state.merge({ fetching: false, error: null, avatar })
  },
  [Types.CREATE_NOTE_FAILURE]: (state) => {
    state.merge({ fetching: false, error: true, avatar: null })
  },
})
