import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Student } from 'src/app/model/student';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  list$: BehaviorSubject<Student[]>| Observable<Student[]> = this.studentService.list$;
  
  cols: ITableCol[] = this.config.studentTableColumns.filter(
    col => col.visible
  );
 
  

  sorterKey: string = '';
  sorterDirection: number = 1;

  filterKey: string = 'title';
filterKeys: string[] = Object.keys(new Student());

  constructor(
    private studentService: StudentService,
    private config: ConfigService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.studentService.getAll();
  }

  onSort(key: string): void {
    if (key === this.sorterKey) {
      this.sorterDirection *= -1;
    } else {
      this.sorterDirection = 1;
    }

    this.sorterKey = key;
  }
onRemove(student:Student):void{
this.studentService.remove(student);
this.router.navigate(['student']);


}
phrase:string='';

onChangePhrase(event:any): void{
    this.phrase = (event.target as HTMLInputElement).value;
    
   
  
  }

}