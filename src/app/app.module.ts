import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyModule } from './dummy';
import { Page1Module } from './page1';
import { Page2Module } from './page2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DummyModule,
    Page1Module,
    Page2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
