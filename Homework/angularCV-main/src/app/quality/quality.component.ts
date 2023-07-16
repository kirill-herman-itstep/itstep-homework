import { Component, Input } from '@angular/core';

import { rowList } from '../entities/vars/vars'

@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss'],
})
export class QualityComponent {
  @Input () name!: string;
  public rowList = rowList;
  public scale = false;
  public chosen: any = '';
}