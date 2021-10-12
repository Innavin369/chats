import {Component, OnInit, Output} from '@angular/core';
import { IUser} from '../../../shared/interfaces';
import { HistoryService } from '../../../core/history.service';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-List.component.scss']
})
export class ChatListComponent implements OnInit {

  users: IUser[] | undefined;
  selectedUser: IUser | undefined;

  constructor(private historyService: HistoryService) {

  }
  getUsers(): void {
    this.historyService.getUsers()
      .subscribe(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: IUser): void {
    this.selectedUser = user;
  }
}
