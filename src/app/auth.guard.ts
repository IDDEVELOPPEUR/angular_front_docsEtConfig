import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  var userStorage = localStorage.getItem('LOGIN_USER');
  if (userStorage) {
    return true;
  }
  // ici ça nous permet d'injecter une variable de type router au niveau d'une méthode
  const router= inject(Router)
  // router.navigate(["/connexion"])
  const urlCible=state.url;
  return router.createUrlTree(['/connexion'],{
    queryParams:{
      redirect:urlCible
    }
  });
};
