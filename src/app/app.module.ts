import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './page/student-list/student-list.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminComponent } from './page/admin/admin.component';

import { QuizComponent } from './Page/quiz/quiz.component';
import { EditquestionComponent } from './Page/editquestion/editquestion.component';
import { EditquizComponent } from './Page/editquiz/editquiz.component';
import { EditstudentComponent } from './Page/editstudent/editstudent.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './common/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    NavComponent,
    HomeComponent,
    SorterPipe,
    AdminComponent,
   
    QuizComponent,
   
    EditquestionComponent,
   
    EditquizComponent,
   
    EditstudentComponent,
   
    FilterPipe,
   
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
