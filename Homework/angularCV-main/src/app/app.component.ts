import { AfterViewInit, Component, ViewChild } from '@angular/core';


import { rowList } from './entities/vars/vars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public rowList = rowList;
  public rowNames = Object.keys(rowList);
  public doesItStink = false;
  public enjoyersFraction = 0.95;
  public fistingPrice = 300;
}
