import * as fromNotes from '../notes/store/notes.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  notes: fromNotes.State;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: fromNotes.notesReducer
};
