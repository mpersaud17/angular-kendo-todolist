import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';
import data from '../../assets/db.json';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // initialize a behaviorSubject with a type of Items array, and initialize it with the data from the db.json file.
  private itemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(
    data
  );

  public getItems(): Observable<Item[]> {
    return this.itemsSubject.asObservable();
  }

  public addItems(newTask: Item): boolean {
    // currently the items from the db.json file will be displayed along with the newly created task. But if we were to add multiple tasks, not all the tasks will be displayed.
    // Because we are writing teh newly task to the db.json file. So it's only displaying whats written in the file and the new task we pass in.
    this.itemsSubject.next([...data, newTask]);
    return true;
  }

  public removeItem(compeltedItem: Item) {
    console.log("before filter", data);
    console.log("after filter", data.filter((item) => item.id != compeltedItem.id))
    this.itemsSubject.next(data.filter((item) => item.id != compeltedItem.id));
  }
}
