import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  htmlSkills: boolean[] = [true, true, true, true, false];
  sassSkills: boolean[] = [true, true, true, true, false];
  JSskills: boolean[] = [true, true, true, true, false];
  angularSkills: boolean[] = [true, true, false, false, false];
}
