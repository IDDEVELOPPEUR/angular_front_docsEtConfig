import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginUser, Magasin} from '../modeles';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  constructor(private _httpClient:HttpClient) { }

  //Méthode pour récuperer la liste des magasins
  getAllMagasin():Observable<Magasin[]>{

    const url=`${environment.apiBaseUrl}/api/v1/magasins`;



    return this._httpClient.get<Magasin[]>(url);
  }
}
