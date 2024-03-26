import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  movieId = this.route.snapshot.params["id"];

  isLoggedIn: boolean = false;
  isOwner: boolean = false;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.movieService.getMovie(`/${this.movieId}`).subscribe(movie=>{
      this.movie = movie;

      this.userService.user$.subscribe((user)=>{
        if(user){
          this.isLoggedIn = true;
          if(this.movie?.ownerId === user?._id){
            this.isOwner = true;
          }
        }
      })
    })

  }

  deleteHandler():void{
this.modalService.open()
  }
}

