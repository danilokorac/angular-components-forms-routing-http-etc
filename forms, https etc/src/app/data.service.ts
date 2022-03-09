import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer RWcy1NFxC-mzYQjMNF0L'
      })
    };
    return this.http.get('https://the-one-api.dev/v2/movie', httpOptions)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error');
      }
    ));
  }
}
