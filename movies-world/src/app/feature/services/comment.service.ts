import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/Types/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getComments(movieId: string) {
    return this.http.get<Comment>(`${environment.apiUrl}/movies/${movieId}/comments`);
  }

  createComment(text: string, movieId: string) {
    return this.http.post<Comment>(`${environment.apiUrl}/movies/${movieId}/comments`, { text });
  }
}

