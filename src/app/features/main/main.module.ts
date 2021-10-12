import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { MainComponent } from "../main/main/main.component";
import { RouterModule } from "@angular/router";
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { MainRoutingModule } from './main-routing.module'
import {ChatListComponent} from "./chat-list/chat-list.component";
import { ListHeaderComponent } from './list-header/list-header.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainComponent,
    ChatContainerComponent,
    ChatListComponent,
    ListHeaderComponent,
    InputComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MainRoutingModule,
    FormsModule
  ],
})
export class MainModule { }
