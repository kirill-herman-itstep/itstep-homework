import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
})
export class TaskOneComponent {
  // Pipes
  public currency: string = '$';
  public resultCurrency!: string;
  public resultPersentOne!: string;
  public resultPersentTwo!: string;

  public showResult(element: HTMLInputElement): void {
    if (!Number.isNaN(+element.value) && element.value !== '') {
      this.resultCurrency = `${3 * +element.value}`;
    } else {
      this.resultCurrency = '';
      element.value = '';
    }
  }

  public showResultPersent(
    elementOne: HTMLInputElement,
    elementTwo: HTMLInputElement
  ): void {
    if (
      !Number.isNaN(+elementOne.value) &&
      elementOne.value !== '' &&
      !Number.isNaN(+elementTwo.value) &&
      elementTwo.value !== ''
    ) {
      this.resultPersentOne = `${+elementOne.value / +elementTwo.value}`;
      this.resultPersentTwo = `${+elementTwo.value / +elementOne.value}`;
    } else {
      this.resultPersentOne = '';
      elementOne.value = '';
      elementTwo.value = '';
      this.resultPersentOne = '';
      this.resultPersentTwo = '';
    }
  }

  // structure directiv
  public arayMonth: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public selectedMonth!: number;

  public selectMonth(event: any): void {
    this.selectedMonth = event.target.innerText;
  }
}
