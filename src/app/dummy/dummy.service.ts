import {Injectable} from '@angular/core';

@Injectable()
export class DummyService {
  constructor() {
    console.log(`creo istanza del dummy service`);
  }
}
