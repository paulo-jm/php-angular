import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.css']
})
export class LayoutNavigationComponent implements OnInit {

  public menus = [
    {
      'title': 'Cadastro',
      'active': true,
      'path': '',
      'children': [
        {
          'title': 'Projeto',
          'active': true,
          'path': '/contribuicao/contribuicao'
        },
        {
          'title': 'Apadrinhado',
          'active': true,
          'path': '/contribuicao/apadrinhado'
        }
      ]
    },
    {
      'title': 'Doador',
      'active': false,
      'path': '/doador/'
    },
    {
      'title': 'Transações',
      'active': false,
      'path': '/transacao/'
    },
    {
      'title': 'Usuarios',
      'active': false,
      'path': '/user/'
    },
    {
      'title': 'Logout',
      'active': false,
      'path': '/security/logout'
    }
  ];

  constructor() { }

  toggleSubMenu(menu: any) {
    if (menu.active) {
      menu.active = false;
    } else {
      menu.active = true;
    }
  }

  ngOnInit() {
  }

}
