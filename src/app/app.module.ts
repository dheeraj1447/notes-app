import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteComponent } from './notes/note/note.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {reducers} from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {NotesEffects} from './notes/store/notes.effects';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['notes'], rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    NoteDetailComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([NotesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
