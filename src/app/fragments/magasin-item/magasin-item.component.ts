import {Component, Input} from '@angular/core';
import {Magasin} from '../../modeles';

@Component({
  selector: 'app-magasin-item',
  imports: [],
  templateUrl: './magasin-item.component.html',
  styleUrl: './magasin-item.component.scss'
})
export class MagasinItemComponent {
  // le @Input() permet de dire que c'est un parametre pour le magasin
  @Input()
  magasin:Magasin|undefined;

  @Input()
  detail:boolean=false;

  @Input()
  numLigne:number=0;

  @Input()
  pair:boolean=false;

}
