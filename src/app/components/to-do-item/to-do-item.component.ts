import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';



@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.scss'
})
export class ToDoItemComponent {

  @Input() item!: Item;

  
}
