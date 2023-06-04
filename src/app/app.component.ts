import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  name = 'Учиха Семён Фёдорович';
  phone = '88005553535';
  email = 'OpAsNiI_MsTiTeL_2010@orochimail.knh';
  city = 'Логово Орочимару';
  photo = 'https://citaty.info/files/quote-pictures/141643-naruto-naruto.jpg';

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      console.dir(document.documentElement.clientHeight);
      (document.querySelector('main>div.background') as HTMLElement).style.top = `${document.querySelector('main>header')!.clientHeight}px`;
      (document.querySelector('main>div.background') as HTMLElement).style.height = `${document.documentElement.clientHeight - document.querySelector('main>header')!.clientHeight}px`;
      (document.querySelector('.personal-page .photo img') as HTMLElement).style.height = `${document.querySelector('.properties')?.clientHeight}px`;
    })
    
      window.addEventListener('resize', resize => {
        (document.querySelector('main>div.background') as HTMLElement).style.top = `${document.querySelector('main>header')!.clientHeight}px`;
        (document.querySelector('main>div.background') as HTMLElement).style.height = `${document.documentElement.clientHeight - document.querySelector('main>header')!.clientHeight}px`;
      })
  }

  // zdrada
}