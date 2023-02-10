import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}
    
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5r4ssAQ2xQbqIohhyDSz8Iavz9oZGifE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }
    login (email: string, password: string) {
       return  this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5r4ssAQ2xQbqIohhyDSz8Iavz9oZGifE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknow error occured!';
        if(!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
        }
        return throwError(errorMessage)
    }
}