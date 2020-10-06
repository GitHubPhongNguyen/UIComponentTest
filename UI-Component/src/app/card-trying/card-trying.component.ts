import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-trying',
  templateUrl: './card-trying.component.html',
  styleUrls: ['./card-trying.component.scss']
})
export class CardTryingComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  @Input() textBtn:string;
  @Input() linkBtn:string;

  public isShowComponent = true;
  constructor() { }

  ngOnInit(): void {
  }

  closeComponent(){
    this.isShowComponent = false;
  }
}
