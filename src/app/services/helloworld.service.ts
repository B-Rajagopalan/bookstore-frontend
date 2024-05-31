import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HelloWorldService {
    constructor(private http: HttpClient) { }

    getHelloWorld() {
        return this.http.get('/api/helloworld',{ responseType: 'text' });
    }
}