import {Component, OnInit} from '@angular/core';
import {Note} from '../../models/note.model';
import {NotesService} from '../../services/notes.service';
import * as NotesActions from '../store/notes.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note;

  constructor(private noteService: NotesService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.noteService.featureNote.subscribe((note: Note) => this.note = note);
  }

  getReadableDate(updatedOn: string) {
    return new Date(updatedOn);
  }

  onNoteChange() {
    this.note.updatedOn = new Date().toString();
    this.store.dispatch(new NotesActions.UpdateNote(this.note));
  }
}
