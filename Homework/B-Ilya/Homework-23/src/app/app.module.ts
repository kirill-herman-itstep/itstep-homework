import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadInfoModule } from './head-info/head-info.module';
import { MainInfoModule } from './main-info/main-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainInfoModule,
    HeadInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
