import {Component, OnInit} from '@angular/core';
import * as NotesActions from '../notes/store/notes.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {Note} from '../models/note.model';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  featureNote: Note;

  constructor(private store: Store<fromApp.AppState>, private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.featureNote.subscribe((n: Note) => this.featureNote = n);
  }

  create() {
    this.store.dispatch(new NotesActions.TryCreateNote());
  }

  delete() {
    this.store.dispatch(new NotesActions.DeleteNote(this.featureNote.id));
    this.notesService.deleteFeatureNote();
  }
}
