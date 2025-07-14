import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  inscriptionForm:FormGroup=new FormGroup({
    prenom:new FormControl('', [Validators.required]),
    nom:new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(40)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    adresse:new FormControl('Diamniadio', [Validators.required]),

  })
//la fonction inscrire
  inscrire() {
    console.log("Données formulaires :",this.inscriptionForm.value)
  }

  //fonction pour effacer le formulaire
  cleanForm(){
    this.inscriptionForm.reset();
  }
}
