import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ConnexionRequest, LoginUser} from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private _http:HttpClient) {}
//methode de connexion
  connecter(connexion:ConnexionRequest):Observable<LoginUser>
  {
    const url=`${environment.apiBaseUrl}/api/v1/connexion`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<LoginUser>(url,connexion,{headers})
  };
}
