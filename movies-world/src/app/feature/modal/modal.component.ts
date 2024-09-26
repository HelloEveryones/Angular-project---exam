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
    private modalService: ModalService, // Сервис за управление на модални прозорци
    private movieService: MovieService, // Сервис за управление на филми
    private router: Router, // Обект за навигация
    private route: ActivatedRoute // Обект за получаване на текущия маршрут
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch(); // Подписване на поток от сервиса за модални прозорци
  }

  close() {
    this.modalService.close(); // Метод за затваряне на модалния прозорец
  }

  delete() {
    this.movieService.deleteMovie(this.movieId).subscribe(() => { // Изтриване на филма чрез съответния метод от сервиса за управление на филми
      this.modalService.close(); // Затваряне на модалния прозорец
      this.router.navigate(["dashboard"]); // Навигация към дъшборда след изтриване на филма
    })
  }
}
