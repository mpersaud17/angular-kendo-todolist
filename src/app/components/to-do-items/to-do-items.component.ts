import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';



@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.scss'
})
export class ToDoItemsComponent {

  @Input() item!: Item;

  
}
