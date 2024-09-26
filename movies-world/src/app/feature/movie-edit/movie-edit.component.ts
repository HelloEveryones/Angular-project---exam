import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  @ViewChild('form') form: NgForm | undefined; // Деклариране на ViewChild за формата

  movieId = this.activedRoute.snapshot.params["id"]; // Получаване на ID на филма от URL-а

  constructor(private movieService: MovieService, private activedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    // Инициализация при зареждане на компонента
    this.movieService.getMovie(this.movieId).subscribe((movie)=>{
      // Попълване на формата със стойностите на съществуващия филм
      const {title, director, year, plot, genre, imageUrl} = movie;
      this.form?.setValue({title, director, year, plot, genre, imageUrl});
    });
  }
  
  submitHandler(){
    // Обработчик за събмит на формата
    if (this.form?.invalid) {
      return; // Ако формата е невалидна, прекратява изпълнението на функцията
    }
    // Извличане на данните от формата
    const {title, director, year, genre, imageUrl, plot} = this.form?.value;
    // Изпращане на заявка за редактиране на филма
    this.movieService.editMovie(title, director, year, genre, imageUrl, plot, this.movieId).subscribe(()=>{
      // Редирект към страницата с детайли за редактирания филм
      this.router.navigate([`/movie-details/${this.movieId}`]);
    });
  }
}
