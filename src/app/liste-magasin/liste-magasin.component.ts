import {Component, OnInit} from '@angular/core';
import {MagasinService} from '../services/magasin.service';
import {Magasin} from '../modeles';
import {JsonPipe} from '@angular/common';
import {MagasinItemComponent} from '../fragments/magasin-item/magasin-item.component';

@Component({
  selector: 'app-liste-magasin',
  imports: [
    JsonPipe,
    MagasinItemComponent
  ],
  templateUrl: './liste-magasin.component.html',
  styleUrl: './liste-magasin.component.scss'
})
export class ListeMagasinComponent implements OnInit{

  magasins:Magasin[]=[];
  afficheDetail:boolean=false;
  constructor(private magasinService:MagasinService) {
  }


  ngOnInit(): void {
    this.chargementMagasin();
  }


  chargementMagasin(){
    this.magasinService.getAllMagasin().subscribe({
      next:(magasins)=>{
        this.magasins=magasins;
        console.log("la liste des magasins est : ",this.magasins)
      },
      error:(error)=>{
        console.log("erreur",error);
      },
      complete:()=>{
        console.log("fin requete");
      }
    })
  }
  //methode pour changer l'etat de voir detal
  afficherDetail(){
    this.afficheDetail=true;
    console.log("afficher detail")
  }

  cacherDetail(){
    console.log("cacher detail")
    this.afficheDetail=false;
  }
}
