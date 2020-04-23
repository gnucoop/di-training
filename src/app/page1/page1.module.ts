import {NgModule} from '@angular/core';

import {DummyModule} from '../dummy';
import {Page1Component} from './page1.component';

@NgModule({
  declarations: [Page1Component],
  exports: [Page1Component],
  imports: [DummyModule],
})
export class Page1Module { }
