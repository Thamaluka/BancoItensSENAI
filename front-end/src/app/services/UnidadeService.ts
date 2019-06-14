import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UnidadeService {
    endpoint = 'http://localhost:3000/unidadesCurriculares';
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

    getAllUnidadesCurriculares(): Observable<any> {
        return this.http.get(this.endpoint, this.httpOptions).pipe(
            map(this.extractData));
    }


    getUnidadeCurricularById(id): Observable<any> {
        const body = new HttpParams({
            fromObject: {
                id: id
            }
        });
        return this.http.get(this.endpoint, { params: body }).pipe(
            map(this.extractData));
    }

}
