import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { querySelector, querySelectorAll } from 'kagekiri';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Kagekirie2e'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Kagekirie2e');
  });

  it("should get text of div with class second", async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const secondDiv = querySelector('.second');
    const divText = secondDiv.textContent;
    expect(divText).toEqual('second');
  });

});
