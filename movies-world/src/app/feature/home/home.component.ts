import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie'; // Импорт на модела за филм
import { MovieService } from '../services/movie.service'; // Импорт на сервиза за филми

@Component({
  selector: 'app-home', // Селекторът на компонента
  templateUrl: './home.component.html', // Шаблона за компонента
  styleUrls: ['./home.component.css'] // Стиловете за компонента
})
export class HomeComponent implements OnInit { // Класът на компонента, който имплементира OnInit интерфейса

  movies: Movie[] | undefined = undefined; // Списък с филмите, инициализиран като undefined
  noMovies = true; // Флаг за показване на съобщение, че няма налични филми
  isLoading = true; // Флаг за показване на зареждане на филмите

  constructor(private movieService: MovieService) { } // Конструкторът на класа, инжектиран с MovieService

  ngOnInit(): void { // Метод, който се изпълнява при инициализация на компонента
    this.movieService.getMovieWithLimit(5).subscribe((movies) => { // Извикване на метода за получаване на филми с лимит
      this.movies = movies; // Задаване на получените филми на променливата movies
      this.isLoading = false; // Задаване на флага за зареждане като false, тъй като зареждането приключи
      if (this.movies.length !== 0) { // Проверка дали има филми в списъка
        this.noMovies = false; // Ако има филми, задаваме флага за липса на филми като false
      }
    });
  }
}
