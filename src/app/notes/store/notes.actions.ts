import {Action} from '@ngrx/store';
import {Note} from '../../models/note.model';

export const TRY_CREATE = 'TRY_CREATE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export class TryCreateNote implements Action {
  readonly type = TRY_CREATE;
}

export class CreateNote implements Action {
  readonly type = CREATE_NOTE;
  constructor(public note: Note) {}
}

export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE;
  constructor(public note: Note) {}
}

export class DeleteNote implements Action {
  readonly type = DELETE_NOTE;
  constructor(public noteId: number) {}
}

export type NotesActions = TryCreateNote | CreateNote | UpdateNote | DeleteNote;
