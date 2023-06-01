import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  cardTitle = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  cardDesc = [85, 80, 40, 15];
}
