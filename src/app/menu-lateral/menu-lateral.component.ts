import { Component, OnInit } from '@angular/core';
import { Menu } from '../modelos';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  _menu = Array<Menu>();

  constructor() {

    this._menu = [{ Id_Menu: 1, NomMenu: "Menu 1", Url: "", Target: "", Hijos: null }, { Id_Menu: 2, NomMenu: "Menu2", Url: "", Target: "", Hijos: null }];

  }

  ngOnInit() {
  }

}
