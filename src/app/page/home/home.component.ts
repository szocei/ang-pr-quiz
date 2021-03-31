import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

list$: Observable<Quiz[]> = this.quizService.list$;

  constructor(
    private quizService:QuizService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAll();
  }

}
