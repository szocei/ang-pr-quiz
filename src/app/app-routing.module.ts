import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StudentListComponent } from './page/student-list/student-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'student',
    component:StudentListComponent
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
