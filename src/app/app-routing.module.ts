import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StudentListComponent } from './page/student-list/student-list.component';
import { AdminComponent } from './page/admin/admin.component';
import { EditstudentComponent } from './page/editstudent/editstudent.component';
import { EditquizComponent } from './Page/editquiz/editquiz.component';




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
    path:'student/:id',
    component:EditstudentComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'admin/:id',
    component:EditquizComponent
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
