import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  movieId = this.route.snapshot.params["id"];

  constructor(private movieService: MovieService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.movieService.getMovie(`/${this.movieId}`).subscribe(movie=>{
      this.movie = movie;

    })
  }

  deleteHandler():void{

  }
}

