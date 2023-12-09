import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/component/home/home.component';
import { MaterialModule } from './material/material.module';
import { CoursesListComponent } from './shared/component/courses-list/courses-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseFormComponent } from './shared/component/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './shared/component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesListComponent,
    CourseFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
