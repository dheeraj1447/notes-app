import {Component, OnInit} from '@angular/core';
import {NotesService} from '../../services/notes.service';
import {Note} from '../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NotesService) {
  }

  ngOnInit() {
    this.notes = this.noteService.notes;
    this.noteService.notesChanged.subscribe((notes: Note[]) => this.notes = notes);
  }

  onSelectedNote(note: Note) {
    this.noteService.onFeatureNote(note);
  }
}
