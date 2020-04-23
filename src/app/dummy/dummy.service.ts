import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DummyService {
  constructor() {
    console.log(`creo istanza del dummy service`);
  }
}
