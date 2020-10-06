import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardTryingComponent } from './card-trying/card-trying.component';
import { CardPriceComponent } from './card-price/card-price.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTryingComponent,
    CardPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
