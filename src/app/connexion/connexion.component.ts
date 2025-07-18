import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ConnexionRequest} from '../modeles';
import {ConnexionService} from '../services/connexion.service';


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
constructor(private connexionService:ConnexionService){}

  connecter(){
    console.log("Données de la connexion :",this.connexionForm.value)
    const connexionRequest:ConnexionRequest= {
      email:this.connexionForm.get('email')?.value,
      password:this.connexionForm.get('password')?.value,
    }
    console.log("donnees de connexion: ",connexionRequest);

    // appel de la methode pour se connecter via spring-boot
    this.connexionService.connecter(connexionRequest).subscribe({
      next:(result)=>{
        console.log("Connexion reussite, le user est : ",result);

      },
      error:(error)=>{
        console.log("erreur ",error);
      },
      complete:()=>{
        console.log("Fin requete sans erreur !");
      }
    });
    console.log("Requête envoyée,attente de réponse...!")
  }
}
