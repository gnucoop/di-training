import { Component } from '@angular/core';

import { DummyService } from '../dummy';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component {
  constructor(_: DummyService) { }
}
