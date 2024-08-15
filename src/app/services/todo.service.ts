import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';
import data from '../../assets/db.json';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  // initialize a behaviorSubject with a type of Items array, and initialize it with the data from the db.json file.
  private itemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(data);

  public getItems(): Observable<Item[]>{
    return this.itemsSubject;
  }

  public addItems(newTask: Item): void {
    this.itemsSubject.next([...data, newTask]);
  }
}
