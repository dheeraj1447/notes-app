import {Note} from '../../models/note.model';
import * as NoteActions from './notes.actions';

export interface State {
  notes: Note[];
}

const initialState: State = {
  notes: []
};

export function notesReducer(state = initialState, action: NoteActions.NotesActions) {
  switch (action.type) {
    case (NoteActions.CREATE_NOTE):
      state.notes.forEach((n: Note) => n.enabled = false);
      state.notes.unshift(action.note);
      return {
        ...state
      };
    case (NoteActions.UPDATE_NOTE):
      const notes = state.notes.map((n: Note) => n.id === action.note.id ? Object.assign(action.note, n) : n);
      state.notes = notes;
      return {
        ...state
      };
    case (NoteActions.DELETE_NOTE):
      const noteIndex = state.notes.findIndex((n: Note) => n.id === action.noteId);
      state.notes.splice(noteIndex, 1);
      return {
        ...state
      };
    case (NoteActions.DEFAULT_ENABLED):
      state.notes.forEach((n: Note) => n.enabled = false);
      return {
        ...state
      };
    case (NoteActions.CLEAR_NOTES):
      state.notes = [];
      return {
        ...state
      };
    default:
      return state;
  }
}
