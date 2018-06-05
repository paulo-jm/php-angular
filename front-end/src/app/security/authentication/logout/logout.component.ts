import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication-service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _authService: AuthenticationService
  ) {
    this._authService.IsLogged.subscribe((result) => {
      if (!result) {
        this._authService.handleLogin();
      }
    });
  }

  ngOnInit() {
    this._authService.logout().subscribe((result) => { this._authService.handleLogin(); }); 
  }

}
