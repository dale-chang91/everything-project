import { Component, Input, OnInit } from '@angular/core';

export interface ModuleIntro {
  name: string;
  description: string;
}

@Component({
  selector: 'app-module-intro',
  templateUrl: './module-intro.component.html',
  styleUrls: ['./module-intro.component.scss']
})
export class ModuleIntroComponent implements OnInit {

  @Input name: string;
  @Input description: string;

  constructor() { }

  ngOnInit() {
  }

}
