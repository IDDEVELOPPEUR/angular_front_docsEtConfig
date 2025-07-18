import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Connexion} from '../modeles';

@Component({
  selector: 'app-connexion',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
connexionForm:FormGroup=new FormGroup({
  email:new FormControl('', [Validators.required, Validators.email]),

  password:new FormControl('', [Validators.required]),
});
//le constructeur pour la connexion
constructor(){
}

  connecter(){
    console.log("Données formulaires :",this.connexionForm.value)
    const connexion:Connexion= {
      email:this.connexionForm.get('email')?.value,
      password:this.connexionForm.get('password')?.value,
    }

  }
}
