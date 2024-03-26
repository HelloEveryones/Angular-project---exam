import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] | undefined = undefined;
  noMovies = true;
  isLoading = true;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieWithLimit(5).subscribe((movies) => {
      this.movies = movies;
      console.log(movies);

      this.isLoading = false;

      if (this.movies) {
        this.noMovies = false;
      }
    });
  }
}
