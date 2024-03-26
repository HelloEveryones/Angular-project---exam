import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from 'src/app/Types/Movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] | undefined = undefined;
  noMovies = true;
  isLoading = true;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies
      this.isLoading = false;
      if (this.movies) {
        this.noMovies = false;
      }
    });
  }
}