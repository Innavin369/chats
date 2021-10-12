import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

  exports: [
    CommonModule,
    UserComponent,
  ],
  declarations: [
    UserComponent
  ],
})

export class SharedModule {
  constructor() {}
}
