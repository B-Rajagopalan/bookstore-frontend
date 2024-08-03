import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}

    loginUser(loginData: JSON) {
        this.http.post<any>('/api/auth/login', loginData)
            .subscribe((data) => {
                localStorage.setItem('token', data); 
            });
    }

    registerUser(registerData: JSON) {
        this.http.post<any>('/api/auth/register', registerData)
            .subscribe((data) => {
                console.log(data);
            });
    }

    tokenCheck() {
        return !!localStorage.getItem("token");
    }

    deleteToken() {
        alert("You are about to logout");
        localStorage.removeItem("token");
    }
 
    checkJWTAuth() {
        this.http.get('/api/helloworld', {responseType: 'text',
            headers: new HttpHeaders({'Authorization' : "token "+localStorage.getItem('token')})
        })
            .subscribe((data) => {
                console.log(data);
            });
    }
}