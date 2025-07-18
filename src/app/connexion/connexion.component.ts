import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ConnexionRequest} from '../modeles';
import {ConnexionService} from '../services/connexion.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-connexion',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit{

redirectUrl="/accueil"
connexionForm:FormGroup=new FormGroup({
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('', [Validators.required]),
});

//le constructeur pour la connexion
constructor(
  private connexionService:ConnexionService,
  private router:Router,
  private route:ActivatedRoute
){}
//Au niveau de cette methode, on récupère l'url de redirection si elle existe
  ngOnInit(): void {
  //verification si le parametre de redirection existe
    this.route.queryParams.subscribe(params=>{

      if (params['redirect']) {
        console.log("redirect url")
        this.redirectUrl=params['redirect'];
      }
      console.log("redirectUrl : ",this.redirectUrl)

    })
  }
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


        //localStorage est une table isolée par chaque application web
        // à une table localStorage permettant de stocker les données sous forme
        //de clé-valeur ;les clés et les valeurs sont des string !
        //quand on stocke sur clé existante, son ancienne valeur sera écrasée
        // pour supprimer une clé, on met localStorage.removeItem(cle)
        localStorage.setItem("LOGIN_USER",JSON.stringify(result))
        //redirection à la page d'origine
        this.router.navigate([this.redirectUrl])
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
