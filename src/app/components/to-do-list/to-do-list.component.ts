import { Component, inject } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule, formatDate } from '@angular/common';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    ToDoItemComponent,
    DialogsModule,
    ReactiveFormsModule,
    DateInputsModule,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  isAddTaskDialogOpen: boolean = false;
  toDoList: Observable<Item[]>; // Observable to hold the list of items
  taskForm: FormGroup;
  snackBar: SnackbarService;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackbarService
  ) {
    this.toDoList = this.todoService.getItems(); // Directly assign the observable
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required], // Task name defaults to empty string
      dueDate: [''], // Due Date defaults to empty string
    });
    this.snackBar = snackBarService;
  }

  public openAddTaskDialog(): void {
    this.isAddTaskDialogOpen = true;
    console.log('boolean value is now ' + this.isAddTaskDialogOpen);
  }

  public closeAddTaskDialog(): void {
    this.isAddTaskDialogOpen = false;
    this.resetFormValues();
    console.log('boolean value is now ' + this.isAddTaskDialogOpen);
  }

  public addTask(): void {
    const newTask: Item = {
      id: Date.now(),
      dueDate: formatDate(
        this.taskForm.get('dueDate')?.value
          ? this.taskForm.get('dueDate')?.value
          : Date.now(), // if due date is not provided by the user, default to todays date
        'MM/dd/yyyy',
        'en'
      ),
      taskName: this.taskForm.get('taskName')?.value,
      completed: false,
    };

    if (this.todoService.addItems(newTask)) {
      this.snackBar.successfullyAddedItem();
    } else {
      this.snackBar.unableToAddItem();
    }

    this.resetFormValues();
    this.closeAddTaskDialog();
  }

  private resetFormValues(): void {
    // once we've added the new task, we should reset the values so when the popup is displayed, the fields are empty
    this.taskForm.get('taskName')?.reset();
    this.taskForm.get('dueDate')?.reset();
  }
}
