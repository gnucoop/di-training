import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DummyModule} from '../dummy';
import {Page2Component} from './page2.component';

@NgModule({
  declarations: [Page2Component],
  imports: [
    DummyModule,
    RouterModule.forChild([
      {path: '', component: Page2Component},
    ]),
  ],
})
export class Page2Module { }
