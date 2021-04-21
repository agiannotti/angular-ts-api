import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, PanelComponent, LikeComponent, CartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
