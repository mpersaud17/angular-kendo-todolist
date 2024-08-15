import { Component } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    ToDoItemComponent,
    DialogsModule,
    ReactiveFormsModule,
    DateInputsModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  isAddTaskDialogOpen: boolean = false;
  toDoList: Observable<Item[]>; // Observable to hold the list of items
  taskForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.toDoList = this.todoService.getItems(); // Directly assign the observable
    this.taskForm = this.formBuilder.group({
      taskName: [''], // Task name defaults to empty string
      dueDate:[''] // Due Date defaults to empty string
    });
  }

  public openAddTaskDialog(): void {
    this.isAddTaskDialogOpen = true;
    console.log('boolean value is now ' + this.isAddTaskDialogOpen);
  }

  public closeAddTaskDialog(): void {
    this.isAddTaskDialogOpen = false;
    console.log('boolean value is now ' + this.isAddTaskDialogOpen);
  }

  addTask() {
    // will need to call the todoService in here to update the array with the newly added task
    // this.newTask.taskName=this.taskInput;
    
    const newTask: Item = {
      id: Date.now(),
      dueDate: this.taskForm.get('dueDate')?.value,
      taskName: this.taskForm.get('taskName')?.value,
    };

    this.todoService.addItems(newTask);

    this.closeAddTaskDialog();
  }
}
