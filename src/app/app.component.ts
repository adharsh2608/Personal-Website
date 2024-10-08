import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { Contents_User } from './dummy-content';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users2= Contents_User;
  
  OnSelectedContent(id: string)
  {
    console.log('Selected user with id: '+id);
  }
}
