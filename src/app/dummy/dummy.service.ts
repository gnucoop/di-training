import {Injectable} from '@angular/core';

import {DummyModule} from './dummy.module';

@Injectable({providedIn: DummyModule})
export class DummyService {
  constructor() {
    console.log(`creo istanza del dummy service`);
  }
}
