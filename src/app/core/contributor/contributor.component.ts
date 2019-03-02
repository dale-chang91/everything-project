import { Component, OnInit } from '@angular/core';

import { ContributorType } from './contributor-type.enum'

export interface Contributor {
  name: string;
  githubUsername: string;
  type: ContributorType;
  dateJoined: number;
  blurb: string;
  shortBio: string;
}

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
