import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../services/modal.service';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal', // Селектор на компонента
  templateUrl: './modal.component.html', // Път към HTML шаблона на компонента
  styleUrls: ['./modal.component.css'] // Пътища към CSS стиловете на компонента
})
export class ModalComponent {
  @Input() title: string | undefined; // Входящо свойство за заглавието на модалния прозорец
  display$: Observable<string> | undefined; // Пременлива, която показва дали модалният прозорец трябва да се покаже
  movieId = this.route.snapshot.params["id"]; // Идентификатор на филма

  constructor(
    private modalService: ModalService, 
    private movieService: MovieService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch(); 
  }

  close() {
    this.modalService.close(); 
  }

  delete() {
    this.movieService.deleteMovie(this.movieId).subscribe(() => { 
      this.modalService.close(); 
      this.router.navigate(["dashboard"]);
    })
  }
}
