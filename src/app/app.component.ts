import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('notesList') notesList: ElementRef;
  @ViewChild('noteDetail') noteDetail: ElementRef;
  sidebar: Boolean = true;

  onSideBarToggle() {
    this.sidebar = !this.sidebar;
    if (this.sidebar) {
      this.notesList.nativeElement.style.width = '40%';
    } else {
      this.notesList.nativeElement.style.width = '0';
    }
  }
}
