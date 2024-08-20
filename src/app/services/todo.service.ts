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
    this.itemsSubject.next([...this.itemsSubject.value, newTask]);
    return true;
  }

  public removeItem(compeltedItem: Item) {
    // So this way is WRONG. Because everytime this method is called we are always starting with the original data and not the current value of the itemSubject.
    // updatedArray = data.filter((item) => item.id != compeltedItem.id);

    let updatedArray: Item[] = this.itemsSubject.value;
    console.log("before filter", updatedArray);
    updatedArray = updatedArray.filter(item=> item.id !== compeltedItem.id)
    
    console.log("after filter",updatedArray);
    this.itemsSubject.next(updatedArray);
  }
}
