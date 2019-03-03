import { Component, OnInit, Output } from '@angular/core';

import { ModuleIntro } from './module-intro/module-intro.component';
import { MockDataService } from '../../mock-services/mock-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Output() moduleIntros: ModuleIntro[];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.moduleIntros = this.mockDataService.getModuleIntroData();
  }

}
