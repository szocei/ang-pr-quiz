import { Answer } from "./answer";

export class Question {
    id:number=0;
    question:string='';
    answer1:Object;
    answer2:Object;
    answer3:Object;
    points:number=0;
    active:boolean;
}
