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
  selectNotes: state => state.note.notes
}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  notes: null,
  noteId: null,
  note: null
})

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_NOTES_REQUEST]: (state, action) => {
    return state.merge({ fetching: true })
  },
  [Types.GET_ALL_NOTES_SUCCESS]: (state, action) => {
    const notes = action.payload
    return state.merge({ fetching: false, error: null, notes })
  },
  [Types.GET_ALL_NOTES_FAILURE]: (state) => {
    return state.merge({ fetching: false, error: true })
  },
  [Types.GET_ONE_NOTE_REQUEST]: (state, action) => {
    const { noteId } = action.payload
    return state.merge({ fetching: true, noteId })
  },
  [Types.GET_ONE_NOTE_SUCCESS]: (state, action) => {
    const note = action.payload
    return state.merge({ fetching: false, error: null, note })
  },
  [Types.GET_ONE_NOTE_FAILURE]: (state) => {
    return state.merge({ fetching: false, error: true })
  },
  [Types.CREATE_NOTE_REQUEST]: (state, action) => {
    const note = action.payload
    return state.merge({ fetching: true, note })
  },
  [Types.CREATE_NOTE_SUCCESS]: (state, action) => {
    const note = action.payload
    return state.merge({ fetching: false, error: null, note })
  },
  [Types.CREATE_NOTE_FAILURE]: (state) => {
    return state.merge({ fetching: false, error: true })
  }
})
