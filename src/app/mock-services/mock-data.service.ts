import { Injectable } from '@angular/core';

import moduleIntros from '../../data/module-intros.json';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getModuleIntroData() {
    console.log("Data? "+moduleIntros);
  }
}
