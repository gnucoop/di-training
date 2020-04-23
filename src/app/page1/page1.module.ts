import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Page1Component} from './page1.component';

@NgModule({
  declarations: [Page1Component],
  imports: [
    RouterModule.forChild([
      {path: '', component: Page1Component},
    ]),
  ],
})
export class Page1Module { }
