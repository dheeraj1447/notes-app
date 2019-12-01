import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as NotesActions from './notes/store/notes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('notesList') notesList: ElementRef;
  @ViewChild('noteDetail') noteDetail: ElementRef;
  sidebar: Boolean = true;
  searchText: string;

  constructor(private store: Store<fromApp.AppState>) {

  }


  ngOnInit(): void {
    this.store.dispatch(new NotesActions.DefaulEnabled());
  }

  onSideBarToggle() {
    this.sidebar = !this.sidebar;
    if (this.sidebar) {
      this.notesList.nativeElement.style.width = '40%';
    } else {
      this.notesList.nativeElement.style.width = '0';
    }
  }

  onSearch($event: string) {
    this.searchText = $event;
  }

  onClearNotes() {
    this.store.dispatch(new NotesActions.ClearNotes());
  }
}
