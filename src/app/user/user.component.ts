import { Component,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!: string;
 @Input({required:true}) name!: string;
//name=input<string>();
@Output() select=new  EventEmitter();
onSelectContent()
{
 this.select.emit(this.id);
}
}
