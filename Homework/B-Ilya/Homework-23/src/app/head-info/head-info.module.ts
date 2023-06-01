import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadInfoComponent } from './head-info.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HeadInfoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadInfoComponent
  ]
})
export class HeadInfoModule { }
