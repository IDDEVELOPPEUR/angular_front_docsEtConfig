import {Component, OnInit} from '@angular/core';
import {LoginUser} from '../modeles';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-entete',
  imports: [
    RouterLink
  ],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.scss'
})
export class EnteteComponent implements OnInit {
  user:LoginUser|undefined;

  ngOnInit(): void {
    var userTmp=localStorage.getItem('LOGIN_USER');
    if(userTmp){
      this.user=JSON.parse(userTmp);
    }
  }
}
