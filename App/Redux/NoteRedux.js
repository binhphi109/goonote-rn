import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import createPromiseActions from '../Lib/Redux/createPromiseActions'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createPromiseActions({
  getAllNotes: [],
  getOneNote: ['noteId'],
  createNote: ['note']
})

export const NoteTypes = Types
export default Creators

/* ------------- Selectors ------------- */

export const NoteSelectors = {
  selectNotes: state => state.notes.list
}

/* ------------- Reducers ------------- */

export const reducer = {
  notes: createReducer(Immutable({
    fetching: null,
    error: null,
    list: null
  }), {
    [Types.GET_ALL_NOTES_REQUEST]: (state, action) => {
      return state.merge({ fetching: true })
    },
    [Types.GET_ALL_NOTES_SUCCESS]: (state, action) => {
      const list = action.payload
      return state.merge({ fetching: false, error: null, list })
    },
    [Types.GET_ALL_NOTES_FAILURE]: (state) => {
      return state.merge({ fetching: false, error: true })
    },
  }),
  note: createReducer(Immutable({
    fetching: null,
    error: null,
    item: null
  }), {
    [Types.GET_ONE_NOTE_REQUEST]: (state, action) => {
      return state.merge({ fetching: true })
    },
    [Types.GET_ONE_NOTE_SUCCESS]: (state, action) => {
      const item = action.payload
      return state.merge({ fetching: false, error: null, item })
    },
    [Types.GET_ONE_NOTE_FAILURE]: (state) => {
      return state.merge({ fetching: false, error: true })
    },
  })
}