import {Pipe, PipeTransform} from '@angular/core';
import {Note} from '../models/note.model';

@Pipe({
  name: 'noteSearch'
})
export class NoteSearchPipe implements PipeTransform {

  transform(notes: Note[], searchText: string): Note[] {
    if (!notes) {
      return null;
    }
    if (!searchText) {
      return notes;
    }
    searchText = searchText.toLowerCase();
    return notes.filter((note: Note) => {
      if (note.title.toLowerCase().includes(searchText) || note.notes.toLowerCase().includes(searchText)) {
        return note;
      }
    });
  }
}
