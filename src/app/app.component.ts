import { Component, Input } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <button class="homeButton" routerLink="/home" type="button">HOME</button>
  <div class='userauth'>
    <button class="authButton" *ngIf="!auth.tokenCheck()" routerLink="/login" type="button">LOGIN</button>
    <button class="authButton" *ngIf="auth.tokenCheck()" (click)="auth.deleteToken()" type="button">LOGOUT</button>
    <button class="authButton" routerLink="/register" type="button">REGISTER</button>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'bookstore-frontend';

  constructor(protected auth: AuthService) {}

  ngOnInit() {
    
  }

  checkAuth() {
      this.auth.checkJWTAuth();
  }
}
