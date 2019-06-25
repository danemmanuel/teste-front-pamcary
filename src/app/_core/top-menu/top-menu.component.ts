import { Component, OnInit } from '@angular/core';
import { ROUTES } from './top-menu-routes.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  public menuItems: object;
  logged: boolean;
  showLogout: boolean;

  constructor(private router: Router) {
    this.menuItems = ROUTES;
  }

  ngOnInit() {}
}
