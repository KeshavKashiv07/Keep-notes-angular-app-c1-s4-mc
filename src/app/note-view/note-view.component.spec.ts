import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteViewComponent } from './note-view.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { NoteAddComponent } from '../note-add/note-add.component';
import { NoteComponent } from '../note/note.component';

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [NoteViewComponent,SearchComponent,NoteAddComponent,NoteComponent]
    });
    fixture = TestBed.createComponent(NoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
