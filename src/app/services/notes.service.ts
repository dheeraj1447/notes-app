import { Injectable } from '@angular/core';
import {Note} from '../models/note.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _featureNote: Subject<Note> = new Subject<Note>();

  constructor() {
  }

  get featureNote(): Observable<Note> {
    return this._featureNote.asObservable();
  }

  onFeatureNote(note: Note) {
    this._featureNote.next(note);
  }

  deleteFeatureNote() {
    this._featureNote.next(null);
  }
}
