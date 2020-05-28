import { Component, ViewEncapsulation } from '@angular/core';
import { querySelector, querySelectorAll } from 'kagekiri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'Kagekirie2e';
}
