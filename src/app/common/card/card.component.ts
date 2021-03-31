import { Component, Input, OnInit } from '@angular/core';

export interface InfoCard {
  cardId:number;
  cardClass: string;
  title: string;
  description: string;
  footer: boolean;
  link:number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardId:number=0;
  @Input() cardClass: string = 'card-header-warning';
  @Input() title: string = 'title';
  @Input() description: string = '';
  @Input() footer: boolean = true;
  @Input() link:number=0;


  constructor() { }

  ngOnInit(): void {
  }

}
