import { Component, OnInit } from '@angular/core';
import { IMassage } from "../../../shared/interfaces";
import { HistoryService } from "../../../core/history.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  massage: IMassage = {
    userId: 0,
    time: `${new Date}`,
    text: ''
  };

  constructor( private historyService: HistoryService) { }

  ngOnInit(): void {
  }

  addItem() {
    let resiverId = 8;
    let users = this.historyService.saveMassage( resiverId, this.massage);
    // this.massage.text = '';
    console.log('massage', this.massage, users)
  }
}
