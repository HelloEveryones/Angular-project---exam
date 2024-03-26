import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';  
import { Movie } from 'src/app/Types/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}


  getMovie(id: string) {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${id}`);
  }

  getMovies() {
    const { apiUrl } = environment;
    return this.http.get<Movie[]>(`${apiUrl}/movies`);
  }

  createMovie(title: string, director: string, year: number, genre: string, imageUrl: string, plot: string) {
    const { apiUrl } = environment;
    return this.http.post<Movie>(`${apiUrl}/movies`, { title, director, year, genre, imageUrl, plot });
  }

  editMovie(title: string, director: string, year: number, genre: string, imageUrl: string, plot: string, movieId:string) {
    const { apiUrl } = environment;
    return this.http.post<Movie>(`${apiUrl}/${movieId}/edit`, { title, director, year, genre, imageUrl, plot });
  }


  getMovieWithLimit(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Movie[]>(`${apiUrl}/posts${limitFilter}`);
  }



  createComment(text: string, userId: string, movieId: string) {
    const { apiUrl } = environment;
    return this.http.post<Movie>(`${apiUrl}/${movieId}/comments`, { text, userId, movieId });
  }
}