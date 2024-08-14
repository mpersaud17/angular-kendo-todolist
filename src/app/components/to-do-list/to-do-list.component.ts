import { Component } from '@angular/core';
import { ToDoItemsComponent } from '../to-do-item/to-do-items.component';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, ToDoItemsComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  toDoList: Observable<Item[]>; // Observable to hold the list of items

  constructor(private todoService: TodoService) {
    this.toDoList = this.todoService.getItems(); // Directly assign the observable
    this.toDoList.forEach(data=> console.log(data))
  }
 

}
