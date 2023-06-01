import { Component } from '@angular/core';

@Component({
  selector: 'head-info',
  templateUrl: './head-info.component.html',
  styleUrls: ['./head-info.component.scss']
})
export class HeadInfoComponent {
  name = 'Ilya';
  surname = 'Bezmen';
  spec = 'Frontend Developer';
  github = 'https://github.com/Isuzuri';
  telegram = 'https://t.me/Isuzuri';
  phone = '+375445942694'
  email = 'ballage94@gmail.com'
}
