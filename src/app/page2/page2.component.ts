import { Component } from '@angular/core';

import { DummyService } from '../dummy';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  constructor(_: DummyService) { }
}
