import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { Users } from '../mock-chating-history';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  getUsers():Observable<IUser[]> {
    return of(Users);
  }

  saveMassage(resiverId: any, massage: any):Observable<void[]>{
   let updatedUsers = Users.map(user => {
      if(user.id === resiverId) {
        user.chatingHistory.push(massage);
      }
    })
    return of(updatedUsers);
  }
}
