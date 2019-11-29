import { Component, OnInit } from '@angular/core';
import {Note} from '../../models/note.model';
import {NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note;

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.noteService.featureNote.subscribe((note: Note) => this.note = note);
  }

}
