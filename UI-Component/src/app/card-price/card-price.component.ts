import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
