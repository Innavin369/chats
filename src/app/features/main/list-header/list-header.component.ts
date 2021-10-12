import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../shared/interfaces";
import {Users} from "../../../mock-chating-history";

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  user: IUser | undefined;

  constructor() {
    this.user = Users[0];
  }

  ngOnInit(): void {
  }

}
