import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Items } from '../models/items.model';
import data from '../../assets/db.json';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  // initialize a behaviorSubject with a type of Items array, and initialize it with the data from the db.json file.
  private itemsSubject: BehaviorSubject<Items[]> = new BehaviorSubject(data);

  // 
  public getItems(): Observable<Items[]>{
    return this.itemsSubject;
  }

  public addItems(newTask: Items): Observable<Items[]> {
    let  newArray = [...data, newTask];
    this.itemsSubject.next(newArray);
    return this.itemsSubject;
  }

}
