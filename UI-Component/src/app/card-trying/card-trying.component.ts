import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-trying',
  templateUrl: './card-trying.component.html',
  styleUrls: ['./card-trying.component.scss']
})
export class CardTryingComponent implements OnInit {
  public isShowComponent = true;
  constructor() { }

  ngOnInit(): void {
  }

  closeComponent(){
    this.isShowComponent = false;
  }
}
