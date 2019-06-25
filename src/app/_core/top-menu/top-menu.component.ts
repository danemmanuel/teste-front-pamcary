import { Component, OnInit } from '@angular/core';
import { ROUTES } from './top-menu-routes.config';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  public menuItems: object;

  constructor() {
    this.menuItems = ROUTES;
  }

  ngOnInit() {}
}
