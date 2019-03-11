import { Component } from '@angular/core';

import { ModuleIntro } from './module-intro/module-intro';
import { MockDataService } from '../../mock-services/mock-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  moduleIntros: any[];

  constructor(private mockDataService: MockDataService) {
    this.moduleIntros = this.mockDataService.getModuleIntroData();
    console.log('moduleIntros: ' + JSON.stringify(this.moduleIntros));
  }

}
