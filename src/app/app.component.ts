import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mega-front';
  user = new User('','','','','');
}
