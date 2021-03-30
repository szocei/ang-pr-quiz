import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

list$: Observable<Quiz[]> = this.quizService.list$;
  cols: ITableCol[] = this.config.quizTableColumns;

  sorterKey: string = '';
  sorterDirection: number = 1;

  filterKey: string = 'title';
filterKeys: string[] = Object.keys(new Quiz());

  constructor(
    private quizService: QuizService,
    private config: ConfigService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.quizService.getAll();
  }

  onSort(key: string): void {
    if (key === this.sorterKey) {
      this.sorterDirection *= -1;
    } else {
      this.sorterDirection = 1;
    }

    this.sorterKey = key;
  }

onRemove(quiz:Quiz):void{
this.quizService.remove(quiz);
this.router.navigate(['admin']);


}
phrase:string='';

onChangePhrase(event:any): void{
    this.phrase = (event.target as HTMLInputElement).value;
    
   
  
  }

  
}
