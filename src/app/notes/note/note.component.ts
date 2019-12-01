import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Note} from '../../models/note.model';
import {interval, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  timeFromNow: Observable<String>;

  constructor() { }

  ngOnInit() {
    this.getHumanizedDate(this.note.updatedOn);
  }

  getHumanizedDate(updatedOn: string) {
    this.timeFromNow = interval(1000).pipe(map(() => moment(updatedOn).fromNow()), distinctUntilChanged());
  }
}
