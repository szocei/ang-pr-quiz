import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Student } from 'src/app/model/student';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {

 student$: Observable<Student> = this.activatedRoute.params.pipe(
    switchMap( params => this.studentService.get(params.id) )
  );

  fields: ITableCol[] = this.config.studentTableColumns.filter(col=>col.visible);

  constructor(
    private studentService: StudentService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(ngForm: NgForm, student: Student): void {
    if(student.id===0){
       this.studentService.create(student).subscribe(
      creat => this.router.navigate(['student'])
    );}else{
       this.studentService.update(student).subscribe(
      saved => this.router.navigate(['student'])
    );
    }

   
  }
  // updating:boolean=false;

  // onUpdate(ngForm: NgForm, student: Student): void {
  //   if(student.id===0){
  //     this.studentService.create(student)


  //   }else{
  //     this.updating=true,
  //     this.studentService.update(student)
  //   }
  //   this.router.navigate(['student'])
  //   this.studentService.getAll()
    

    
  // }
}
