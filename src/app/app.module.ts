import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarCreateComponent } from 'navbar-create'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
