import { Injectable } from '@angular/core';



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
      visible:true,
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

studentEditTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible:true,
      type:'number',
    },
    {
      key: 'name',
      title: 'Name',
      visible: true,
      type:'text',
    },
    {
      key: 'email',
      title: 'Email',
      visible: true,
      type:'email',
    },
    {
      key: 'points',
      title:'Points',
      visible: true,
      type:'number',
     
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
      key: 'answer1',
      title: 'Answer1',
      visible: true,
    },
    {
      key: 'answer2',
      title: 'Answer2',
      visible: true,
    },
    {
      key: 'answer3',
      title: 'Answer3',
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
