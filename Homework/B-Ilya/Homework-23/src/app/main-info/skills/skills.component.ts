import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      value: 0.85
    },
    {
      name: 'CSS',
      value: 0.80
    },
    {
      name: 'JavaScript',
      value: 0.40
    },
    {
      name: 'Angular',
      value: 0.15
    }
  ]
}
