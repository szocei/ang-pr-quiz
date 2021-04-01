import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap,map, tap, toArray } from 'rxjs/operators';
import { Quiz } from 'src/app/model/quiz';
import { ConfigService } from 'src/app/service/config.service';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from '../../service/quiz.service';
import { Question } from '../../model/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {



quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap( params => this.quizService.get(params.id) )
       
        )
     



 question$:Observable<Question[]>=this.questionService.list$;       



  constructor(
    private quizService:QuizService,
    private questionService:QuestionService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

   

  ngOnInit(): void {
  this.quizService.getAll();
  this.questionService.getAll();
 
  
  }










}
