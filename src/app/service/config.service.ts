import { Injectable } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';


export interface ITableCol {
  key: string;
  title: string;
  type?: string;
  icon?: string;
  order?: number;
  pattern?: string;
  required?: boolean;
  visible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string = 'http://localhost:3000';

 studentTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible:false,
    },
    {
      key: 'name',
      title: 'Name',
      visible: true,
    },
    {
      key: 'email',
      title: 'Email',
      visible: true,
    },
    {
      key: 'points',
      title:'Points',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
     visible:true,
     
    },
  ];

  quizTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'title',
      title: 'Title',
      visible: true,
    },
    {
      key: 'description',
      title: 'Description',
      visible: true,
    },
    {
      key: 'questions',
      title: 'Questions',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
      visible: true,
      type:'checkbox',
    },
  ];

  questionsTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'question',
      title: 'Question',
      visible: true,
    },
    {
      key: 'type',
      title: 'Type',
      visible: true,
    },
    {
      key: 'catID',
      title: 'Category',
      visible: true,
    },
    {
      key: 'answer',
      title: 'Answer',
      visible: true,
    },
    {
      key: 'points',
      title: 'Points',
      visible: true,
      },
    {
      key: 'active',
      title: 'Active',
      visible: true,
      type: 'checkbox',
    },
  ];

  constructor() { }
}
