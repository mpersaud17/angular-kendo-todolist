import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { Items } from '../../models/items.model';



@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.scss'
})
export class ToDoItemsComponent {

  toDoList: Items[] = []
  constructor(private itemService : TodoService){
    
  }

  ngOnInit(){
    this.itemService.getJson().subscribe(data => {
      this.toDoList = data;
      console.log(data);
    } );
  }

}
