import {NgModule} from '@angular/core';

import {DummyModule} from '../dummy';
import {Page2Component} from './page2.component';

@NgModule({
  declarations: [Page2Component],
  exports: [Page2Component],
  imports: [DummyModule],
})
export class Page2Module { }
