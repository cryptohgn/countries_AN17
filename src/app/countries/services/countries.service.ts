import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class countriesService {

  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital( term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${ term }`;
    return this.http.get<Country[]>( url )
    .pipe(

      catchError (error => of([]))

    );
  }

}
