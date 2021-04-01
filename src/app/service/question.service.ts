import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService  extends BaseService<Question> {

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) {
    super(config, http, 'questions');
  }
}

