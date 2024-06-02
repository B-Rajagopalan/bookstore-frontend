import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) { }

    loginUser(loginData: JSON) {
        this.http.post<any>('/api/auth/login', loginData)
            .subscribe((data) => {
                console.log(data);
            });
    }

    registerUser(registerData: JSON) {
        this.http.post<any>('/api/auth/register', registerData)
            .subscribe((data) => {
                console.log(data);
            });
    }
}