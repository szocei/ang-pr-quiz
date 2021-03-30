import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  list$: Observable<Student[]> = this.studentService.list$;
  cols: ITableCol[] = this.config.studentTableColumns;

  sorterKey: string = '';
  sorterDirection: number = 1;

  constructor(
    private studentService: StudentService,
    private config: ConfigService,
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

}