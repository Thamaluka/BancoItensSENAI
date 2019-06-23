import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatrizService {
  endpoint = 'http://localhost:3000/matriz';
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

  getAllMatriz(): Observable<any> {
    return this.http.get(`${this.endpoint}`, this.httpOptions).pipe(
      map(this.extractData));
  }
  

  



}
