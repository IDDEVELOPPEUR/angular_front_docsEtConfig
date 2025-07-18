import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Connexion} from '../modeles';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private _http:HttpClient) {
  }

  connecter(connexion:Connexion):Observable<void>

  {
    const url=`${environment.apiBaseUrl}/api/v1/connexion`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<void>(url,connexion,{headers})
  };
}
