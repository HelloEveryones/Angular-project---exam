import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] | undefined = undefined;
  noMovies = true;
  isLoading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    return this.http.get<Movie[]>(environment.apiUrl + "/movies").subscribe(movies => {
      this.movies = movies.sort((a: Movie, b: Movie) => a.created_at.localeCompare(b.created_at)).slice(5);
      this.isLoading = false;
      if (!this.movies) {
        this.noMovies = false;
      }
      console.log(this.movies)
    })
  }


}
