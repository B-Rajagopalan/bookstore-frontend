import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-login></app-login>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore-frontend';

  constructor() {}

  ngOnInit() {

  }
}
