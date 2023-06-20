import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  noteTitle: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchNote() {
    this.searchTextChanged.emit(this.noteTitle);
  }
  
  // clearSearch() {
  //   this.noteTitle = "";
  //   this.searchTextChanged.emit(this.noteTitle);
  // }

}
