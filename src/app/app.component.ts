import { Component, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './user/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <button routerLink="/home" type="button">Home Page</button>
  <div class='userauth'>
    <button *ngIf="!auth.tokenCheck()" routerLink="/login" type="button">Login Page</button>
    <button *ngIf="auth.tokenCheck()" (click)="auth.deleteToken()" type="button">Logout</button>
    <button routerLink="/register" type="button">Register Page</button>
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
