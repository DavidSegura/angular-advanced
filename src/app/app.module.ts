import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ParksComponent } from './components/parks/parks.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
