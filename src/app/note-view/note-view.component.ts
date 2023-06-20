import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NOTE } from '../models/note-list';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {

  notes:Note[]=NOTE

  constructor() { }

  ngOnInit(): void {
  }

  onSearchTextChanged(noteTitle: string) {
    if(noteTitle === '' || !noteTitle)
      this.notes = NOTE;
    else
    {
      this.notes = NOTE;
      this.notes = this.notes.filter(note => note.title?.startsWith(noteTitle));
    }
  }

  onNoteAdded($event:any) {
    this.notes.push($event);
    alert(`Note Added`);
    }

}
