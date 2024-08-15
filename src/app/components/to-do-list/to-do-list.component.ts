import { Component } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '@progress/kendo-angular-dialog';


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, ToDoItemComponent, DialogsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  isAddTaskDialogOpen: boolean = false;
  toDoList: Observable<Item[]>; // Observable to hold the list of items

  constructor(private todoService: TodoService) {
    this.toDoList = this.todoService.getItems(); // Directly assign the observable
  }

  public openAddTaskDialog(): void {
    this.isAddTaskDialogOpen = true;
    console.log("boolean value is now " + this.isAddTaskDialogOpen)
  }

  public closeAddTaskDialog(): void {
    this.isAddTaskDialogOpen = false;
    console.log("boolean value is now " + this.isAddTaskDialogOpen)
  }
 

}
