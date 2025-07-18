import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ListeMagasinComponent} from './liste-magasin/liste-magasin.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'magasins', component:ListeMagasinComponent, canActivate:[authGuard]},
  {path:'accueil', component:AccueilComponent, canActivate:[authGuard]},
  {path:'connexion', component:ConnexionComponent},
];
