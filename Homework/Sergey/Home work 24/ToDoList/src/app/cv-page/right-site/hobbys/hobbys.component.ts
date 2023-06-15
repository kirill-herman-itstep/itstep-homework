import { Component } from '@angular/core';

export interface IHobby {
  class: string;
  value: string;
}

@Component({
  selector: 'app-hobbys',
  templateUrl: './hobbys.component.html',
  styleUrls: ['./hobbys.component.scss'],
})
export class HobbysComponent {
  hobbis: IHobby[] = [
    { class: 'snowbording', value: 'Snowbording' },
    { class: 'videogames', value: 'Videogames' },
    { class: 'traveling', value: 'Traveling' },
  ];

  getNameHobby(index: number): string {
    const newArray = this.hobbis.slice();
    return newArray.map((item) => item.value)[index];
  }

  getNameClass(index: number): string {
    const newArray = this.hobbis.slice();

    return newArray.map((item) => item.class)[index];
  }
}
