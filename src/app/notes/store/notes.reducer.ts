import {Note} from '../../models/note.model';
import * as NoteActions from './notes.actions';

export interface State {
  notes: Note[];
}

const initialState: State = {
  notes: [new Note(Math.floor(Math.random() * 1000), 'Title', 'notes', new Date(2019, 11, 1, 17, 11, 20).toString(), false)]
};

export function notesReducer(state = initialState, action: NoteActions.NotesActions) {
  switch (action.type) {
    case (NoteActions.CREATE_NOTE):
      state.notes.push(action.note);
      return state;
    case (NoteActions.UPDATE_NOTE):
      const notes: Note[] = state.notes.map((n: Note) => n.id === action.note.id ? Object.assign(action.note, n) : n);
      state.notes = notes;
      return state;
    default:
      return state;
  }
}
