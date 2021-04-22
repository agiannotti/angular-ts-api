import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactComponent,
    NewCourseFormComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
