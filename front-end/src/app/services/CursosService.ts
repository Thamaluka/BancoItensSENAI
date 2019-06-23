import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  endpoint = 'http://localhost:3000/cursos';
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

  getAllCursos(): Observable<any> {
    return this.http.get(this.endpoint, this.httpOptions).pipe(
      map(this.extractData));
  }

  getCursoById(id): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        id: id
      }
    });
    return this.http.get(this.endpoint, { params: params }).pipe(
      map(this.extractData));
  }

  getUnidadesCurricularesByCurso(id): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}/unidadeCurricular`, this.httpOptions).pipe(
      map(this.extractData));
  }

  getCursosByUser(id): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}/user`, this.httpOptions).pipe(
      map(this.extractData));
  }

  getUcByUser(id): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}/unidadeCurricular`, this.httpOptions).pipe(
      map(this.extractData));
  }

  



}
