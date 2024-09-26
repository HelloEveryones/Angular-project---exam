import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from 'src/app/Types/User';
import { Movie } from 'src/app/Types/Movie';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: User | undefined; // Информация за потребителя
  movies: Movie[] | undefined; // Списък с филмите, добавени от потребителя
  isLoading: boolean = true; // Флаг за зареждане на данните
  hasMovies: boolean = false; // Флаг, който показва дали потребителят има добавени филми

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Извличане на профила на потребителя при инициализация на компонента
    this.userService.getProfile().subscribe((user) => {
      this.user = user; // Записване на информацията за потребителя
      this.movies = user.movies; // Записване на списъка с филмите, добавени от потребителя

      // Проверка дали потребителят има добавени филми
      if (this.movies.length !== 0) {
        this.hasMovies = true; // Актуализиране на флага за наличие на филми
      }

      this.isLoading = false; // Край на зареждането на данните
    });
  }

  // Метод за редактиране на профила на потребителя
  submitHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { imageUrl } = form.value;
    
    // Извикване на услугата за актуализация на профила на потребителя
    this.userService.updateProfile(imageUrl).subscribe((user) => {
      this.user = user; // Актуализиране на информацията за потребителя
      form.resetForm(); // Изчистване на формата за редактиране
    });
  }
}
