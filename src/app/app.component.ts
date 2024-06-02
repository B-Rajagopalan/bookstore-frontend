import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button routerLink="/login" type="button">Login Page</button>
  <button routerLink="/register" type="button">Register Page</button>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore-frontend';

  constructor() {}

  ngOnInit() {

  }
}
