import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}
    
    signup(email: string, password: string) {
        this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5r4ssAQ2xQbqIohhyDSz8Iavz9oZGifE', {
            email: email,
            passworkd: password,
            returnSecureToken: true
        });
    }
}