import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capoeira',
  templateUrl: './capoeira.component.html',
  styleUrls: ['./capoeira.component.scss']
})
export class CapoeiraComponent implements OnInit {

  message = 'Jogo que eu quero aprender';

  constructor() { }

  ngOnInit() {
  }

}
