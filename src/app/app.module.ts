import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Module } from './page1';
import { Page2Module } from './page2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Page1Module,
    Page2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
