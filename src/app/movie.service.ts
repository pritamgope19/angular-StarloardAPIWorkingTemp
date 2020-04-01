import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: String = "http://starlord.hackerearth.com/movies";
  constructor(private _http: HttpClient) { 
  }

  getMovies(): Observable<Movie[]>{
    return this._http.get<Movie[]>(this.apiUrl.toString());
  }
}
