import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { Items } from '../../models/items.model';
import { FormsModule } from '@angular/forms';
import { DialogsModule } from '@progress/kendo-angular-dialog'; // Import DialogsModule
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { dataCsvIcon } from '@progress/kendo-svg-icons';

// import { ButtonsModule } from '@progress/kendo-angular-buttons'; // Import ButtonsModule



@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [CommonModule, DialogsModule, LabelModule, InputsModule, FormsModule],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.scss'
})
export class ToDoItemsComponent {

  // empty to do list array
  toDoList: Items[] = []
  isAddTaskDialogOpen = false;
  newTask: Items = { id: 0, taskName: '' }; // Model to hold the new task data
  taskInput: string = '';


  constructor(private toDoService : TodoService){
    
  }

  ngOnInit(){
    this.toDoService.getItems()
    .subscribe(items => this.toDoList = items);
  }

  // once the "Add Task" Button is clicked, this method is called and this sets the boolean value to true
  openAddTaskDialog() {
    this.isAddTaskDialogOpen = true;
    console.log("boolean value is now " + this.isAddTaskDialogOpen)
  }

  closeAddTaskDialog() {
    this.isAddTaskDialogOpen = false;
    console.log("boolean value is now " + this.isAddTaskDialogOpen)
  }

  addTask() {
    // will need to call the todoService in here to update the array with the newly added task
    this.newTask.taskName=this.taskInput;
    this.toDoService.addItems(this.newTask).subscribe(data => this.toDoList = data);
    this.closeAddTaskDialog();
  }

}
