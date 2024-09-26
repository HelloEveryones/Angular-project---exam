import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] | undefined = undefined; // Списък с филми
  noMovies = true; // Променлива, която показва дали има филми
  isLoading = true; // Променлива, която показва дали страницата се зарежда

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // Извикване на метода getMovies от MovieService при инициализация на компонента
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies; // Задаване на получените филми към променливата movies
      this.isLoading = false; // Изключване на зареждането
      if (this.movies.length !== 0) { // Проверка дали има филми в списъка
        this.noMovies = false; // Ако има, noMovies става false
      }
    });
  }
}
