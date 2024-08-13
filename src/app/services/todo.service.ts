import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private httpClient: HttpClient) {}

  public getJson(): Observable<any>{
    return this.httpClient.get<Items[]>("../assets/db.json");
  }

}
