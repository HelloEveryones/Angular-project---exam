import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from 'src/app/Types/Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  comments: any; // Променлива за съхранение на коментарите за филма
  movie: Movie | undefined; // Променлива за съхранение на информацията за филма
  movieId = this.route.snapshot.params["id"]; // Идентификатор на филма
  isLoggedIn: boolean = false; // Показва дали потребителят е влезнал в системата
  isOwner: boolean = false; // Показва дали потребителят е собственик на филма

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Зареждане на информация за филма при инициализация на компонента
    this.movieService.getMovie(this.movieId).subscribe(movie => {
      this.movie = movie; // Запазване на информацията за филма
      this.comments = movie.comments; // Запазване на коментарите за филма
      // Проверка дали потребителят е влезнал в системата и дали е собственик на филма
      this.userService.user$.subscribe((user)=>{
        if(user){
          this.isLoggedIn = true; // Потребителят е влезнал в системата
          if(this.movie?.ownerId === user?._id){
            this.isOwner = true; // Потребителят е собственик на филма
          }
        }
      })
    })

  }

  // Метод за обновяване на коментарите след добавяне на нов коментар
  getNewComment(comments: any){
      this.comments = comments;
  }

  // Метод за отваряне на модално прозорец за потвърждение на изтриване на филма
  deleteHandler(): void {
    this.modalService.open();
  }

  // Метод за пренасочване към страницата за редактиране на филма
  editHandler():void {
    // При пренасочването се предава и информация дали потребителят е собственик на филма
    this.router.navigate([`/movie-edit/${this.movieId}`], { state: { isOwner: this.isOwner } });
  }
}
