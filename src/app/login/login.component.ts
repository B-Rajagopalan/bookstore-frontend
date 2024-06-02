import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    template: `
    <div>
        <form #loginForm="ngForm" (ngSubmit)="loginUser(loginForm.value)">
            <h1>Login</h1>
            <h4>Email</h4>
            <input (ngModel)="email" name="email" type="email"/>
            <h4>Password</h4>
            <input (ngModel)="password" name="password" [type]="toggleType?'password':'text'"/> &nbsp;
            <button type="button" (click)="toggleType = !toggleType">{{(toggleType? "Show":"Hide") +" Password"}}</button> <br><br>
            <button style="background-color: aqua;">Login</button>
        </form>
    </div>
    `
})

export class LoginComponent {
    toggleType = true;
    email!: string;
    password!: string;

    constructor(private auth: AuthService) { }

    loginUser(loginData: any) {
        this.auth.loginUser(loginData);
    }
}