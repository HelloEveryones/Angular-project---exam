import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from './shared/error-message/error.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router, private errorService: ErrorService) { }

  intercept(
    req: HttpRequest<any>, // Обектът за заявка към сървъра
    next: HttpHandler // Обект, който предава заявката към следващия интерцептор или към сървъра
  ): Observable<HttpEvent<any>> { // Обект, който представлява поток от събития за HTTP заявката

    // Добавяне на допълнителни настройки към заявката, например withCredentials
    req = req.clone({
      withCredentials: true,
    });

    // Изпращане на заявката към следващия интерцептор или към сървъра
    return next.handle(req).pipe(
      // Обработка на грешките от заявката
      catchError((err) => {
        // Проверка дали грешката е 404 и пренасочване към страницата за грешки
        if(err.status === 404){
          this.router.navigate(["/404"])
        } else {
          // В противен случай запис на грешката в ErrorService
          this.errorService.setError(err);
        }

        // Връщане на грешката, за да може да бъде обработена от други оператори
        return [err];
      })
    );
  }
}

// Предоставяне на HTTP интерцептора като мулти-провайдър за използване с HTTP клиента
export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
};
