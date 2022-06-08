import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';

import { EmailModule } from './modules/email/email.module';
import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ParksComponent } from './components/parks/parks.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from "./components/keeper/keeper.component";

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ParksComponent,
    NotfoundComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule, // <---- Antes de AppRoutingModule para que funcionen las rutas hijo
    AppRoutingModule,
    EditorModule,
    EmailModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
