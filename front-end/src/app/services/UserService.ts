import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    endpoint = 'http://localhost:3000/user';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })

    };
    constructor(private http: HttpClient) { }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    newUser(user): Observable<any> {
        
        return this.http.post(this.endpoint, JSON.stringify(user), this.httpOptions).pipe(
            map(this.extractData)
        );
    }
}