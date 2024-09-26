import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {

  constructor(private movieService: MovieService, private router: Router) { }

  submitHandler(form: NgForm) {
    if (form.invalid) { // Проверка дали формата е валидна
      return;
    }
    const { title, director, year, genre, imageUrl, plot } = form.value; // Извличане на стойностите от формата
    this.movieService.createMovie(title, director, year, genre, imageUrl, plot).subscribe(() => { // Извикване на метода за създаване на филм чрез MovieService
      this.router.navigate(["dashboard"]); // Пренасочване към страницата за таблото след успешно създаване на филма
    });
  }
}
