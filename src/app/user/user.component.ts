import { Component } from '@angular/core';
import { Contents_User} from '../dummy-content';
const randomIndex=Math.floor(Math.random()* Contents_User.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectedContent = Contents_User[randomIndex];
}
