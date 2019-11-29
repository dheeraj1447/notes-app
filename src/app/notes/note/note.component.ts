import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Note} from '../../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

  getHumanizedDate(updatedOn: string): string {
    return moment(updatedOn).fromNow();
  }
}
