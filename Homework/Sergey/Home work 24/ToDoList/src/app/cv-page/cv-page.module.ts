import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSiteComponent } from './left-site/left-site.component';
import { RightSiteComponent } from './right-site/right-site.component';
import { CvPageComponent } from './cv-page.component';
import { AvatarComponent } from './left-site/avatar/avatar.component';
import { SkillsComponent } from './left-site/skills/skills.component';
import { InfoComponent } from './right-site/info/info.component';
import { BiographyComponent } from './right-site/biography/biography.component';
import { HobbysComponent } from './right-site/hobbys/hobbys.component';
import { ContactsComponent } from './right-site/contacts/contacts.component';

@NgModule({
  declarations: [
    CvPageComponent,
    RightSiteComponent,
    LeftSiteComponent,
    AvatarComponent,
    SkillsComponent,
    InfoComponent,
    BiographyComponent,
    HobbysComponent,
    ContactsComponent,
  ],
  imports: [CommonModule],
  exports: [CvPageComponent],
})
export class CvPageModule {}
