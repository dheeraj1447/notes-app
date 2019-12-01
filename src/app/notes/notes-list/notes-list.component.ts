import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from '../../services/notes.service';
import {Note} from '../../models/note.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[];
  @Input() searchText: string;

  constructor(private noteService: NotesService, private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('notes').subscribe((notes) => this.notes = notes.notes);
  }

  onSelectedNote(note: Note) {
    this.notes.forEach((n: Note) => n.enabled = false);
    note.enabled = true;
    this.noteService.onFeatureNote(note);
  }
}
