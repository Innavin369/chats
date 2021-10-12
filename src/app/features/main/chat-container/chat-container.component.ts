import {Component, Input, OnInit} from '@angular/core';
import  {IUser} from "../../../shared/interfaces";

@Component({
  selector: 'chat',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {
  @Input() user: IUser | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }

}
