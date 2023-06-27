import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-BY';
registerLocaleData(localeRu, 'ru-BY');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvPageModule } from './cv-page/cv-page.module';
import { TaskOneComponent } from './task-one-two/task-one.component';

@NgModule({
  declarations: [AppComponent, TaskOneComponent],
  imports: [BrowserModule, AppRoutingModule, CvPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
