import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Page2Component} from './page2.component';

@NgModule({
  declarations: [Page2Component],
  imports: [
    RouterModule.forChild([
      {path: '', component: Page2Component},
    ]),
  ],
})
export class Page2Module { }
