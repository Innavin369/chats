import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {Users} from "../../mock-chating-history";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // usersData: Observable<IUser[]>;
  // users = Users;
  @Output() sendId :EventEmitter<any> = new EventEmitter();
  dropId(){
    console.log(this.user);
    this.sendId.emit(this.user);
  }
  @Input() user: IUser = {
    id: 1,
    firstName: 'TestName',
    lastName: 'TestLastName',
    phone: 11111111111,
    image: './assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory: [   {
      userId: 1,
      time: '',
      text: "some test text"
    }]
  };
  constructor() { }

  setDotts(value: string, limit: number): string {
    return value.length < limit ? '' : '...';
  }

  ngOnInit(): void {
  }

}
