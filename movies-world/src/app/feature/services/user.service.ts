import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../../Types/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from "../../../environments/environment.development";
import { DEFAULT_USER_IMG_URL } from '../constans/defaultImageUrl';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined); // Създава нов BehaviorSubject за потребителя с начална стойност 'undefined'.
  public user$ = this.user$$.asObservable(); // Публичен Observable за ползване от други компоненти, който позволява наблюдение на потребителските данни.

  user: User | undefined; // Променлива за съхранение на текущия потребител.

  get isLoggedIn(): boolean { // Метод, който връща булева стойност, която показва дали има аутентициран потребител или не.
    return !!this.user;
  }

  subscription: Subscription; // Променлива за съхранение на абонамента за промените в потребителските данни.

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => { // Абониране за промените в потребителските данни и актуализация на локалната променлива 'user'.
      this.user = user;
    });
  }

  login(username: string, password: string) { // Метод за влизане на потребител в системата.
    return this.http
      .post<User>(`${environment.apiUrl}/login`, { username, password })
      .pipe(tap((user) => this.user$$.next(user))); // Извършване на HTTP заявка за влизане и актуализация на потребителските данни.
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    age: number,
  ) { // Метод за регистрация на нов потребител.
    return this.http
      .post<User>(`${environment.apiUrl}/register`, {
        username,
        email,
        password,
        rePassword,
        age,
        imageUrl: DEFAULT_USER_IMG_URL // Използване на стойността на стандартното URL за изображение на потребителя.
      })
  }

  logout() { // Метод за излизане на потребител от системата.
    return this.http
      .post<User>(`${environment.apiUrl}/logout`, {})
      .pipe(tap(() => this.user$$.next(undefined))); // Извършване на HTTP заявка за излизане и анулиране на потребителските данни.
  }

  getProfile() { // Метод за вземане на профила на текущия потребител.
    return this.http
      .get<User>(`${environment.apiUrl}/users/profile`)
      .pipe(tap((user) => this.user$$.next(user))); // Извършване на HTTP заявка за вземане на профила и актуализация на потребителските данни.
  }

  updateProfile(imageUrl: string) { // Метод за актуализация на профила на потребителя с нов URL на изображение.
    return this.http
      .put<User>(`${environment.apiUrl}/users/profile`, { imageUrl })
      .pipe(tap((user) => this.user$$.next(user))); // Извършване на HTTP заявка за актуализация на профила и актуализация на потребителските данни.
  }

  ngOnDestroy(): void { // Метод, който се извиква при унищожаване на услугата и освобождаване на ресурси.
    this.subscription.unsubscribe(); // Освобождаване на абонамента за промените в потребителските данни.
  }
}
