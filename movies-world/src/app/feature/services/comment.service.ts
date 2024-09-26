import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../../Types/Comment'; // Импорт на модела за коментар
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  // Метод за извличане на коментарите за даден филм по неговия идентификатор
  getComments(movieId: string) {
    return this.http.get<Comment>(`${environment.apiUrl}/movies/${movieId}/comments`); // Използваме HttpClient за изпращане на GET заявка към сървъра
  }

  // Метод за създаване на нов коментар за даден филм
  createComment(text: string, movieId: string) {
    return this.http.post<Comment>(`${environment.apiUrl}/movies/${movieId}/comments`, { text }); // Използваме HttpClient за изпращане на POST заявка към сървъра с текста на коментара
  }
}
