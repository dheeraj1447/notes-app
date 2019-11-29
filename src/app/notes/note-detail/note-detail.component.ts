import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Note} from '../../models/note.model';
import {NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  @ViewChild('noteTitle') noteTitle: ElementRef;
  @ViewChild('noteBody') noteBody: ElementRef;
  note: Note;

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.noteService.featureNote.subscribe((note: Note) => this.note = note);
  }

  getReadableDate(updatedOn: string) {
    return new Date(updatedOn);
  }

  onNoteTitleChange(title: string) {
    this.noteService.update(this.note.id, title, this.note.notes);
  }

  onNoteNotesChange(notes: string) {
    this.noteService.update(this.note.id, this.note.title, notes);
  }
}
