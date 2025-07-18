import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inscription} from '../modeles';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private _http: HttpClient) { }

  inscrire(inscription : Inscription):Observable<void>{
    //premiere maniere
    // const url=environment.apiBaseUrl+'/inscription';
    //deuxieme maniere
    const url=`${environment.apiBaseUrl}/api/v1/inscription`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<void>(url,inscription,{headers})
  }
}
