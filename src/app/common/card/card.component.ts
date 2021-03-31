import { Component, Input, OnInit } from '@angular/core';

export interface InfoCard {
  
  cardClass: string;
  title: string;
  description: string;
  footer: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  
  @Input() cardClass: string = 'card-header-warning';
  @Input() title: string = 'title';
  @Input() description: string = '';
  @Input() footer: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
