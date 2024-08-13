import { Component } from '@angular/core';
import { ToDoItemsComponent } from '../to-do-items/to-do-items.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoItemsComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

 

}
