import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Output() commentIsCreated = new EventEmitter<any>(); // Деклариране на изходен EventEmitter, който ще извести родителския компонент за създаден коментар

  movieId = this.route.snapshot.params["id"]; // Вземане на идентификатора на филма от маршрута

  constructor(
    private route: ActivatedRoute, // Сервиз за работа с текущия маршрут
    private commentService: CommentService // Сервиз за работа с коментарите
  ) {}

  submitHandler(form: NgForm) {
    if (form.invalid) {
      return; // Ако формата е невалидна, прекратяваме изпълнението на метода
    }

    const { comment } = form.value; // Извличане на текста на коментара от стойността на формата

    // Създаване на коментар чрез коментарния сервиз и известяване на родителския компонент за създадения коментар
    this.commentService.createComment(comment, this.movieId).pipe(
      mergeMap(() => {
        return this.commentService.getComments(this.movieId); // След като създадем коментара, вземаме отново всички коментари за филма
      })
    ).subscribe((comments) => {
      this.commentIsCreated.emit(comments); // Известяване на родителския компонент за създадените коментари
    });

    form.reset(); // Нулиране на формата след успешното създаване на коментар
  }
}
