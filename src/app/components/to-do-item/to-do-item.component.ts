import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.scss',
})
export class ToDoItemComponent {
  @Input() item!: Item;
  @Output() completedItemEvent = new EventEmitter<Item>();

  public itemCompleted(item: Item): void {
    // when the "Complete button is clicked - this event will be emitted"
    this.completedItemEvent.emit(item);
  }
}
