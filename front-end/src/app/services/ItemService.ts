import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  endpoint = 'http://localhost:3000/item';
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


  newItem(body): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(body), this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  getNiveis(): Observable<any> {
    return this.http.get(this.endpoint + "/dificuldade", this.httpOptions).pipe(
      map(this.extractData));
  }

  getCabecalho(): Observable<any> {
    return this.http.get(this.endpoint + "/cabecalho", this.httpOptions).pipe(
      map(this.extractData));
  }

}
