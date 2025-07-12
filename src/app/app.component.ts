import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {EnteteComponent} from './entete/entete.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, EnteteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magasin-web';
}
