import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../../Types/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // Вземане на конкретен филм по ID
  getMovie(id: string) {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${id}`);
  }

  // Вземане на всички филми
  getMovies() {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
  }

  // Създаване на нов филм
  createMovie(title: string, director: string, year: number, genre: string, imageUrl: string, plot: string) {
    return this.http.post<Movie>(`${environment.apiUrl}/movies`, { title, director, year, genre, imageUrl, plot });
  }

  // Редактиране на съществуващ филм
  editMovie(title: string, director: string, year: number, genre: string, imageUrl: string, plot: string, movieId: string) {
    return this.http.post<Movie>(`${environment.apiUrl}/movies/${movieId}/edit`, { title, director, year, genre, imageUrl, plot });
  }

  // Изтриване на филм
  deleteMovie(movieId: string) {
    return this.http.post<Movie>(`${environment.apiUrl}/movies/${movieId}/delete`, {});
  }

  // Вземане на последните добавени филми с опционален лимит
  getMovieWithLimit(limit?: number) {
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies/latest${limitFilter}`);
  }
}
