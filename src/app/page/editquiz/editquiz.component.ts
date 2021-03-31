import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Quiz } from 'src/app/model/quiz';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-editquiz',
  templateUrl: './editquiz.component.html',
  styleUrls: ['./editquiz.component.scss']
})
export class EditquizComponent implements OnInit {

  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap( params => this.quizService.get(params.id) )
  );

  fields: ITableCol[] = this.config.quizTableColumns.filter(col=>col.visible);

  constructor(
    private quizService: QuizService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(ngForm: NgForm, quiz: Quiz): void {
    if(quiz.id===0){
       this.quizService.create(quiz).subscribe(
      creat => this.router.navigate(['admin'])
    );}else{
       this.quizService.update(quiz).subscribe(
      saved => this.router.navigate(['admin'])
    );
    }

   
  }

}
