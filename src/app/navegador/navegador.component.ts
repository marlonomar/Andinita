import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {
  public logo : string;

  constructor() {
    this.logo = '/images/logo.png'
  }

  ngOnInit() {
  }

}
