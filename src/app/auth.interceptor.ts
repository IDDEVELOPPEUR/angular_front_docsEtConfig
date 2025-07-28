import { HttpInterceptorFn } from '@angular/common/http';
import {LoginUser} from './modeles';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("interceptor",req.url)
  const loginUserString =localStorage.getItem('LOGIN_USER');
  if ((loginUserString !== null) && (loginUserString !== undefined)){

    const loginUser: LoginUser = JSON.parse(loginUserString);
    console.log("token ",loginUser.token)
    req = req.clone({
      //ajout ces attributs au niveau de la requête d'entete
      headers: req.headers.set('Authorization', `Bearer ${loginUser.token}`),
    }
    )}
  const authHeader= req.headers.get('Authorization');
  console.log("Header envoyé à spring :",authHeader)
  return next(req);
};
