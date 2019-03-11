import { Component, Input, OnInit } from '@angular/core';

import { ModuleIntro } from './module-intro';

@Component({
  selector: 'app-module-intro',
  templateUrl: './module-intro.component.html',
  styleUrls: ['./module-intro.component.scss']
})
export class ModuleIntroComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
