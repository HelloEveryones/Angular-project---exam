import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';  
import { Movie } from 'src/app/Types/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { } 

  getMovies() { 
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
  }
}
