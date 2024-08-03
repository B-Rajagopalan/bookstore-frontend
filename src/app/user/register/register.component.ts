import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    template: `
    <div class='register'>
        <form #loginForm="ngForm" (ngSubmit)="registerUser(loginForm.value)">
            <h1>Register New User</h1>
            <h4>Name</h4>
            <input (ngModel)="name" name="name" type="text"/>
            <h4>Email</h4>
            <input (ngModel)="email" name="email" type="email"/>
            <h4>Password</h4>
            <input (ngModel)="password" name="password" [type]="toggleType?'password':'text'"/> &nbsp;
            <button type="button" (click)="toggleType = !toggleType">{{(toggleType? "Show":"Hide") +" Password"}}</button> <br><br>
            <button style="background-color: forestgreen;">Register</button>
        </form>
    </div>
    `,
    styles: [
        `.register {
            margin: 0 auto;
            width: 300px
        }`
    ]
})

export class RegisterComponent {
    name!: string
    email!: string
    password!: string
    toggleType = true

    constructor(private auth: AuthService) { }

    registerUser(registerData: any) {
        this.auth.registerUser(registerData);
    }
}