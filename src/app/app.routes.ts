import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ListeMagasinComponent} from './liste-magasin/liste-magasin.component';
import {ConnexionComponent} from './connexion/connexion.component';

export const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'magasins', component:ListeMagasinComponent},
  {path:'connexion', component:ConnexionComponent},
];
