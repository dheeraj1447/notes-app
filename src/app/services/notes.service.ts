import { Injectable } from '@angular/core';
import {Note} from '../models/note.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _featureNote: Subject<Note> = new Subject<Note>();
  private _notesChanged: Subject<Note[]> = new Subject<Note[]>();
  private _notes: Note[] = [
    new Note(1, 'First note', 'I\'m curious, jfhfghfhfhfhg gh fh ghffh fhgfhf fhgfhg gf gfkh gkgfkh gf',
      new Date(2019, 5, 21).toString(), false),
    new Note(2, 'Second note', 'I\'m curious', new Date(2019, 10, 21).toString(), false),
    new Note(3, 'Third note', 'I\'m curious', new Date(2017, 5, 18).toString(), false),
    new Note(4, 'Fourth note', 'I\'m curious', new Date(2015, 3, 5).toString(), false),
    new Note(5, 'Fifth note', 'I\'m curious', new Date(2011, 3, 2).toString(), false),
    new Note(6, 'Sixth note', 'I\'m curious', new Date(2010, 2, 5).toString(), false)
  ];

  constructor() { }

  get notes(): Note[] {
    return this._notes;
  }

  onFeatureNote(note: Note) {
    this.notes.forEach((not: Note) => not.enabled = false);
    note.enabled = true;
    this._featureNote.next(note);
  }

  get featureNote(): Observable<Note> {
    return this._featureNote.asObservable();
  }

  get notesChanged(): Observable<Note[]> {
    return this._notesChanged.asObservable();
  }

  public update(noteId: number, title: string, notes: string) {
    const note: Note = this._notes.find((not: Note) => not.id === noteId);
    note.title = title;
    note.notes = notes;
  }
}
