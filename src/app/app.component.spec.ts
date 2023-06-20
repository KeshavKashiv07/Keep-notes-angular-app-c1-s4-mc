import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NoteAddComponent } from './note-add/note-add.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { SearchComponent } from './search/search.component';
import { NoteViewComponent } from './note-view/note-view.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule , FormsModule],
    declarations: [AppComponent,NoteAddComponent,HeaderComponent,NoteComponent,SearchComponent,NoteViewComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Keep-Notes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Keep-Notes');
  });

  
});
