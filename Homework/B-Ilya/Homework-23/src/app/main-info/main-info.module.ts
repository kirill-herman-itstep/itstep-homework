import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    WorkExpComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkExpComponent,
    EducationComponent,
    SkillsComponent
  ]
})
export class MainInfoModule { }
