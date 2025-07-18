import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Inscription} from '../modeles';
import {InscriptionService} from '../services/inscription.service';
import {Router} from '@angular/router';

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

  //le constructeur
  constructor(
    private inscriptionService:InscriptionService,
    private _router:Router
  ){}

//la fonction inscrire
  inscrire() {
    console.log("Données formulaires :",this.inscriptionForm.value)
    const inscription: Inscription = {
      prenom:this.inscriptionForm.get('prenom')?.value,
      nom : this.inscriptionForm.get('nom')?.value,
      email : this.inscriptionForm.get('email')?.value,
      password : this.inscriptionForm.get('password')?.value,
      adresse : this.inscriptionForm.get('adresse')?.value,
      roles:[],
      droits:[]
    }

    console.log("send to spring",inscription)
    this.inscriptionService.inscrire(inscription).subscribe({
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        console.log("requete executee avec succes !");

        // la redirection vers la page connexion
        this._router.navigate(['/connexion']);
      }
    })
  }

  //fonction pour effacer le formulaire
  cleanForm(){
    this.inscriptionForm.reset();
  }
}
