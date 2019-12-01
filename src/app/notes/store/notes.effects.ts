import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, from, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as NoteActions from '../store/notes.actions';
import {catchError, switchMap} from 'rxjs/operators';
import {Note} from '../../models/note.model';
import {NotesService} from '../../services/notes.service';

@Injectable()
export class NotesEffects {

  constructor(private actions$: Actions, private notesService: NotesService) {
  }

  @Effect()
  createNote: Observable<Action> = this.actions$.pipe(
    ofType(NoteActions.TRY_CREATE),
    switchMap((data: NoteActions.TryCreateNote) => {
        const note = new Note(Math.floor(Math.random() * 1000), 'New Title', 'New Notes', new Date().toString(), true);
        this.notesService.onFeatureNote(note);
        return from(
          [new NoteActions.CreateNote(note)]);
    }),
    catchError(() => EMPTY)
  );
}
