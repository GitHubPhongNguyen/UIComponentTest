import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardTryingComponent } from './card-trying/card-trying.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { CardMenuComponent } from './card-menu/card-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTryingComponent,
    CardPriceComponent,
    CardMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
