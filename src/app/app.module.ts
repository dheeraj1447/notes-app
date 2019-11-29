import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
