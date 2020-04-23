import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DummyModule} from '../dummy';
import {Page1Component} from './page1.component';

@NgModule({
  declarations: [Page1Component],
  imports: [
    DummyModule,
    RouterModule.forChild([
      {path: '', component: Page1Component},
    ]),
  ],
})
export class Page1Module { }
