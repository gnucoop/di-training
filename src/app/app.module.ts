import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DummyModule } from './dummy';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    DummyModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'page1', loadChildren: () => import('./page1').then(m => m.Page1Module)},
      {path: 'page2', loadChildren: () => import('./page2').then(m => m.Page2Module)},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
