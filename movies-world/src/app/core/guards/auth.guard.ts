import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MovieService } from 'src/app/feature/services/movie.service';
import { UserService } from 'src/app/feature/services/user.service';

export const canActivate: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isLoggedIn){
    return true;
  }

  router.navigate(["/404"]);
  return false;
};

export const canNotActivate : CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(!userService.isLoggedIn){
    return true;
  }

  router.navigate(["/404"]);
  return false;
};

export const canManipulate: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const movieService = inject(MovieService);
  const router = inject(Router);

  movieService.getMovie(route.params['id']).subscribe((movie)=>{
    if(userService.user?._id === movie.ownerId){
      return true
    }

    router.navigate(["/404"]);
    return false
  })

  router.navigate(["/404"]);
  return false;
};
