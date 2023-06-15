import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  name = 'Siarhei Masalski';
  specialty = 'Frontend Developer';
  profile = 'Front-end development of web applications by framework Angular';
}
